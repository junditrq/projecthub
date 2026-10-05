import { describe, expect, it } from 'vitest';
import { User } from '../user.entity';
import { UserRole } from '../../enums/user-role.enum';

const base = {
  id: 'u1',
  name: 'Test User',
  email: 'test@example.com',
  image: null,
  githubUsername: null,
  linkedinUrl: null,
  hasBeenPrompted: false,
};

describe('User role and verification permutations', () => {
  it('user without student link can request verification and is not admin', () => {
    const user = User.reconstitute({ ...base, role: UserRole.USER, isStudent: false });
    expect(user.canRequestStudentVerification()).toBe(true);
    expect(user.isAdmin()).toBe(false);
    expect(user.canPerformAdminAction()).toBe(false);
  });

  it('student cannot request verification again', () => {
    const user = User.reconstitute({ ...base, role: UserRole.USER, isStudent: true });
    expect(user.canRequestStudentVerification()).toBe(false);
    expect(user.isAdmin()).toBe(false);
  });

  it('admin without student link can admin but can still request verification', () => {
    const user = User.reconstitute({ ...base, role: UserRole.ADMIN, isStudent: false });
    expect(user.isAdmin()).toBe(true);
    expect(user.canPerformAdminAction()).toBe(true);
    expect(user.canRequestStudentVerification()).toBe(true);
  });

  it('admin with linked student record keeps both capabilities', () => {
    const user = User.reconstitute({ ...base, role: UserRole.ADMIN, isStudent: true });
    expect(user.isAdmin()).toBe(true);
    expect(user.canPerformAdminAction()).toBe(true);
    expect(user.canRequestStudentVerification()).toBe(false);
  });
});
