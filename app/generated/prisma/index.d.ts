
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ProjectIdea
 * 
 */
export type ProjectIdea = $Result.DefaultSelection<Prisma.$ProjectIdeaPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Publisher
 * 
 */
export type Publisher = $Result.DefaultSelection<Prisma.$PublisherPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectRepo
 * 
 */
export type ProjectRepo = $Result.DefaultSelection<Prisma.$ProjectRepoPayload>
/**
 * Model ProjectPreviewImage
 * 
 */
export type ProjectPreviewImage = $Result.DefaultSelection<Prisma.$ProjectPreviewImagePayload>
/**
 * Model Contributor
 * 
 */
export type Contributor = $Result.DefaultSelection<Prisma.$ContributorPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Likes
 * 
 */
export type Likes = $Result.DefaultSelection<Prisma.$LikesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProjectRepoType: {
  frontend: 'frontend',
  backend: 'backend',
  mobile: 'mobile',
  monorepo: 'monorepo'
};

export type ProjectRepoType = (typeof ProjectRepoType)[keyof typeof ProjectRepoType]


export const ProjectStatus: {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const CollegeYears: {
  second: 'second',
  third: 'third',
  fourth: 'fourth',
  fifth: 'fifth'
};

export type CollegeYears = (typeof CollegeYears)[keyof typeof CollegeYears]

}

export type ProjectRepoType = $Enums.ProjectRepoType

export const ProjectRepoType: typeof $Enums.ProjectRepoType

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type CollegeYears = $Enums.CollegeYears

export const CollegeYears: typeof $Enums.CollegeYears

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ProjectIdeas
 * const projectIdeas = await prisma.projectIdea.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ProjectIdeas
   * const projectIdeas = await prisma.projectIdea.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.projectIdea`: Exposes CRUD operations for the **ProjectIdea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectIdeas
    * const projectIdeas = await prisma.projectIdea.findMany()
    * ```
    */
  get projectIdea(): Prisma.ProjectIdeaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publisher`: Exposes CRUD operations for the **Publisher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publishers
    * const publishers = await prisma.publisher.findMany()
    * ```
    */
  get publisher(): Prisma.PublisherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectRepo`: Exposes CRUD operations for the **ProjectRepo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectRepos
    * const projectRepos = await prisma.projectRepo.findMany()
    * ```
    */
  get projectRepo(): Prisma.ProjectRepoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectPreviewImage`: Exposes CRUD operations for the **ProjectPreviewImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectPreviewImages
    * const projectPreviewImages = await prisma.projectPreviewImage.findMany()
    * ```
    */
  get projectPreviewImage(): Prisma.ProjectPreviewImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contributor`: Exposes CRUD operations for the **Contributor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contributors
    * const contributors = await prisma.contributor.findMany()
    * ```
    */
  get contributor(): Prisma.ContributorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likes`: Exposes CRUD operations for the **Likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.likes.findMany()
    * ```
    */
  get likes(): Prisma.LikesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ProjectIdea: 'ProjectIdea',
    Group: 'Group',
    Publisher: 'Publisher',
    User: 'User',
    Project: 'Project',
    ProjectRepo: 'ProjectRepo',
    ProjectPreviewImage: 'ProjectPreviewImage',
    Contributor: 'Contributor',
    Category: 'Category',
    Tag: 'Tag',
    Likes: 'Likes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "projectIdea" | "group" | "publisher" | "user" | "project" | "projectRepo" | "projectPreviewImage" | "contributor" | "category" | "tag" | "likes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ProjectIdea: {
        payload: Prisma.$ProjectIdeaPayload<ExtArgs>
        fields: Prisma.ProjectIdeaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectIdeaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectIdeaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload>
          }
          findFirst: {
            args: Prisma.ProjectIdeaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectIdeaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload>
          }
          findMany: {
            args: Prisma.ProjectIdeaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload>[]
          }
          create: {
            args: Prisma.ProjectIdeaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload>
          }
          createMany: {
            args: Prisma.ProjectIdeaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectIdeaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload>[]
          }
          delete: {
            args: Prisma.ProjectIdeaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload>
          }
          update: {
            args: Prisma.ProjectIdeaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload>
          }
          deleteMany: {
            args: Prisma.ProjectIdeaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectIdeaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectIdeaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload>[]
          }
          upsert: {
            args: Prisma.ProjectIdeaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectIdeaPayload>
          }
          aggregate: {
            args: Prisma.ProjectIdeaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectIdea>
          }
          groupBy: {
            args: Prisma.ProjectIdeaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectIdeaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectIdeaCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectIdeaCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Publisher: {
        payload: Prisma.$PublisherPayload<ExtArgs>
        fields: Prisma.PublisherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublisherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublisherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          findFirst: {
            args: Prisma.PublisherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublisherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          findMany: {
            args: Prisma.PublisherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>[]
          }
          create: {
            args: Prisma.PublisherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          createMany: {
            args: Prisma.PublisherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublisherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>[]
          }
          delete: {
            args: Prisma.PublisherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          update: {
            args: Prisma.PublisherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          deleteMany: {
            args: Prisma.PublisherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublisherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublisherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>[]
          }
          upsert: {
            args: Prisma.PublisherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          aggregate: {
            args: Prisma.PublisherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublisher>
          }
          groupBy: {
            args: Prisma.PublisherGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublisherGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublisherCountArgs<ExtArgs>
            result: $Utils.Optional<PublisherCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectRepo: {
        payload: Prisma.$ProjectRepoPayload<ExtArgs>
        fields: Prisma.ProjectRepoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectRepoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRepoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectRepoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRepoPayload>
          }
          findFirst: {
            args: Prisma.ProjectRepoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRepoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectRepoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRepoPayload>
          }
          findMany: {
            args: Prisma.ProjectRepoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRepoPayload>[]
          }
          create: {
            args: Prisma.ProjectRepoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRepoPayload>
          }
          createMany: {
            args: Prisma.ProjectRepoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectRepoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRepoPayload>[]
          }
          delete: {
            args: Prisma.ProjectRepoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRepoPayload>
          }
          update: {
            args: Prisma.ProjectRepoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRepoPayload>
          }
          deleteMany: {
            args: Prisma.ProjectRepoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectRepoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectRepoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRepoPayload>[]
          }
          upsert: {
            args: Prisma.ProjectRepoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRepoPayload>
          }
          aggregate: {
            args: Prisma.ProjectRepoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectRepo>
          }
          groupBy: {
            args: Prisma.ProjectRepoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectRepoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectRepoCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectRepoCountAggregateOutputType> | number
          }
        }
      }
      ProjectPreviewImage: {
        payload: Prisma.$ProjectPreviewImagePayload<ExtArgs>
        fields: Prisma.ProjectPreviewImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectPreviewImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPreviewImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectPreviewImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPreviewImagePayload>
          }
          findFirst: {
            args: Prisma.ProjectPreviewImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPreviewImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectPreviewImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPreviewImagePayload>
          }
          findMany: {
            args: Prisma.ProjectPreviewImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPreviewImagePayload>[]
          }
          create: {
            args: Prisma.ProjectPreviewImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPreviewImagePayload>
          }
          createMany: {
            args: Prisma.ProjectPreviewImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectPreviewImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPreviewImagePayload>[]
          }
          delete: {
            args: Prisma.ProjectPreviewImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPreviewImagePayload>
          }
          update: {
            args: Prisma.ProjectPreviewImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPreviewImagePayload>
          }
          deleteMany: {
            args: Prisma.ProjectPreviewImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectPreviewImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectPreviewImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPreviewImagePayload>[]
          }
          upsert: {
            args: Prisma.ProjectPreviewImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPreviewImagePayload>
          }
          aggregate: {
            args: Prisma.ProjectPreviewImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectPreviewImage>
          }
          groupBy: {
            args: Prisma.ProjectPreviewImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectPreviewImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectPreviewImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectPreviewImageCountAggregateOutputType> | number
          }
        }
      }
      Contributor: {
        payload: Prisma.$ContributorPayload<ExtArgs>
        fields: Prisma.ContributorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContributorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContributorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload>
          }
          findFirst: {
            args: Prisma.ContributorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContributorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload>
          }
          findMany: {
            args: Prisma.ContributorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload>[]
          }
          create: {
            args: Prisma.ContributorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload>
          }
          createMany: {
            args: Prisma.ContributorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContributorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload>[]
          }
          delete: {
            args: Prisma.ContributorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload>
          }
          update: {
            args: Prisma.ContributorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload>
          }
          deleteMany: {
            args: Prisma.ContributorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContributorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContributorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload>[]
          }
          upsert: {
            args: Prisma.ContributorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContributorPayload>
          }
          aggregate: {
            args: Prisma.ContributorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContributor>
          }
          groupBy: {
            args: Prisma.ContributorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContributorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContributorCountArgs<ExtArgs>
            result: $Utils.Optional<ContributorCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Likes: {
        payload: Prisma.$LikesPayload<ExtArgs>
        fields: Prisma.LikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findFirst: {
            args: Prisma.LikesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findMany: {
            args: Prisma.LikesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          create: {
            args: Prisma.LikesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          createMany: {
            args: Prisma.LikesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          delete: {
            args: Prisma.LikesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          update: {
            args: Prisma.LikesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          deleteMany: {
            args: Prisma.LikesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          upsert: {
            args: Prisma.LikesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          aggregate: {
            args: Prisma.LikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikes>
          }
          groupBy: {
            args: Prisma.LikesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikesCountArgs<ExtArgs>
            result: $Utils.Optional<LikesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    projectIdea?: ProjectIdeaOmit
    group?: GroupOmit
    publisher?: PublisherOmit
    user?: UserOmit
    project?: ProjectOmit
    projectRepo?: ProjectRepoOmit
    projectPreviewImage?: ProjectPreviewImageOmit
    contributor?: ContributorOmit
    category?: CategoryOmit
    tag?: TagOmit
    likes?: LikesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectIdeaCountOutputType
   */

  export type ProjectIdeaCountOutputType = {
    groups: number
  }

  export type ProjectIdeaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | ProjectIdeaCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * ProjectIdeaCountOutputType without action
   */
  export type ProjectIdeaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdeaCountOutputType
     */
    select?: ProjectIdeaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectIdeaCountOutputType without action
   */
  export type ProjectIdeaCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    publishers: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publishers?: boolean | GroupCountOutputTypeCountPublishersArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountPublishersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublisherWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Likes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Likes?: boolean | UserCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    ProjectRepo: number
    projectPreviewImages: number
    categories: number
    tags: number
    Likes: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectRepo?: boolean | ProjectCountOutputTypeCountProjectRepoArgs
    projectPreviewImages?: boolean | ProjectCountOutputTypeCountProjectPreviewImagesArgs
    categories?: boolean | ProjectCountOutputTypeCountCategoriesArgs
    tags?: boolean | ProjectCountOutputTypeCountTagsArgs
    Likes?: boolean | ProjectCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectRepoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectRepoWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountProjectPreviewImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectPreviewImageWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }


  /**
   * Count Type ProjectRepoCountOutputType
   */

  export type ProjectRepoCountOutputType = {
    contributors: number
  }

  export type ProjectRepoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contributors?: boolean | ProjectRepoCountOutputTypeCountContributorsArgs
  }

  // Custom InputTypes
  /**
   * ProjectRepoCountOutputType without action
   */
  export type ProjectRepoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRepoCountOutputType
     */
    select?: ProjectRepoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectRepoCountOutputType without action
   */
  export type ProjectRepoCountOutputTypeCountContributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributorWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    projects: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | CategoryCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    projects: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | TagCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ProjectIdea
   */

  export type AggregateProjectIdea = {
    _count: ProjectIdeaCountAggregateOutputType | null
    _min: ProjectIdeaMinAggregateOutputType | null
    _max: ProjectIdeaMaxAggregateOutputType | null
  }

  export type ProjectIdeaMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    name: string | null
    slug: string | null
  }

  export type ProjectIdeaMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    name: string | null
    slug: string | null
  }

  export type ProjectIdeaCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    slug: number
    _all: number
  }


  export type ProjectIdeaMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    slug?: true
  }

  export type ProjectIdeaMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    slug?: true
  }

  export type ProjectIdeaCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    slug?: true
    _all?: true
  }

  export type ProjectIdeaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectIdea to aggregate.
     */
    where?: ProjectIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectIdeas to fetch.
     */
    orderBy?: ProjectIdeaOrderByWithRelationInput | ProjectIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectIdeas
    **/
    _count?: true | ProjectIdeaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectIdeaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectIdeaMaxAggregateInputType
  }

  export type GetProjectIdeaAggregateType<T extends ProjectIdeaAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectIdea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectIdea[P]>
      : GetScalarType<T[P], AggregateProjectIdea[P]>
  }




  export type ProjectIdeaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectIdeaWhereInput
    orderBy?: ProjectIdeaOrderByWithAggregationInput | ProjectIdeaOrderByWithAggregationInput[]
    by: ProjectIdeaScalarFieldEnum[] | ProjectIdeaScalarFieldEnum
    having?: ProjectIdeaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectIdeaCountAggregateInputType | true
    _min?: ProjectIdeaMinAggregateInputType
    _max?: ProjectIdeaMaxAggregateInputType
  }

  export type ProjectIdeaGroupByOutputType = {
    id: string
    createdAt: Date
    name: string
    slug: string
    _count: ProjectIdeaCountAggregateOutputType | null
    _min: ProjectIdeaMinAggregateOutputType | null
    _max: ProjectIdeaMaxAggregateOutputType | null
  }

  type GetProjectIdeaGroupByPayload<T extends ProjectIdeaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectIdeaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectIdeaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectIdeaGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectIdeaGroupByOutputType[P]>
        }
      >
    >


  export type ProjectIdeaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    slug?: boolean
    groups?: boolean | ProjectIdea$groupsArgs<ExtArgs>
    _count?: boolean | ProjectIdeaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectIdea"]>

  export type ProjectIdeaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["projectIdea"]>

  export type ProjectIdeaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["projectIdea"]>

  export type ProjectIdeaSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    slug?: boolean
  }

  export type ProjectIdeaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "slug", ExtArgs["result"]["projectIdea"]>
  export type ProjectIdeaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | ProjectIdea$groupsArgs<ExtArgs>
    _count?: boolean | ProjectIdeaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIdeaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIdeaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectIdeaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectIdea"
    objects: {
      groups: Prisma.$GroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      name: string
      slug: string
    }, ExtArgs["result"]["projectIdea"]>
    composites: {}
  }

  type ProjectIdeaGetPayload<S extends boolean | null | undefined | ProjectIdeaDefaultArgs> = $Result.GetResult<Prisma.$ProjectIdeaPayload, S>

  type ProjectIdeaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectIdeaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectIdeaCountAggregateInputType | true
    }

  export interface ProjectIdeaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectIdea'], meta: { name: 'ProjectIdea' } }
    /**
     * Find zero or one ProjectIdea that matches the filter.
     * @param {ProjectIdeaFindUniqueArgs} args - Arguments to find a ProjectIdea
     * @example
     * // Get one ProjectIdea
     * const projectIdea = await prisma.projectIdea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectIdeaFindUniqueArgs>(args: SelectSubset<T, ProjectIdeaFindUniqueArgs<ExtArgs>>): Prisma__ProjectIdeaClient<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectIdea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectIdeaFindUniqueOrThrowArgs} args - Arguments to find a ProjectIdea
     * @example
     * // Get one ProjectIdea
     * const projectIdea = await prisma.projectIdea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectIdeaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectIdeaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectIdeaClient<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectIdea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectIdeaFindFirstArgs} args - Arguments to find a ProjectIdea
     * @example
     * // Get one ProjectIdea
     * const projectIdea = await prisma.projectIdea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectIdeaFindFirstArgs>(args?: SelectSubset<T, ProjectIdeaFindFirstArgs<ExtArgs>>): Prisma__ProjectIdeaClient<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectIdea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectIdeaFindFirstOrThrowArgs} args - Arguments to find a ProjectIdea
     * @example
     * // Get one ProjectIdea
     * const projectIdea = await prisma.projectIdea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectIdeaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectIdeaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectIdeaClient<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectIdeas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectIdeaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectIdeas
     * const projectIdeas = await prisma.projectIdea.findMany()
     * 
     * // Get first 10 ProjectIdeas
     * const projectIdeas = await prisma.projectIdea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectIdeaWithIdOnly = await prisma.projectIdea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectIdeaFindManyArgs>(args?: SelectSubset<T, ProjectIdeaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectIdea.
     * @param {ProjectIdeaCreateArgs} args - Arguments to create a ProjectIdea.
     * @example
     * // Create one ProjectIdea
     * const ProjectIdea = await prisma.projectIdea.create({
     *   data: {
     *     // ... data to create a ProjectIdea
     *   }
     * })
     * 
     */
    create<T extends ProjectIdeaCreateArgs>(args: SelectSubset<T, ProjectIdeaCreateArgs<ExtArgs>>): Prisma__ProjectIdeaClient<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectIdeas.
     * @param {ProjectIdeaCreateManyArgs} args - Arguments to create many ProjectIdeas.
     * @example
     * // Create many ProjectIdeas
     * const projectIdea = await prisma.projectIdea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectIdeaCreateManyArgs>(args?: SelectSubset<T, ProjectIdeaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectIdeas and returns the data saved in the database.
     * @param {ProjectIdeaCreateManyAndReturnArgs} args - Arguments to create many ProjectIdeas.
     * @example
     * // Create many ProjectIdeas
     * const projectIdea = await prisma.projectIdea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectIdeas and only return the `id`
     * const projectIdeaWithIdOnly = await prisma.projectIdea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectIdeaCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectIdeaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectIdea.
     * @param {ProjectIdeaDeleteArgs} args - Arguments to delete one ProjectIdea.
     * @example
     * // Delete one ProjectIdea
     * const ProjectIdea = await prisma.projectIdea.delete({
     *   where: {
     *     // ... filter to delete one ProjectIdea
     *   }
     * })
     * 
     */
    delete<T extends ProjectIdeaDeleteArgs>(args: SelectSubset<T, ProjectIdeaDeleteArgs<ExtArgs>>): Prisma__ProjectIdeaClient<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectIdea.
     * @param {ProjectIdeaUpdateArgs} args - Arguments to update one ProjectIdea.
     * @example
     * // Update one ProjectIdea
     * const projectIdea = await prisma.projectIdea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectIdeaUpdateArgs>(args: SelectSubset<T, ProjectIdeaUpdateArgs<ExtArgs>>): Prisma__ProjectIdeaClient<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectIdeas.
     * @param {ProjectIdeaDeleteManyArgs} args - Arguments to filter ProjectIdeas to delete.
     * @example
     * // Delete a few ProjectIdeas
     * const { count } = await prisma.projectIdea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectIdeaDeleteManyArgs>(args?: SelectSubset<T, ProjectIdeaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectIdeas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectIdeaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectIdeas
     * const projectIdea = await prisma.projectIdea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectIdeaUpdateManyArgs>(args: SelectSubset<T, ProjectIdeaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectIdeas and returns the data updated in the database.
     * @param {ProjectIdeaUpdateManyAndReturnArgs} args - Arguments to update many ProjectIdeas.
     * @example
     * // Update many ProjectIdeas
     * const projectIdea = await prisma.projectIdea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectIdeas and only return the `id`
     * const projectIdeaWithIdOnly = await prisma.projectIdea.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectIdeaUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectIdeaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectIdea.
     * @param {ProjectIdeaUpsertArgs} args - Arguments to update or create a ProjectIdea.
     * @example
     * // Update or create a ProjectIdea
     * const projectIdea = await prisma.projectIdea.upsert({
     *   create: {
     *     // ... data to create a ProjectIdea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectIdea we want to update
     *   }
     * })
     */
    upsert<T extends ProjectIdeaUpsertArgs>(args: SelectSubset<T, ProjectIdeaUpsertArgs<ExtArgs>>): Prisma__ProjectIdeaClient<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectIdeas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectIdeaCountArgs} args - Arguments to filter ProjectIdeas to count.
     * @example
     * // Count the number of ProjectIdeas
     * const count = await prisma.projectIdea.count({
     *   where: {
     *     // ... the filter for the ProjectIdeas we want to count
     *   }
     * })
    **/
    count<T extends ProjectIdeaCountArgs>(
      args?: Subset<T, ProjectIdeaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectIdeaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectIdea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectIdeaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectIdeaAggregateArgs>(args: Subset<T, ProjectIdeaAggregateArgs>): Prisma.PrismaPromise<GetProjectIdeaAggregateType<T>>

    /**
     * Group by ProjectIdea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectIdeaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectIdeaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectIdeaGroupByArgs['orderBy'] }
        : { orderBy?: ProjectIdeaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectIdeaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectIdeaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectIdea model
   */
  readonly fields: ProjectIdeaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectIdea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectIdeaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groups<T extends ProjectIdea$groupsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectIdea$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectIdea model
   */
  interface ProjectIdeaFieldRefs {
    readonly id: FieldRef<"ProjectIdea", 'String'>
    readonly createdAt: FieldRef<"ProjectIdea", 'DateTime'>
    readonly name: FieldRef<"ProjectIdea", 'String'>
    readonly slug: FieldRef<"ProjectIdea", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectIdea findUnique
   */
  export type ProjectIdeaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    /**
     * Filter, which ProjectIdea to fetch.
     */
    where: ProjectIdeaWhereUniqueInput
  }

  /**
   * ProjectIdea findUniqueOrThrow
   */
  export type ProjectIdeaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    /**
     * Filter, which ProjectIdea to fetch.
     */
    where: ProjectIdeaWhereUniqueInput
  }

  /**
   * ProjectIdea findFirst
   */
  export type ProjectIdeaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    /**
     * Filter, which ProjectIdea to fetch.
     */
    where?: ProjectIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectIdeas to fetch.
     */
    orderBy?: ProjectIdeaOrderByWithRelationInput | ProjectIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectIdeas.
     */
    cursor?: ProjectIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectIdeas.
     */
    distinct?: ProjectIdeaScalarFieldEnum | ProjectIdeaScalarFieldEnum[]
  }

  /**
   * ProjectIdea findFirstOrThrow
   */
  export type ProjectIdeaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    /**
     * Filter, which ProjectIdea to fetch.
     */
    where?: ProjectIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectIdeas to fetch.
     */
    orderBy?: ProjectIdeaOrderByWithRelationInput | ProjectIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectIdeas.
     */
    cursor?: ProjectIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectIdeas.
     */
    distinct?: ProjectIdeaScalarFieldEnum | ProjectIdeaScalarFieldEnum[]
  }

  /**
   * ProjectIdea findMany
   */
  export type ProjectIdeaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    /**
     * Filter, which ProjectIdeas to fetch.
     */
    where?: ProjectIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectIdeas to fetch.
     */
    orderBy?: ProjectIdeaOrderByWithRelationInput | ProjectIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectIdeas.
     */
    cursor?: ProjectIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectIdeas.
     */
    skip?: number
    distinct?: ProjectIdeaScalarFieldEnum | ProjectIdeaScalarFieldEnum[]
  }

  /**
   * ProjectIdea create
   */
  export type ProjectIdeaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectIdea.
     */
    data: XOR<ProjectIdeaCreateInput, ProjectIdeaUncheckedCreateInput>
  }

  /**
   * ProjectIdea createMany
   */
  export type ProjectIdeaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectIdeas.
     */
    data: ProjectIdeaCreateManyInput | ProjectIdeaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectIdea createManyAndReturn
   */
  export type ProjectIdeaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectIdeas.
     */
    data: ProjectIdeaCreateManyInput | ProjectIdeaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectIdea update
   */
  export type ProjectIdeaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectIdea.
     */
    data: XOR<ProjectIdeaUpdateInput, ProjectIdeaUncheckedUpdateInput>
    /**
     * Choose, which ProjectIdea to update.
     */
    where: ProjectIdeaWhereUniqueInput
  }

  /**
   * ProjectIdea updateMany
   */
  export type ProjectIdeaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectIdeas.
     */
    data: XOR<ProjectIdeaUpdateManyMutationInput, ProjectIdeaUncheckedUpdateManyInput>
    /**
     * Filter which ProjectIdeas to update
     */
    where?: ProjectIdeaWhereInput
    /**
     * Limit how many ProjectIdeas to update.
     */
    limit?: number
  }

  /**
   * ProjectIdea updateManyAndReturn
   */
  export type ProjectIdeaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * The data used to update ProjectIdeas.
     */
    data: XOR<ProjectIdeaUpdateManyMutationInput, ProjectIdeaUncheckedUpdateManyInput>
    /**
     * Filter which ProjectIdeas to update
     */
    where?: ProjectIdeaWhereInput
    /**
     * Limit how many ProjectIdeas to update.
     */
    limit?: number
  }

  /**
   * ProjectIdea upsert
   */
  export type ProjectIdeaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectIdea to update in case it exists.
     */
    where: ProjectIdeaWhereUniqueInput
    /**
     * In case the ProjectIdea found by the `where` argument doesn't exist, create a new ProjectIdea with this data.
     */
    create: XOR<ProjectIdeaCreateInput, ProjectIdeaUncheckedCreateInput>
    /**
     * In case the ProjectIdea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectIdeaUpdateInput, ProjectIdeaUncheckedUpdateInput>
  }

  /**
   * ProjectIdea delete
   */
  export type ProjectIdeaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
    /**
     * Filter which ProjectIdea to delete.
     */
    where: ProjectIdeaWhereUniqueInput
  }

  /**
   * ProjectIdea deleteMany
   */
  export type ProjectIdeaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectIdeas to delete
     */
    where?: ProjectIdeaWhereInput
    /**
     * Limit how many ProjectIdeas to delete.
     */
    limit?: number
  }

  /**
   * ProjectIdea.groups
   */
  export type ProjectIdea$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * ProjectIdea without action
   */
  export type ProjectIdeaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectIdea
     */
    select?: ProjectIdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectIdea
     */
    omit?: ProjectIdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIdeaInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    projectIdeaId: string | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    projectIdeaId: string | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    createdAt: number
    projectIdeaId: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    createdAt?: true
    projectIdeaId?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    createdAt?: true
    projectIdeaId?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    createdAt?: true
    projectIdeaId?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    createdAt: Date
    projectIdeaId: string
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    projectIdeaId?: boolean
    publishers?: boolean | Group$publishersArgs<ExtArgs>
    projectIdea?: boolean | ProjectIdeaDefaultArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    projectIdeaId?: boolean
    projectIdea?: boolean | ProjectIdeaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    projectIdeaId?: boolean
    projectIdea?: boolean | ProjectIdeaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    createdAt?: boolean
    projectIdeaId?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "projectIdeaId", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publishers?: boolean | Group$publishersArgs<ExtArgs>
    projectIdea?: boolean | ProjectIdeaDefaultArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectIdea?: boolean | ProjectIdeaDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectIdea?: boolean | ProjectIdeaDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      publishers: Prisma.$PublisherPayload<ExtArgs>[]
      projectIdea: Prisma.$ProjectIdeaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      projectIdeaId: string
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publishers<T extends Group$publishersArgs<ExtArgs> = {}>(args?: Subset<T, Group$publishersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectIdea<T extends ProjectIdeaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectIdeaDefaultArgs<ExtArgs>>): Prisma__ProjectIdeaClient<$Result.GetResult<Prisma.$ProjectIdeaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly projectIdeaId: FieldRef<"Group", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.publishers
   */
  export type Group$publishersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    where?: PublisherWhereInput
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    cursor?: PublisherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Publisher
   */

  export type AggregatePublisher = {
    _count: PublisherCountAggregateOutputType | null
    _min: PublisherMinAggregateOutputType | null
    _max: PublisherMaxAggregateOutputType | null
  }

  export type PublisherMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    name: string | null
    canPublish: boolean | null
    groupId: string | null
    userId: string | null
  }

  export type PublisherMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    name: string | null
    canPublish: boolean | null
    groupId: string | null
    userId: string | null
  }

  export type PublisherCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    canPublish: number
    groupId: number
    userId: number
    _all: number
  }


  export type PublisherMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    canPublish?: true
    groupId?: true
    userId?: true
  }

  export type PublisherMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    canPublish?: true
    groupId?: true
    userId?: true
  }

  export type PublisherCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    canPublish?: true
    groupId?: true
    userId?: true
    _all?: true
  }

  export type PublisherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publisher to aggregate.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publishers
    **/
    _count?: true | PublisherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublisherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublisherMaxAggregateInputType
  }

  export type GetPublisherAggregateType<T extends PublisherAggregateArgs> = {
        [P in keyof T & keyof AggregatePublisher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublisher[P]>
      : GetScalarType<T[P], AggregatePublisher[P]>
  }




  export type PublisherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublisherWhereInput
    orderBy?: PublisherOrderByWithAggregationInput | PublisherOrderByWithAggregationInput[]
    by: PublisherScalarFieldEnum[] | PublisherScalarFieldEnum
    having?: PublisherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublisherCountAggregateInputType | true
    _min?: PublisherMinAggregateInputType
    _max?: PublisherMaxAggregateInputType
  }

  export type PublisherGroupByOutputType = {
    id: string
    createdAt: Date
    name: string
    canPublish: boolean
    groupId: string
    userId: string | null
    _count: PublisherCountAggregateOutputType | null
    _min: PublisherMinAggregateOutputType | null
    _max: PublisherMaxAggregateOutputType | null
  }

  type GetPublisherGroupByPayload<T extends PublisherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublisherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublisherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublisherGroupByOutputType[P]>
            : GetScalarType<T[P], PublisherGroupByOutputType[P]>
        }
      >
    >


  export type PublisherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    canPublish?: boolean
    groupId?: boolean
    userId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | Publisher$userArgs<ExtArgs>
    project?: boolean | Publisher$projectArgs<ExtArgs>
  }, ExtArgs["result"]["publisher"]>

  export type PublisherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    canPublish?: boolean
    groupId?: boolean
    userId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publisher"]>

  export type PublisherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    canPublish?: boolean
    groupId?: boolean
    userId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publisher"]>

  export type PublisherSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    canPublish?: boolean
    groupId?: boolean
    userId?: boolean
  }

  export type PublisherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "canPublish" | "groupId" | "userId", ExtArgs["result"]["publisher"]>
  export type PublisherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | Publisher$userArgs<ExtArgs>
    project?: boolean | Publisher$projectArgs<ExtArgs>
  }
  export type PublisherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type PublisherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $PublisherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publisher"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      project: Prisma.$ProjectPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      name: string
      canPublish: boolean
      groupId: string
      userId: string | null
    }, ExtArgs["result"]["publisher"]>
    composites: {}
  }

  type PublisherGetPayload<S extends boolean | null | undefined | PublisherDefaultArgs> = $Result.GetResult<Prisma.$PublisherPayload, S>

  type PublisherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublisherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublisherCountAggregateInputType | true
    }

  export interface PublisherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publisher'], meta: { name: 'Publisher' } }
    /**
     * Find zero or one Publisher that matches the filter.
     * @param {PublisherFindUniqueArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublisherFindUniqueArgs>(args: SelectSubset<T, PublisherFindUniqueArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Publisher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublisherFindUniqueOrThrowArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublisherFindUniqueOrThrowArgs>(args: SelectSubset<T, PublisherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publisher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherFindFirstArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublisherFindFirstArgs>(args?: SelectSubset<T, PublisherFindFirstArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publisher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherFindFirstOrThrowArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublisherFindFirstOrThrowArgs>(args?: SelectSubset<T, PublisherFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Publishers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publishers
     * const publishers = await prisma.publisher.findMany()
     * 
     * // Get first 10 Publishers
     * const publishers = await prisma.publisher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publisherWithIdOnly = await prisma.publisher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublisherFindManyArgs>(args?: SelectSubset<T, PublisherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Publisher.
     * @param {PublisherCreateArgs} args - Arguments to create a Publisher.
     * @example
     * // Create one Publisher
     * const Publisher = await prisma.publisher.create({
     *   data: {
     *     // ... data to create a Publisher
     *   }
     * })
     * 
     */
    create<T extends PublisherCreateArgs>(args: SelectSubset<T, PublisherCreateArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Publishers.
     * @param {PublisherCreateManyArgs} args - Arguments to create many Publishers.
     * @example
     * // Create many Publishers
     * const publisher = await prisma.publisher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublisherCreateManyArgs>(args?: SelectSubset<T, PublisherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Publishers and returns the data saved in the database.
     * @param {PublisherCreateManyAndReturnArgs} args - Arguments to create many Publishers.
     * @example
     * // Create many Publishers
     * const publisher = await prisma.publisher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Publishers and only return the `id`
     * const publisherWithIdOnly = await prisma.publisher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublisherCreateManyAndReturnArgs>(args?: SelectSubset<T, PublisherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Publisher.
     * @param {PublisherDeleteArgs} args - Arguments to delete one Publisher.
     * @example
     * // Delete one Publisher
     * const Publisher = await prisma.publisher.delete({
     *   where: {
     *     // ... filter to delete one Publisher
     *   }
     * })
     * 
     */
    delete<T extends PublisherDeleteArgs>(args: SelectSubset<T, PublisherDeleteArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Publisher.
     * @param {PublisherUpdateArgs} args - Arguments to update one Publisher.
     * @example
     * // Update one Publisher
     * const publisher = await prisma.publisher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublisherUpdateArgs>(args: SelectSubset<T, PublisherUpdateArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Publishers.
     * @param {PublisherDeleteManyArgs} args - Arguments to filter Publishers to delete.
     * @example
     * // Delete a few Publishers
     * const { count } = await prisma.publisher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublisherDeleteManyArgs>(args?: SelectSubset<T, PublisherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publishers
     * const publisher = await prisma.publisher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublisherUpdateManyArgs>(args: SelectSubset<T, PublisherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publishers and returns the data updated in the database.
     * @param {PublisherUpdateManyAndReturnArgs} args - Arguments to update many Publishers.
     * @example
     * // Update many Publishers
     * const publisher = await prisma.publisher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Publishers and only return the `id`
     * const publisherWithIdOnly = await prisma.publisher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublisherUpdateManyAndReturnArgs>(args: SelectSubset<T, PublisherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Publisher.
     * @param {PublisherUpsertArgs} args - Arguments to update or create a Publisher.
     * @example
     * // Update or create a Publisher
     * const publisher = await prisma.publisher.upsert({
     *   create: {
     *     // ... data to create a Publisher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publisher we want to update
     *   }
     * })
     */
    upsert<T extends PublisherUpsertArgs>(args: SelectSubset<T, PublisherUpsertArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Publishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherCountArgs} args - Arguments to filter Publishers to count.
     * @example
     * // Count the number of Publishers
     * const count = await prisma.publisher.count({
     *   where: {
     *     // ... the filter for the Publishers we want to count
     *   }
     * })
    **/
    count<T extends PublisherCountArgs>(
      args?: Subset<T, PublisherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublisherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublisherAggregateArgs>(args: Subset<T, PublisherAggregateArgs>): Prisma.PrismaPromise<GetPublisherAggregateType<T>>

    /**
     * Group by Publisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublisherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublisherGroupByArgs['orderBy'] }
        : { orderBy?: PublisherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublisherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublisherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publisher model
   */
  readonly fields: PublisherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publisher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublisherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Publisher$userArgs<ExtArgs> = {}>(args?: Subset<T, Publisher$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    project<T extends Publisher$projectArgs<ExtArgs> = {}>(args?: Subset<T, Publisher$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Publisher model
   */
  interface PublisherFieldRefs {
    readonly id: FieldRef<"Publisher", 'String'>
    readonly createdAt: FieldRef<"Publisher", 'DateTime'>
    readonly name: FieldRef<"Publisher", 'String'>
    readonly canPublish: FieldRef<"Publisher", 'Boolean'>
    readonly groupId: FieldRef<"Publisher", 'String'>
    readonly userId: FieldRef<"Publisher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Publisher findUnique
   */
  export type PublisherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher findUniqueOrThrow
   */
  export type PublisherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher findFirst
   */
  export type PublisherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publishers.
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publishers.
     */
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * Publisher findFirstOrThrow
   */
  export type PublisherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publishers.
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publishers.
     */
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * Publisher findMany
   */
  export type PublisherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publishers to fetch.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publishers.
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * Publisher create
   */
  export type PublisherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * The data needed to create a Publisher.
     */
    data: XOR<PublisherCreateInput, PublisherUncheckedCreateInput>
  }

  /**
   * Publisher createMany
   */
  export type PublisherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publishers.
     */
    data: PublisherCreateManyInput | PublisherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publisher createManyAndReturn
   */
  export type PublisherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * The data used to create many Publishers.
     */
    data: PublisherCreateManyInput | PublisherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Publisher update
   */
  export type PublisherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * The data needed to update a Publisher.
     */
    data: XOR<PublisherUpdateInput, PublisherUncheckedUpdateInput>
    /**
     * Choose, which Publisher to update.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher updateMany
   */
  export type PublisherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publishers.
     */
    data: XOR<PublisherUpdateManyMutationInput, PublisherUncheckedUpdateManyInput>
    /**
     * Filter which Publishers to update
     */
    where?: PublisherWhereInput
    /**
     * Limit how many Publishers to update.
     */
    limit?: number
  }

  /**
   * Publisher updateManyAndReturn
   */
  export type PublisherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * The data used to update Publishers.
     */
    data: XOR<PublisherUpdateManyMutationInput, PublisherUncheckedUpdateManyInput>
    /**
     * Filter which Publishers to update
     */
    where?: PublisherWhereInput
    /**
     * Limit how many Publishers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Publisher upsert
   */
  export type PublisherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * The filter to search for the Publisher to update in case it exists.
     */
    where: PublisherWhereUniqueInput
    /**
     * In case the Publisher found by the `where` argument doesn't exist, create a new Publisher with this data.
     */
    create: XOR<PublisherCreateInput, PublisherUncheckedCreateInput>
    /**
     * In case the Publisher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublisherUpdateInput, PublisherUncheckedUpdateInput>
  }

  /**
   * Publisher delete
   */
  export type PublisherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter which Publisher to delete.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher deleteMany
   */
  export type PublisherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publishers to delete
     */
    where?: PublisherWhereInput
    /**
     * Limit how many Publishers to delete.
     */
    limit?: number
  }

  /**
   * Publisher.user
   */
  export type Publisher$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Publisher.project
   */
  export type Publisher$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * Publisher without action
   */
  export type PublisherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    githubId: string | null
    linkedinId: string | null
    website: string | null
    phoneNumber: string | null
    name: string | null
    avatarUrl: string | null
    bio: string | null
    publisherId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    githubId: string | null
    linkedinId: string | null
    website: string | null
    phoneNumber: string | null
    name: string | null
    avatarUrl: string | null
    bio: string | null
    publisherId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    githubId: number
    linkedinId: number
    website: number
    phoneNumber: number
    name: number
    avatarUrl: number
    bio: number
    publisherId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    githubId?: true
    linkedinId?: true
    website?: true
    phoneNumber?: true
    name?: true
    avatarUrl?: true
    bio?: true
    publisherId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    githubId?: true
    linkedinId?: true
    website?: true
    phoneNumber?: true
    name?: true
    avatarUrl?: true
    bio?: true
    publisherId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    githubId?: true
    linkedinId?: true
    website?: true
    phoneNumber?: true
    name?: true
    avatarUrl?: true
    bio?: true
    publisherId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string | null
    githubId: string | null
    linkedinId: string | null
    website: string | null
    phoneNumber: string | null
    name: string | null
    avatarUrl: string | null
    bio: string | null
    publisherId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    githubId?: boolean
    linkedinId?: boolean
    website?: boolean
    phoneNumber?: boolean
    name?: boolean
    avatarUrl?: boolean
    bio?: boolean
    publisherId?: boolean
    publisher?: boolean | User$publisherArgs<ExtArgs>
    Likes?: boolean | User$LikesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    githubId?: boolean
    linkedinId?: boolean
    website?: boolean
    phoneNumber?: boolean
    name?: boolean
    avatarUrl?: boolean
    bio?: boolean
    publisherId?: boolean
    publisher?: boolean | User$publisherArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    githubId?: boolean
    linkedinId?: boolean
    website?: boolean
    phoneNumber?: boolean
    name?: boolean
    avatarUrl?: boolean
    bio?: boolean
    publisherId?: boolean
    publisher?: boolean | User$publisherArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    githubId?: boolean
    linkedinId?: boolean
    website?: boolean
    phoneNumber?: boolean
    name?: boolean
    avatarUrl?: boolean
    bio?: boolean
    publisherId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "email" | "githubId" | "linkedinId" | "website" | "phoneNumber" | "name" | "avatarUrl" | "bio" | "publisherId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | User$publisherArgs<ExtArgs>
    Likes?: boolean | User$LikesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | User$publisherArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | User$publisherArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      publisher: Prisma.$PublisherPayload<ExtArgs> | null
      Likes: Prisma.$LikesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      email: string | null
      githubId: string | null
      linkedinId: string | null
      website: string | null
      phoneNumber: string | null
      name: string | null
      avatarUrl: string | null
      bio: string | null
      publisherId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publisher<T extends User$publisherArgs<ExtArgs> = {}>(args?: Subset<T, User$publisherArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Likes<T extends User$LikesArgs<ExtArgs> = {}>(args?: Subset<T, User$LikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly githubId: FieldRef<"User", 'String'>
    readonly linkedinId: FieldRef<"User", 'String'>
    readonly website: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly publisherId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.publisher
   */
  export type User$publisherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    where?: PublisherWhereInput
  }

  /**
   * User.Likes
   */
  export type User$LikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    slug: string | null
    description: string | null
    status: $Enums.ProjectStatus | null
    thumbnailUrl: string | null
    collegeYear: $Enums.CollegeYears | null
    publisherId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    slug: string | null
    description: string | null
    status: $Enums.ProjectStatus | null
    thumbnailUrl: string | null
    collegeYear: $Enums.CollegeYears | null
    publisherId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    slug: number
    description: number
    status: number
    thumbnailUrl: number
    collegeYear: number
    publisherId: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    slug?: true
    description?: true
    status?: true
    thumbnailUrl?: true
    collegeYear?: true
    publisherId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    slug?: true
    description?: true
    status?: true
    thumbnailUrl?: true
    collegeYear?: true
    publisherId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    slug?: true
    description?: true
    status?: true
    thumbnailUrl?: true
    collegeYear?: true
    publisherId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    slug: string
    description: string | null
    status: $Enums.ProjectStatus
    thumbnailUrl: string
    collegeYear: $Enums.CollegeYears
    publisherId: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    status?: boolean
    thumbnailUrl?: boolean
    collegeYear?: boolean
    publisherId?: boolean
    ProjectRepo?: boolean | Project$ProjectRepoArgs<ExtArgs>
    projectPreviewImages?: boolean | Project$projectPreviewImagesArgs<ExtArgs>
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
    categories?: boolean | Project$categoriesArgs<ExtArgs>
    tags?: boolean | Project$tagsArgs<ExtArgs>
    Likes?: boolean | Project$LikesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    status?: boolean
    thumbnailUrl?: boolean
    collegeYear?: boolean
    publisherId?: boolean
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    status?: boolean
    thumbnailUrl?: boolean
    collegeYear?: boolean
    publisherId?: boolean
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    status?: boolean
    thumbnailUrl?: boolean
    collegeYear?: boolean
    publisherId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "slug" | "description" | "status" | "thumbnailUrl" | "collegeYear" | "publisherId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectRepo?: boolean | Project$ProjectRepoArgs<ExtArgs>
    projectPreviewImages?: boolean | Project$projectPreviewImagesArgs<ExtArgs>
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
    categories?: boolean | Project$categoriesArgs<ExtArgs>
    tags?: boolean | Project$tagsArgs<ExtArgs>
    Likes?: boolean | Project$LikesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      ProjectRepo: Prisma.$ProjectRepoPayload<ExtArgs>[]
      projectPreviewImages: Prisma.$ProjectPreviewImagePayload<ExtArgs>[]
      publisher: Prisma.$PublisherPayload<ExtArgs>
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
      Likes: Prisma.$LikesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      slug: string
      description: string | null
      status: $Enums.ProjectStatus
      thumbnailUrl: string
      collegeYear: $Enums.CollegeYears
      publisherId: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProjectRepo<T extends Project$ProjectRepoArgs<ExtArgs> = {}>(args?: Subset<T, Project$ProjectRepoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRepoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectPreviewImages<T extends Project$projectPreviewImagesArgs<ExtArgs> = {}>(args?: Subset<T, Project$projectPreviewImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPreviewImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    publisher<T extends PublisherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublisherDefaultArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends Project$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Project$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Project$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Project$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Likes<T extends Project$LikesArgs<ExtArgs> = {}>(args?: Subset<T, Project$LikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly name: FieldRef<"Project", 'String'>
    readonly slug: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly thumbnailUrl: FieldRef<"Project", 'String'>
    readonly collegeYear: FieldRef<"Project", 'CollegeYears'>
    readonly publisherId: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.ProjectRepo
   */
  export type Project$ProjectRepoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRepo
     */
    select?: ProjectRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRepo
     */
    omit?: ProjectRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRepoInclude<ExtArgs> | null
    where?: ProjectRepoWhereInput
    orderBy?: ProjectRepoOrderByWithRelationInput | ProjectRepoOrderByWithRelationInput[]
    cursor?: ProjectRepoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectRepoScalarFieldEnum | ProjectRepoScalarFieldEnum[]
  }

  /**
   * Project.projectPreviewImages
   */
  export type Project$projectPreviewImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPreviewImage
     */
    select?: ProjectPreviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPreviewImage
     */
    omit?: ProjectPreviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPreviewImageInclude<ExtArgs> | null
    where?: ProjectPreviewImageWhereInput
    orderBy?: ProjectPreviewImageOrderByWithRelationInput | ProjectPreviewImageOrderByWithRelationInput[]
    cursor?: ProjectPreviewImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectPreviewImageScalarFieldEnum | ProjectPreviewImageScalarFieldEnum[]
  }

  /**
   * Project.categories
   */
  export type Project$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Project.tags
   */
  export type Project$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Project.Likes
   */
  export type Project$LikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectRepo
   */

  export type AggregateProjectRepo = {
    _count: ProjectRepoCountAggregateOutputType | null
    _min: ProjectRepoMinAggregateOutputType | null
    _max: ProjectRepoMaxAggregateOutputType | null
  }

  export type ProjectRepoMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.ProjectRepoType | null
    url: string | null
    projectId: string | null
  }

  export type ProjectRepoMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.ProjectRepoType | null
    url: string | null
    projectId: string | null
  }

  export type ProjectRepoCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    type: number
    url: number
    projectId: number
    _all: number
  }


  export type ProjectRepoMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    url?: true
    projectId?: true
  }

  export type ProjectRepoMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    url?: true
    projectId?: true
  }

  export type ProjectRepoCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    url?: true
    projectId?: true
    _all?: true
  }

  export type ProjectRepoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectRepo to aggregate.
     */
    where?: ProjectRepoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRepos to fetch.
     */
    orderBy?: ProjectRepoOrderByWithRelationInput | ProjectRepoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectRepoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRepos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRepos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectRepos
    **/
    _count?: true | ProjectRepoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectRepoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectRepoMaxAggregateInputType
  }

  export type GetProjectRepoAggregateType<T extends ProjectRepoAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectRepo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectRepo[P]>
      : GetScalarType<T[P], AggregateProjectRepo[P]>
  }




  export type ProjectRepoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectRepoWhereInput
    orderBy?: ProjectRepoOrderByWithAggregationInput | ProjectRepoOrderByWithAggregationInput[]
    by: ProjectRepoScalarFieldEnum[] | ProjectRepoScalarFieldEnum
    having?: ProjectRepoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectRepoCountAggregateInputType | true
    _min?: ProjectRepoMinAggregateInputType
    _max?: ProjectRepoMaxAggregateInputType
  }

  export type ProjectRepoGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    type: $Enums.ProjectRepoType
    url: string
    projectId: string
    _count: ProjectRepoCountAggregateOutputType | null
    _min: ProjectRepoMinAggregateOutputType | null
    _max: ProjectRepoMaxAggregateOutputType | null
  }

  type GetProjectRepoGroupByPayload<T extends ProjectRepoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectRepoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectRepoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectRepoGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectRepoGroupByOutputType[P]>
        }
      >
    >


  export type ProjectRepoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    url?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    contributors?: boolean | ProjectRepo$contributorsArgs<ExtArgs>
    _count?: boolean | ProjectRepoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectRepo"]>

  export type ProjectRepoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    url?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectRepo"]>

  export type ProjectRepoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    url?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectRepo"]>

  export type ProjectRepoSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    url?: boolean
    projectId?: boolean
  }

  export type ProjectRepoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "type" | "url" | "projectId", ExtArgs["result"]["projectRepo"]>
  export type ProjectRepoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    contributors?: boolean | ProjectRepo$contributorsArgs<ExtArgs>
    _count?: boolean | ProjectRepoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectRepoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectRepoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectRepoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectRepo"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      contributors: Prisma.$ContributorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      type: $Enums.ProjectRepoType
      url: string
      projectId: string
    }, ExtArgs["result"]["projectRepo"]>
    composites: {}
  }

  type ProjectRepoGetPayload<S extends boolean | null | undefined | ProjectRepoDefaultArgs> = $Result.GetResult<Prisma.$ProjectRepoPayload, S>

  type ProjectRepoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectRepoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectRepoCountAggregateInputType | true
    }

  export interface ProjectRepoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectRepo'], meta: { name: 'ProjectRepo' } }
    /**
     * Find zero or one ProjectRepo that matches the filter.
     * @param {ProjectRepoFindUniqueArgs} args - Arguments to find a ProjectRepo
     * @example
     * // Get one ProjectRepo
     * const projectRepo = await prisma.projectRepo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectRepoFindUniqueArgs>(args: SelectSubset<T, ProjectRepoFindUniqueArgs<ExtArgs>>): Prisma__ProjectRepoClient<$Result.GetResult<Prisma.$ProjectRepoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectRepo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectRepoFindUniqueOrThrowArgs} args - Arguments to find a ProjectRepo
     * @example
     * // Get one ProjectRepo
     * const projectRepo = await prisma.projectRepo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectRepoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectRepoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectRepoClient<$Result.GetResult<Prisma.$ProjectRepoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectRepo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRepoFindFirstArgs} args - Arguments to find a ProjectRepo
     * @example
     * // Get one ProjectRepo
     * const projectRepo = await prisma.projectRepo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectRepoFindFirstArgs>(args?: SelectSubset<T, ProjectRepoFindFirstArgs<ExtArgs>>): Prisma__ProjectRepoClient<$Result.GetResult<Prisma.$ProjectRepoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectRepo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRepoFindFirstOrThrowArgs} args - Arguments to find a ProjectRepo
     * @example
     * // Get one ProjectRepo
     * const projectRepo = await prisma.projectRepo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectRepoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectRepoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectRepoClient<$Result.GetResult<Prisma.$ProjectRepoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectRepos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRepoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectRepos
     * const projectRepos = await prisma.projectRepo.findMany()
     * 
     * // Get first 10 ProjectRepos
     * const projectRepos = await prisma.projectRepo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectRepoWithIdOnly = await prisma.projectRepo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectRepoFindManyArgs>(args?: SelectSubset<T, ProjectRepoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRepoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectRepo.
     * @param {ProjectRepoCreateArgs} args - Arguments to create a ProjectRepo.
     * @example
     * // Create one ProjectRepo
     * const ProjectRepo = await prisma.projectRepo.create({
     *   data: {
     *     // ... data to create a ProjectRepo
     *   }
     * })
     * 
     */
    create<T extends ProjectRepoCreateArgs>(args: SelectSubset<T, ProjectRepoCreateArgs<ExtArgs>>): Prisma__ProjectRepoClient<$Result.GetResult<Prisma.$ProjectRepoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectRepos.
     * @param {ProjectRepoCreateManyArgs} args - Arguments to create many ProjectRepos.
     * @example
     * // Create many ProjectRepos
     * const projectRepo = await prisma.projectRepo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectRepoCreateManyArgs>(args?: SelectSubset<T, ProjectRepoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectRepos and returns the data saved in the database.
     * @param {ProjectRepoCreateManyAndReturnArgs} args - Arguments to create many ProjectRepos.
     * @example
     * // Create many ProjectRepos
     * const projectRepo = await prisma.projectRepo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectRepos and only return the `id`
     * const projectRepoWithIdOnly = await prisma.projectRepo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectRepoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectRepoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRepoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectRepo.
     * @param {ProjectRepoDeleteArgs} args - Arguments to delete one ProjectRepo.
     * @example
     * // Delete one ProjectRepo
     * const ProjectRepo = await prisma.projectRepo.delete({
     *   where: {
     *     // ... filter to delete one ProjectRepo
     *   }
     * })
     * 
     */
    delete<T extends ProjectRepoDeleteArgs>(args: SelectSubset<T, ProjectRepoDeleteArgs<ExtArgs>>): Prisma__ProjectRepoClient<$Result.GetResult<Prisma.$ProjectRepoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectRepo.
     * @param {ProjectRepoUpdateArgs} args - Arguments to update one ProjectRepo.
     * @example
     * // Update one ProjectRepo
     * const projectRepo = await prisma.projectRepo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectRepoUpdateArgs>(args: SelectSubset<T, ProjectRepoUpdateArgs<ExtArgs>>): Prisma__ProjectRepoClient<$Result.GetResult<Prisma.$ProjectRepoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectRepos.
     * @param {ProjectRepoDeleteManyArgs} args - Arguments to filter ProjectRepos to delete.
     * @example
     * // Delete a few ProjectRepos
     * const { count } = await prisma.projectRepo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectRepoDeleteManyArgs>(args?: SelectSubset<T, ProjectRepoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectRepos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRepoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectRepos
     * const projectRepo = await prisma.projectRepo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectRepoUpdateManyArgs>(args: SelectSubset<T, ProjectRepoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectRepos and returns the data updated in the database.
     * @param {ProjectRepoUpdateManyAndReturnArgs} args - Arguments to update many ProjectRepos.
     * @example
     * // Update many ProjectRepos
     * const projectRepo = await prisma.projectRepo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectRepos and only return the `id`
     * const projectRepoWithIdOnly = await prisma.projectRepo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectRepoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectRepoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRepoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectRepo.
     * @param {ProjectRepoUpsertArgs} args - Arguments to update or create a ProjectRepo.
     * @example
     * // Update or create a ProjectRepo
     * const projectRepo = await prisma.projectRepo.upsert({
     *   create: {
     *     // ... data to create a ProjectRepo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectRepo we want to update
     *   }
     * })
     */
    upsert<T extends ProjectRepoUpsertArgs>(args: SelectSubset<T, ProjectRepoUpsertArgs<ExtArgs>>): Prisma__ProjectRepoClient<$Result.GetResult<Prisma.$ProjectRepoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectRepos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRepoCountArgs} args - Arguments to filter ProjectRepos to count.
     * @example
     * // Count the number of ProjectRepos
     * const count = await prisma.projectRepo.count({
     *   where: {
     *     // ... the filter for the ProjectRepos we want to count
     *   }
     * })
    **/
    count<T extends ProjectRepoCountArgs>(
      args?: Subset<T, ProjectRepoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectRepoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectRepo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRepoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectRepoAggregateArgs>(args: Subset<T, ProjectRepoAggregateArgs>): Prisma.PrismaPromise<GetProjectRepoAggregateType<T>>

    /**
     * Group by ProjectRepo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRepoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectRepoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectRepoGroupByArgs['orderBy'] }
        : { orderBy?: ProjectRepoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectRepoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectRepoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectRepo model
   */
  readonly fields: ProjectRepoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectRepo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectRepoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contributors<T extends ProjectRepo$contributorsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectRepo$contributorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectRepo model
   */
  interface ProjectRepoFieldRefs {
    readonly id: FieldRef<"ProjectRepo", 'String'>
    readonly createdAt: FieldRef<"ProjectRepo", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectRepo", 'DateTime'>
    readonly type: FieldRef<"ProjectRepo", 'ProjectRepoType'>
    readonly url: FieldRef<"ProjectRepo", 'String'>
    readonly projectId: FieldRef<"ProjectRepo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectRepo findUnique
   */
  export type ProjectRepoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRepo
     */
    select?: ProjectRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRepo
     */
    omit?: ProjectRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRepoInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRepo to fetch.
     */
    where: ProjectRepoWhereUniqueInput
  }

  /**
   * ProjectRepo findUniqueOrThrow
   */
  export type ProjectRepoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRepo
     */
    select?: ProjectRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRepo
     */
    omit?: ProjectRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRepoInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRepo to fetch.
     */
    where: ProjectRepoWhereUniqueInput
  }

  /**
   * ProjectRepo findFirst
   */
  export type ProjectRepoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRepo
     */
    select?: ProjectRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRepo
     */
    omit?: ProjectRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRepoInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRepo to fetch.
     */
    where?: ProjectRepoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRepos to fetch.
     */
    orderBy?: ProjectRepoOrderByWithRelationInput | ProjectRepoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectRepos.
     */
    cursor?: ProjectRepoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRepos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRepos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectRepos.
     */
    distinct?: ProjectRepoScalarFieldEnum | ProjectRepoScalarFieldEnum[]
  }

  /**
   * ProjectRepo findFirstOrThrow
   */
  export type ProjectRepoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRepo
     */
    select?: ProjectRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRepo
     */
    omit?: ProjectRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRepoInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRepo to fetch.
     */
    where?: ProjectRepoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRepos to fetch.
     */
    orderBy?: ProjectRepoOrderByWithRelationInput | ProjectRepoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectRepos.
     */
    cursor?: ProjectRepoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRepos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRepos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectRepos.
     */
    distinct?: ProjectRepoScalarFieldEnum | ProjectRepoScalarFieldEnum[]
  }

  /**
   * ProjectRepo findMany
   */
  export type ProjectRepoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRepo
     */
    select?: ProjectRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRepo
     */
    omit?: ProjectRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRepoInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRepos to fetch.
     */
    where?: ProjectRepoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRepos to fetch.
     */
    orderBy?: ProjectRepoOrderByWithRelationInput | ProjectRepoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectRepos.
     */
    cursor?: ProjectRepoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRepos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRepos.
     */
    skip?: number
    distinct?: ProjectRepoScalarFieldEnum | ProjectRepoScalarFieldEnum[]
  }

  /**
   * ProjectRepo create
   */
  export type ProjectRepoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRepo
     */
    select?: ProjectRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRepo
     */
    omit?: ProjectRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRepoInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectRepo.
     */
    data: XOR<ProjectRepoCreateInput, ProjectRepoUncheckedCreateInput>
  }

  /**
   * ProjectRepo createMany
   */
  export type ProjectRepoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectRepos.
     */
    data: ProjectRepoCreateManyInput | ProjectRepoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectRepo createManyAndReturn
   */
  export type ProjectRepoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRepo
     */
    select?: ProjectRepoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRepo
     */
    omit?: ProjectRepoOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectRepos.
     */
    data: ProjectRepoCreateManyInput | ProjectRepoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRepoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectRepo update
   */
  export type ProjectRepoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRepo
     */
    select?: ProjectRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRepo
     */
    omit?: ProjectRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRepoInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectRepo.
     */
    data: XOR<ProjectRepoUpdateInput, ProjectRepoUncheckedUpdateInput>
    /**
     * Choose, which ProjectRepo to update.
     */
    where: ProjectRepoWhereUniqueInput
  }

  /**
   * ProjectRepo updateMany
   */
  export type ProjectRepoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectRepos.
     */
    data: XOR<ProjectRepoUpdateManyMutationInput, ProjectRepoUncheckedUpdateManyInput>
    /**
     * Filter which ProjectRepos to update
     */
    where?: ProjectRepoWhereInput
    /**
     * Limit how many ProjectRepos to update.
     */
    limit?: number
  }

  /**
   * ProjectRepo updateManyAndReturn
   */
  export type ProjectRepoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRepo
     */
    select?: ProjectRepoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRepo
     */
    omit?: ProjectRepoOmit<ExtArgs> | null
    /**
     * The data used to update ProjectRepos.
     */
    data: XOR<ProjectRepoUpdateManyMutationInput, ProjectRepoUncheckedUpdateManyInput>
    /**
     * Filter which ProjectRepos to update
     */
    where?: ProjectRepoWhereInput
    /**
     * Limit how many ProjectRepos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRepoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectRepo upsert
   */
  export type ProjectRepoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRepo
     */
    select?: ProjectRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRepo
     */
    omit?: ProjectRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRepoInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectRepo to update in case it exists.
     */
    where: ProjectRepoWhereUniqueInput
    /**
     * In case the ProjectRepo found by the `where` argument doesn't exist, create a new ProjectRepo with this data.
     */
    create: XOR<ProjectRepoCreateInput, ProjectRepoUncheckedCreateInput>
    /**
     * In case the ProjectRepo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectRepoUpdateInput, ProjectRepoUncheckedUpdateInput>
  }

  /**
   * ProjectRepo delete
   */
  export type ProjectRepoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRepo
     */
    select?: ProjectRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRepo
     */
    omit?: ProjectRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRepoInclude<ExtArgs> | null
    /**
     * Filter which ProjectRepo to delete.
     */
    where: ProjectRepoWhereUniqueInput
  }

  /**
   * ProjectRepo deleteMany
   */
  export type ProjectRepoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectRepos to delete
     */
    where?: ProjectRepoWhereInput
    /**
     * Limit how many ProjectRepos to delete.
     */
    limit?: number
  }

  /**
   * ProjectRepo.contributors
   */
  export type ProjectRepo$contributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    where?: ContributorWhereInput
    orderBy?: ContributorOrderByWithRelationInput | ContributorOrderByWithRelationInput[]
    cursor?: ContributorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContributorScalarFieldEnum | ContributorScalarFieldEnum[]
  }

  /**
   * ProjectRepo without action
   */
  export type ProjectRepoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRepo
     */
    select?: ProjectRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRepo
     */
    omit?: ProjectRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRepoInclude<ExtArgs> | null
  }


  /**
   * Model ProjectPreviewImage
   */

  export type AggregateProjectPreviewImage = {
    _count: ProjectPreviewImageCountAggregateOutputType | null
    _min: ProjectPreviewImageMinAggregateOutputType | null
    _max: ProjectPreviewImageMaxAggregateOutputType | null
  }

  export type ProjectPreviewImageMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    projectId: string | null
  }

  export type ProjectPreviewImageMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    projectId: string | null
  }

  export type ProjectPreviewImageCountAggregateOutputType = {
    id: number
    createdAt: number
    projectId: number
    _all: number
  }


  export type ProjectPreviewImageMinAggregateInputType = {
    id?: true
    createdAt?: true
    projectId?: true
  }

  export type ProjectPreviewImageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    projectId?: true
  }

  export type ProjectPreviewImageCountAggregateInputType = {
    id?: true
    createdAt?: true
    projectId?: true
    _all?: true
  }

  export type ProjectPreviewImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectPreviewImage to aggregate.
     */
    where?: ProjectPreviewImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPreviewImages to fetch.
     */
    orderBy?: ProjectPreviewImageOrderByWithRelationInput | ProjectPreviewImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectPreviewImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPreviewImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPreviewImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectPreviewImages
    **/
    _count?: true | ProjectPreviewImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectPreviewImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectPreviewImageMaxAggregateInputType
  }

  export type GetProjectPreviewImageAggregateType<T extends ProjectPreviewImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectPreviewImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectPreviewImage[P]>
      : GetScalarType<T[P], AggregateProjectPreviewImage[P]>
  }




  export type ProjectPreviewImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectPreviewImageWhereInput
    orderBy?: ProjectPreviewImageOrderByWithAggregationInput | ProjectPreviewImageOrderByWithAggregationInput[]
    by: ProjectPreviewImageScalarFieldEnum[] | ProjectPreviewImageScalarFieldEnum
    having?: ProjectPreviewImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectPreviewImageCountAggregateInputType | true
    _min?: ProjectPreviewImageMinAggregateInputType
    _max?: ProjectPreviewImageMaxAggregateInputType
  }

  export type ProjectPreviewImageGroupByOutputType = {
    id: string
    createdAt: Date
    projectId: string
    _count: ProjectPreviewImageCountAggregateOutputType | null
    _min: ProjectPreviewImageMinAggregateOutputType | null
    _max: ProjectPreviewImageMaxAggregateOutputType | null
  }

  type GetProjectPreviewImageGroupByPayload<T extends ProjectPreviewImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectPreviewImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectPreviewImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectPreviewImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectPreviewImageGroupByOutputType[P]>
        }
      >
    >


  export type ProjectPreviewImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPreviewImage"]>

  export type ProjectPreviewImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPreviewImage"]>

  export type ProjectPreviewImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectPreviewImage"]>

  export type ProjectPreviewImageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    projectId?: boolean
  }

  export type ProjectPreviewImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "projectId", ExtArgs["result"]["projectPreviewImage"]>
  export type ProjectPreviewImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectPreviewImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectPreviewImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectPreviewImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectPreviewImage"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      projectId: string
    }, ExtArgs["result"]["projectPreviewImage"]>
    composites: {}
  }

  type ProjectPreviewImageGetPayload<S extends boolean | null | undefined | ProjectPreviewImageDefaultArgs> = $Result.GetResult<Prisma.$ProjectPreviewImagePayload, S>

  type ProjectPreviewImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectPreviewImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectPreviewImageCountAggregateInputType | true
    }

  export interface ProjectPreviewImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectPreviewImage'], meta: { name: 'ProjectPreviewImage' } }
    /**
     * Find zero or one ProjectPreviewImage that matches the filter.
     * @param {ProjectPreviewImageFindUniqueArgs} args - Arguments to find a ProjectPreviewImage
     * @example
     * // Get one ProjectPreviewImage
     * const projectPreviewImage = await prisma.projectPreviewImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectPreviewImageFindUniqueArgs>(args: SelectSubset<T, ProjectPreviewImageFindUniqueArgs<ExtArgs>>): Prisma__ProjectPreviewImageClient<$Result.GetResult<Prisma.$ProjectPreviewImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectPreviewImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectPreviewImageFindUniqueOrThrowArgs} args - Arguments to find a ProjectPreviewImage
     * @example
     * // Get one ProjectPreviewImage
     * const projectPreviewImage = await prisma.projectPreviewImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectPreviewImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectPreviewImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectPreviewImageClient<$Result.GetResult<Prisma.$ProjectPreviewImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectPreviewImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPreviewImageFindFirstArgs} args - Arguments to find a ProjectPreviewImage
     * @example
     * // Get one ProjectPreviewImage
     * const projectPreviewImage = await prisma.projectPreviewImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectPreviewImageFindFirstArgs>(args?: SelectSubset<T, ProjectPreviewImageFindFirstArgs<ExtArgs>>): Prisma__ProjectPreviewImageClient<$Result.GetResult<Prisma.$ProjectPreviewImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectPreviewImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPreviewImageFindFirstOrThrowArgs} args - Arguments to find a ProjectPreviewImage
     * @example
     * // Get one ProjectPreviewImage
     * const projectPreviewImage = await prisma.projectPreviewImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectPreviewImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectPreviewImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectPreviewImageClient<$Result.GetResult<Prisma.$ProjectPreviewImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectPreviewImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPreviewImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectPreviewImages
     * const projectPreviewImages = await prisma.projectPreviewImage.findMany()
     * 
     * // Get first 10 ProjectPreviewImages
     * const projectPreviewImages = await prisma.projectPreviewImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectPreviewImageWithIdOnly = await prisma.projectPreviewImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectPreviewImageFindManyArgs>(args?: SelectSubset<T, ProjectPreviewImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPreviewImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectPreviewImage.
     * @param {ProjectPreviewImageCreateArgs} args - Arguments to create a ProjectPreviewImage.
     * @example
     * // Create one ProjectPreviewImage
     * const ProjectPreviewImage = await prisma.projectPreviewImage.create({
     *   data: {
     *     // ... data to create a ProjectPreviewImage
     *   }
     * })
     * 
     */
    create<T extends ProjectPreviewImageCreateArgs>(args: SelectSubset<T, ProjectPreviewImageCreateArgs<ExtArgs>>): Prisma__ProjectPreviewImageClient<$Result.GetResult<Prisma.$ProjectPreviewImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectPreviewImages.
     * @param {ProjectPreviewImageCreateManyArgs} args - Arguments to create many ProjectPreviewImages.
     * @example
     * // Create many ProjectPreviewImages
     * const projectPreviewImage = await prisma.projectPreviewImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectPreviewImageCreateManyArgs>(args?: SelectSubset<T, ProjectPreviewImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectPreviewImages and returns the data saved in the database.
     * @param {ProjectPreviewImageCreateManyAndReturnArgs} args - Arguments to create many ProjectPreviewImages.
     * @example
     * // Create many ProjectPreviewImages
     * const projectPreviewImage = await prisma.projectPreviewImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectPreviewImages and only return the `id`
     * const projectPreviewImageWithIdOnly = await prisma.projectPreviewImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectPreviewImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectPreviewImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPreviewImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectPreviewImage.
     * @param {ProjectPreviewImageDeleteArgs} args - Arguments to delete one ProjectPreviewImage.
     * @example
     * // Delete one ProjectPreviewImage
     * const ProjectPreviewImage = await prisma.projectPreviewImage.delete({
     *   where: {
     *     // ... filter to delete one ProjectPreviewImage
     *   }
     * })
     * 
     */
    delete<T extends ProjectPreviewImageDeleteArgs>(args: SelectSubset<T, ProjectPreviewImageDeleteArgs<ExtArgs>>): Prisma__ProjectPreviewImageClient<$Result.GetResult<Prisma.$ProjectPreviewImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectPreviewImage.
     * @param {ProjectPreviewImageUpdateArgs} args - Arguments to update one ProjectPreviewImage.
     * @example
     * // Update one ProjectPreviewImage
     * const projectPreviewImage = await prisma.projectPreviewImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectPreviewImageUpdateArgs>(args: SelectSubset<T, ProjectPreviewImageUpdateArgs<ExtArgs>>): Prisma__ProjectPreviewImageClient<$Result.GetResult<Prisma.$ProjectPreviewImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectPreviewImages.
     * @param {ProjectPreviewImageDeleteManyArgs} args - Arguments to filter ProjectPreviewImages to delete.
     * @example
     * // Delete a few ProjectPreviewImages
     * const { count } = await prisma.projectPreviewImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectPreviewImageDeleteManyArgs>(args?: SelectSubset<T, ProjectPreviewImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectPreviewImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPreviewImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectPreviewImages
     * const projectPreviewImage = await prisma.projectPreviewImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectPreviewImageUpdateManyArgs>(args: SelectSubset<T, ProjectPreviewImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectPreviewImages and returns the data updated in the database.
     * @param {ProjectPreviewImageUpdateManyAndReturnArgs} args - Arguments to update many ProjectPreviewImages.
     * @example
     * // Update many ProjectPreviewImages
     * const projectPreviewImage = await prisma.projectPreviewImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectPreviewImages and only return the `id`
     * const projectPreviewImageWithIdOnly = await prisma.projectPreviewImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectPreviewImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectPreviewImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPreviewImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectPreviewImage.
     * @param {ProjectPreviewImageUpsertArgs} args - Arguments to update or create a ProjectPreviewImage.
     * @example
     * // Update or create a ProjectPreviewImage
     * const projectPreviewImage = await prisma.projectPreviewImage.upsert({
     *   create: {
     *     // ... data to create a ProjectPreviewImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectPreviewImage we want to update
     *   }
     * })
     */
    upsert<T extends ProjectPreviewImageUpsertArgs>(args: SelectSubset<T, ProjectPreviewImageUpsertArgs<ExtArgs>>): Prisma__ProjectPreviewImageClient<$Result.GetResult<Prisma.$ProjectPreviewImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectPreviewImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPreviewImageCountArgs} args - Arguments to filter ProjectPreviewImages to count.
     * @example
     * // Count the number of ProjectPreviewImages
     * const count = await prisma.projectPreviewImage.count({
     *   where: {
     *     // ... the filter for the ProjectPreviewImages we want to count
     *   }
     * })
    **/
    count<T extends ProjectPreviewImageCountArgs>(
      args?: Subset<T, ProjectPreviewImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectPreviewImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectPreviewImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPreviewImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectPreviewImageAggregateArgs>(args: Subset<T, ProjectPreviewImageAggregateArgs>): Prisma.PrismaPromise<GetProjectPreviewImageAggregateType<T>>

    /**
     * Group by ProjectPreviewImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectPreviewImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectPreviewImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectPreviewImageGroupByArgs['orderBy'] }
        : { orderBy?: ProjectPreviewImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectPreviewImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectPreviewImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectPreviewImage model
   */
  readonly fields: ProjectPreviewImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectPreviewImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectPreviewImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectPreviewImage model
   */
  interface ProjectPreviewImageFieldRefs {
    readonly id: FieldRef<"ProjectPreviewImage", 'String'>
    readonly createdAt: FieldRef<"ProjectPreviewImage", 'DateTime'>
    readonly projectId: FieldRef<"ProjectPreviewImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProjectPreviewImage findUnique
   */
  export type ProjectPreviewImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPreviewImage
     */
    select?: ProjectPreviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPreviewImage
     */
    omit?: ProjectPreviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPreviewImageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPreviewImage to fetch.
     */
    where: ProjectPreviewImageWhereUniqueInput
  }

  /**
   * ProjectPreviewImage findUniqueOrThrow
   */
  export type ProjectPreviewImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPreviewImage
     */
    select?: ProjectPreviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPreviewImage
     */
    omit?: ProjectPreviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPreviewImageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPreviewImage to fetch.
     */
    where: ProjectPreviewImageWhereUniqueInput
  }

  /**
   * ProjectPreviewImage findFirst
   */
  export type ProjectPreviewImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPreviewImage
     */
    select?: ProjectPreviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPreviewImage
     */
    omit?: ProjectPreviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPreviewImageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPreviewImage to fetch.
     */
    where?: ProjectPreviewImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPreviewImages to fetch.
     */
    orderBy?: ProjectPreviewImageOrderByWithRelationInput | ProjectPreviewImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectPreviewImages.
     */
    cursor?: ProjectPreviewImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPreviewImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPreviewImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectPreviewImages.
     */
    distinct?: ProjectPreviewImageScalarFieldEnum | ProjectPreviewImageScalarFieldEnum[]
  }

  /**
   * ProjectPreviewImage findFirstOrThrow
   */
  export type ProjectPreviewImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPreviewImage
     */
    select?: ProjectPreviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPreviewImage
     */
    omit?: ProjectPreviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPreviewImageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPreviewImage to fetch.
     */
    where?: ProjectPreviewImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPreviewImages to fetch.
     */
    orderBy?: ProjectPreviewImageOrderByWithRelationInput | ProjectPreviewImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectPreviewImages.
     */
    cursor?: ProjectPreviewImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPreviewImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPreviewImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectPreviewImages.
     */
    distinct?: ProjectPreviewImageScalarFieldEnum | ProjectPreviewImageScalarFieldEnum[]
  }

  /**
   * ProjectPreviewImage findMany
   */
  export type ProjectPreviewImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPreviewImage
     */
    select?: ProjectPreviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPreviewImage
     */
    omit?: ProjectPreviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPreviewImageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectPreviewImages to fetch.
     */
    where?: ProjectPreviewImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectPreviewImages to fetch.
     */
    orderBy?: ProjectPreviewImageOrderByWithRelationInput | ProjectPreviewImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectPreviewImages.
     */
    cursor?: ProjectPreviewImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectPreviewImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectPreviewImages.
     */
    skip?: number
    distinct?: ProjectPreviewImageScalarFieldEnum | ProjectPreviewImageScalarFieldEnum[]
  }

  /**
   * ProjectPreviewImage create
   */
  export type ProjectPreviewImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPreviewImage
     */
    select?: ProjectPreviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPreviewImage
     */
    omit?: ProjectPreviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPreviewImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectPreviewImage.
     */
    data: XOR<ProjectPreviewImageCreateInput, ProjectPreviewImageUncheckedCreateInput>
  }

  /**
   * ProjectPreviewImage createMany
   */
  export type ProjectPreviewImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectPreviewImages.
     */
    data: ProjectPreviewImageCreateManyInput | ProjectPreviewImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectPreviewImage createManyAndReturn
   */
  export type ProjectPreviewImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPreviewImage
     */
    select?: ProjectPreviewImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPreviewImage
     */
    omit?: ProjectPreviewImageOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectPreviewImages.
     */
    data: ProjectPreviewImageCreateManyInput | ProjectPreviewImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPreviewImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectPreviewImage update
   */
  export type ProjectPreviewImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPreviewImage
     */
    select?: ProjectPreviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPreviewImage
     */
    omit?: ProjectPreviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPreviewImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectPreviewImage.
     */
    data: XOR<ProjectPreviewImageUpdateInput, ProjectPreviewImageUncheckedUpdateInput>
    /**
     * Choose, which ProjectPreviewImage to update.
     */
    where: ProjectPreviewImageWhereUniqueInput
  }

  /**
   * ProjectPreviewImage updateMany
   */
  export type ProjectPreviewImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectPreviewImages.
     */
    data: XOR<ProjectPreviewImageUpdateManyMutationInput, ProjectPreviewImageUncheckedUpdateManyInput>
    /**
     * Filter which ProjectPreviewImages to update
     */
    where?: ProjectPreviewImageWhereInput
    /**
     * Limit how many ProjectPreviewImages to update.
     */
    limit?: number
  }

  /**
   * ProjectPreviewImage updateManyAndReturn
   */
  export type ProjectPreviewImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPreviewImage
     */
    select?: ProjectPreviewImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPreviewImage
     */
    omit?: ProjectPreviewImageOmit<ExtArgs> | null
    /**
     * The data used to update ProjectPreviewImages.
     */
    data: XOR<ProjectPreviewImageUpdateManyMutationInput, ProjectPreviewImageUncheckedUpdateManyInput>
    /**
     * Filter which ProjectPreviewImages to update
     */
    where?: ProjectPreviewImageWhereInput
    /**
     * Limit how many ProjectPreviewImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPreviewImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectPreviewImage upsert
   */
  export type ProjectPreviewImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPreviewImage
     */
    select?: ProjectPreviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPreviewImage
     */
    omit?: ProjectPreviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPreviewImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectPreviewImage to update in case it exists.
     */
    where: ProjectPreviewImageWhereUniqueInput
    /**
     * In case the ProjectPreviewImage found by the `where` argument doesn't exist, create a new ProjectPreviewImage with this data.
     */
    create: XOR<ProjectPreviewImageCreateInput, ProjectPreviewImageUncheckedCreateInput>
    /**
     * In case the ProjectPreviewImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectPreviewImageUpdateInput, ProjectPreviewImageUncheckedUpdateInput>
  }

  /**
   * ProjectPreviewImage delete
   */
  export type ProjectPreviewImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPreviewImage
     */
    select?: ProjectPreviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPreviewImage
     */
    omit?: ProjectPreviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPreviewImageInclude<ExtArgs> | null
    /**
     * Filter which ProjectPreviewImage to delete.
     */
    where: ProjectPreviewImageWhereUniqueInput
  }

  /**
   * ProjectPreviewImage deleteMany
   */
  export type ProjectPreviewImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectPreviewImages to delete
     */
    where?: ProjectPreviewImageWhereInput
    /**
     * Limit how many ProjectPreviewImages to delete.
     */
    limit?: number
  }

  /**
   * ProjectPreviewImage without action
   */
  export type ProjectPreviewImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectPreviewImage
     */
    select?: ProjectPreviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectPreviewImage
     */
    omit?: ProjectPreviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectPreviewImageInclude<ExtArgs> | null
  }


  /**
   * Model Contributor
   */

  export type AggregateContributor = {
    _count: ContributorCountAggregateOutputType | null
    _min: ContributorMinAggregateOutputType | null
    _max: ContributorMaxAggregateOutputType | null
  }

  export type ContributorMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    projectRepoId: string | null
  }

  export type ContributorMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    projectRepoId: string | null
  }

  export type ContributorCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    projectRepoId: number
    _all: number
  }


  export type ContributorMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    projectRepoId?: true
  }

  export type ContributorMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    projectRepoId?: true
  }

  export type ContributorCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    projectRepoId?: true
    _all?: true
  }

  export type ContributorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contributor to aggregate.
     */
    where?: ContributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributors to fetch.
     */
    orderBy?: ContributorOrderByWithRelationInput | ContributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contributors
    **/
    _count?: true | ContributorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContributorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContributorMaxAggregateInputType
  }

  export type GetContributorAggregateType<T extends ContributorAggregateArgs> = {
        [P in keyof T & keyof AggregateContributor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContributor[P]>
      : GetScalarType<T[P], AggregateContributor[P]>
  }




  export type ContributorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContributorWhereInput
    orderBy?: ContributorOrderByWithAggregationInput | ContributorOrderByWithAggregationInput[]
    by: ContributorScalarFieldEnum[] | ContributorScalarFieldEnum
    having?: ContributorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContributorCountAggregateInputType | true
    _min?: ContributorMinAggregateInputType
    _max?: ContributorMaxAggregateInputType
  }

  export type ContributorGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    projectRepoId: string | null
    _count: ContributorCountAggregateOutputType | null
    _min: ContributorMinAggregateOutputType | null
    _max: ContributorMaxAggregateOutputType | null
  }

  type GetContributorGroupByPayload<T extends ContributorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContributorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContributorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContributorGroupByOutputType[P]>
            : GetScalarType<T[P], ContributorGroupByOutputType[P]>
        }
      >
    >


  export type ContributorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    projectRepoId?: boolean
    ProjectRepo?: boolean | Contributor$ProjectRepoArgs<ExtArgs>
  }, ExtArgs["result"]["contributor"]>

  export type ContributorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    projectRepoId?: boolean
    ProjectRepo?: boolean | Contributor$ProjectRepoArgs<ExtArgs>
  }, ExtArgs["result"]["contributor"]>

  export type ContributorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    projectRepoId?: boolean
    ProjectRepo?: boolean | Contributor$ProjectRepoArgs<ExtArgs>
  }, ExtArgs["result"]["contributor"]>

  export type ContributorSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    projectRepoId?: boolean
  }

  export type ContributorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "projectRepoId", ExtArgs["result"]["contributor"]>
  export type ContributorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectRepo?: boolean | Contributor$ProjectRepoArgs<ExtArgs>
  }
  export type ContributorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectRepo?: boolean | Contributor$ProjectRepoArgs<ExtArgs>
  }
  export type ContributorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectRepo?: boolean | Contributor$ProjectRepoArgs<ExtArgs>
  }

  export type $ContributorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contributor"
    objects: {
      ProjectRepo: Prisma.$ProjectRepoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      projectRepoId: string | null
    }, ExtArgs["result"]["contributor"]>
    composites: {}
  }

  type ContributorGetPayload<S extends boolean | null | undefined | ContributorDefaultArgs> = $Result.GetResult<Prisma.$ContributorPayload, S>

  type ContributorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContributorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContributorCountAggregateInputType | true
    }

  export interface ContributorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contributor'], meta: { name: 'Contributor' } }
    /**
     * Find zero or one Contributor that matches the filter.
     * @param {ContributorFindUniqueArgs} args - Arguments to find a Contributor
     * @example
     * // Get one Contributor
     * const contributor = await prisma.contributor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContributorFindUniqueArgs>(args: SelectSubset<T, ContributorFindUniqueArgs<ExtArgs>>): Prisma__ContributorClient<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contributor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContributorFindUniqueOrThrowArgs} args - Arguments to find a Contributor
     * @example
     * // Get one Contributor
     * const contributor = await prisma.contributor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContributorFindUniqueOrThrowArgs>(args: SelectSubset<T, ContributorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContributorClient<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contributor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributorFindFirstArgs} args - Arguments to find a Contributor
     * @example
     * // Get one Contributor
     * const contributor = await prisma.contributor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContributorFindFirstArgs>(args?: SelectSubset<T, ContributorFindFirstArgs<ExtArgs>>): Prisma__ContributorClient<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contributor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributorFindFirstOrThrowArgs} args - Arguments to find a Contributor
     * @example
     * // Get one Contributor
     * const contributor = await prisma.contributor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContributorFindFirstOrThrowArgs>(args?: SelectSubset<T, ContributorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContributorClient<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contributors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contributors
     * const contributors = await prisma.contributor.findMany()
     * 
     * // Get first 10 Contributors
     * const contributors = await prisma.contributor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contributorWithIdOnly = await prisma.contributor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContributorFindManyArgs>(args?: SelectSubset<T, ContributorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contributor.
     * @param {ContributorCreateArgs} args - Arguments to create a Contributor.
     * @example
     * // Create one Contributor
     * const Contributor = await prisma.contributor.create({
     *   data: {
     *     // ... data to create a Contributor
     *   }
     * })
     * 
     */
    create<T extends ContributorCreateArgs>(args: SelectSubset<T, ContributorCreateArgs<ExtArgs>>): Prisma__ContributorClient<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contributors.
     * @param {ContributorCreateManyArgs} args - Arguments to create many Contributors.
     * @example
     * // Create many Contributors
     * const contributor = await prisma.contributor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContributorCreateManyArgs>(args?: SelectSubset<T, ContributorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contributors and returns the data saved in the database.
     * @param {ContributorCreateManyAndReturnArgs} args - Arguments to create many Contributors.
     * @example
     * // Create many Contributors
     * const contributor = await prisma.contributor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contributors and only return the `id`
     * const contributorWithIdOnly = await prisma.contributor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContributorCreateManyAndReturnArgs>(args?: SelectSubset<T, ContributorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contributor.
     * @param {ContributorDeleteArgs} args - Arguments to delete one Contributor.
     * @example
     * // Delete one Contributor
     * const Contributor = await prisma.contributor.delete({
     *   where: {
     *     // ... filter to delete one Contributor
     *   }
     * })
     * 
     */
    delete<T extends ContributorDeleteArgs>(args: SelectSubset<T, ContributorDeleteArgs<ExtArgs>>): Prisma__ContributorClient<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contributor.
     * @param {ContributorUpdateArgs} args - Arguments to update one Contributor.
     * @example
     * // Update one Contributor
     * const contributor = await prisma.contributor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContributorUpdateArgs>(args: SelectSubset<T, ContributorUpdateArgs<ExtArgs>>): Prisma__ContributorClient<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contributors.
     * @param {ContributorDeleteManyArgs} args - Arguments to filter Contributors to delete.
     * @example
     * // Delete a few Contributors
     * const { count } = await prisma.contributor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContributorDeleteManyArgs>(args?: SelectSubset<T, ContributorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contributors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contributors
     * const contributor = await prisma.contributor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContributorUpdateManyArgs>(args: SelectSubset<T, ContributorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contributors and returns the data updated in the database.
     * @param {ContributorUpdateManyAndReturnArgs} args - Arguments to update many Contributors.
     * @example
     * // Update many Contributors
     * const contributor = await prisma.contributor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contributors and only return the `id`
     * const contributorWithIdOnly = await prisma.contributor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContributorUpdateManyAndReturnArgs>(args: SelectSubset<T, ContributorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contributor.
     * @param {ContributorUpsertArgs} args - Arguments to update or create a Contributor.
     * @example
     * // Update or create a Contributor
     * const contributor = await prisma.contributor.upsert({
     *   create: {
     *     // ... data to create a Contributor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contributor we want to update
     *   }
     * })
     */
    upsert<T extends ContributorUpsertArgs>(args: SelectSubset<T, ContributorUpsertArgs<ExtArgs>>): Prisma__ContributorClient<$Result.GetResult<Prisma.$ContributorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contributors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributorCountArgs} args - Arguments to filter Contributors to count.
     * @example
     * // Count the number of Contributors
     * const count = await prisma.contributor.count({
     *   where: {
     *     // ... the filter for the Contributors we want to count
     *   }
     * })
    **/
    count<T extends ContributorCountArgs>(
      args?: Subset<T, ContributorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContributorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contributor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContributorAggregateArgs>(args: Subset<T, ContributorAggregateArgs>): Prisma.PrismaPromise<GetContributorAggregateType<T>>

    /**
     * Group by Contributor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContributorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContributorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContributorGroupByArgs['orderBy'] }
        : { orderBy?: ContributorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContributorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContributorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contributor model
   */
  readonly fields: ContributorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contributor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContributorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProjectRepo<T extends Contributor$ProjectRepoArgs<ExtArgs> = {}>(args?: Subset<T, Contributor$ProjectRepoArgs<ExtArgs>>): Prisma__ProjectRepoClient<$Result.GetResult<Prisma.$ProjectRepoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contributor model
   */
  interface ContributorFieldRefs {
    readonly id: FieldRef<"Contributor", 'String'>
    readonly createdAt: FieldRef<"Contributor", 'DateTime'>
    readonly updatedAt: FieldRef<"Contributor", 'DateTime'>
    readonly userId: FieldRef<"Contributor", 'String'>
    readonly projectRepoId: FieldRef<"Contributor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contributor findUnique
   */
  export type ContributorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    /**
     * Filter, which Contributor to fetch.
     */
    where: ContributorWhereUniqueInput
  }

  /**
   * Contributor findUniqueOrThrow
   */
  export type ContributorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    /**
     * Filter, which Contributor to fetch.
     */
    where: ContributorWhereUniqueInput
  }

  /**
   * Contributor findFirst
   */
  export type ContributorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    /**
     * Filter, which Contributor to fetch.
     */
    where?: ContributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributors to fetch.
     */
    orderBy?: ContributorOrderByWithRelationInput | ContributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contributors.
     */
    cursor?: ContributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contributors.
     */
    distinct?: ContributorScalarFieldEnum | ContributorScalarFieldEnum[]
  }

  /**
   * Contributor findFirstOrThrow
   */
  export type ContributorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    /**
     * Filter, which Contributor to fetch.
     */
    where?: ContributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributors to fetch.
     */
    orderBy?: ContributorOrderByWithRelationInput | ContributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contributors.
     */
    cursor?: ContributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contributors.
     */
    distinct?: ContributorScalarFieldEnum | ContributorScalarFieldEnum[]
  }

  /**
   * Contributor findMany
   */
  export type ContributorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    /**
     * Filter, which Contributors to fetch.
     */
    where?: ContributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contributors to fetch.
     */
    orderBy?: ContributorOrderByWithRelationInput | ContributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contributors.
     */
    cursor?: ContributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contributors.
     */
    skip?: number
    distinct?: ContributorScalarFieldEnum | ContributorScalarFieldEnum[]
  }

  /**
   * Contributor create
   */
  export type ContributorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    /**
     * The data needed to create a Contributor.
     */
    data: XOR<ContributorCreateInput, ContributorUncheckedCreateInput>
  }

  /**
   * Contributor createMany
   */
  export type ContributorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contributors.
     */
    data: ContributorCreateManyInput | ContributorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contributor createManyAndReturn
   */
  export type ContributorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * The data used to create many Contributors.
     */
    data: ContributorCreateManyInput | ContributorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contributor update
   */
  export type ContributorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    /**
     * The data needed to update a Contributor.
     */
    data: XOR<ContributorUpdateInput, ContributorUncheckedUpdateInput>
    /**
     * Choose, which Contributor to update.
     */
    where: ContributorWhereUniqueInput
  }

  /**
   * Contributor updateMany
   */
  export type ContributorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contributors.
     */
    data: XOR<ContributorUpdateManyMutationInput, ContributorUncheckedUpdateManyInput>
    /**
     * Filter which Contributors to update
     */
    where?: ContributorWhereInput
    /**
     * Limit how many Contributors to update.
     */
    limit?: number
  }

  /**
   * Contributor updateManyAndReturn
   */
  export type ContributorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * The data used to update Contributors.
     */
    data: XOR<ContributorUpdateManyMutationInput, ContributorUncheckedUpdateManyInput>
    /**
     * Filter which Contributors to update
     */
    where?: ContributorWhereInput
    /**
     * Limit how many Contributors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contributor upsert
   */
  export type ContributorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    /**
     * The filter to search for the Contributor to update in case it exists.
     */
    where: ContributorWhereUniqueInput
    /**
     * In case the Contributor found by the `where` argument doesn't exist, create a new Contributor with this data.
     */
    create: XOR<ContributorCreateInput, ContributorUncheckedCreateInput>
    /**
     * In case the Contributor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContributorUpdateInput, ContributorUncheckedUpdateInput>
  }

  /**
   * Contributor delete
   */
  export type ContributorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
    /**
     * Filter which Contributor to delete.
     */
    where: ContributorWhereUniqueInput
  }

  /**
   * Contributor deleteMany
   */
  export type ContributorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contributors to delete
     */
    where?: ContributorWhereInput
    /**
     * Limit how many Contributors to delete.
     */
    limit?: number
  }

  /**
   * Contributor.ProjectRepo
   */
  export type Contributor$ProjectRepoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRepo
     */
    select?: ProjectRepoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRepo
     */
    omit?: ProjectRepoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRepoInclude<ExtArgs> | null
    where?: ProjectRepoWhereInput
  }

  /**
   * Contributor without action
   */
  export type ContributorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contributor
     */
    select?: ContributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contributor
     */
    omit?: ContributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContributorInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    name: string | null
    slug: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    name: string | null
    slug: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    slug: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    slug?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    slug?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    slug?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    createdAt: Date
    name: string
    slug: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    slug?: boolean
    projects?: boolean | Category$projectsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    slug?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    slug?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "slug", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Category$projectsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      name: string
      slug: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Category$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Category$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.projects
   */
  export type Category$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    slug: string | null
    createdAt: Date | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    createdAt: Date | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    slug: number
    createdAt: number
    name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    slug?: true
    createdAt?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    slug?: true
    createdAt?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    slug?: true
    createdAt?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    slug: string
    createdAt: Date
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    createdAt?: boolean
    name?: boolean
    projects?: boolean | Tag$projectsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    createdAt?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    createdAt?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    slug?: boolean
    createdAt?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "createdAt" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Tag$projectsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      createdAt: Date
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Tag$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly slug: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.projects
   */
  export type Tag$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Likes
   */

  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    projectId: string | null
  }

  export type LikesMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    projectId: string | null
  }

  export type LikesCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    projectId: number
    _all: number
  }


  export type LikesMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    projectId?: true
  }

  export type LikesMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    projectId?: true
  }

  export type LikesCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    projectId?: true
    _all?: true
  }

  export type LikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to aggregate.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }




  export type LikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithAggregationInput | LikesOrderByWithAggregationInput[]
    by: LikesScalarFieldEnum[] | LikesScalarFieldEnum
    having?: LikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikesCountAggregateInputType | true
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }

  export type LikesGroupByOutputType = {
    id: string
    createdAt: Date
    userId: string
    projectId: string
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends LikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikesGroupByOutputType[P]>
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      >
    >


  export type LikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    projectId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    projectId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    projectId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    projectId?: boolean
  }

  export type LikesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userId" | "projectId", ExtArgs["result"]["likes"]>
  export type LikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type LikesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type LikesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $LikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Likes"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      userId: string
      projectId: string
    }, ExtArgs["result"]["likes"]>
    composites: {}
  }

  type LikesGetPayload<S extends boolean | null | undefined | LikesDefaultArgs> = $Result.GetResult<Prisma.$LikesPayload, S>

  type LikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikesCountAggregateInputType | true
    }

  export interface LikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Likes'], meta: { name: 'Likes' } }
    /**
     * Find zero or one Likes that matches the filter.
     * @param {LikesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikesFindUniqueArgs>(args: SelectSubset<T, LikesFindUniqueArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikesFindUniqueOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikesFindUniqueOrThrowArgs>(args: SelectSubset<T, LikesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikesFindFirstArgs>(args?: SelectSubset<T, LikesFindFirstArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikesFindFirstOrThrowArgs>(args?: SelectSubset<T, LikesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likesWithIdOnly = await prisma.likes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikesFindManyArgs>(args?: SelectSubset<T, LikesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Likes.
     * @param {LikesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     * 
     */
    create<T extends LikesCreateArgs>(args: SelectSubset<T, LikesCreateArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikesCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikesCreateManyArgs>(args?: SelectSubset<T, LikesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikesCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikesCreateManyAndReturnArgs>(args?: SelectSubset<T, LikesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Likes.
     * @param {LikesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     * 
     */
    delete<T extends LikesDeleteArgs>(args: SelectSubset<T, LikesDeleteArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Likes.
     * @param {LikesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikesUpdateArgs>(args: SelectSubset<T, LikesUpdateArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikesDeleteManyArgs>(args?: SelectSubset<T, LikesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikesUpdateManyArgs>(args: SelectSubset<T, LikesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikesUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LikesUpdateManyAndReturnArgs>(args: SelectSubset<T, LikesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Likes.
     * @param {LikesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
     */
    upsert<T extends LikesUpsertArgs>(args: SelectSubset<T, LikesUpsertArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikesCountArgs>(
      args?: Subset<T, LikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikesAggregateArgs>(args: Subset<T, LikesAggregateArgs>): Prisma.PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikesGroupByArgs['orderBy'] }
        : { orderBy?: LikesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Likes model
   */
  readonly fields: LikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Likes model
   */
  interface LikesFieldRefs {
    readonly id: FieldRef<"Likes", 'String'>
    readonly createdAt: FieldRef<"Likes", 'DateTime'>
    readonly userId: FieldRef<"Likes", 'String'>
    readonly projectId: FieldRef<"Likes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Likes findUnique
   */
  export type LikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findUniqueOrThrow
   */
  export type LikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findFirst
   */
  export type LikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findFirstOrThrow
   */
  export type LikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findMany
   */
  export type LikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes create
   */
  export type LikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to create a Likes.
     */
    data: XOR<LikesCreateInput, LikesUncheckedCreateInput>
  }

  /**
   * Likes createMany
   */
  export type LikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Likes createManyAndReturn
   */
  export type LikesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Likes update
   */
  export type LikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to update a Likes.
     */
    data: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
    /**
     * Choose, which Likes to update.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes updateMany
   */
  export type LikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Likes updateManyAndReturn
   */
  export type LikesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * The data used to update Likes.
     */
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Likes upsert
   */
  export type LikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The filter to search for the Likes to update in case it exists.
     */
    where: LikesWhereUniqueInput
    /**
     * In case the Likes found by the `where` argument doesn't exist, create a new Likes with this data.
     */
    create: XOR<LikesCreateInput, LikesUncheckedCreateInput>
    /**
     * In case the Likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
  }

  /**
   * Likes delete
   */
  export type LikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter which Likes to delete.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes deleteMany
   */
  export type LikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Likes without action
   */
  export type LikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectIdeaScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    slug: 'slug'
  };

  export type ProjectIdeaScalarFieldEnum = (typeof ProjectIdeaScalarFieldEnum)[keyof typeof ProjectIdeaScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    projectIdeaId: 'projectIdeaId'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const PublisherScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    canPublish: 'canPublish',
    groupId: 'groupId',
    userId: 'userId'
  };

  export type PublisherScalarFieldEnum = (typeof PublisherScalarFieldEnum)[keyof typeof PublisherScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    githubId: 'githubId',
    linkedinId: 'linkedinId',
    website: 'website',
    phoneNumber: 'phoneNumber',
    name: 'name',
    avatarUrl: 'avatarUrl',
    bio: 'bio',
    publisherId: 'publisherId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    slug: 'slug',
    description: 'description',
    status: 'status',
    thumbnailUrl: 'thumbnailUrl',
    collegeYear: 'collegeYear',
    publisherId: 'publisherId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectRepoScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    type: 'type',
    url: 'url',
    projectId: 'projectId'
  };

  export type ProjectRepoScalarFieldEnum = (typeof ProjectRepoScalarFieldEnum)[keyof typeof ProjectRepoScalarFieldEnum]


  export const ProjectPreviewImageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    projectId: 'projectId'
  };

  export type ProjectPreviewImageScalarFieldEnum = (typeof ProjectPreviewImageScalarFieldEnum)[keyof typeof ProjectPreviewImageScalarFieldEnum]


  export const ContributorScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    projectRepoId: 'projectRepoId'
  };

  export type ContributorScalarFieldEnum = (typeof ContributorScalarFieldEnum)[keyof typeof ContributorScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    slug: 'slug'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    createdAt: 'createdAt',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const LikesScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    projectId: 'projectId'
  };

  export type LikesScalarFieldEnum = (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'CollegeYears'
   */
  export type EnumCollegeYearsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollegeYears'>
    


  /**
   * Reference to a field of type 'CollegeYears[]'
   */
  export type ListEnumCollegeYearsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CollegeYears[]'>
    


  /**
   * Reference to a field of type 'ProjectRepoType'
   */
  export type EnumProjectRepoTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectRepoType'>
    


  /**
   * Reference to a field of type 'ProjectRepoType[]'
   */
  export type ListEnumProjectRepoTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectRepoType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ProjectIdeaWhereInput = {
    AND?: ProjectIdeaWhereInput | ProjectIdeaWhereInput[]
    OR?: ProjectIdeaWhereInput[]
    NOT?: ProjectIdeaWhereInput | ProjectIdeaWhereInput[]
    id?: StringFilter<"ProjectIdea"> | string
    createdAt?: DateTimeFilter<"ProjectIdea"> | Date | string
    name?: StringFilter<"ProjectIdea"> | string
    slug?: StringFilter<"ProjectIdea"> | string
    groups?: GroupListRelationFilter
  }

  export type ProjectIdeaOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    groups?: GroupOrderByRelationAggregateInput
  }

  export type ProjectIdeaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProjectIdeaWhereInput | ProjectIdeaWhereInput[]
    OR?: ProjectIdeaWhereInput[]
    NOT?: ProjectIdeaWhereInput | ProjectIdeaWhereInput[]
    createdAt?: DateTimeFilter<"ProjectIdea"> | Date | string
    name?: StringFilter<"ProjectIdea"> | string
    groups?: GroupListRelationFilter
  }, "id" | "slug">

  export type ProjectIdeaOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    _count?: ProjectIdeaCountOrderByAggregateInput
    _max?: ProjectIdeaMaxOrderByAggregateInput
    _min?: ProjectIdeaMinOrderByAggregateInput
  }

  export type ProjectIdeaScalarWhereWithAggregatesInput = {
    AND?: ProjectIdeaScalarWhereWithAggregatesInput | ProjectIdeaScalarWhereWithAggregatesInput[]
    OR?: ProjectIdeaScalarWhereWithAggregatesInput[]
    NOT?: ProjectIdeaScalarWhereWithAggregatesInput | ProjectIdeaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectIdea"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectIdea"> | Date | string
    name?: StringWithAggregatesFilter<"ProjectIdea"> | string
    slug?: StringWithAggregatesFilter<"ProjectIdea"> | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    projectIdeaId?: StringFilter<"Group"> | string
    publishers?: PublisherListRelationFilter
    projectIdea?: XOR<ProjectIdeaScalarRelationFilter, ProjectIdeaWhereInput>
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    projectIdeaId?: SortOrder
    publishers?: PublisherOrderByRelationAggregateInput
    projectIdea?: ProjectIdeaOrderByWithRelationInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    createdAt?: DateTimeFilter<"Group"> | Date | string
    projectIdeaId?: StringFilter<"Group"> | string
    publishers?: PublisherListRelationFilter
    projectIdea?: XOR<ProjectIdeaScalarRelationFilter, ProjectIdeaWhereInput>
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    projectIdeaId?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    projectIdeaId?: StringWithAggregatesFilter<"Group"> | string
  }

  export type PublisherWhereInput = {
    AND?: PublisherWhereInput | PublisherWhereInput[]
    OR?: PublisherWhereInput[]
    NOT?: PublisherWhereInput | PublisherWhereInput[]
    id?: StringFilter<"Publisher"> | string
    createdAt?: DateTimeFilter<"Publisher"> | Date | string
    name?: StringFilter<"Publisher"> | string
    canPublish?: BoolFilter<"Publisher"> | boolean
    groupId?: StringFilter<"Publisher"> | string
    userId?: StringNullableFilter<"Publisher"> | string | null
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
  }

  export type PublisherOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    canPublish?: SortOrder
    groupId?: SortOrder
    userId?: SortOrderInput | SortOrder
    group?: GroupOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type PublisherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PublisherWhereInput | PublisherWhereInput[]
    OR?: PublisherWhereInput[]
    NOT?: PublisherWhereInput | PublisherWhereInput[]
    createdAt?: DateTimeFilter<"Publisher"> | Date | string
    name?: StringFilter<"Publisher"> | string
    canPublish?: BoolFilter<"Publisher"> | boolean
    groupId?: StringFilter<"Publisher"> | string
    userId?: StringNullableFilter<"Publisher"> | string | null
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
  }, "id">

  export type PublisherOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    canPublish?: SortOrder
    groupId?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: PublisherCountOrderByAggregateInput
    _max?: PublisherMaxOrderByAggregateInput
    _min?: PublisherMinOrderByAggregateInput
  }

  export type PublisherScalarWhereWithAggregatesInput = {
    AND?: PublisherScalarWhereWithAggregatesInput | PublisherScalarWhereWithAggregatesInput[]
    OR?: PublisherScalarWhereWithAggregatesInput[]
    NOT?: PublisherScalarWhereWithAggregatesInput | PublisherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Publisher"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Publisher"> | Date | string
    name?: StringWithAggregatesFilter<"Publisher"> | string
    canPublish?: BoolWithAggregatesFilter<"Publisher"> | boolean
    groupId?: StringWithAggregatesFilter<"Publisher"> | string
    userId?: StringNullableWithAggregatesFilter<"Publisher"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    email?: StringNullableFilter<"User"> | string | null
    githubId?: StringNullableFilter<"User"> | string | null
    linkedinId?: StringNullableFilter<"User"> | string | null
    website?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    publisherId?: StringFilter<"User"> | string
    publisher?: XOR<PublisherNullableScalarRelationFilter, PublisherWhereInput> | null
    Likes?: LikesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrderInput | SortOrder
    githubId?: SortOrderInput | SortOrder
    linkedinId?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    publisherId?: SortOrder
    publisher?: PublisherOrderByWithRelationInput
    Likes?: LikesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    githubId?: string
    linkedinId?: string
    phoneNumber?: string
    publisherId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    website?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    publisher?: XOR<PublisherNullableScalarRelationFilter, PublisherWhereInput> | null
    Likes?: LikesListRelationFilter
  }, "id" | "email" | "githubId" | "linkedinId" | "phoneNumber" | "publisherId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrderInput | SortOrder
    githubId?: SortOrderInput | SortOrder
    linkedinId?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    publisherId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    githubId?: StringNullableWithAggregatesFilter<"User"> | string | null
    linkedinId?: StringNullableWithAggregatesFilter<"User"> | string | null
    website?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    publisherId?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    name?: StringFilter<"Project"> | string
    slug?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    thumbnailUrl?: StringFilter<"Project"> | string
    collegeYear?: EnumCollegeYearsFilter<"Project"> | $Enums.CollegeYears
    publisherId?: StringFilter<"Project"> | string
    ProjectRepo?: ProjectRepoListRelationFilter
    projectPreviewImages?: ProjectPreviewImageListRelationFilter
    publisher?: XOR<PublisherScalarRelationFilter, PublisherWhereInput>
    categories?: CategoryListRelationFilter
    tags?: TagListRelationFilter
    Likes?: LikesListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    thumbnailUrl?: SortOrder
    collegeYear?: SortOrder
    publisherId?: SortOrder
    ProjectRepo?: ProjectRepoOrderByRelationAggregateInput
    projectPreviewImages?: ProjectPreviewImageOrderByRelationAggregateInput
    publisher?: PublisherOrderByWithRelationInput
    categories?: CategoryOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    Likes?: LikesOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    publisherId?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    thumbnailUrl?: StringFilter<"Project"> | string
    collegeYear?: EnumCollegeYearsFilter<"Project"> | $Enums.CollegeYears
    ProjectRepo?: ProjectRepoListRelationFilter
    projectPreviewImages?: ProjectPreviewImageListRelationFilter
    publisher?: XOR<PublisherScalarRelationFilter, PublisherWhereInput>
    categories?: CategoryListRelationFilter
    tags?: TagListRelationFilter
    Likes?: LikesListRelationFilter
  }, "id" | "slug" | "publisherId">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    thumbnailUrl?: SortOrder
    collegeYear?: SortOrder
    publisherId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    name?: StringWithAggregatesFilter<"Project"> | string
    slug?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    thumbnailUrl?: StringWithAggregatesFilter<"Project"> | string
    collegeYear?: EnumCollegeYearsWithAggregatesFilter<"Project"> | $Enums.CollegeYears
    publisherId?: StringWithAggregatesFilter<"Project"> | string
  }

  export type ProjectRepoWhereInput = {
    AND?: ProjectRepoWhereInput | ProjectRepoWhereInput[]
    OR?: ProjectRepoWhereInput[]
    NOT?: ProjectRepoWhereInput | ProjectRepoWhereInput[]
    id?: StringFilter<"ProjectRepo"> | string
    createdAt?: DateTimeFilter<"ProjectRepo"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectRepo"> | Date | string
    type?: EnumProjectRepoTypeFilter<"ProjectRepo"> | $Enums.ProjectRepoType
    url?: StringFilter<"ProjectRepo"> | string
    projectId?: StringFilter<"ProjectRepo"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    contributors?: ContributorListRelationFilter
  }

  export type ProjectRepoOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    url?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    contributors?: ContributorOrderByRelationAggregateInput
  }

  export type ProjectRepoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectRepoWhereInput | ProjectRepoWhereInput[]
    OR?: ProjectRepoWhereInput[]
    NOT?: ProjectRepoWhereInput | ProjectRepoWhereInput[]
    createdAt?: DateTimeFilter<"ProjectRepo"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectRepo"> | Date | string
    type?: EnumProjectRepoTypeFilter<"ProjectRepo"> | $Enums.ProjectRepoType
    url?: StringFilter<"ProjectRepo"> | string
    projectId?: StringFilter<"ProjectRepo"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    contributors?: ContributorListRelationFilter
  }, "id">

  export type ProjectRepoOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    url?: SortOrder
    projectId?: SortOrder
    _count?: ProjectRepoCountOrderByAggregateInput
    _max?: ProjectRepoMaxOrderByAggregateInput
    _min?: ProjectRepoMinOrderByAggregateInput
  }

  export type ProjectRepoScalarWhereWithAggregatesInput = {
    AND?: ProjectRepoScalarWhereWithAggregatesInput | ProjectRepoScalarWhereWithAggregatesInput[]
    OR?: ProjectRepoScalarWhereWithAggregatesInput[]
    NOT?: ProjectRepoScalarWhereWithAggregatesInput | ProjectRepoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectRepo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectRepo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectRepo"> | Date | string
    type?: EnumProjectRepoTypeWithAggregatesFilter<"ProjectRepo"> | $Enums.ProjectRepoType
    url?: StringWithAggregatesFilter<"ProjectRepo"> | string
    projectId?: StringWithAggregatesFilter<"ProjectRepo"> | string
  }

  export type ProjectPreviewImageWhereInput = {
    AND?: ProjectPreviewImageWhereInput | ProjectPreviewImageWhereInput[]
    OR?: ProjectPreviewImageWhereInput[]
    NOT?: ProjectPreviewImageWhereInput | ProjectPreviewImageWhereInput[]
    id?: StringFilter<"ProjectPreviewImage"> | string
    createdAt?: DateTimeFilter<"ProjectPreviewImage"> | Date | string
    projectId?: StringFilter<"ProjectPreviewImage"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectPreviewImageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectPreviewImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectPreviewImageWhereInput | ProjectPreviewImageWhereInput[]
    OR?: ProjectPreviewImageWhereInput[]
    NOT?: ProjectPreviewImageWhereInput | ProjectPreviewImageWhereInput[]
    createdAt?: DateTimeFilter<"ProjectPreviewImage"> | Date | string
    projectId?: StringFilter<"ProjectPreviewImage"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectPreviewImageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    _count?: ProjectPreviewImageCountOrderByAggregateInput
    _max?: ProjectPreviewImageMaxOrderByAggregateInput
    _min?: ProjectPreviewImageMinOrderByAggregateInput
  }

  export type ProjectPreviewImageScalarWhereWithAggregatesInput = {
    AND?: ProjectPreviewImageScalarWhereWithAggregatesInput | ProjectPreviewImageScalarWhereWithAggregatesInput[]
    OR?: ProjectPreviewImageScalarWhereWithAggregatesInput[]
    NOT?: ProjectPreviewImageScalarWhereWithAggregatesInput | ProjectPreviewImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectPreviewImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectPreviewImage"> | Date | string
    projectId?: StringWithAggregatesFilter<"ProjectPreviewImage"> | string
  }

  export type ContributorWhereInput = {
    AND?: ContributorWhereInput | ContributorWhereInput[]
    OR?: ContributorWhereInput[]
    NOT?: ContributorWhereInput | ContributorWhereInput[]
    id?: StringFilter<"Contributor"> | string
    createdAt?: DateTimeFilter<"Contributor"> | Date | string
    updatedAt?: DateTimeFilter<"Contributor"> | Date | string
    userId?: StringFilter<"Contributor"> | string
    projectRepoId?: StringNullableFilter<"Contributor"> | string | null
    ProjectRepo?: XOR<ProjectRepoNullableScalarRelationFilter, ProjectRepoWhereInput> | null
  }

  export type ContributorOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    projectRepoId?: SortOrderInput | SortOrder
    ProjectRepo?: ProjectRepoOrderByWithRelationInput
  }

  export type ContributorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ContributorWhereInput | ContributorWhereInput[]
    OR?: ContributorWhereInput[]
    NOT?: ContributorWhereInput | ContributorWhereInput[]
    createdAt?: DateTimeFilter<"Contributor"> | Date | string
    updatedAt?: DateTimeFilter<"Contributor"> | Date | string
    projectRepoId?: StringNullableFilter<"Contributor"> | string | null
    ProjectRepo?: XOR<ProjectRepoNullableScalarRelationFilter, ProjectRepoWhereInput> | null
  }, "id" | "userId">

  export type ContributorOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    projectRepoId?: SortOrderInput | SortOrder
    _count?: ContributorCountOrderByAggregateInput
    _max?: ContributorMaxOrderByAggregateInput
    _min?: ContributorMinOrderByAggregateInput
  }

  export type ContributorScalarWhereWithAggregatesInput = {
    AND?: ContributorScalarWhereWithAggregatesInput | ContributorScalarWhereWithAggregatesInput[]
    OR?: ContributorScalarWhereWithAggregatesInput[]
    NOT?: ContributorScalarWhereWithAggregatesInput | ContributorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contributor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contributor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contributor"> | Date | string
    userId?: StringWithAggregatesFilter<"Contributor"> | string
    projectRepoId?: StringNullableWithAggregatesFilter<"Contributor"> | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    projects?: ProjectListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    projects?: ProjectListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    slug?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    name?: StringFilter<"Tag"> | string
    projects?: ProjectListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    slug?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    name?: StringFilter<"Tag"> | string
    projects?: ProjectListRelationFilter
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    slug?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type LikesWhereInput = {
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    id?: StringFilter<"Likes"> | string
    createdAt?: DateTimeFilter<"Likes"> | Date | string
    userId?: StringFilter<"Likes"> | string
    projectId?: StringFilter<"Likes"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type LikesOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type LikesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    createdAt?: DateTimeFilter<"Likes"> | Date | string
    userId?: StringFilter<"Likes"> | string
    projectId?: StringFilter<"Likes"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type LikesOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    _count?: LikesCountOrderByAggregateInput
    _max?: LikesMaxOrderByAggregateInput
    _min?: LikesMinOrderByAggregateInput
  }

  export type LikesScalarWhereWithAggregatesInput = {
    AND?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[]
    OR?: LikesScalarWhereWithAggregatesInput[]
    NOT?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Likes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Likes"> | Date | string
    userId?: StringWithAggregatesFilter<"Likes"> | string
    projectId?: StringWithAggregatesFilter<"Likes"> | string
  }

  export type ProjectIdeaCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    slug: string
    groups?: GroupCreateNestedManyWithoutProjectIdeaInput
  }

  export type ProjectIdeaUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    slug: string
    groups?: GroupUncheckedCreateNestedManyWithoutProjectIdeaInput
  }

  export type ProjectIdeaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    groups?: GroupUpdateManyWithoutProjectIdeaNestedInput
  }

  export type ProjectIdeaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    groups?: GroupUncheckedUpdateManyWithoutProjectIdeaNestedInput
  }

  export type ProjectIdeaCreateManyInput = {
    id?: string
    createdAt?: Date | string
    name: string
    slug: string
  }

  export type ProjectIdeaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectIdeaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type GroupCreateInput = {
    id?: string
    createdAt?: Date | string
    publishers?: PublisherCreateNestedManyWithoutGroupInput
    projectIdea: ProjectIdeaCreateNestedOneWithoutGroupsInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    projectIdeaId: string
    publishers?: PublisherUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishers?: PublisherUpdateManyWithoutGroupNestedInput
    projectIdea?: ProjectIdeaUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectIdeaId?: StringFieldUpdateOperationsInput | string
    publishers?: PublisherUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    createdAt?: Date | string
    projectIdeaId: string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectIdeaId?: StringFieldUpdateOperationsInput | string
  }

  export type PublisherCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    canPublish?: boolean
    userId?: string | null
    group: GroupCreateNestedOneWithoutPublishersInput
    user?: UserCreateNestedOneWithoutPublisherInput
    project?: ProjectCreateNestedOneWithoutPublisherInput
  }

  export type PublisherUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    canPublish?: boolean
    groupId: string
    userId?: string | null
    user?: UserUncheckedCreateNestedOneWithoutPublisherInput
    project?: ProjectUncheckedCreateNestedOneWithoutPublisherInput
  }

  export type PublisherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    canPublish?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    group?: GroupUpdateOneRequiredWithoutPublishersNestedInput
    user?: UserUpdateOneWithoutPublisherNestedInput
    project?: ProjectUpdateOneWithoutPublisherNestedInput
  }

  export type PublisherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    canPublish?: BoolFieldUpdateOperationsInput | boolean
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUncheckedUpdateOneWithoutPublisherNestedInput
    project?: ProjectUncheckedUpdateOneWithoutPublisherNestedInput
  }

  export type PublisherCreateManyInput = {
    id?: string
    createdAt?: Date | string
    name: string
    canPublish?: boolean
    groupId: string
    userId?: string | null
  }

  export type PublisherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    canPublish?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublisherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    canPublish?: BoolFieldUpdateOperationsInput | boolean
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    githubId?: string | null
    linkedinId?: string | null
    website?: string | null
    phoneNumber?: string | null
    name?: string | null
    avatarUrl?: string | null
    bio?: string | null
    publisher?: PublisherCreateNestedOneWithoutUserInput
    Likes?: LikesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    githubId?: string | null
    linkedinId?: string | null
    website?: string | null
    phoneNumber?: string | null
    name?: string | null
    avatarUrl?: string | null
    bio?: string | null
    publisherId: string
    Likes?: LikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: PublisherUpdateOneWithoutUserNestedInput
    Likes?: LikesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    publisherId?: StringFieldUpdateOperationsInput | string
    Likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    githubId?: string | null
    linkedinId?: string | null
    website?: string | null
    phoneNumber?: string | null
    name?: string | null
    avatarUrl?: string | null
    bio?: string | null
    publisherId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    publisherId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    description?: string | null
    status?: $Enums.ProjectStatus
    thumbnailUrl: string
    collegeYear: $Enums.CollegeYears
    ProjectRepo?: ProjectRepoCreateNestedManyWithoutProjectInput
    projectPreviewImages?: ProjectPreviewImageCreateNestedManyWithoutProjectInput
    publisher: PublisherCreateNestedOneWithoutProjectInput
    categories?: CategoryCreateNestedManyWithoutProjectsInput
    tags?: TagCreateNestedManyWithoutProjectsInput
    Likes?: LikesCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    description?: string | null
    status?: $Enums.ProjectStatus
    thumbnailUrl: string
    collegeYear: $Enums.CollegeYears
    publisherId: string
    ProjectRepo?: ProjectRepoUncheckedCreateNestedManyWithoutProjectInput
    projectPreviewImages?: ProjectPreviewImageUncheckedCreateNestedManyWithoutProjectInput
    categories?: CategoryUncheckedCreateNestedManyWithoutProjectsInput
    tags?: TagUncheckedCreateNestedManyWithoutProjectsInput
    Likes?: LikesUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    collegeYear?: EnumCollegeYearsFieldUpdateOperationsInput | $Enums.CollegeYears
    ProjectRepo?: ProjectRepoUpdateManyWithoutProjectNestedInput
    projectPreviewImages?: ProjectPreviewImageUpdateManyWithoutProjectNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutProjectNestedInput
    categories?: CategoryUpdateManyWithoutProjectsNestedInput
    tags?: TagUpdateManyWithoutProjectsNestedInput
    Likes?: LikesUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    collegeYear?: EnumCollegeYearsFieldUpdateOperationsInput | $Enums.CollegeYears
    publisherId?: StringFieldUpdateOperationsInput | string
    ProjectRepo?: ProjectRepoUncheckedUpdateManyWithoutProjectNestedInput
    projectPreviewImages?: ProjectPreviewImageUncheckedUpdateManyWithoutProjectNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutProjectsNestedInput
    tags?: TagUncheckedUpdateManyWithoutProjectsNestedInput
    Likes?: LikesUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    description?: string | null
    status?: $Enums.ProjectStatus
    thumbnailUrl: string
    collegeYear: $Enums.CollegeYears
    publisherId: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    collegeYear?: EnumCollegeYearsFieldUpdateOperationsInput | $Enums.CollegeYears
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    collegeYear?: EnumCollegeYearsFieldUpdateOperationsInput | $Enums.CollegeYears
    publisherId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectRepoCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.ProjectRepoType
    url: string
    project: ProjectCreateNestedOneWithoutProjectRepoInput
    contributors?: ContributorCreateNestedManyWithoutProjectRepoInput
  }

  export type ProjectRepoUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.ProjectRepoType
    url: string
    projectId: string
    contributors?: ContributorUncheckedCreateNestedManyWithoutProjectRepoInput
  }

  export type ProjectRepoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumProjectRepoTypeFieldUpdateOperationsInput | $Enums.ProjectRepoType
    url?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutProjectRepoNestedInput
    contributors?: ContributorUpdateManyWithoutProjectRepoNestedInput
  }

  export type ProjectRepoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumProjectRepoTypeFieldUpdateOperationsInput | $Enums.ProjectRepoType
    url?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    contributors?: ContributorUncheckedUpdateManyWithoutProjectRepoNestedInput
  }

  export type ProjectRepoCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.ProjectRepoType
    url: string
    projectId: string
  }

  export type ProjectRepoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumProjectRepoTypeFieldUpdateOperationsInput | $Enums.ProjectRepoType
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectRepoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumProjectRepoTypeFieldUpdateOperationsInput | $Enums.ProjectRepoType
    url?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectPreviewImageCreateInput = {
    id?: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutProjectPreviewImagesInput
  }

  export type ProjectPreviewImageUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    projectId: string
  }

  export type ProjectPreviewImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutProjectPreviewImagesNestedInput
  }

  export type ProjectPreviewImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectPreviewImageCreateManyInput = {
    id?: string
    createdAt?: Date | string
    projectId: string
  }

  export type ProjectPreviewImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPreviewImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ContributorCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    ProjectRepo?: ProjectRepoCreateNestedOneWithoutContributorsInput
  }

  export type ContributorUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectRepoId?: string | null
  }

  export type ContributorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    ProjectRepo?: ProjectRepoUpdateOneWithoutContributorsNestedInput
  }

  export type ContributorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectRepoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContributorCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectRepoId?: string | null
  }

  export type ContributorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ContributorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectRepoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    slug: string
    projects?: ProjectCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    slug: string
    projects?: ProjectUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    createdAt?: Date | string
    name: string
    slug: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    id?: string
    slug: string
    createdAt?: Date | string
    name: string
    projects?: ProjectCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    slug: string
    createdAt?: Date | string
    name: string
    projects?: ProjectUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    slug: string
    createdAt?: Date | string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LikesCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
    project: ProjectCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    projectId: string
  }

  export type LikesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
    project?: ProjectUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type LikesCreateManyInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    projectId: string
  }

  export type LikesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectIdeaCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type ProjectIdeaMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type ProjectIdeaMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PublisherListRelationFilter = {
    every?: PublisherWhereInput
    some?: PublisherWhereInput
    none?: PublisherWhereInput
  }

  export type ProjectIdeaScalarRelationFilter = {
    is?: ProjectIdeaWhereInput
    isNot?: ProjectIdeaWhereInput
  }

  export type PublisherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    projectIdeaId?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    projectIdeaId?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    projectIdeaId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PublisherCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    canPublish?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
  }

  export type PublisherMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    canPublish?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
  }

  export type PublisherMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    canPublish?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PublisherNullableScalarRelationFilter = {
    is?: PublisherWhereInput | null
    isNot?: PublisherWhereInput | null
  }

  export type LikesListRelationFilter = {
    every?: LikesWhereInput
    some?: LikesWhereInput
    none?: LikesWhereInput
  }

  export type LikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    githubId?: SortOrder
    linkedinId?: SortOrder
    website?: SortOrder
    phoneNumber?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    publisherId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    githubId?: SortOrder
    linkedinId?: SortOrder
    website?: SortOrder
    phoneNumber?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    publisherId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    githubId?: SortOrder
    linkedinId?: SortOrder
    website?: SortOrder
    phoneNumber?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    publisherId?: SortOrder
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type EnumCollegeYearsFilter<$PrismaModel = never> = {
    equals?: $Enums.CollegeYears | EnumCollegeYearsFieldRefInput<$PrismaModel>
    in?: $Enums.CollegeYears[] | ListEnumCollegeYearsFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollegeYears[] | ListEnumCollegeYearsFieldRefInput<$PrismaModel>
    not?: NestedEnumCollegeYearsFilter<$PrismaModel> | $Enums.CollegeYears
  }

  export type ProjectRepoListRelationFilter = {
    every?: ProjectRepoWhereInput
    some?: ProjectRepoWhereInput
    none?: ProjectRepoWhereInput
  }

  export type ProjectPreviewImageListRelationFilter = {
    every?: ProjectPreviewImageWhereInput
    some?: ProjectPreviewImageWhereInput
    none?: ProjectPreviewImageWhereInput
  }

  export type PublisherScalarRelationFilter = {
    is?: PublisherWhereInput
    isNot?: PublisherWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type ProjectRepoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectPreviewImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    status?: SortOrder
    thumbnailUrl?: SortOrder
    collegeYear?: SortOrder
    publisherId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    status?: SortOrder
    thumbnailUrl?: SortOrder
    collegeYear?: SortOrder
    publisherId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    status?: SortOrder
    thumbnailUrl?: SortOrder
    collegeYear?: SortOrder
    publisherId?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type EnumCollegeYearsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollegeYears | EnumCollegeYearsFieldRefInput<$PrismaModel>
    in?: $Enums.CollegeYears[] | ListEnumCollegeYearsFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollegeYears[] | ListEnumCollegeYearsFieldRefInput<$PrismaModel>
    not?: NestedEnumCollegeYearsWithAggregatesFilter<$PrismaModel> | $Enums.CollegeYears
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollegeYearsFilter<$PrismaModel>
    _max?: NestedEnumCollegeYearsFilter<$PrismaModel>
  }

  export type EnumProjectRepoTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRepoType | EnumProjectRepoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRepoType[] | ListEnumProjectRepoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRepoType[] | ListEnumProjectRepoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRepoTypeFilter<$PrismaModel> | $Enums.ProjectRepoType
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ContributorListRelationFilter = {
    every?: ContributorWhereInput
    some?: ContributorWhereInput
    none?: ContributorWhereInput
  }

  export type ContributorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectRepoCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    url?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectRepoMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    url?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectRepoMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    url?: SortOrder
    projectId?: SortOrder
  }

  export type EnumProjectRepoTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRepoType | EnumProjectRepoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRepoType[] | ListEnumProjectRepoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRepoType[] | ListEnumProjectRepoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRepoTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectRepoType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectRepoTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectRepoTypeFilter<$PrismaModel>
  }

  export type ProjectPreviewImageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectPreviewImageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectPreviewImageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type ProjectRepoNullableScalarRelationFilter = {
    is?: ProjectRepoWhereInput | null
    isNot?: ProjectRepoWhereInput | null
  }

  export type ContributorCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    projectRepoId?: SortOrder
  }

  export type ContributorMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    projectRepoId?: SortOrder
  }

  export type ContributorMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    projectRepoId?: SortOrder
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LikesCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type LikesMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type LikesMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type GroupCreateNestedManyWithoutProjectIdeaInput = {
    create?: XOR<GroupCreateWithoutProjectIdeaInput, GroupUncheckedCreateWithoutProjectIdeaInput> | GroupCreateWithoutProjectIdeaInput[] | GroupUncheckedCreateWithoutProjectIdeaInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutProjectIdeaInput | GroupCreateOrConnectWithoutProjectIdeaInput[]
    createMany?: GroupCreateManyProjectIdeaInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutProjectIdeaInput = {
    create?: XOR<GroupCreateWithoutProjectIdeaInput, GroupUncheckedCreateWithoutProjectIdeaInput> | GroupCreateWithoutProjectIdeaInput[] | GroupUncheckedCreateWithoutProjectIdeaInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutProjectIdeaInput | GroupCreateOrConnectWithoutProjectIdeaInput[]
    createMany?: GroupCreateManyProjectIdeaInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupUpdateManyWithoutProjectIdeaNestedInput = {
    create?: XOR<GroupCreateWithoutProjectIdeaInput, GroupUncheckedCreateWithoutProjectIdeaInput> | GroupCreateWithoutProjectIdeaInput[] | GroupUncheckedCreateWithoutProjectIdeaInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutProjectIdeaInput | GroupCreateOrConnectWithoutProjectIdeaInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutProjectIdeaInput | GroupUpsertWithWhereUniqueWithoutProjectIdeaInput[]
    createMany?: GroupCreateManyProjectIdeaInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutProjectIdeaInput | GroupUpdateWithWhereUniqueWithoutProjectIdeaInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutProjectIdeaInput | GroupUpdateManyWithWhereWithoutProjectIdeaInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutProjectIdeaNestedInput = {
    create?: XOR<GroupCreateWithoutProjectIdeaInput, GroupUncheckedCreateWithoutProjectIdeaInput> | GroupCreateWithoutProjectIdeaInput[] | GroupUncheckedCreateWithoutProjectIdeaInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutProjectIdeaInput | GroupCreateOrConnectWithoutProjectIdeaInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutProjectIdeaInput | GroupUpsertWithWhereUniqueWithoutProjectIdeaInput[]
    createMany?: GroupCreateManyProjectIdeaInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutProjectIdeaInput | GroupUpdateWithWhereUniqueWithoutProjectIdeaInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutProjectIdeaInput | GroupUpdateManyWithWhereWithoutProjectIdeaInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type PublisherCreateNestedManyWithoutGroupInput = {
    create?: XOR<PublisherCreateWithoutGroupInput, PublisherUncheckedCreateWithoutGroupInput> | PublisherCreateWithoutGroupInput[] | PublisherUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PublisherCreateOrConnectWithoutGroupInput | PublisherCreateOrConnectWithoutGroupInput[]
    createMany?: PublisherCreateManyGroupInputEnvelope
    connect?: PublisherWhereUniqueInput | PublisherWhereUniqueInput[]
  }

  export type ProjectIdeaCreateNestedOneWithoutGroupsInput = {
    create?: XOR<ProjectIdeaCreateWithoutGroupsInput, ProjectIdeaUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: ProjectIdeaCreateOrConnectWithoutGroupsInput
    connect?: ProjectIdeaWhereUniqueInput
  }

  export type PublisherUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<PublisherCreateWithoutGroupInput, PublisherUncheckedCreateWithoutGroupInput> | PublisherCreateWithoutGroupInput[] | PublisherUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PublisherCreateOrConnectWithoutGroupInput | PublisherCreateOrConnectWithoutGroupInput[]
    createMany?: PublisherCreateManyGroupInputEnvelope
    connect?: PublisherWhereUniqueInput | PublisherWhereUniqueInput[]
  }

  export type PublisherUpdateManyWithoutGroupNestedInput = {
    create?: XOR<PublisherCreateWithoutGroupInput, PublisherUncheckedCreateWithoutGroupInput> | PublisherCreateWithoutGroupInput[] | PublisherUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PublisherCreateOrConnectWithoutGroupInput | PublisherCreateOrConnectWithoutGroupInput[]
    upsert?: PublisherUpsertWithWhereUniqueWithoutGroupInput | PublisherUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: PublisherCreateManyGroupInputEnvelope
    set?: PublisherWhereUniqueInput | PublisherWhereUniqueInput[]
    disconnect?: PublisherWhereUniqueInput | PublisherWhereUniqueInput[]
    delete?: PublisherWhereUniqueInput | PublisherWhereUniqueInput[]
    connect?: PublisherWhereUniqueInput | PublisherWhereUniqueInput[]
    update?: PublisherUpdateWithWhereUniqueWithoutGroupInput | PublisherUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: PublisherUpdateManyWithWhereWithoutGroupInput | PublisherUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: PublisherScalarWhereInput | PublisherScalarWhereInput[]
  }

  export type ProjectIdeaUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<ProjectIdeaCreateWithoutGroupsInput, ProjectIdeaUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: ProjectIdeaCreateOrConnectWithoutGroupsInput
    upsert?: ProjectIdeaUpsertWithoutGroupsInput
    connect?: ProjectIdeaWhereUniqueInput
    update?: XOR<XOR<ProjectIdeaUpdateToOneWithWhereWithoutGroupsInput, ProjectIdeaUpdateWithoutGroupsInput>, ProjectIdeaUncheckedUpdateWithoutGroupsInput>
  }

  export type PublisherUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<PublisherCreateWithoutGroupInput, PublisherUncheckedCreateWithoutGroupInput> | PublisherCreateWithoutGroupInput[] | PublisherUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PublisherCreateOrConnectWithoutGroupInput | PublisherCreateOrConnectWithoutGroupInput[]
    upsert?: PublisherUpsertWithWhereUniqueWithoutGroupInput | PublisherUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: PublisherCreateManyGroupInputEnvelope
    set?: PublisherWhereUniqueInput | PublisherWhereUniqueInput[]
    disconnect?: PublisherWhereUniqueInput | PublisherWhereUniqueInput[]
    delete?: PublisherWhereUniqueInput | PublisherWhereUniqueInput[]
    connect?: PublisherWhereUniqueInput | PublisherWhereUniqueInput[]
    update?: PublisherUpdateWithWhereUniqueWithoutGroupInput | PublisherUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: PublisherUpdateManyWithWhereWithoutGroupInput | PublisherUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: PublisherScalarWhereInput | PublisherScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutPublishersInput = {
    create?: XOR<GroupCreateWithoutPublishersInput, GroupUncheckedCreateWithoutPublishersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutPublishersInput
    connect?: GroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPublisherInput = {
    create?: XOR<UserCreateWithoutPublisherInput, UserUncheckedCreateWithoutPublisherInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublisherInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutPublisherInput = {
    create?: XOR<ProjectCreateWithoutPublisherInput, ProjectUncheckedCreateWithoutPublisherInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPublisherInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutPublisherInput = {
    create?: XOR<UserCreateWithoutPublisherInput, UserUncheckedCreateWithoutPublisherInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublisherInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUncheckedCreateNestedOneWithoutPublisherInput = {
    create?: XOR<ProjectCreateWithoutPublisherInput, ProjectUncheckedCreateWithoutPublisherInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPublisherInput
    connect?: ProjectWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GroupUpdateOneRequiredWithoutPublishersNestedInput = {
    create?: XOR<GroupCreateWithoutPublishersInput, GroupUncheckedCreateWithoutPublishersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutPublishersInput
    upsert?: GroupUpsertWithoutPublishersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutPublishersInput, GroupUpdateWithoutPublishersInput>, GroupUncheckedUpdateWithoutPublishersInput>
  }

  export type UserUpdateOneWithoutPublisherNestedInput = {
    create?: XOR<UserCreateWithoutPublisherInput, UserUncheckedCreateWithoutPublisherInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublisherInput
    upsert?: UserUpsertWithoutPublisherInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPublisherInput, UserUpdateWithoutPublisherInput>, UserUncheckedUpdateWithoutPublisherInput>
  }

  export type ProjectUpdateOneWithoutPublisherNestedInput = {
    create?: XOR<ProjectCreateWithoutPublisherInput, ProjectUncheckedCreateWithoutPublisherInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPublisherInput
    upsert?: ProjectUpsertWithoutPublisherInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPublisherInput, ProjectUpdateWithoutPublisherInput>, ProjectUncheckedUpdateWithoutPublisherInput>
  }

  export type UserUncheckedUpdateOneWithoutPublisherNestedInput = {
    create?: XOR<UserCreateWithoutPublisherInput, UserUncheckedCreateWithoutPublisherInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublisherInput
    upsert?: UserUpsertWithoutPublisherInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPublisherInput, UserUpdateWithoutPublisherInput>, UserUncheckedUpdateWithoutPublisherInput>
  }

  export type ProjectUncheckedUpdateOneWithoutPublisherNestedInput = {
    create?: XOR<ProjectCreateWithoutPublisherInput, ProjectUncheckedCreateWithoutPublisherInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPublisherInput
    upsert?: ProjectUpsertWithoutPublisherInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPublisherInput, ProjectUpdateWithoutPublisherInput>, ProjectUncheckedUpdateWithoutPublisherInput>
  }

  export type PublisherCreateNestedOneWithoutUserInput = {
    create?: XOR<PublisherCreateWithoutUserInput, PublisherUncheckedCreateWithoutUserInput>
    connectOrCreate?: PublisherCreateOrConnectWithoutUserInput
    connect?: PublisherWhereUniqueInput
  }

  export type LikesCreateNestedManyWithoutUserInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type PublisherUpdateOneWithoutUserNestedInput = {
    create?: XOR<PublisherCreateWithoutUserInput, PublisherUncheckedCreateWithoutUserInput>
    connectOrCreate?: PublisherCreateOrConnectWithoutUserInput
    upsert?: PublisherUpsertWithoutUserInput
    disconnect?: PublisherWhereInput | boolean
    delete?: PublisherWhereInput | boolean
    connect?: PublisherWhereUniqueInput
    update?: XOR<XOR<PublisherUpdateToOneWithWhereWithoutUserInput, PublisherUpdateWithoutUserInput>, PublisherUncheckedUpdateWithoutUserInput>
  }

  export type LikesUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutUserInput | LikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutUserInput | LikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutUserInput | LikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutUserInput | LikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutUserInput | LikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutUserInput | LikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type ProjectRepoCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectRepoCreateWithoutProjectInput, ProjectRepoUncheckedCreateWithoutProjectInput> | ProjectRepoCreateWithoutProjectInput[] | ProjectRepoUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectRepoCreateOrConnectWithoutProjectInput | ProjectRepoCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectRepoCreateManyProjectInputEnvelope
    connect?: ProjectRepoWhereUniqueInput | ProjectRepoWhereUniqueInput[]
  }

  export type ProjectPreviewImageCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectPreviewImageCreateWithoutProjectInput, ProjectPreviewImageUncheckedCreateWithoutProjectInput> | ProjectPreviewImageCreateWithoutProjectInput[] | ProjectPreviewImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPreviewImageCreateOrConnectWithoutProjectInput | ProjectPreviewImageCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectPreviewImageCreateManyProjectInputEnvelope
    connect?: ProjectPreviewImageWhereUniqueInput | ProjectPreviewImageWhereUniqueInput[]
  }

  export type PublisherCreateNestedOneWithoutProjectInput = {
    create?: XOR<PublisherCreateWithoutProjectInput, PublisherUncheckedCreateWithoutProjectInput>
    connectOrCreate?: PublisherCreateOrConnectWithoutProjectInput
    connect?: PublisherWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutProjectsInput = {
    create?: XOR<CategoryCreateWithoutProjectsInput, CategoryUncheckedCreateWithoutProjectsInput> | CategoryCreateWithoutProjectsInput[] | CategoryUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutProjectsInput | CategoryCreateOrConnectWithoutProjectsInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutProjectsInput = {
    create?: XOR<TagCreateWithoutProjectsInput, TagUncheckedCreateWithoutProjectsInput> | TagCreateWithoutProjectsInput[] | TagUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutProjectsInput | TagCreateOrConnectWithoutProjectsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type LikesCreateNestedManyWithoutProjectInput = {
    create?: XOR<LikesCreateWithoutProjectInput, LikesUncheckedCreateWithoutProjectInput> | LikesCreateWithoutProjectInput[] | LikesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutProjectInput | LikesCreateOrConnectWithoutProjectInput[]
    createMany?: LikesCreateManyProjectInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type ProjectRepoUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectRepoCreateWithoutProjectInput, ProjectRepoUncheckedCreateWithoutProjectInput> | ProjectRepoCreateWithoutProjectInput[] | ProjectRepoUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectRepoCreateOrConnectWithoutProjectInput | ProjectRepoCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectRepoCreateManyProjectInputEnvelope
    connect?: ProjectRepoWhereUniqueInput | ProjectRepoWhereUniqueInput[]
  }

  export type ProjectPreviewImageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectPreviewImageCreateWithoutProjectInput, ProjectPreviewImageUncheckedCreateWithoutProjectInput> | ProjectPreviewImageCreateWithoutProjectInput[] | ProjectPreviewImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPreviewImageCreateOrConnectWithoutProjectInput | ProjectPreviewImageCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectPreviewImageCreateManyProjectInputEnvelope
    connect?: ProjectPreviewImageWhereUniqueInput | ProjectPreviewImageWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<CategoryCreateWithoutProjectsInput, CategoryUncheckedCreateWithoutProjectsInput> | CategoryCreateWithoutProjectsInput[] | CategoryUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutProjectsInput | CategoryCreateOrConnectWithoutProjectsInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<TagCreateWithoutProjectsInput, TagUncheckedCreateWithoutProjectsInput> | TagCreateWithoutProjectsInput[] | TagUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutProjectsInput | TagCreateOrConnectWithoutProjectsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<LikesCreateWithoutProjectInput, LikesUncheckedCreateWithoutProjectInput> | LikesCreateWithoutProjectInput[] | LikesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutProjectInput | LikesCreateOrConnectWithoutProjectInput[]
    createMany?: LikesCreateManyProjectInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type EnumCollegeYearsFieldUpdateOperationsInput = {
    set?: $Enums.CollegeYears
  }

  export type ProjectRepoUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectRepoCreateWithoutProjectInput, ProjectRepoUncheckedCreateWithoutProjectInput> | ProjectRepoCreateWithoutProjectInput[] | ProjectRepoUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectRepoCreateOrConnectWithoutProjectInput | ProjectRepoCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectRepoUpsertWithWhereUniqueWithoutProjectInput | ProjectRepoUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectRepoCreateManyProjectInputEnvelope
    set?: ProjectRepoWhereUniqueInput | ProjectRepoWhereUniqueInput[]
    disconnect?: ProjectRepoWhereUniqueInput | ProjectRepoWhereUniqueInput[]
    delete?: ProjectRepoWhereUniqueInput | ProjectRepoWhereUniqueInput[]
    connect?: ProjectRepoWhereUniqueInput | ProjectRepoWhereUniqueInput[]
    update?: ProjectRepoUpdateWithWhereUniqueWithoutProjectInput | ProjectRepoUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectRepoUpdateManyWithWhereWithoutProjectInput | ProjectRepoUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectRepoScalarWhereInput | ProjectRepoScalarWhereInput[]
  }

  export type ProjectPreviewImageUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectPreviewImageCreateWithoutProjectInput, ProjectPreviewImageUncheckedCreateWithoutProjectInput> | ProjectPreviewImageCreateWithoutProjectInput[] | ProjectPreviewImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPreviewImageCreateOrConnectWithoutProjectInput | ProjectPreviewImageCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectPreviewImageUpsertWithWhereUniqueWithoutProjectInput | ProjectPreviewImageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectPreviewImageCreateManyProjectInputEnvelope
    set?: ProjectPreviewImageWhereUniqueInput | ProjectPreviewImageWhereUniqueInput[]
    disconnect?: ProjectPreviewImageWhereUniqueInput | ProjectPreviewImageWhereUniqueInput[]
    delete?: ProjectPreviewImageWhereUniqueInput | ProjectPreviewImageWhereUniqueInput[]
    connect?: ProjectPreviewImageWhereUniqueInput | ProjectPreviewImageWhereUniqueInput[]
    update?: ProjectPreviewImageUpdateWithWhereUniqueWithoutProjectInput | ProjectPreviewImageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectPreviewImageUpdateManyWithWhereWithoutProjectInput | ProjectPreviewImageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectPreviewImageScalarWhereInput | ProjectPreviewImageScalarWhereInput[]
  }

  export type PublisherUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<PublisherCreateWithoutProjectInput, PublisherUncheckedCreateWithoutProjectInput>
    connectOrCreate?: PublisherCreateOrConnectWithoutProjectInput
    upsert?: PublisherUpsertWithoutProjectInput
    connect?: PublisherWhereUniqueInput
    update?: XOR<XOR<PublisherUpdateToOneWithWhereWithoutProjectInput, PublisherUpdateWithoutProjectInput>, PublisherUncheckedUpdateWithoutProjectInput>
  }

  export type CategoryUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<CategoryCreateWithoutProjectsInput, CategoryUncheckedCreateWithoutProjectsInput> | CategoryCreateWithoutProjectsInput[] | CategoryUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutProjectsInput | CategoryCreateOrConnectWithoutProjectsInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutProjectsInput | CategoryUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutProjectsInput | CategoryUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutProjectsInput | CategoryUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type TagUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<TagCreateWithoutProjectsInput, TagUncheckedCreateWithoutProjectsInput> | TagCreateWithoutProjectsInput[] | TagUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutProjectsInput | TagCreateOrConnectWithoutProjectsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutProjectsInput | TagUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutProjectsInput | TagUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutProjectsInput | TagUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type LikesUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LikesCreateWithoutProjectInput, LikesUncheckedCreateWithoutProjectInput> | LikesCreateWithoutProjectInput[] | LikesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutProjectInput | LikesCreateOrConnectWithoutProjectInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutProjectInput | LikesUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LikesCreateManyProjectInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutProjectInput | LikesUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutProjectInput | LikesUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type ProjectRepoUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectRepoCreateWithoutProjectInput, ProjectRepoUncheckedCreateWithoutProjectInput> | ProjectRepoCreateWithoutProjectInput[] | ProjectRepoUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectRepoCreateOrConnectWithoutProjectInput | ProjectRepoCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectRepoUpsertWithWhereUniqueWithoutProjectInput | ProjectRepoUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectRepoCreateManyProjectInputEnvelope
    set?: ProjectRepoWhereUniqueInput | ProjectRepoWhereUniqueInput[]
    disconnect?: ProjectRepoWhereUniqueInput | ProjectRepoWhereUniqueInput[]
    delete?: ProjectRepoWhereUniqueInput | ProjectRepoWhereUniqueInput[]
    connect?: ProjectRepoWhereUniqueInput | ProjectRepoWhereUniqueInput[]
    update?: ProjectRepoUpdateWithWhereUniqueWithoutProjectInput | ProjectRepoUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectRepoUpdateManyWithWhereWithoutProjectInput | ProjectRepoUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectRepoScalarWhereInput | ProjectRepoScalarWhereInput[]
  }

  export type ProjectPreviewImageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectPreviewImageCreateWithoutProjectInput, ProjectPreviewImageUncheckedCreateWithoutProjectInput> | ProjectPreviewImageCreateWithoutProjectInput[] | ProjectPreviewImageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectPreviewImageCreateOrConnectWithoutProjectInput | ProjectPreviewImageCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectPreviewImageUpsertWithWhereUniqueWithoutProjectInput | ProjectPreviewImageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectPreviewImageCreateManyProjectInputEnvelope
    set?: ProjectPreviewImageWhereUniqueInput | ProjectPreviewImageWhereUniqueInput[]
    disconnect?: ProjectPreviewImageWhereUniqueInput | ProjectPreviewImageWhereUniqueInput[]
    delete?: ProjectPreviewImageWhereUniqueInput | ProjectPreviewImageWhereUniqueInput[]
    connect?: ProjectPreviewImageWhereUniqueInput | ProjectPreviewImageWhereUniqueInput[]
    update?: ProjectPreviewImageUpdateWithWhereUniqueWithoutProjectInput | ProjectPreviewImageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectPreviewImageUpdateManyWithWhereWithoutProjectInput | ProjectPreviewImageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectPreviewImageScalarWhereInput | ProjectPreviewImageScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<CategoryCreateWithoutProjectsInput, CategoryUncheckedCreateWithoutProjectsInput> | CategoryCreateWithoutProjectsInput[] | CategoryUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutProjectsInput | CategoryCreateOrConnectWithoutProjectsInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutProjectsInput | CategoryUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutProjectsInput | CategoryUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutProjectsInput | CategoryUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<TagCreateWithoutProjectsInput, TagUncheckedCreateWithoutProjectsInput> | TagCreateWithoutProjectsInput[] | TagUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutProjectsInput | TagCreateOrConnectWithoutProjectsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutProjectsInput | TagUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutProjectsInput | TagUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutProjectsInput | TagUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LikesCreateWithoutProjectInput, LikesUncheckedCreateWithoutProjectInput> | LikesCreateWithoutProjectInput[] | LikesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutProjectInput | LikesCreateOrConnectWithoutProjectInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutProjectInput | LikesUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LikesCreateManyProjectInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutProjectInput | LikesUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutProjectInput | LikesUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutProjectRepoInput = {
    create?: XOR<ProjectCreateWithoutProjectRepoInput, ProjectUncheckedCreateWithoutProjectRepoInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectRepoInput
    connect?: ProjectWhereUniqueInput
  }

  export type ContributorCreateNestedManyWithoutProjectRepoInput = {
    create?: XOR<ContributorCreateWithoutProjectRepoInput, ContributorUncheckedCreateWithoutProjectRepoInput> | ContributorCreateWithoutProjectRepoInput[] | ContributorUncheckedCreateWithoutProjectRepoInput[]
    connectOrCreate?: ContributorCreateOrConnectWithoutProjectRepoInput | ContributorCreateOrConnectWithoutProjectRepoInput[]
    createMany?: ContributorCreateManyProjectRepoInputEnvelope
    connect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
  }

  export type ContributorUncheckedCreateNestedManyWithoutProjectRepoInput = {
    create?: XOR<ContributorCreateWithoutProjectRepoInput, ContributorUncheckedCreateWithoutProjectRepoInput> | ContributorCreateWithoutProjectRepoInput[] | ContributorUncheckedCreateWithoutProjectRepoInput[]
    connectOrCreate?: ContributorCreateOrConnectWithoutProjectRepoInput | ContributorCreateOrConnectWithoutProjectRepoInput[]
    createMany?: ContributorCreateManyProjectRepoInputEnvelope
    connect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
  }

  export type EnumProjectRepoTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProjectRepoType
  }

  export type ProjectUpdateOneRequiredWithoutProjectRepoNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectRepoInput, ProjectUncheckedCreateWithoutProjectRepoInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectRepoInput
    upsert?: ProjectUpsertWithoutProjectRepoInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectRepoInput, ProjectUpdateWithoutProjectRepoInput>, ProjectUncheckedUpdateWithoutProjectRepoInput>
  }

  export type ContributorUpdateManyWithoutProjectRepoNestedInput = {
    create?: XOR<ContributorCreateWithoutProjectRepoInput, ContributorUncheckedCreateWithoutProjectRepoInput> | ContributorCreateWithoutProjectRepoInput[] | ContributorUncheckedCreateWithoutProjectRepoInput[]
    connectOrCreate?: ContributorCreateOrConnectWithoutProjectRepoInput | ContributorCreateOrConnectWithoutProjectRepoInput[]
    upsert?: ContributorUpsertWithWhereUniqueWithoutProjectRepoInput | ContributorUpsertWithWhereUniqueWithoutProjectRepoInput[]
    createMany?: ContributorCreateManyProjectRepoInputEnvelope
    set?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    disconnect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    delete?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    connect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    update?: ContributorUpdateWithWhereUniqueWithoutProjectRepoInput | ContributorUpdateWithWhereUniqueWithoutProjectRepoInput[]
    updateMany?: ContributorUpdateManyWithWhereWithoutProjectRepoInput | ContributorUpdateManyWithWhereWithoutProjectRepoInput[]
    deleteMany?: ContributorScalarWhereInput | ContributorScalarWhereInput[]
  }

  export type ContributorUncheckedUpdateManyWithoutProjectRepoNestedInput = {
    create?: XOR<ContributorCreateWithoutProjectRepoInput, ContributorUncheckedCreateWithoutProjectRepoInput> | ContributorCreateWithoutProjectRepoInput[] | ContributorUncheckedCreateWithoutProjectRepoInput[]
    connectOrCreate?: ContributorCreateOrConnectWithoutProjectRepoInput | ContributorCreateOrConnectWithoutProjectRepoInput[]
    upsert?: ContributorUpsertWithWhereUniqueWithoutProjectRepoInput | ContributorUpsertWithWhereUniqueWithoutProjectRepoInput[]
    createMany?: ContributorCreateManyProjectRepoInputEnvelope
    set?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    disconnect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    delete?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    connect?: ContributorWhereUniqueInput | ContributorWhereUniqueInput[]
    update?: ContributorUpdateWithWhereUniqueWithoutProjectRepoInput | ContributorUpdateWithWhereUniqueWithoutProjectRepoInput[]
    updateMany?: ContributorUpdateManyWithWhereWithoutProjectRepoInput | ContributorUpdateManyWithWhereWithoutProjectRepoInput[]
    deleteMany?: ContributorScalarWhereInput | ContributorScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutProjectPreviewImagesInput = {
    create?: XOR<ProjectCreateWithoutProjectPreviewImagesInput, ProjectUncheckedCreateWithoutProjectPreviewImagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectPreviewImagesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutProjectPreviewImagesNestedInput = {
    create?: XOR<ProjectCreateWithoutProjectPreviewImagesInput, ProjectUncheckedCreateWithoutProjectPreviewImagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutProjectPreviewImagesInput
    upsert?: ProjectUpsertWithoutProjectPreviewImagesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutProjectPreviewImagesInput, ProjectUpdateWithoutProjectPreviewImagesInput>, ProjectUncheckedUpdateWithoutProjectPreviewImagesInput>
  }

  export type ProjectRepoCreateNestedOneWithoutContributorsInput = {
    create?: XOR<ProjectRepoCreateWithoutContributorsInput, ProjectRepoUncheckedCreateWithoutContributorsInput>
    connectOrCreate?: ProjectRepoCreateOrConnectWithoutContributorsInput
    connect?: ProjectRepoWhereUniqueInput
  }

  export type ProjectRepoUpdateOneWithoutContributorsNestedInput = {
    create?: XOR<ProjectRepoCreateWithoutContributorsInput, ProjectRepoUncheckedCreateWithoutContributorsInput>
    connectOrCreate?: ProjectRepoCreateOrConnectWithoutContributorsInput
    upsert?: ProjectRepoUpsertWithoutContributorsInput
    disconnect?: ProjectRepoWhereInput | boolean
    delete?: ProjectRepoWhereInput | boolean
    connect?: ProjectRepoWhereUniqueInput
    update?: XOR<XOR<ProjectRepoUpdateToOneWithWhereWithoutContributorsInput, ProjectRepoUpdateWithoutContributorsInput>, ProjectRepoUncheckedUpdateWithoutContributorsInput>
  }

  export type ProjectCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ProjectCreateWithoutCategoriesInput, ProjectUncheckedCreateWithoutCategoriesInput> | ProjectCreateWithoutCategoriesInput[] | ProjectUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCategoriesInput | ProjectCreateOrConnectWithoutCategoriesInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ProjectCreateWithoutCategoriesInput, ProjectUncheckedCreateWithoutCategoriesInput> | ProjectCreateWithoutCategoriesInput[] | ProjectUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCategoriesInput | ProjectCreateOrConnectWithoutCategoriesInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ProjectCreateWithoutCategoriesInput, ProjectUncheckedCreateWithoutCategoriesInput> | ProjectCreateWithoutCategoriesInput[] | ProjectUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCategoriesInput | ProjectCreateOrConnectWithoutCategoriesInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCategoriesInput | ProjectUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCategoriesInput | ProjectUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCategoriesInput | ProjectUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ProjectCreateWithoutCategoriesInput, ProjectUncheckedCreateWithoutCategoriesInput> | ProjectCreateWithoutCategoriesInput[] | ProjectUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCategoriesInput | ProjectCreateOrConnectWithoutCategoriesInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCategoriesInput | ProjectUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCategoriesInput | ProjectUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCategoriesInput | ProjectUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectCreateNestedManyWithoutTagsInput = {
    create?: XOR<ProjectCreateWithoutTagsInput, ProjectUncheckedCreateWithoutTagsInput> | ProjectCreateWithoutTagsInput[] | ProjectUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTagsInput | ProjectCreateOrConnectWithoutTagsInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<ProjectCreateWithoutTagsInput, ProjectUncheckedCreateWithoutTagsInput> | ProjectCreateWithoutTagsInput[] | ProjectUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTagsInput | ProjectCreateOrConnectWithoutTagsInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUpdateManyWithoutTagsNestedInput = {
    create?: XOR<ProjectCreateWithoutTagsInput, ProjectUncheckedCreateWithoutTagsInput> | ProjectCreateWithoutTagsInput[] | ProjectUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTagsInput | ProjectCreateOrConnectWithoutTagsInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTagsInput | ProjectUpsertWithWhereUniqueWithoutTagsInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTagsInput | ProjectUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTagsInput | ProjectUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<ProjectCreateWithoutTagsInput, ProjectUncheckedCreateWithoutTagsInput> | ProjectCreateWithoutTagsInput[] | ProjectUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTagsInput | ProjectCreateOrConnectWithoutTagsInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTagsInput | ProjectUpsertWithWhereUniqueWithoutTagsInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTagsInput | ProjectUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTagsInput | ProjectUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutLikesInput = {
    create?: XOR<ProjectCreateWithoutLikesInput, ProjectUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLikesInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type ProjectUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<ProjectCreateWithoutLikesInput, ProjectUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLikesInput
    upsert?: ProjectUpsertWithoutLikesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutLikesInput, ProjectUpdateWithoutLikesInput>, ProjectUncheckedUpdateWithoutLikesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumCollegeYearsFilter<$PrismaModel = never> = {
    equals?: $Enums.CollegeYears | EnumCollegeYearsFieldRefInput<$PrismaModel>
    in?: $Enums.CollegeYears[] | ListEnumCollegeYearsFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollegeYears[] | ListEnumCollegeYearsFieldRefInput<$PrismaModel>
    not?: NestedEnumCollegeYearsFilter<$PrismaModel> | $Enums.CollegeYears
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedEnumCollegeYearsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CollegeYears | EnumCollegeYearsFieldRefInput<$PrismaModel>
    in?: $Enums.CollegeYears[] | ListEnumCollegeYearsFieldRefInput<$PrismaModel>
    notIn?: $Enums.CollegeYears[] | ListEnumCollegeYearsFieldRefInput<$PrismaModel>
    not?: NestedEnumCollegeYearsWithAggregatesFilter<$PrismaModel> | $Enums.CollegeYears
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCollegeYearsFilter<$PrismaModel>
    _max?: NestedEnumCollegeYearsFilter<$PrismaModel>
  }

  export type NestedEnumProjectRepoTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRepoType | EnumProjectRepoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRepoType[] | ListEnumProjectRepoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRepoType[] | ListEnumProjectRepoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRepoTypeFilter<$PrismaModel> | $Enums.ProjectRepoType
  }

  export type NestedEnumProjectRepoTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRepoType | EnumProjectRepoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRepoType[] | ListEnumProjectRepoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRepoType[] | ListEnumProjectRepoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRepoTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectRepoType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectRepoTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectRepoTypeFilter<$PrismaModel>
  }

  export type GroupCreateWithoutProjectIdeaInput = {
    id?: string
    createdAt?: Date | string
    publishers?: PublisherCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutProjectIdeaInput = {
    id?: string
    createdAt?: Date | string
    publishers?: PublisherUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutProjectIdeaInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutProjectIdeaInput, GroupUncheckedCreateWithoutProjectIdeaInput>
  }

  export type GroupCreateManyProjectIdeaInputEnvelope = {
    data: GroupCreateManyProjectIdeaInput | GroupCreateManyProjectIdeaInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithWhereUniqueWithoutProjectIdeaInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutProjectIdeaInput, GroupUncheckedUpdateWithoutProjectIdeaInput>
    create: XOR<GroupCreateWithoutProjectIdeaInput, GroupUncheckedCreateWithoutProjectIdeaInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutProjectIdeaInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutProjectIdeaInput, GroupUncheckedUpdateWithoutProjectIdeaInput>
  }

  export type GroupUpdateManyWithWhereWithoutProjectIdeaInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutProjectIdeaInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    projectIdeaId?: StringFilter<"Group"> | string
  }

  export type PublisherCreateWithoutGroupInput = {
    id?: string
    createdAt?: Date | string
    name: string
    canPublish?: boolean
    userId?: string | null
    user?: UserCreateNestedOneWithoutPublisherInput
    project?: ProjectCreateNestedOneWithoutPublisherInput
  }

  export type PublisherUncheckedCreateWithoutGroupInput = {
    id?: string
    createdAt?: Date | string
    name: string
    canPublish?: boolean
    userId?: string | null
    user?: UserUncheckedCreateNestedOneWithoutPublisherInput
    project?: ProjectUncheckedCreateNestedOneWithoutPublisherInput
  }

  export type PublisherCreateOrConnectWithoutGroupInput = {
    where: PublisherWhereUniqueInput
    create: XOR<PublisherCreateWithoutGroupInput, PublisherUncheckedCreateWithoutGroupInput>
  }

  export type PublisherCreateManyGroupInputEnvelope = {
    data: PublisherCreateManyGroupInput | PublisherCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type ProjectIdeaCreateWithoutGroupsInput = {
    id?: string
    createdAt?: Date | string
    name: string
    slug: string
  }

  export type ProjectIdeaUncheckedCreateWithoutGroupsInput = {
    id?: string
    createdAt?: Date | string
    name: string
    slug: string
  }

  export type ProjectIdeaCreateOrConnectWithoutGroupsInput = {
    where: ProjectIdeaWhereUniqueInput
    create: XOR<ProjectIdeaCreateWithoutGroupsInput, ProjectIdeaUncheckedCreateWithoutGroupsInput>
  }

  export type PublisherUpsertWithWhereUniqueWithoutGroupInput = {
    where: PublisherWhereUniqueInput
    update: XOR<PublisherUpdateWithoutGroupInput, PublisherUncheckedUpdateWithoutGroupInput>
    create: XOR<PublisherCreateWithoutGroupInput, PublisherUncheckedCreateWithoutGroupInput>
  }

  export type PublisherUpdateWithWhereUniqueWithoutGroupInput = {
    where: PublisherWhereUniqueInput
    data: XOR<PublisherUpdateWithoutGroupInput, PublisherUncheckedUpdateWithoutGroupInput>
  }

  export type PublisherUpdateManyWithWhereWithoutGroupInput = {
    where: PublisherScalarWhereInput
    data: XOR<PublisherUpdateManyMutationInput, PublisherUncheckedUpdateManyWithoutGroupInput>
  }

  export type PublisherScalarWhereInput = {
    AND?: PublisherScalarWhereInput | PublisherScalarWhereInput[]
    OR?: PublisherScalarWhereInput[]
    NOT?: PublisherScalarWhereInput | PublisherScalarWhereInput[]
    id?: StringFilter<"Publisher"> | string
    createdAt?: DateTimeFilter<"Publisher"> | Date | string
    name?: StringFilter<"Publisher"> | string
    canPublish?: BoolFilter<"Publisher"> | boolean
    groupId?: StringFilter<"Publisher"> | string
    userId?: StringNullableFilter<"Publisher"> | string | null
  }

  export type ProjectIdeaUpsertWithoutGroupsInput = {
    update: XOR<ProjectIdeaUpdateWithoutGroupsInput, ProjectIdeaUncheckedUpdateWithoutGroupsInput>
    create: XOR<ProjectIdeaCreateWithoutGroupsInput, ProjectIdeaUncheckedCreateWithoutGroupsInput>
    where?: ProjectIdeaWhereInput
  }

  export type ProjectIdeaUpdateToOneWithWhereWithoutGroupsInput = {
    where?: ProjectIdeaWhereInput
    data: XOR<ProjectIdeaUpdateWithoutGroupsInput, ProjectIdeaUncheckedUpdateWithoutGroupsInput>
  }

  export type ProjectIdeaUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectIdeaUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type GroupCreateWithoutPublishersInput = {
    id?: string
    createdAt?: Date | string
    projectIdea: ProjectIdeaCreateNestedOneWithoutGroupsInput
  }

  export type GroupUncheckedCreateWithoutPublishersInput = {
    id?: string
    createdAt?: Date | string
    projectIdeaId: string
  }

  export type GroupCreateOrConnectWithoutPublishersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutPublishersInput, GroupUncheckedCreateWithoutPublishersInput>
  }

  export type UserCreateWithoutPublisherInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    githubId?: string | null
    linkedinId?: string | null
    website?: string | null
    phoneNumber?: string | null
    name?: string | null
    avatarUrl?: string | null
    bio?: string | null
    Likes?: LikesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPublisherInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    githubId?: string | null
    linkedinId?: string | null
    website?: string | null
    phoneNumber?: string | null
    name?: string | null
    avatarUrl?: string | null
    bio?: string | null
    Likes?: LikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPublisherInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPublisherInput, UserUncheckedCreateWithoutPublisherInput>
  }

  export type ProjectCreateWithoutPublisherInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    description?: string | null
    status?: $Enums.ProjectStatus
    thumbnailUrl: string
    collegeYear: $Enums.CollegeYears
    ProjectRepo?: ProjectRepoCreateNestedManyWithoutProjectInput
    projectPreviewImages?: ProjectPreviewImageCreateNestedManyWithoutProjectInput
    categories?: CategoryCreateNestedManyWithoutProjectsInput
    tags?: TagCreateNestedManyWithoutProjectsInput
    Likes?: LikesCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPublisherInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    description?: string | null
    status?: $Enums.ProjectStatus
    thumbnailUrl: string
    collegeYear: $Enums.CollegeYears
    ProjectRepo?: ProjectRepoUncheckedCreateNestedManyWithoutProjectInput
    projectPreviewImages?: ProjectPreviewImageUncheckedCreateNestedManyWithoutProjectInput
    categories?: CategoryUncheckedCreateNestedManyWithoutProjectsInput
    tags?: TagUncheckedCreateNestedManyWithoutProjectsInput
    Likes?: LikesUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPublisherInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPublisherInput, ProjectUncheckedCreateWithoutPublisherInput>
  }

  export type GroupUpsertWithoutPublishersInput = {
    update: XOR<GroupUpdateWithoutPublishersInput, GroupUncheckedUpdateWithoutPublishersInput>
    create: XOR<GroupCreateWithoutPublishersInput, GroupUncheckedCreateWithoutPublishersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutPublishersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutPublishersInput, GroupUncheckedUpdateWithoutPublishersInput>
  }

  export type GroupUpdateWithoutPublishersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectIdea?: ProjectIdeaUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateWithoutPublishersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectIdeaId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutPublisherInput = {
    update: XOR<UserUpdateWithoutPublisherInput, UserUncheckedUpdateWithoutPublisherInput>
    create: XOR<UserCreateWithoutPublisherInput, UserUncheckedCreateWithoutPublisherInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPublisherInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPublisherInput, UserUncheckedUpdateWithoutPublisherInput>
  }

  export type UserUpdateWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    Likes?: LikesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    Likes?: LikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutPublisherInput = {
    update: XOR<ProjectUpdateWithoutPublisherInput, ProjectUncheckedUpdateWithoutPublisherInput>
    create: XOR<ProjectCreateWithoutPublisherInput, ProjectUncheckedCreateWithoutPublisherInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPublisherInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPublisherInput, ProjectUncheckedUpdateWithoutPublisherInput>
  }

  export type ProjectUpdateWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    collegeYear?: EnumCollegeYearsFieldUpdateOperationsInput | $Enums.CollegeYears
    ProjectRepo?: ProjectRepoUpdateManyWithoutProjectNestedInput
    projectPreviewImages?: ProjectPreviewImageUpdateManyWithoutProjectNestedInput
    categories?: CategoryUpdateManyWithoutProjectsNestedInput
    tags?: TagUpdateManyWithoutProjectsNestedInput
    Likes?: LikesUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    collegeYear?: EnumCollegeYearsFieldUpdateOperationsInput | $Enums.CollegeYears
    ProjectRepo?: ProjectRepoUncheckedUpdateManyWithoutProjectNestedInput
    projectPreviewImages?: ProjectPreviewImageUncheckedUpdateManyWithoutProjectNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutProjectsNestedInput
    tags?: TagUncheckedUpdateManyWithoutProjectsNestedInput
    Likes?: LikesUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type PublisherCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    name: string
    canPublish?: boolean
    userId?: string | null
    group: GroupCreateNestedOneWithoutPublishersInput
    project?: ProjectCreateNestedOneWithoutPublisherInput
  }

  export type PublisherUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    name: string
    canPublish?: boolean
    groupId: string
    userId?: string | null
    project?: ProjectUncheckedCreateNestedOneWithoutPublisherInput
  }

  export type PublisherCreateOrConnectWithoutUserInput = {
    where: PublisherWhereUniqueInput
    create: XOR<PublisherCreateWithoutUserInput, PublisherUncheckedCreateWithoutUserInput>
  }

  export type LikesCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    projectId: string
  }

  export type LikesCreateOrConnectWithoutUserInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput>
  }

  export type LikesCreateManyUserInputEnvelope = {
    data: LikesCreateManyUserInput | LikesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PublisherUpsertWithoutUserInput = {
    update: XOR<PublisherUpdateWithoutUserInput, PublisherUncheckedUpdateWithoutUserInput>
    create: XOR<PublisherCreateWithoutUserInput, PublisherUncheckedCreateWithoutUserInput>
    where?: PublisherWhereInput
  }

  export type PublisherUpdateToOneWithWhereWithoutUserInput = {
    where?: PublisherWhereInput
    data: XOR<PublisherUpdateWithoutUserInput, PublisherUncheckedUpdateWithoutUserInput>
  }

  export type PublisherUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    canPublish?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    group?: GroupUpdateOneRequiredWithoutPublishersNestedInput
    project?: ProjectUpdateOneWithoutPublisherNestedInput
  }

  export type PublisherUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    canPublish?: BoolFieldUpdateOperationsInput | boolean
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUncheckedUpdateOneWithoutPublisherNestedInput
  }

  export type LikesUpsertWithWhereUniqueWithoutUserInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutUserInput, LikesUncheckedUpdateWithoutUserInput>
    create: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutUserInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutUserInput, LikesUncheckedUpdateWithoutUserInput>
  }

  export type LikesUpdateManyWithWhereWithoutUserInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutUserInput>
  }

  export type LikesScalarWhereInput = {
    AND?: LikesScalarWhereInput | LikesScalarWhereInput[]
    OR?: LikesScalarWhereInput[]
    NOT?: LikesScalarWhereInput | LikesScalarWhereInput[]
    id?: StringFilter<"Likes"> | string
    createdAt?: DateTimeFilter<"Likes"> | Date | string
    userId?: StringFilter<"Likes"> | string
    projectId?: StringFilter<"Likes"> | string
  }

  export type ProjectRepoCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.ProjectRepoType
    url: string
    contributors?: ContributorCreateNestedManyWithoutProjectRepoInput
  }

  export type ProjectRepoUncheckedCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.ProjectRepoType
    url: string
    contributors?: ContributorUncheckedCreateNestedManyWithoutProjectRepoInput
  }

  export type ProjectRepoCreateOrConnectWithoutProjectInput = {
    where: ProjectRepoWhereUniqueInput
    create: XOR<ProjectRepoCreateWithoutProjectInput, ProjectRepoUncheckedCreateWithoutProjectInput>
  }

  export type ProjectRepoCreateManyProjectInputEnvelope = {
    data: ProjectRepoCreateManyProjectInput | ProjectRepoCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectPreviewImageCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
  }

  export type ProjectPreviewImageUncheckedCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
  }

  export type ProjectPreviewImageCreateOrConnectWithoutProjectInput = {
    where: ProjectPreviewImageWhereUniqueInput
    create: XOR<ProjectPreviewImageCreateWithoutProjectInput, ProjectPreviewImageUncheckedCreateWithoutProjectInput>
  }

  export type ProjectPreviewImageCreateManyProjectInputEnvelope = {
    data: ProjectPreviewImageCreateManyProjectInput | ProjectPreviewImageCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type PublisherCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    name: string
    canPublish?: boolean
    userId?: string | null
    group: GroupCreateNestedOneWithoutPublishersInput
    user?: UserCreateNestedOneWithoutPublisherInput
  }

  export type PublisherUncheckedCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    name: string
    canPublish?: boolean
    groupId: string
    userId?: string | null
    user?: UserUncheckedCreateNestedOneWithoutPublisherInput
  }

  export type PublisherCreateOrConnectWithoutProjectInput = {
    where: PublisherWhereUniqueInput
    create: XOR<PublisherCreateWithoutProjectInput, PublisherUncheckedCreateWithoutProjectInput>
  }

  export type CategoryCreateWithoutProjectsInput = {
    id?: string
    createdAt?: Date | string
    name: string
    slug: string
  }

  export type CategoryUncheckedCreateWithoutProjectsInput = {
    id?: string
    createdAt?: Date | string
    name: string
    slug: string
  }

  export type CategoryCreateOrConnectWithoutProjectsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProjectsInput, CategoryUncheckedCreateWithoutProjectsInput>
  }

  export type TagCreateWithoutProjectsInput = {
    id?: string
    slug: string
    createdAt?: Date | string
    name: string
  }

  export type TagUncheckedCreateWithoutProjectsInput = {
    id?: string
    slug: string
    createdAt?: Date | string
    name: string
  }

  export type TagCreateOrConnectWithoutProjectsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutProjectsInput, TagUncheckedCreateWithoutProjectsInput>
  }

  export type LikesCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    userId: string
  }

  export type LikesCreateOrConnectWithoutProjectInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutProjectInput, LikesUncheckedCreateWithoutProjectInput>
  }

  export type LikesCreateManyProjectInputEnvelope = {
    data: LikesCreateManyProjectInput | LikesCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectRepoUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectRepoWhereUniqueInput
    update: XOR<ProjectRepoUpdateWithoutProjectInput, ProjectRepoUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectRepoCreateWithoutProjectInput, ProjectRepoUncheckedCreateWithoutProjectInput>
  }

  export type ProjectRepoUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectRepoWhereUniqueInput
    data: XOR<ProjectRepoUpdateWithoutProjectInput, ProjectRepoUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectRepoUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectRepoScalarWhereInput
    data: XOR<ProjectRepoUpdateManyMutationInput, ProjectRepoUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectRepoScalarWhereInput = {
    AND?: ProjectRepoScalarWhereInput | ProjectRepoScalarWhereInput[]
    OR?: ProjectRepoScalarWhereInput[]
    NOT?: ProjectRepoScalarWhereInput | ProjectRepoScalarWhereInput[]
    id?: StringFilter<"ProjectRepo"> | string
    createdAt?: DateTimeFilter<"ProjectRepo"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectRepo"> | Date | string
    type?: EnumProjectRepoTypeFilter<"ProjectRepo"> | $Enums.ProjectRepoType
    url?: StringFilter<"ProjectRepo"> | string
    projectId?: StringFilter<"ProjectRepo"> | string
  }

  export type ProjectPreviewImageUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectPreviewImageWhereUniqueInput
    update: XOR<ProjectPreviewImageUpdateWithoutProjectInput, ProjectPreviewImageUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectPreviewImageCreateWithoutProjectInput, ProjectPreviewImageUncheckedCreateWithoutProjectInput>
  }

  export type ProjectPreviewImageUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectPreviewImageWhereUniqueInput
    data: XOR<ProjectPreviewImageUpdateWithoutProjectInput, ProjectPreviewImageUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectPreviewImageUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectPreviewImageScalarWhereInput
    data: XOR<ProjectPreviewImageUpdateManyMutationInput, ProjectPreviewImageUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectPreviewImageScalarWhereInput = {
    AND?: ProjectPreviewImageScalarWhereInput | ProjectPreviewImageScalarWhereInput[]
    OR?: ProjectPreviewImageScalarWhereInput[]
    NOT?: ProjectPreviewImageScalarWhereInput | ProjectPreviewImageScalarWhereInput[]
    id?: StringFilter<"ProjectPreviewImage"> | string
    createdAt?: DateTimeFilter<"ProjectPreviewImage"> | Date | string
    projectId?: StringFilter<"ProjectPreviewImage"> | string
  }

  export type PublisherUpsertWithoutProjectInput = {
    update: XOR<PublisherUpdateWithoutProjectInput, PublisherUncheckedUpdateWithoutProjectInput>
    create: XOR<PublisherCreateWithoutProjectInput, PublisherUncheckedCreateWithoutProjectInput>
    where?: PublisherWhereInput
  }

  export type PublisherUpdateToOneWithWhereWithoutProjectInput = {
    where?: PublisherWhereInput
    data: XOR<PublisherUpdateWithoutProjectInput, PublisherUncheckedUpdateWithoutProjectInput>
  }

  export type PublisherUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    canPublish?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    group?: GroupUpdateOneRequiredWithoutPublishersNestedInput
    user?: UserUpdateOneWithoutPublisherNestedInput
  }

  export type PublisherUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    canPublish?: BoolFieldUpdateOperationsInput | boolean
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUncheckedUpdateOneWithoutPublisherNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutProjectsInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutProjectsInput, CategoryUncheckedUpdateWithoutProjectsInput>
    create: XOR<CategoryCreateWithoutProjectsInput, CategoryUncheckedCreateWithoutProjectsInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutProjectsInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutProjectsInput, CategoryUncheckedUpdateWithoutProjectsInput>
  }

  export type CategoryUpdateManyWithWhereWithoutProjectsInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutProjectsInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
  }

  export type TagUpsertWithWhereUniqueWithoutProjectsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutProjectsInput, TagUncheckedUpdateWithoutProjectsInput>
    create: XOR<TagCreateWithoutProjectsInput, TagUncheckedCreateWithoutProjectsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutProjectsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutProjectsInput, TagUncheckedUpdateWithoutProjectsInput>
  }

  export type TagUpdateManyWithWhereWithoutProjectsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutProjectsInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    slug?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    name?: StringFilter<"Tag"> | string
  }

  export type LikesUpsertWithWhereUniqueWithoutProjectInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutProjectInput, LikesUncheckedUpdateWithoutProjectInput>
    create: XOR<LikesCreateWithoutProjectInput, LikesUncheckedCreateWithoutProjectInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutProjectInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutProjectInput, LikesUncheckedUpdateWithoutProjectInput>
  }

  export type LikesUpdateManyWithWhereWithoutProjectInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutProjectRepoInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    description?: string | null
    status?: $Enums.ProjectStatus
    thumbnailUrl: string
    collegeYear: $Enums.CollegeYears
    projectPreviewImages?: ProjectPreviewImageCreateNestedManyWithoutProjectInput
    publisher: PublisherCreateNestedOneWithoutProjectInput
    categories?: CategoryCreateNestedManyWithoutProjectsInput
    tags?: TagCreateNestedManyWithoutProjectsInput
    Likes?: LikesCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProjectRepoInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    description?: string | null
    status?: $Enums.ProjectStatus
    thumbnailUrl: string
    collegeYear: $Enums.CollegeYears
    publisherId: string
    projectPreviewImages?: ProjectPreviewImageUncheckedCreateNestedManyWithoutProjectInput
    categories?: CategoryUncheckedCreateNestedManyWithoutProjectsInput
    tags?: TagUncheckedCreateNestedManyWithoutProjectsInput
    Likes?: LikesUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectRepoInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectRepoInput, ProjectUncheckedCreateWithoutProjectRepoInput>
  }

  export type ContributorCreateWithoutProjectRepoInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ContributorUncheckedCreateWithoutProjectRepoInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ContributorCreateOrConnectWithoutProjectRepoInput = {
    where: ContributorWhereUniqueInput
    create: XOR<ContributorCreateWithoutProjectRepoInput, ContributorUncheckedCreateWithoutProjectRepoInput>
  }

  export type ContributorCreateManyProjectRepoInputEnvelope = {
    data: ContributorCreateManyProjectRepoInput | ContributorCreateManyProjectRepoInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutProjectRepoInput = {
    update: XOR<ProjectUpdateWithoutProjectRepoInput, ProjectUncheckedUpdateWithoutProjectRepoInput>
    create: XOR<ProjectCreateWithoutProjectRepoInput, ProjectUncheckedCreateWithoutProjectRepoInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectRepoInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectRepoInput, ProjectUncheckedUpdateWithoutProjectRepoInput>
  }

  export type ProjectUpdateWithoutProjectRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    collegeYear?: EnumCollegeYearsFieldUpdateOperationsInput | $Enums.CollegeYears
    projectPreviewImages?: ProjectPreviewImageUpdateManyWithoutProjectNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutProjectNestedInput
    categories?: CategoryUpdateManyWithoutProjectsNestedInput
    tags?: TagUpdateManyWithoutProjectsNestedInput
    Likes?: LikesUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    collegeYear?: EnumCollegeYearsFieldUpdateOperationsInput | $Enums.CollegeYears
    publisherId?: StringFieldUpdateOperationsInput | string
    projectPreviewImages?: ProjectPreviewImageUncheckedUpdateManyWithoutProjectNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutProjectsNestedInput
    tags?: TagUncheckedUpdateManyWithoutProjectsNestedInput
    Likes?: LikesUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ContributorUpsertWithWhereUniqueWithoutProjectRepoInput = {
    where: ContributorWhereUniqueInput
    update: XOR<ContributorUpdateWithoutProjectRepoInput, ContributorUncheckedUpdateWithoutProjectRepoInput>
    create: XOR<ContributorCreateWithoutProjectRepoInput, ContributorUncheckedCreateWithoutProjectRepoInput>
  }

  export type ContributorUpdateWithWhereUniqueWithoutProjectRepoInput = {
    where: ContributorWhereUniqueInput
    data: XOR<ContributorUpdateWithoutProjectRepoInput, ContributorUncheckedUpdateWithoutProjectRepoInput>
  }

  export type ContributorUpdateManyWithWhereWithoutProjectRepoInput = {
    where: ContributorScalarWhereInput
    data: XOR<ContributorUpdateManyMutationInput, ContributorUncheckedUpdateManyWithoutProjectRepoInput>
  }

  export type ContributorScalarWhereInput = {
    AND?: ContributorScalarWhereInput | ContributorScalarWhereInput[]
    OR?: ContributorScalarWhereInput[]
    NOT?: ContributorScalarWhereInput | ContributorScalarWhereInput[]
    id?: StringFilter<"Contributor"> | string
    createdAt?: DateTimeFilter<"Contributor"> | Date | string
    updatedAt?: DateTimeFilter<"Contributor"> | Date | string
    userId?: StringFilter<"Contributor"> | string
    projectRepoId?: StringNullableFilter<"Contributor"> | string | null
  }

  export type ProjectCreateWithoutProjectPreviewImagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    description?: string | null
    status?: $Enums.ProjectStatus
    thumbnailUrl: string
    collegeYear: $Enums.CollegeYears
    ProjectRepo?: ProjectRepoCreateNestedManyWithoutProjectInput
    publisher: PublisherCreateNestedOneWithoutProjectInput
    categories?: CategoryCreateNestedManyWithoutProjectsInput
    tags?: TagCreateNestedManyWithoutProjectsInput
    Likes?: LikesCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutProjectPreviewImagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    description?: string | null
    status?: $Enums.ProjectStatus
    thumbnailUrl: string
    collegeYear: $Enums.CollegeYears
    publisherId: string
    ProjectRepo?: ProjectRepoUncheckedCreateNestedManyWithoutProjectInput
    categories?: CategoryUncheckedCreateNestedManyWithoutProjectsInput
    tags?: TagUncheckedCreateNestedManyWithoutProjectsInput
    Likes?: LikesUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutProjectPreviewImagesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProjectPreviewImagesInput, ProjectUncheckedCreateWithoutProjectPreviewImagesInput>
  }

  export type ProjectUpsertWithoutProjectPreviewImagesInput = {
    update: XOR<ProjectUpdateWithoutProjectPreviewImagesInput, ProjectUncheckedUpdateWithoutProjectPreviewImagesInput>
    create: XOR<ProjectCreateWithoutProjectPreviewImagesInput, ProjectUncheckedCreateWithoutProjectPreviewImagesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutProjectPreviewImagesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutProjectPreviewImagesInput, ProjectUncheckedUpdateWithoutProjectPreviewImagesInput>
  }

  export type ProjectUpdateWithoutProjectPreviewImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    collegeYear?: EnumCollegeYearsFieldUpdateOperationsInput | $Enums.CollegeYears
    ProjectRepo?: ProjectRepoUpdateManyWithoutProjectNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutProjectNestedInput
    categories?: CategoryUpdateManyWithoutProjectsNestedInput
    tags?: TagUpdateManyWithoutProjectsNestedInput
    Likes?: LikesUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutProjectPreviewImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    collegeYear?: EnumCollegeYearsFieldUpdateOperationsInput | $Enums.CollegeYears
    publisherId?: StringFieldUpdateOperationsInput | string
    ProjectRepo?: ProjectRepoUncheckedUpdateManyWithoutProjectNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutProjectsNestedInput
    tags?: TagUncheckedUpdateManyWithoutProjectsNestedInput
    Likes?: LikesUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectRepoCreateWithoutContributorsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.ProjectRepoType
    url: string
    project: ProjectCreateNestedOneWithoutProjectRepoInput
  }

  export type ProjectRepoUncheckedCreateWithoutContributorsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.ProjectRepoType
    url: string
    projectId: string
  }

  export type ProjectRepoCreateOrConnectWithoutContributorsInput = {
    where: ProjectRepoWhereUniqueInput
    create: XOR<ProjectRepoCreateWithoutContributorsInput, ProjectRepoUncheckedCreateWithoutContributorsInput>
  }

  export type ProjectRepoUpsertWithoutContributorsInput = {
    update: XOR<ProjectRepoUpdateWithoutContributorsInput, ProjectRepoUncheckedUpdateWithoutContributorsInput>
    create: XOR<ProjectRepoCreateWithoutContributorsInput, ProjectRepoUncheckedCreateWithoutContributorsInput>
    where?: ProjectRepoWhereInput
  }

  export type ProjectRepoUpdateToOneWithWhereWithoutContributorsInput = {
    where?: ProjectRepoWhereInput
    data: XOR<ProjectRepoUpdateWithoutContributorsInput, ProjectRepoUncheckedUpdateWithoutContributorsInput>
  }

  export type ProjectRepoUpdateWithoutContributorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumProjectRepoTypeFieldUpdateOperationsInput | $Enums.ProjectRepoType
    url?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutProjectRepoNestedInput
  }

  export type ProjectRepoUncheckedUpdateWithoutContributorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumProjectRepoTypeFieldUpdateOperationsInput | $Enums.ProjectRepoType
    url?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateWithoutCategoriesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    description?: string | null
    status?: $Enums.ProjectStatus
    thumbnailUrl: string
    collegeYear: $Enums.CollegeYears
    ProjectRepo?: ProjectRepoCreateNestedManyWithoutProjectInput
    projectPreviewImages?: ProjectPreviewImageCreateNestedManyWithoutProjectInput
    publisher: PublisherCreateNestedOneWithoutProjectInput
    tags?: TagCreateNestedManyWithoutProjectsInput
    Likes?: LikesCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCategoriesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    description?: string | null
    status?: $Enums.ProjectStatus
    thumbnailUrl: string
    collegeYear: $Enums.CollegeYears
    publisherId: string
    ProjectRepo?: ProjectRepoUncheckedCreateNestedManyWithoutProjectInput
    projectPreviewImages?: ProjectPreviewImageUncheckedCreateNestedManyWithoutProjectInput
    tags?: TagUncheckedCreateNestedManyWithoutProjectsInput
    Likes?: LikesUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCategoriesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCategoriesInput, ProjectUncheckedCreateWithoutCategoriesInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCategoriesInput, ProjectUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ProjectCreateWithoutCategoriesInput, ProjectUncheckedCreateWithoutCategoriesInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCategoriesInput, ProjectUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCategoriesInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    name?: StringFilter<"Project"> | string
    slug?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    thumbnailUrl?: StringFilter<"Project"> | string
    collegeYear?: EnumCollegeYearsFilter<"Project"> | $Enums.CollegeYears
    publisherId?: StringFilter<"Project"> | string
  }

  export type ProjectCreateWithoutTagsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    description?: string | null
    status?: $Enums.ProjectStatus
    thumbnailUrl: string
    collegeYear: $Enums.CollegeYears
    ProjectRepo?: ProjectRepoCreateNestedManyWithoutProjectInput
    projectPreviewImages?: ProjectPreviewImageCreateNestedManyWithoutProjectInput
    publisher: PublisherCreateNestedOneWithoutProjectInput
    categories?: CategoryCreateNestedManyWithoutProjectsInput
    Likes?: LikesCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTagsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    description?: string | null
    status?: $Enums.ProjectStatus
    thumbnailUrl: string
    collegeYear: $Enums.CollegeYears
    publisherId: string
    ProjectRepo?: ProjectRepoUncheckedCreateNestedManyWithoutProjectInput
    projectPreviewImages?: ProjectPreviewImageUncheckedCreateNestedManyWithoutProjectInput
    categories?: CategoryUncheckedCreateNestedManyWithoutProjectsInput
    Likes?: LikesUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTagsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTagsInput, ProjectUncheckedCreateWithoutTagsInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutTagsInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutTagsInput, ProjectUncheckedUpdateWithoutTagsInput>
    create: XOR<ProjectCreateWithoutTagsInput, ProjectUncheckedCreateWithoutTagsInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutTagsInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutTagsInput, ProjectUncheckedUpdateWithoutTagsInput>
  }

  export type ProjectUpdateManyWithWhereWithoutTagsInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutTagsInput>
  }

  export type UserCreateWithoutLikesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    githubId?: string | null
    linkedinId?: string | null
    website?: string | null
    phoneNumber?: string | null
    name?: string | null
    avatarUrl?: string | null
    bio?: string | null
    publisher?: PublisherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    githubId?: string | null
    linkedinId?: string | null
    website?: string | null
    phoneNumber?: string | null
    name?: string | null
    avatarUrl?: string | null
    bio?: string | null
    publisherId: string
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type ProjectCreateWithoutLikesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    description?: string | null
    status?: $Enums.ProjectStatus
    thumbnailUrl: string
    collegeYear: $Enums.CollegeYears
    ProjectRepo?: ProjectRepoCreateNestedManyWithoutProjectInput
    projectPreviewImages?: ProjectPreviewImageCreateNestedManyWithoutProjectInput
    publisher: PublisherCreateNestedOneWithoutProjectInput
    categories?: CategoryCreateNestedManyWithoutProjectsInput
    tags?: TagCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutLikesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    slug: string
    description?: string | null
    status?: $Enums.ProjectStatus
    thumbnailUrl: string
    collegeYear: $Enums.CollegeYears
    publisherId: string
    ProjectRepo?: ProjectRepoUncheckedCreateNestedManyWithoutProjectInput
    projectPreviewImages?: ProjectPreviewImageUncheckedCreateNestedManyWithoutProjectInput
    categories?: CategoryUncheckedCreateNestedManyWithoutProjectsInput
    tags?: TagUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectCreateOrConnectWithoutLikesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLikesInput, ProjectUncheckedCreateWithoutLikesInput>
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    publisher?: PublisherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    publisherId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpsertWithoutLikesInput = {
    update: XOR<ProjectUpdateWithoutLikesInput, ProjectUncheckedUpdateWithoutLikesInput>
    create: XOR<ProjectCreateWithoutLikesInput, ProjectUncheckedCreateWithoutLikesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutLikesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutLikesInput, ProjectUncheckedUpdateWithoutLikesInput>
  }

  export type ProjectUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    collegeYear?: EnumCollegeYearsFieldUpdateOperationsInput | $Enums.CollegeYears
    ProjectRepo?: ProjectRepoUpdateManyWithoutProjectNestedInput
    projectPreviewImages?: ProjectPreviewImageUpdateManyWithoutProjectNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutProjectNestedInput
    categories?: CategoryUpdateManyWithoutProjectsNestedInput
    tags?: TagUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    collegeYear?: EnumCollegeYearsFieldUpdateOperationsInput | $Enums.CollegeYears
    publisherId?: StringFieldUpdateOperationsInput | string
    ProjectRepo?: ProjectRepoUncheckedUpdateManyWithoutProjectNestedInput
    projectPreviewImages?: ProjectPreviewImageUncheckedUpdateManyWithoutProjectNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutProjectsNestedInput
    tags?: TagUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type GroupCreateManyProjectIdeaInput = {
    id?: string
    createdAt?: Date | string
  }

  export type GroupUpdateWithoutProjectIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishers?: PublisherUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutProjectIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishers?: PublisherUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutProjectIdeaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublisherCreateManyGroupInput = {
    id?: string
    createdAt?: Date | string
    name: string
    canPublish?: boolean
    userId?: string | null
  }

  export type PublisherUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    canPublish?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutPublisherNestedInput
    project?: ProjectUpdateOneWithoutPublisherNestedInput
  }

  export type PublisherUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    canPublish?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUncheckedUpdateOneWithoutPublisherNestedInput
    project?: ProjectUncheckedUpdateOneWithoutPublisherNestedInput
  }

  export type PublisherUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    canPublish?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikesCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    projectId: string
  }

  export type LikesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type LikesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectRepoCreateManyProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: $Enums.ProjectRepoType
    url: string
  }

  export type ProjectPreviewImageCreateManyProjectInput = {
    id?: string
    createdAt?: Date | string
  }

  export type LikesCreateManyProjectInput = {
    id?: string
    createdAt?: Date | string
    userId: string
  }

  export type ProjectRepoUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumProjectRepoTypeFieldUpdateOperationsInput | $Enums.ProjectRepoType
    url?: StringFieldUpdateOperationsInput | string
    contributors?: ContributorUpdateManyWithoutProjectRepoNestedInput
  }

  export type ProjectRepoUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumProjectRepoTypeFieldUpdateOperationsInput | $Enums.ProjectRepoType
    url?: StringFieldUpdateOperationsInput | string
    contributors?: ContributorUncheckedUpdateManyWithoutProjectRepoNestedInput
  }

  export type ProjectRepoUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumProjectRepoTypeFieldUpdateOperationsInput | $Enums.ProjectRepoType
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectPreviewImageUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPreviewImageUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectPreviewImageUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type TagUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LikesUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LikesUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ContributorCreateManyProjectRepoInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ContributorUpdateWithoutProjectRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ContributorUncheckedUpdateWithoutProjectRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ContributorUncheckedUpdateManyWithoutProjectRepoInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    collegeYear?: EnumCollegeYearsFieldUpdateOperationsInput | $Enums.CollegeYears
    ProjectRepo?: ProjectRepoUpdateManyWithoutProjectNestedInput
    projectPreviewImages?: ProjectPreviewImageUpdateManyWithoutProjectNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutProjectNestedInput
    tags?: TagUpdateManyWithoutProjectsNestedInput
    Likes?: LikesUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    collegeYear?: EnumCollegeYearsFieldUpdateOperationsInput | $Enums.CollegeYears
    publisherId?: StringFieldUpdateOperationsInput | string
    ProjectRepo?: ProjectRepoUncheckedUpdateManyWithoutProjectNestedInput
    projectPreviewImages?: ProjectPreviewImageUncheckedUpdateManyWithoutProjectNestedInput
    tags?: TagUncheckedUpdateManyWithoutProjectsNestedInput
    Likes?: LikesUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    collegeYear?: EnumCollegeYearsFieldUpdateOperationsInput | $Enums.CollegeYears
    publisherId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    collegeYear?: EnumCollegeYearsFieldUpdateOperationsInput | $Enums.CollegeYears
    ProjectRepo?: ProjectRepoUpdateManyWithoutProjectNestedInput
    projectPreviewImages?: ProjectPreviewImageUpdateManyWithoutProjectNestedInput
    publisher?: PublisherUpdateOneRequiredWithoutProjectNestedInput
    categories?: CategoryUpdateManyWithoutProjectsNestedInput
    Likes?: LikesUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    collegeYear?: EnumCollegeYearsFieldUpdateOperationsInput | $Enums.CollegeYears
    publisherId?: StringFieldUpdateOperationsInput | string
    ProjectRepo?: ProjectRepoUncheckedUpdateManyWithoutProjectNestedInput
    projectPreviewImages?: ProjectPreviewImageUncheckedUpdateManyWithoutProjectNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutProjectsNestedInput
    Likes?: LikesUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    thumbnailUrl?: StringFieldUpdateOperationsInput | string
    collegeYear?: EnumCollegeYearsFieldUpdateOperationsInput | $Enums.CollegeYears
    publisherId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}