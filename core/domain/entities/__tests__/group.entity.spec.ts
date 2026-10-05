import { describe, it, expect } from 'vitest';
import { Group, GroupCreateProps } from '../group.entity';
import { Specialization } from '../../enums/specialization.enum';
import { UnresolvedMember, UnresolvedMemberType } from '../unresolved-member.entity';
import { BusinessRuleError } from '../../errors/domain.error';
import { AcademicYear } from '../../value-objects/academic-year.vo';

const baseProps = (): GroupCreateProps => ({
  projectIdeaId: 'idea-1',
  academicYear: AcademicYear.create('2025-2026'),
  subjectId: 'subject-1',
  specialization: Specialization.AI,
  memberIds: [],
  unresolvedMembers: [],
});

const notFound = (conflictName: string): UnresolvedMember =>
  UnresolvedMember.create({
    conflictName,
    studentId: null,
    type: UnresolvedMemberType.STUDENT_NOT_FOUND,
  });

const conflict = (conflictName: string, studentId: string): UnresolvedMember =>
  UnresolvedMember.create({
    conflictName,
    studentId,
    type: UnresolvedMemberType.NAME_CONFLICT,
  });

describe('Group Domain Entity', () => {
  it('creates a group with resolved members and generates an id', () => {
    const group = Group.create({ ...baseProps(), memberIds: ['s-1', 's-2'] });

    expect(group.id).toBeDefined();
    expect(group.memberIds).toEqual(['s-1', 's-2']);
    expect(group.projectIdeaId).toBe('idea-1');
    expect(group.specialization).toBe(Specialization.AI);
  });

  it('rejects a group with no members at all', () => {
    expect(() => Group.create(baseProps())).toThrow(BusinessRuleError);
  });

  it('allows a group made only of unresolved members', () => {
    const group = Group.create({ ...baseProps(), unresolvedMembers: [notFound('احمد تللو')] });

    expect(group.memberIds).toEqual([]);
    expect(group.unresolvedMembers).toHaveLength(1);
  });

  it('rejects duplicate resolved member ids', () => {
    expect(() => Group.create({ ...baseProps(), memberIds: ['s-1', 's-1'] })).toThrow(
      'duplicate members'
    );
  });

  it('rejects a student listed as both resolved and unresolved', () => {
    expect(() =>
      Group.create({
        ...baseProps(),
        memberIds: ['s-1'],
        unresolvedMembers: [conflict('احمد تللو', 's-1')],
      })
    ).toThrow('both a resolved and an unresolved member');
  });

  it('rejects duplicate not-found names', () => {
    expect(() =>
      Group.create({
        ...baseProps(),
        unresolvedMembers: [notFound('احمد تللو'), notFound('احمد تللو')],
      })
    ).toThrow('Duplicate not-found');
  });

  it('rejects the same name as both not-found and conflicting', () => {
    expect(() =>
      Group.create({
        ...baseProps(),
        unresolvedMembers: [notFound('احمد تللو'), conflict('احمد تللو', 's-9')],
      })
    ).toThrow('both not-found and conflicting');
  });

  it('rejects the same name as both conflicting and not-found regardless of order', () => {
    expect(() =>
      Group.create({
        ...baseProps(),
        unresolvedMembers: [conflict('احمد تللو', 's-9'), notFound('احمد تللو')],
      })
    ).toThrow('both not-found and conflicting');
  });

  it('rejects duplicate conflict entries for the same name and student', () => {
    expect(() =>
      Group.create({
        ...baseProps(),
        unresolvedMembers: [conflict('احمد تللو', 's-9'), conflict('احمد تللو', 's-9')],
      })
    ).toThrow('Duplicate unresolved group member');
  });

  it('allows the same student under two different conflict names', () => {
    const group = Group.create({
      ...baseProps(),
      unresolvedMembers: [conflict('احمد تللو', 's-9'), conflict('محمد العلي', 's-9')],
    });

    expect(group.unresolvedMembers).toHaveLength(2);
  });

  it('isolates internal state from caller arrays after create', () => {
    const memberIds = ['s-1'];
    const unresolvedMembers = [notFound('احمد تللو')];
    const group = Group.create({ ...baseProps(), memberIds, unresolvedMembers });

    memberIds.push('s-2');
    unresolvedMembers.push(notFound('محمد العلي'));

    expect(group.memberIds).toEqual(['s-1']);
    expect(group.unresolvedMembers).toHaveLength(1);
  });

  it('returns copies from getters so callers cannot mutate the group', () => {
    const group = Group.create({ ...baseProps(), memberIds: ['s-1'] });

    (group.memberIds as string[]).push('s-2');

    expect(group.memberIds).toEqual(['s-1']);
  });

  it('reconstitutes persisted state without validation', () => {
    const group = Group.reconstitute({ ...baseProps(), id: 'persisted-id' });

    expect(group.id).toBe('persisted-id');
    expect(group.memberIds).toEqual([]);
  });
});
