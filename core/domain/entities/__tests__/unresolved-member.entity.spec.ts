import { describe, it, expect } from 'vitest';
import { UnresolvedMember, UnresolvedMemberType } from '../unresolved-member.entity';
import { BusinessRuleError } from '../../errors/domain-errors';

describe('UnresolvedMember Domain Entity', () => {
  it('creates a not-found member with null student id', () => {
    const member = UnresolvedMember.create({
      conflictName: 'احمد خالد تللو',
      studentId: null,
      type: UnresolvedMemberType.STUDENT_NOT_FOUND,
    });

    expect(member.id).toBeDefined();
    expect(member.studentId).toBeNull();
    expect(member.type).toBe(UnresolvedMemberType.STUDENT_NOT_FOUND);
  });

  it('creates a conflict member keeping the candidate student id', () => {
    const member = UnresolvedMember.create({
      conflictName: 'احمد خالد تللو',
      studentId: 's-9',
      type: UnresolvedMemberType.NAME_CONFLICT,
    });

    expect(member.studentId).toBe('s-9');
    expect(member.type).toBe(UnresolvedMemberType.NAME_CONFLICT);
  });

  it('rejects a not-found member carrying a student id', () => {
    expect(() =>
      UnresolvedMember.create({
        conflictName: 'احمد تللو',
        studentId: 's-9',
        type: UnresolvedMemberType.STUDENT_NOT_FOUND,
      })
    ).toThrow('must be null');
  });

  it('rejects a conflict member without a student id', () => {
    expect(() =>
      UnresolvedMember.create({
        conflictName: 'احمد تللو',
        studentId: null,
        type: UnresolvedMemberType.NAME_CONFLICT,
      })
    ).toThrow('must not be null');
  });

  it('rejects empty and whitespace-only conflict names', () => {
    for (const name of ['', '   ']) {
      expect(() =>
        UnresolvedMember.create({
          conflictName: name,
          studentId: null,
          type: UnresolvedMemberType.STUDENT_NOT_FOUND,
        })
      ).toThrow(BusinessRuleError);
    }
  });

  it('stores the normalized form of a raw diacritic name', () => {
    const member = UnresolvedMember.create({
      conflictName: 'أَحْمَد خالد تللو',
      studentId: null,
      type: UnresolvedMemberType.STUDENT_NOT_FOUND,
    });

    expect(member.conflictName).toBe('احمد خالد تللو');
  });

  it('reconstitutes persisted state without validation', () => {
    const member = UnresolvedMember.reconstitute({
      id: 'persisted-id',
      conflictName: 'raw stored value',
      studentId: 's-9',
      type: UnresolvedMemberType.NAME_CONFLICT,
    });

    expect(member.id).toBe('persisted-id');
    expect(member.conflictName).toBe('raw stored value');
  });
});
