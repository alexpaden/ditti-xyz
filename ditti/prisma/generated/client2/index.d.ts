
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model audience_trackers
 * 
 */
export type audience_trackers = {
  id: bigint
  created_at: Date
  following: Prisma.JsonValue
  followers: Prisma.JsonValue
  fid: bigint
}

/**
 * Model follow_trackers
 * 
 */
export type follow_trackers = {
  id: number
  created_at: Date | null
  fid: number | null
  following_fids: Prisma.JsonValue | null
  following_changes: Prisma.JsonValue | null
  follower_fids: Prisma.JsonValue | null
  follower_changes: Prisma.JsonValue | null
}

/**
 * Model follower_trackers
 * 
 */
export type follower_trackers = {
  id: bigint
  created_at: Date
  added: Prisma.JsonValue | null
  removed: Prisma.JsonValue | null
  fid: bigint
}

/**
 * Model following_trackers
 * 
 */
export type following_trackers = {
  id: bigint
  created_at: Date
  added: Prisma.JsonValue
  removed: Prisma.JsonValue
  fid: bigint
}

/**
 * Model profile_trackers
 * 
 */
export type profile_trackers = {
  id: number
  created_at: Date
  fid: number
  username: string | null
  display_name: string | null
  bio: string | null
  following_count: number | null
  follower_count: number | null
  pfp_url: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Audience_trackers
 * const audience_trackers = await prisma.audience_trackers.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Audience_trackers
   * const audience_trackers = await prisma.audience_trackers.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.audience_trackers`: Exposes CRUD operations for the **audience_trackers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audience_trackers
    * const audience_trackers = await prisma.audience_trackers.findMany()
    * ```
    */
  get audience_trackers(): Prisma.audience_trackersDelegate<GlobalReject>;

  /**
   * `prisma.follow_trackers`: Exposes CRUD operations for the **follow_trackers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follow_trackers
    * const follow_trackers = await prisma.follow_trackers.findMany()
    * ```
    */
  get follow_trackers(): Prisma.follow_trackersDelegate<GlobalReject>;

  /**
   * `prisma.follower_trackers`: Exposes CRUD operations for the **follower_trackers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follower_trackers
    * const follower_trackers = await prisma.follower_trackers.findMany()
    * ```
    */
  get follower_trackers(): Prisma.follower_trackersDelegate<GlobalReject>;

  /**
   * `prisma.following_trackers`: Exposes CRUD operations for the **following_trackers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Following_trackers
    * const following_trackers = await prisma.following_trackers.findMany()
    * ```
    */
  get following_trackers(): Prisma.following_trackersDelegate<GlobalReject>;

  /**
   * `prisma.profile_trackers`: Exposes CRUD operations for the **profile_trackers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profile_trackers
    * const profile_trackers = await prisma.profile_trackers.findMany()
    * ```
    */
  get profile_trackers(): Prisma.profile_trackersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    audience_trackers: 'audience_trackers',
    follow_trackers: 'follow_trackers',
    follower_trackers: 'follower_trackers',
    following_trackers: 'following_trackers',
    profile_trackers: 'profile_trackers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model audience_trackers
   */


  export type AggregateAudience_trackers = {
    _count: Audience_trackersCountAggregateOutputType | null
    _avg: Audience_trackersAvgAggregateOutputType | null
    _sum: Audience_trackersSumAggregateOutputType | null
    _min: Audience_trackersMinAggregateOutputType | null
    _max: Audience_trackersMaxAggregateOutputType | null
  }

  export type Audience_trackersAvgAggregateOutputType = {
    id: number | null
    fid: number | null
  }

  export type Audience_trackersSumAggregateOutputType = {
    id: bigint | null
    fid: bigint | null
  }

  export type Audience_trackersMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    fid: bigint | null
  }

  export type Audience_trackersMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    fid: bigint | null
  }

  export type Audience_trackersCountAggregateOutputType = {
    id: number
    created_at: number
    following: number
    followers: number
    fid: number
    _all: number
  }


  export type Audience_trackersAvgAggregateInputType = {
    id?: true
    fid?: true
  }

  export type Audience_trackersSumAggregateInputType = {
    id?: true
    fid?: true
  }

  export type Audience_trackersMinAggregateInputType = {
    id?: true
    created_at?: true
    fid?: true
  }

  export type Audience_trackersMaxAggregateInputType = {
    id?: true
    created_at?: true
    fid?: true
  }

  export type Audience_trackersCountAggregateInputType = {
    id?: true
    created_at?: true
    following?: true
    followers?: true
    fid?: true
    _all?: true
  }

  export type Audience_trackersAggregateArgs = {
    /**
     * Filter which audience_trackers to aggregate.
     */
    where?: audience_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audience_trackers to fetch.
     */
    orderBy?: Enumerable<audience_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: audience_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audience_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audience_trackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned audience_trackers
    **/
    _count?: true | Audience_trackersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Audience_trackersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Audience_trackersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Audience_trackersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Audience_trackersMaxAggregateInputType
  }

  export type GetAudience_trackersAggregateType<T extends Audience_trackersAggregateArgs> = {
        [P in keyof T & keyof AggregateAudience_trackers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudience_trackers[P]>
      : GetScalarType<T[P], AggregateAudience_trackers[P]>
  }




  export type Audience_trackersGroupByArgs = {
    where?: audience_trackersWhereInput
    orderBy?: Enumerable<audience_trackersOrderByWithAggregationInput>
    by: Audience_trackersScalarFieldEnum[]
    having?: audience_trackersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Audience_trackersCountAggregateInputType | true
    _avg?: Audience_trackersAvgAggregateInputType
    _sum?: Audience_trackersSumAggregateInputType
    _min?: Audience_trackersMinAggregateInputType
    _max?: Audience_trackersMaxAggregateInputType
  }


  export type Audience_trackersGroupByOutputType = {
    id: bigint
    created_at: Date
    following: JsonValue
    followers: JsonValue
    fid: bigint
    _count: Audience_trackersCountAggregateOutputType | null
    _avg: Audience_trackersAvgAggregateOutputType | null
    _sum: Audience_trackersSumAggregateOutputType | null
    _min: Audience_trackersMinAggregateOutputType | null
    _max: Audience_trackersMaxAggregateOutputType | null
  }

  type GetAudience_trackersGroupByPayload<T extends Audience_trackersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Audience_trackersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Audience_trackersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Audience_trackersGroupByOutputType[P]>
            : GetScalarType<T[P], Audience_trackersGroupByOutputType[P]>
        }
      >
    >


  export type audience_trackersSelect = {
    id?: boolean
    created_at?: boolean
    following?: boolean
    followers?: boolean
    fid?: boolean
  }


  export type audience_trackersGetPayload<S extends boolean | null | undefined | audience_trackersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? audience_trackers :
    S extends undefined ? never :
    S extends { include: any } & (audience_trackersArgs | audience_trackersFindManyArgs)
    ? audience_trackers 
    : S extends { select: any } & (audience_trackersArgs | audience_trackersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof audience_trackers ? audience_trackers[P] : never
  } 
      : audience_trackers


  type audience_trackersCountArgs = 
    Omit<audience_trackersFindManyArgs, 'select' | 'include'> & {
      select?: Audience_trackersCountAggregateInputType | true
    }

  export interface audience_trackersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Audience_trackers that matches the filter.
     * @param {audience_trackersFindUniqueArgs} args - Arguments to find a Audience_trackers
     * @example
     * // Get one Audience_trackers
     * const audience_trackers = await prisma.audience_trackers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends audience_trackersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, audience_trackersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'audience_trackers'> extends True ? Prisma__audience_trackersClient<audience_trackersGetPayload<T>> : Prisma__audience_trackersClient<audience_trackersGetPayload<T> | null, null>

    /**
     * Find one Audience_trackers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {audience_trackersFindUniqueOrThrowArgs} args - Arguments to find a Audience_trackers
     * @example
     * // Get one Audience_trackers
     * const audience_trackers = await prisma.audience_trackers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends audience_trackersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, audience_trackersFindUniqueOrThrowArgs>
    ): Prisma__audience_trackersClient<audience_trackersGetPayload<T>>

    /**
     * Find the first Audience_trackers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audience_trackersFindFirstArgs} args - Arguments to find a Audience_trackers
     * @example
     * // Get one Audience_trackers
     * const audience_trackers = await prisma.audience_trackers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends audience_trackersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, audience_trackersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'audience_trackers'> extends True ? Prisma__audience_trackersClient<audience_trackersGetPayload<T>> : Prisma__audience_trackersClient<audience_trackersGetPayload<T> | null, null>

    /**
     * Find the first Audience_trackers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audience_trackersFindFirstOrThrowArgs} args - Arguments to find a Audience_trackers
     * @example
     * // Get one Audience_trackers
     * const audience_trackers = await prisma.audience_trackers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends audience_trackersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, audience_trackersFindFirstOrThrowArgs>
    ): Prisma__audience_trackersClient<audience_trackersGetPayload<T>>

    /**
     * Find zero or more Audience_trackers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audience_trackersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audience_trackers
     * const audience_trackers = await prisma.audience_trackers.findMany()
     * 
     * // Get first 10 Audience_trackers
     * const audience_trackers = await prisma.audience_trackers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audience_trackersWithIdOnly = await prisma.audience_trackers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends audience_trackersFindManyArgs>(
      args?: SelectSubset<T, audience_trackersFindManyArgs>
    ): Prisma.PrismaPromise<Array<audience_trackersGetPayload<T>>>

    /**
     * Create a Audience_trackers.
     * @param {audience_trackersCreateArgs} args - Arguments to create a Audience_trackers.
     * @example
     * // Create one Audience_trackers
     * const Audience_trackers = await prisma.audience_trackers.create({
     *   data: {
     *     // ... data to create a Audience_trackers
     *   }
     * })
     * 
    **/
    create<T extends audience_trackersCreateArgs>(
      args: SelectSubset<T, audience_trackersCreateArgs>
    ): Prisma__audience_trackersClient<audience_trackersGetPayload<T>>

    /**
     * Create many Audience_trackers.
     *     @param {audience_trackersCreateManyArgs} args - Arguments to create many Audience_trackers.
     *     @example
     *     // Create many Audience_trackers
     *     const audience_trackers = await prisma.audience_trackers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends audience_trackersCreateManyArgs>(
      args?: SelectSubset<T, audience_trackersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Audience_trackers.
     * @param {audience_trackersDeleteArgs} args - Arguments to delete one Audience_trackers.
     * @example
     * // Delete one Audience_trackers
     * const Audience_trackers = await prisma.audience_trackers.delete({
     *   where: {
     *     // ... filter to delete one Audience_trackers
     *   }
     * })
     * 
    **/
    delete<T extends audience_trackersDeleteArgs>(
      args: SelectSubset<T, audience_trackersDeleteArgs>
    ): Prisma__audience_trackersClient<audience_trackersGetPayload<T>>

    /**
     * Update one Audience_trackers.
     * @param {audience_trackersUpdateArgs} args - Arguments to update one Audience_trackers.
     * @example
     * // Update one Audience_trackers
     * const audience_trackers = await prisma.audience_trackers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends audience_trackersUpdateArgs>(
      args: SelectSubset<T, audience_trackersUpdateArgs>
    ): Prisma__audience_trackersClient<audience_trackersGetPayload<T>>

    /**
     * Delete zero or more Audience_trackers.
     * @param {audience_trackersDeleteManyArgs} args - Arguments to filter Audience_trackers to delete.
     * @example
     * // Delete a few Audience_trackers
     * const { count } = await prisma.audience_trackers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends audience_trackersDeleteManyArgs>(
      args?: SelectSubset<T, audience_trackersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audience_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audience_trackersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audience_trackers
     * const audience_trackers = await prisma.audience_trackers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends audience_trackersUpdateManyArgs>(
      args: SelectSubset<T, audience_trackersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Audience_trackers.
     * @param {audience_trackersUpsertArgs} args - Arguments to update or create a Audience_trackers.
     * @example
     * // Update or create a Audience_trackers
     * const audience_trackers = await prisma.audience_trackers.upsert({
     *   create: {
     *     // ... data to create a Audience_trackers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audience_trackers we want to update
     *   }
     * })
    **/
    upsert<T extends audience_trackersUpsertArgs>(
      args: SelectSubset<T, audience_trackersUpsertArgs>
    ): Prisma__audience_trackersClient<audience_trackersGetPayload<T>>

    /**
     * Count the number of Audience_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audience_trackersCountArgs} args - Arguments to filter Audience_trackers to count.
     * @example
     * // Count the number of Audience_trackers
     * const count = await prisma.audience_trackers.count({
     *   where: {
     *     // ... the filter for the Audience_trackers we want to count
     *   }
     * })
    **/
    count<T extends audience_trackersCountArgs>(
      args?: Subset<T, audience_trackersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audience_trackersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audience_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audience_trackersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Audience_trackersAggregateArgs>(args: Subset<T, Audience_trackersAggregateArgs>): Prisma.PrismaPromise<GetAudience_trackersAggregateType<T>>

    /**
     * Group by Audience_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audience_trackersGroupByArgs} args - Group by arguments.
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
      T extends Audience_trackersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Audience_trackersGroupByArgs['orderBy'] }
        : { orderBy?: Audience_trackersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Audience_trackersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudience_trackersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for audience_trackers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__audience_trackersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * audience_trackers base type for findUnique actions
   */
  export type audience_trackersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the audience_trackers
     */
    select?: audience_trackersSelect | null
    /**
     * Filter, which audience_trackers to fetch.
     */
    where: audience_trackersWhereUniqueInput
  }

  /**
   * audience_trackers findUnique
   */
  export interface audience_trackersFindUniqueArgs extends audience_trackersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * audience_trackers findUniqueOrThrow
   */
  export type audience_trackersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the audience_trackers
     */
    select?: audience_trackersSelect | null
    /**
     * Filter, which audience_trackers to fetch.
     */
    where: audience_trackersWhereUniqueInput
  }


  /**
   * audience_trackers base type for findFirst actions
   */
  export type audience_trackersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the audience_trackers
     */
    select?: audience_trackersSelect | null
    /**
     * Filter, which audience_trackers to fetch.
     */
    where?: audience_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audience_trackers to fetch.
     */
    orderBy?: Enumerable<audience_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audience_trackers.
     */
    cursor?: audience_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audience_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audience_trackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audience_trackers.
     */
    distinct?: Enumerable<Audience_trackersScalarFieldEnum>
  }

  /**
   * audience_trackers findFirst
   */
  export interface audience_trackersFindFirstArgs extends audience_trackersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * audience_trackers findFirstOrThrow
   */
  export type audience_trackersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the audience_trackers
     */
    select?: audience_trackersSelect | null
    /**
     * Filter, which audience_trackers to fetch.
     */
    where?: audience_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audience_trackers to fetch.
     */
    orderBy?: Enumerable<audience_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audience_trackers.
     */
    cursor?: audience_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audience_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audience_trackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audience_trackers.
     */
    distinct?: Enumerable<Audience_trackersScalarFieldEnum>
  }


  /**
   * audience_trackers findMany
   */
  export type audience_trackersFindManyArgs = {
    /**
     * Select specific fields to fetch from the audience_trackers
     */
    select?: audience_trackersSelect | null
    /**
     * Filter, which audience_trackers to fetch.
     */
    where?: audience_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audience_trackers to fetch.
     */
    orderBy?: Enumerable<audience_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing audience_trackers.
     */
    cursor?: audience_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audience_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audience_trackers.
     */
    skip?: number
    distinct?: Enumerable<Audience_trackersScalarFieldEnum>
  }


  /**
   * audience_trackers create
   */
  export type audience_trackersCreateArgs = {
    /**
     * Select specific fields to fetch from the audience_trackers
     */
    select?: audience_trackersSelect | null
    /**
     * The data needed to create a audience_trackers.
     */
    data: XOR<audience_trackersCreateInput, audience_trackersUncheckedCreateInput>
  }


  /**
   * audience_trackers createMany
   */
  export type audience_trackersCreateManyArgs = {
    /**
     * The data used to create many audience_trackers.
     */
    data: Enumerable<audience_trackersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * audience_trackers update
   */
  export type audience_trackersUpdateArgs = {
    /**
     * Select specific fields to fetch from the audience_trackers
     */
    select?: audience_trackersSelect | null
    /**
     * The data needed to update a audience_trackers.
     */
    data: XOR<audience_trackersUpdateInput, audience_trackersUncheckedUpdateInput>
    /**
     * Choose, which audience_trackers to update.
     */
    where: audience_trackersWhereUniqueInput
  }


  /**
   * audience_trackers updateMany
   */
  export type audience_trackersUpdateManyArgs = {
    /**
     * The data used to update audience_trackers.
     */
    data: XOR<audience_trackersUpdateManyMutationInput, audience_trackersUncheckedUpdateManyInput>
    /**
     * Filter which audience_trackers to update
     */
    where?: audience_trackersWhereInput
  }


  /**
   * audience_trackers upsert
   */
  export type audience_trackersUpsertArgs = {
    /**
     * Select specific fields to fetch from the audience_trackers
     */
    select?: audience_trackersSelect | null
    /**
     * The filter to search for the audience_trackers to update in case it exists.
     */
    where: audience_trackersWhereUniqueInput
    /**
     * In case the audience_trackers found by the `where` argument doesn't exist, create a new audience_trackers with this data.
     */
    create: XOR<audience_trackersCreateInput, audience_trackersUncheckedCreateInput>
    /**
     * In case the audience_trackers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<audience_trackersUpdateInput, audience_trackersUncheckedUpdateInput>
  }


  /**
   * audience_trackers delete
   */
  export type audience_trackersDeleteArgs = {
    /**
     * Select specific fields to fetch from the audience_trackers
     */
    select?: audience_trackersSelect | null
    /**
     * Filter which audience_trackers to delete.
     */
    where: audience_trackersWhereUniqueInput
  }


  /**
   * audience_trackers deleteMany
   */
  export type audience_trackersDeleteManyArgs = {
    /**
     * Filter which audience_trackers to delete
     */
    where?: audience_trackersWhereInput
  }


  /**
   * audience_trackers without action
   */
  export type audience_trackersArgs = {
    /**
     * Select specific fields to fetch from the audience_trackers
     */
    select?: audience_trackersSelect | null
  }



  /**
   * Model follow_trackers
   */


  export type AggregateFollow_trackers = {
    _count: Follow_trackersCountAggregateOutputType | null
    _avg: Follow_trackersAvgAggregateOutputType | null
    _sum: Follow_trackersSumAggregateOutputType | null
    _min: Follow_trackersMinAggregateOutputType | null
    _max: Follow_trackersMaxAggregateOutputType | null
  }

  export type Follow_trackersAvgAggregateOutputType = {
    id: number | null
    fid: number | null
  }

  export type Follow_trackersSumAggregateOutputType = {
    id: number | null
    fid: number | null
  }

  export type Follow_trackersMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    fid: number | null
  }

  export type Follow_trackersMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    fid: number | null
  }

  export type Follow_trackersCountAggregateOutputType = {
    id: number
    created_at: number
    fid: number
    following_fids: number
    following_changes: number
    follower_fids: number
    follower_changes: number
    _all: number
  }


  export type Follow_trackersAvgAggregateInputType = {
    id?: true
    fid?: true
  }

  export type Follow_trackersSumAggregateInputType = {
    id?: true
    fid?: true
  }

  export type Follow_trackersMinAggregateInputType = {
    id?: true
    created_at?: true
    fid?: true
  }

  export type Follow_trackersMaxAggregateInputType = {
    id?: true
    created_at?: true
    fid?: true
  }

  export type Follow_trackersCountAggregateInputType = {
    id?: true
    created_at?: true
    fid?: true
    following_fids?: true
    following_changes?: true
    follower_fids?: true
    follower_changes?: true
    _all?: true
  }

  export type Follow_trackersAggregateArgs = {
    /**
     * Filter which follow_trackers to aggregate.
     */
    where?: follow_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follow_trackers to fetch.
     */
    orderBy?: Enumerable<follow_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: follow_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follow_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follow_trackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned follow_trackers
    **/
    _count?: true | Follow_trackersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Follow_trackersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Follow_trackersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Follow_trackersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Follow_trackersMaxAggregateInputType
  }

  export type GetFollow_trackersAggregateType<T extends Follow_trackersAggregateArgs> = {
        [P in keyof T & keyof AggregateFollow_trackers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollow_trackers[P]>
      : GetScalarType<T[P], AggregateFollow_trackers[P]>
  }




  export type Follow_trackersGroupByArgs = {
    where?: follow_trackersWhereInput
    orderBy?: Enumerable<follow_trackersOrderByWithAggregationInput>
    by: Follow_trackersScalarFieldEnum[]
    having?: follow_trackersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Follow_trackersCountAggregateInputType | true
    _avg?: Follow_trackersAvgAggregateInputType
    _sum?: Follow_trackersSumAggregateInputType
    _min?: Follow_trackersMinAggregateInputType
    _max?: Follow_trackersMaxAggregateInputType
  }


  export type Follow_trackersGroupByOutputType = {
    id: number
    created_at: Date | null
    fid: number | null
    following_fids: JsonValue | null
    following_changes: JsonValue | null
    follower_fids: JsonValue | null
    follower_changes: JsonValue | null
    _count: Follow_trackersCountAggregateOutputType | null
    _avg: Follow_trackersAvgAggregateOutputType | null
    _sum: Follow_trackersSumAggregateOutputType | null
    _min: Follow_trackersMinAggregateOutputType | null
    _max: Follow_trackersMaxAggregateOutputType | null
  }

  type GetFollow_trackersGroupByPayload<T extends Follow_trackersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Follow_trackersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Follow_trackersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Follow_trackersGroupByOutputType[P]>
            : GetScalarType<T[P], Follow_trackersGroupByOutputType[P]>
        }
      >
    >


  export type follow_trackersSelect = {
    id?: boolean
    created_at?: boolean
    fid?: boolean
    following_fids?: boolean
    following_changes?: boolean
    follower_fids?: boolean
    follower_changes?: boolean
  }


  export type follow_trackersGetPayload<S extends boolean | null | undefined | follow_trackersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? follow_trackers :
    S extends undefined ? never :
    S extends { include: any } & (follow_trackersArgs | follow_trackersFindManyArgs)
    ? follow_trackers 
    : S extends { select: any } & (follow_trackersArgs | follow_trackersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof follow_trackers ? follow_trackers[P] : never
  } 
      : follow_trackers


  type follow_trackersCountArgs = 
    Omit<follow_trackersFindManyArgs, 'select' | 'include'> & {
      select?: Follow_trackersCountAggregateInputType | true
    }

  export interface follow_trackersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Follow_trackers that matches the filter.
     * @param {follow_trackersFindUniqueArgs} args - Arguments to find a Follow_trackers
     * @example
     * // Get one Follow_trackers
     * const follow_trackers = await prisma.follow_trackers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends follow_trackersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, follow_trackersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'follow_trackers'> extends True ? Prisma__follow_trackersClient<follow_trackersGetPayload<T>> : Prisma__follow_trackersClient<follow_trackersGetPayload<T> | null, null>

    /**
     * Find one Follow_trackers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {follow_trackersFindUniqueOrThrowArgs} args - Arguments to find a Follow_trackers
     * @example
     * // Get one Follow_trackers
     * const follow_trackers = await prisma.follow_trackers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends follow_trackersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, follow_trackersFindUniqueOrThrowArgs>
    ): Prisma__follow_trackersClient<follow_trackersGetPayload<T>>

    /**
     * Find the first Follow_trackers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {follow_trackersFindFirstArgs} args - Arguments to find a Follow_trackers
     * @example
     * // Get one Follow_trackers
     * const follow_trackers = await prisma.follow_trackers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends follow_trackersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, follow_trackersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'follow_trackers'> extends True ? Prisma__follow_trackersClient<follow_trackersGetPayload<T>> : Prisma__follow_trackersClient<follow_trackersGetPayload<T> | null, null>

    /**
     * Find the first Follow_trackers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {follow_trackersFindFirstOrThrowArgs} args - Arguments to find a Follow_trackers
     * @example
     * // Get one Follow_trackers
     * const follow_trackers = await prisma.follow_trackers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends follow_trackersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, follow_trackersFindFirstOrThrowArgs>
    ): Prisma__follow_trackersClient<follow_trackersGetPayload<T>>

    /**
     * Find zero or more Follow_trackers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {follow_trackersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follow_trackers
     * const follow_trackers = await prisma.follow_trackers.findMany()
     * 
     * // Get first 10 Follow_trackers
     * const follow_trackers = await prisma.follow_trackers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const follow_trackersWithIdOnly = await prisma.follow_trackers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends follow_trackersFindManyArgs>(
      args?: SelectSubset<T, follow_trackersFindManyArgs>
    ): Prisma.PrismaPromise<Array<follow_trackersGetPayload<T>>>

    /**
     * Create a Follow_trackers.
     * @param {follow_trackersCreateArgs} args - Arguments to create a Follow_trackers.
     * @example
     * // Create one Follow_trackers
     * const Follow_trackers = await prisma.follow_trackers.create({
     *   data: {
     *     // ... data to create a Follow_trackers
     *   }
     * })
     * 
    **/
    create<T extends follow_trackersCreateArgs>(
      args: SelectSubset<T, follow_trackersCreateArgs>
    ): Prisma__follow_trackersClient<follow_trackersGetPayload<T>>

    /**
     * Create many Follow_trackers.
     *     @param {follow_trackersCreateManyArgs} args - Arguments to create many Follow_trackers.
     *     @example
     *     // Create many Follow_trackers
     *     const follow_trackers = await prisma.follow_trackers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends follow_trackersCreateManyArgs>(
      args?: SelectSubset<T, follow_trackersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Follow_trackers.
     * @param {follow_trackersDeleteArgs} args - Arguments to delete one Follow_trackers.
     * @example
     * // Delete one Follow_trackers
     * const Follow_trackers = await prisma.follow_trackers.delete({
     *   where: {
     *     // ... filter to delete one Follow_trackers
     *   }
     * })
     * 
    **/
    delete<T extends follow_trackersDeleteArgs>(
      args: SelectSubset<T, follow_trackersDeleteArgs>
    ): Prisma__follow_trackersClient<follow_trackersGetPayload<T>>

    /**
     * Update one Follow_trackers.
     * @param {follow_trackersUpdateArgs} args - Arguments to update one Follow_trackers.
     * @example
     * // Update one Follow_trackers
     * const follow_trackers = await prisma.follow_trackers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends follow_trackersUpdateArgs>(
      args: SelectSubset<T, follow_trackersUpdateArgs>
    ): Prisma__follow_trackersClient<follow_trackersGetPayload<T>>

    /**
     * Delete zero or more Follow_trackers.
     * @param {follow_trackersDeleteManyArgs} args - Arguments to filter Follow_trackers to delete.
     * @example
     * // Delete a few Follow_trackers
     * const { count } = await prisma.follow_trackers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends follow_trackersDeleteManyArgs>(
      args?: SelectSubset<T, follow_trackersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follow_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {follow_trackersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follow_trackers
     * const follow_trackers = await prisma.follow_trackers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends follow_trackersUpdateManyArgs>(
      args: SelectSubset<T, follow_trackersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Follow_trackers.
     * @param {follow_trackersUpsertArgs} args - Arguments to update or create a Follow_trackers.
     * @example
     * // Update or create a Follow_trackers
     * const follow_trackers = await prisma.follow_trackers.upsert({
     *   create: {
     *     // ... data to create a Follow_trackers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follow_trackers we want to update
     *   }
     * })
    **/
    upsert<T extends follow_trackersUpsertArgs>(
      args: SelectSubset<T, follow_trackersUpsertArgs>
    ): Prisma__follow_trackersClient<follow_trackersGetPayload<T>>

    /**
     * Count the number of Follow_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {follow_trackersCountArgs} args - Arguments to filter Follow_trackers to count.
     * @example
     * // Count the number of Follow_trackers
     * const count = await prisma.follow_trackers.count({
     *   where: {
     *     // ... the filter for the Follow_trackers we want to count
     *   }
     * })
    **/
    count<T extends follow_trackersCountArgs>(
      args?: Subset<T, follow_trackersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Follow_trackersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follow_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Follow_trackersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Follow_trackersAggregateArgs>(args: Subset<T, Follow_trackersAggregateArgs>): Prisma.PrismaPromise<GetFollow_trackersAggregateType<T>>

    /**
     * Group by Follow_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Follow_trackersGroupByArgs} args - Group by arguments.
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
      T extends Follow_trackersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Follow_trackersGroupByArgs['orderBy'] }
        : { orderBy?: Follow_trackersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Follow_trackersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollow_trackersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for follow_trackers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__follow_trackersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * follow_trackers base type for findUnique actions
   */
  export type follow_trackersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the follow_trackers
     */
    select?: follow_trackersSelect | null
    /**
     * Filter, which follow_trackers to fetch.
     */
    where: follow_trackersWhereUniqueInput
  }

  /**
   * follow_trackers findUnique
   */
  export interface follow_trackersFindUniqueArgs extends follow_trackersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * follow_trackers findUniqueOrThrow
   */
  export type follow_trackersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the follow_trackers
     */
    select?: follow_trackersSelect | null
    /**
     * Filter, which follow_trackers to fetch.
     */
    where: follow_trackersWhereUniqueInput
  }


  /**
   * follow_trackers base type for findFirst actions
   */
  export type follow_trackersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the follow_trackers
     */
    select?: follow_trackersSelect | null
    /**
     * Filter, which follow_trackers to fetch.
     */
    where?: follow_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follow_trackers to fetch.
     */
    orderBy?: Enumerable<follow_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for follow_trackers.
     */
    cursor?: follow_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follow_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follow_trackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of follow_trackers.
     */
    distinct?: Enumerable<Follow_trackersScalarFieldEnum>
  }

  /**
   * follow_trackers findFirst
   */
  export interface follow_trackersFindFirstArgs extends follow_trackersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * follow_trackers findFirstOrThrow
   */
  export type follow_trackersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the follow_trackers
     */
    select?: follow_trackersSelect | null
    /**
     * Filter, which follow_trackers to fetch.
     */
    where?: follow_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follow_trackers to fetch.
     */
    orderBy?: Enumerable<follow_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for follow_trackers.
     */
    cursor?: follow_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follow_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follow_trackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of follow_trackers.
     */
    distinct?: Enumerable<Follow_trackersScalarFieldEnum>
  }


  /**
   * follow_trackers findMany
   */
  export type follow_trackersFindManyArgs = {
    /**
     * Select specific fields to fetch from the follow_trackers
     */
    select?: follow_trackersSelect | null
    /**
     * Filter, which follow_trackers to fetch.
     */
    where?: follow_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follow_trackers to fetch.
     */
    orderBy?: Enumerable<follow_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing follow_trackers.
     */
    cursor?: follow_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follow_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follow_trackers.
     */
    skip?: number
    distinct?: Enumerable<Follow_trackersScalarFieldEnum>
  }


  /**
   * follow_trackers create
   */
  export type follow_trackersCreateArgs = {
    /**
     * Select specific fields to fetch from the follow_trackers
     */
    select?: follow_trackersSelect | null
    /**
     * The data needed to create a follow_trackers.
     */
    data: XOR<follow_trackersCreateInput, follow_trackersUncheckedCreateInput>
  }


  /**
   * follow_trackers createMany
   */
  export type follow_trackersCreateManyArgs = {
    /**
     * The data used to create many follow_trackers.
     */
    data: Enumerable<follow_trackersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * follow_trackers update
   */
  export type follow_trackersUpdateArgs = {
    /**
     * Select specific fields to fetch from the follow_trackers
     */
    select?: follow_trackersSelect | null
    /**
     * The data needed to update a follow_trackers.
     */
    data: XOR<follow_trackersUpdateInput, follow_trackersUncheckedUpdateInput>
    /**
     * Choose, which follow_trackers to update.
     */
    where: follow_trackersWhereUniqueInput
  }


  /**
   * follow_trackers updateMany
   */
  export type follow_trackersUpdateManyArgs = {
    /**
     * The data used to update follow_trackers.
     */
    data: XOR<follow_trackersUpdateManyMutationInput, follow_trackersUncheckedUpdateManyInput>
    /**
     * Filter which follow_trackers to update
     */
    where?: follow_trackersWhereInput
  }


  /**
   * follow_trackers upsert
   */
  export type follow_trackersUpsertArgs = {
    /**
     * Select specific fields to fetch from the follow_trackers
     */
    select?: follow_trackersSelect | null
    /**
     * The filter to search for the follow_trackers to update in case it exists.
     */
    where: follow_trackersWhereUniqueInput
    /**
     * In case the follow_trackers found by the `where` argument doesn't exist, create a new follow_trackers with this data.
     */
    create: XOR<follow_trackersCreateInput, follow_trackersUncheckedCreateInput>
    /**
     * In case the follow_trackers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<follow_trackersUpdateInput, follow_trackersUncheckedUpdateInput>
  }


  /**
   * follow_trackers delete
   */
  export type follow_trackersDeleteArgs = {
    /**
     * Select specific fields to fetch from the follow_trackers
     */
    select?: follow_trackersSelect | null
    /**
     * Filter which follow_trackers to delete.
     */
    where: follow_trackersWhereUniqueInput
  }


  /**
   * follow_trackers deleteMany
   */
  export type follow_trackersDeleteManyArgs = {
    /**
     * Filter which follow_trackers to delete
     */
    where?: follow_trackersWhereInput
  }


  /**
   * follow_trackers without action
   */
  export type follow_trackersArgs = {
    /**
     * Select specific fields to fetch from the follow_trackers
     */
    select?: follow_trackersSelect | null
  }



  /**
   * Model follower_trackers
   */


  export type AggregateFollower_trackers = {
    _count: Follower_trackersCountAggregateOutputType | null
    _avg: Follower_trackersAvgAggregateOutputType | null
    _sum: Follower_trackersSumAggregateOutputType | null
    _min: Follower_trackersMinAggregateOutputType | null
    _max: Follower_trackersMaxAggregateOutputType | null
  }

  export type Follower_trackersAvgAggregateOutputType = {
    id: number | null
    fid: number | null
  }

  export type Follower_trackersSumAggregateOutputType = {
    id: bigint | null
    fid: bigint | null
  }

  export type Follower_trackersMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    fid: bigint | null
  }

  export type Follower_trackersMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    fid: bigint | null
  }

  export type Follower_trackersCountAggregateOutputType = {
    id: number
    created_at: number
    added: number
    removed: number
    fid: number
    _all: number
  }


  export type Follower_trackersAvgAggregateInputType = {
    id?: true
    fid?: true
  }

  export type Follower_trackersSumAggregateInputType = {
    id?: true
    fid?: true
  }

  export type Follower_trackersMinAggregateInputType = {
    id?: true
    created_at?: true
    fid?: true
  }

  export type Follower_trackersMaxAggregateInputType = {
    id?: true
    created_at?: true
    fid?: true
  }

  export type Follower_trackersCountAggregateInputType = {
    id?: true
    created_at?: true
    added?: true
    removed?: true
    fid?: true
    _all?: true
  }

  export type Follower_trackersAggregateArgs = {
    /**
     * Filter which follower_trackers to aggregate.
     */
    where?: follower_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follower_trackers to fetch.
     */
    orderBy?: Enumerable<follower_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: follower_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follower_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follower_trackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned follower_trackers
    **/
    _count?: true | Follower_trackersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Follower_trackersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Follower_trackersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Follower_trackersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Follower_trackersMaxAggregateInputType
  }

  export type GetFollower_trackersAggregateType<T extends Follower_trackersAggregateArgs> = {
        [P in keyof T & keyof AggregateFollower_trackers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollower_trackers[P]>
      : GetScalarType<T[P], AggregateFollower_trackers[P]>
  }




  export type Follower_trackersGroupByArgs = {
    where?: follower_trackersWhereInput
    orderBy?: Enumerable<follower_trackersOrderByWithAggregationInput>
    by: Follower_trackersScalarFieldEnum[]
    having?: follower_trackersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Follower_trackersCountAggregateInputType | true
    _avg?: Follower_trackersAvgAggregateInputType
    _sum?: Follower_trackersSumAggregateInputType
    _min?: Follower_trackersMinAggregateInputType
    _max?: Follower_trackersMaxAggregateInputType
  }


  export type Follower_trackersGroupByOutputType = {
    id: bigint
    created_at: Date
    added: JsonValue | null
    removed: JsonValue | null
    fid: bigint
    _count: Follower_trackersCountAggregateOutputType | null
    _avg: Follower_trackersAvgAggregateOutputType | null
    _sum: Follower_trackersSumAggregateOutputType | null
    _min: Follower_trackersMinAggregateOutputType | null
    _max: Follower_trackersMaxAggregateOutputType | null
  }

  type GetFollower_trackersGroupByPayload<T extends Follower_trackersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Follower_trackersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Follower_trackersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Follower_trackersGroupByOutputType[P]>
            : GetScalarType<T[P], Follower_trackersGroupByOutputType[P]>
        }
      >
    >


  export type follower_trackersSelect = {
    id?: boolean
    created_at?: boolean
    added?: boolean
    removed?: boolean
    fid?: boolean
  }


  export type follower_trackersGetPayload<S extends boolean | null | undefined | follower_trackersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? follower_trackers :
    S extends undefined ? never :
    S extends { include: any } & (follower_trackersArgs | follower_trackersFindManyArgs)
    ? follower_trackers 
    : S extends { select: any } & (follower_trackersArgs | follower_trackersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof follower_trackers ? follower_trackers[P] : never
  } 
      : follower_trackers


  type follower_trackersCountArgs = 
    Omit<follower_trackersFindManyArgs, 'select' | 'include'> & {
      select?: Follower_trackersCountAggregateInputType | true
    }

  export interface follower_trackersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Follower_trackers that matches the filter.
     * @param {follower_trackersFindUniqueArgs} args - Arguments to find a Follower_trackers
     * @example
     * // Get one Follower_trackers
     * const follower_trackers = await prisma.follower_trackers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends follower_trackersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, follower_trackersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'follower_trackers'> extends True ? Prisma__follower_trackersClient<follower_trackersGetPayload<T>> : Prisma__follower_trackersClient<follower_trackersGetPayload<T> | null, null>

    /**
     * Find one Follower_trackers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {follower_trackersFindUniqueOrThrowArgs} args - Arguments to find a Follower_trackers
     * @example
     * // Get one Follower_trackers
     * const follower_trackers = await prisma.follower_trackers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends follower_trackersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, follower_trackersFindUniqueOrThrowArgs>
    ): Prisma__follower_trackersClient<follower_trackersGetPayload<T>>

    /**
     * Find the first Follower_trackers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {follower_trackersFindFirstArgs} args - Arguments to find a Follower_trackers
     * @example
     * // Get one Follower_trackers
     * const follower_trackers = await prisma.follower_trackers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends follower_trackersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, follower_trackersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'follower_trackers'> extends True ? Prisma__follower_trackersClient<follower_trackersGetPayload<T>> : Prisma__follower_trackersClient<follower_trackersGetPayload<T> | null, null>

    /**
     * Find the first Follower_trackers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {follower_trackersFindFirstOrThrowArgs} args - Arguments to find a Follower_trackers
     * @example
     * // Get one Follower_trackers
     * const follower_trackers = await prisma.follower_trackers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends follower_trackersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, follower_trackersFindFirstOrThrowArgs>
    ): Prisma__follower_trackersClient<follower_trackersGetPayload<T>>

    /**
     * Find zero or more Follower_trackers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {follower_trackersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follower_trackers
     * const follower_trackers = await prisma.follower_trackers.findMany()
     * 
     * // Get first 10 Follower_trackers
     * const follower_trackers = await prisma.follower_trackers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const follower_trackersWithIdOnly = await prisma.follower_trackers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends follower_trackersFindManyArgs>(
      args?: SelectSubset<T, follower_trackersFindManyArgs>
    ): Prisma.PrismaPromise<Array<follower_trackersGetPayload<T>>>

    /**
     * Create a Follower_trackers.
     * @param {follower_trackersCreateArgs} args - Arguments to create a Follower_trackers.
     * @example
     * // Create one Follower_trackers
     * const Follower_trackers = await prisma.follower_trackers.create({
     *   data: {
     *     // ... data to create a Follower_trackers
     *   }
     * })
     * 
    **/
    create<T extends follower_trackersCreateArgs>(
      args: SelectSubset<T, follower_trackersCreateArgs>
    ): Prisma__follower_trackersClient<follower_trackersGetPayload<T>>

    /**
     * Create many Follower_trackers.
     *     @param {follower_trackersCreateManyArgs} args - Arguments to create many Follower_trackers.
     *     @example
     *     // Create many Follower_trackers
     *     const follower_trackers = await prisma.follower_trackers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends follower_trackersCreateManyArgs>(
      args?: SelectSubset<T, follower_trackersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Follower_trackers.
     * @param {follower_trackersDeleteArgs} args - Arguments to delete one Follower_trackers.
     * @example
     * // Delete one Follower_trackers
     * const Follower_trackers = await prisma.follower_trackers.delete({
     *   where: {
     *     // ... filter to delete one Follower_trackers
     *   }
     * })
     * 
    **/
    delete<T extends follower_trackersDeleteArgs>(
      args: SelectSubset<T, follower_trackersDeleteArgs>
    ): Prisma__follower_trackersClient<follower_trackersGetPayload<T>>

    /**
     * Update one Follower_trackers.
     * @param {follower_trackersUpdateArgs} args - Arguments to update one Follower_trackers.
     * @example
     * // Update one Follower_trackers
     * const follower_trackers = await prisma.follower_trackers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends follower_trackersUpdateArgs>(
      args: SelectSubset<T, follower_trackersUpdateArgs>
    ): Prisma__follower_trackersClient<follower_trackersGetPayload<T>>

    /**
     * Delete zero or more Follower_trackers.
     * @param {follower_trackersDeleteManyArgs} args - Arguments to filter Follower_trackers to delete.
     * @example
     * // Delete a few Follower_trackers
     * const { count } = await prisma.follower_trackers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends follower_trackersDeleteManyArgs>(
      args?: SelectSubset<T, follower_trackersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follower_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {follower_trackersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follower_trackers
     * const follower_trackers = await prisma.follower_trackers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends follower_trackersUpdateManyArgs>(
      args: SelectSubset<T, follower_trackersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Follower_trackers.
     * @param {follower_trackersUpsertArgs} args - Arguments to update or create a Follower_trackers.
     * @example
     * // Update or create a Follower_trackers
     * const follower_trackers = await prisma.follower_trackers.upsert({
     *   create: {
     *     // ... data to create a Follower_trackers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follower_trackers we want to update
     *   }
     * })
    **/
    upsert<T extends follower_trackersUpsertArgs>(
      args: SelectSubset<T, follower_trackersUpsertArgs>
    ): Prisma__follower_trackersClient<follower_trackersGetPayload<T>>

    /**
     * Count the number of Follower_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {follower_trackersCountArgs} args - Arguments to filter Follower_trackers to count.
     * @example
     * // Count the number of Follower_trackers
     * const count = await prisma.follower_trackers.count({
     *   where: {
     *     // ... the filter for the Follower_trackers we want to count
     *   }
     * })
    **/
    count<T extends follower_trackersCountArgs>(
      args?: Subset<T, follower_trackersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Follower_trackersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follower_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Follower_trackersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Follower_trackersAggregateArgs>(args: Subset<T, Follower_trackersAggregateArgs>): Prisma.PrismaPromise<GetFollower_trackersAggregateType<T>>

    /**
     * Group by Follower_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Follower_trackersGroupByArgs} args - Group by arguments.
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
      T extends Follower_trackersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Follower_trackersGroupByArgs['orderBy'] }
        : { orderBy?: Follower_trackersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Follower_trackersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollower_trackersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for follower_trackers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__follower_trackersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * follower_trackers base type for findUnique actions
   */
  export type follower_trackersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the follower_trackers
     */
    select?: follower_trackersSelect | null
    /**
     * Filter, which follower_trackers to fetch.
     */
    where: follower_trackersWhereUniqueInput
  }

  /**
   * follower_trackers findUnique
   */
  export interface follower_trackersFindUniqueArgs extends follower_trackersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * follower_trackers findUniqueOrThrow
   */
  export type follower_trackersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the follower_trackers
     */
    select?: follower_trackersSelect | null
    /**
     * Filter, which follower_trackers to fetch.
     */
    where: follower_trackersWhereUniqueInput
  }


  /**
   * follower_trackers base type for findFirst actions
   */
  export type follower_trackersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the follower_trackers
     */
    select?: follower_trackersSelect | null
    /**
     * Filter, which follower_trackers to fetch.
     */
    where?: follower_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follower_trackers to fetch.
     */
    orderBy?: Enumerable<follower_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for follower_trackers.
     */
    cursor?: follower_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follower_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follower_trackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of follower_trackers.
     */
    distinct?: Enumerable<Follower_trackersScalarFieldEnum>
  }

  /**
   * follower_trackers findFirst
   */
  export interface follower_trackersFindFirstArgs extends follower_trackersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * follower_trackers findFirstOrThrow
   */
  export type follower_trackersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the follower_trackers
     */
    select?: follower_trackersSelect | null
    /**
     * Filter, which follower_trackers to fetch.
     */
    where?: follower_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follower_trackers to fetch.
     */
    orderBy?: Enumerable<follower_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for follower_trackers.
     */
    cursor?: follower_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follower_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follower_trackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of follower_trackers.
     */
    distinct?: Enumerable<Follower_trackersScalarFieldEnum>
  }


  /**
   * follower_trackers findMany
   */
  export type follower_trackersFindManyArgs = {
    /**
     * Select specific fields to fetch from the follower_trackers
     */
    select?: follower_trackersSelect | null
    /**
     * Filter, which follower_trackers to fetch.
     */
    where?: follower_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follower_trackers to fetch.
     */
    orderBy?: Enumerable<follower_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing follower_trackers.
     */
    cursor?: follower_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follower_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follower_trackers.
     */
    skip?: number
    distinct?: Enumerable<Follower_trackersScalarFieldEnum>
  }


  /**
   * follower_trackers create
   */
  export type follower_trackersCreateArgs = {
    /**
     * Select specific fields to fetch from the follower_trackers
     */
    select?: follower_trackersSelect | null
    /**
     * The data needed to create a follower_trackers.
     */
    data: XOR<follower_trackersCreateInput, follower_trackersUncheckedCreateInput>
  }


  /**
   * follower_trackers createMany
   */
  export type follower_trackersCreateManyArgs = {
    /**
     * The data used to create many follower_trackers.
     */
    data: Enumerable<follower_trackersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * follower_trackers update
   */
  export type follower_trackersUpdateArgs = {
    /**
     * Select specific fields to fetch from the follower_trackers
     */
    select?: follower_trackersSelect | null
    /**
     * The data needed to update a follower_trackers.
     */
    data: XOR<follower_trackersUpdateInput, follower_trackersUncheckedUpdateInput>
    /**
     * Choose, which follower_trackers to update.
     */
    where: follower_trackersWhereUniqueInput
  }


  /**
   * follower_trackers updateMany
   */
  export type follower_trackersUpdateManyArgs = {
    /**
     * The data used to update follower_trackers.
     */
    data: XOR<follower_trackersUpdateManyMutationInput, follower_trackersUncheckedUpdateManyInput>
    /**
     * Filter which follower_trackers to update
     */
    where?: follower_trackersWhereInput
  }


  /**
   * follower_trackers upsert
   */
  export type follower_trackersUpsertArgs = {
    /**
     * Select specific fields to fetch from the follower_trackers
     */
    select?: follower_trackersSelect | null
    /**
     * The filter to search for the follower_trackers to update in case it exists.
     */
    where: follower_trackersWhereUniqueInput
    /**
     * In case the follower_trackers found by the `where` argument doesn't exist, create a new follower_trackers with this data.
     */
    create: XOR<follower_trackersCreateInput, follower_trackersUncheckedCreateInput>
    /**
     * In case the follower_trackers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<follower_trackersUpdateInput, follower_trackersUncheckedUpdateInput>
  }


  /**
   * follower_trackers delete
   */
  export type follower_trackersDeleteArgs = {
    /**
     * Select specific fields to fetch from the follower_trackers
     */
    select?: follower_trackersSelect | null
    /**
     * Filter which follower_trackers to delete.
     */
    where: follower_trackersWhereUniqueInput
  }


  /**
   * follower_trackers deleteMany
   */
  export type follower_trackersDeleteManyArgs = {
    /**
     * Filter which follower_trackers to delete
     */
    where?: follower_trackersWhereInput
  }


  /**
   * follower_trackers without action
   */
  export type follower_trackersArgs = {
    /**
     * Select specific fields to fetch from the follower_trackers
     */
    select?: follower_trackersSelect | null
  }



  /**
   * Model following_trackers
   */


  export type AggregateFollowing_trackers = {
    _count: Following_trackersCountAggregateOutputType | null
    _avg: Following_trackersAvgAggregateOutputType | null
    _sum: Following_trackersSumAggregateOutputType | null
    _min: Following_trackersMinAggregateOutputType | null
    _max: Following_trackersMaxAggregateOutputType | null
  }

  export type Following_trackersAvgAggregateOutputType = {
    id: number | null
    fid: number | null
  }

  export type Following_trackersSumAggregateOutputType = {
    id: bigint | null
    fid: bigint | null
  }

  export type Following_trackersMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    fid: bigint | null
  }

  export type Following_trackersMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    fid: bigint | null
  }

  export type Following_trackersCountAggregateOutputType = {
    id: number
    created_at: number
    added: number
    removed: number
    fid: number
    _all: number
  }


  export type Following_trackersAvgAggregateInputType = {
    id?: true
    fid?: true
  }

  export type Following_trackersSumAggregateInputType = {
    id?: true
    fid?: true
  }

  export type Following_trackersMinAggregateInputType = {
    id?: true
    created_at?: true
    fid?: true
  }

  export type Following_trackersMaxAggregateInputType = {
    id?: true
    created_at?: true
    fid?: true
  }

  export type Following_trackersCountAggregateInputType = {
    id?: true
    created_at?: true
    added?: true
    removed?: true
    fid?: true
    _all?: true
  }

  export type Following_trackersAggregateArgs = {
    /**
     * Filter which following_trackers to aggregate.
     */
    where?: following_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of following_trackers to fetch.
     */
    orderBy?: Enumerable<following_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: following_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` following_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` following_trackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned following_trackers
    **/
    _count?: true | Following_trackersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Following_trackersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Following_trackersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Following_trackersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Following_trackersMaxAggregateInputType
  }

  export type GetFollowing_trackersAggregateType<T extends Following_trackersAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowing_trackers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowing_trackers[P]>
      : GetScalarType<T[P], AggregateFollowing_trackers[P]>
  }




  export type Following_trackersGroupByArgs = {
    where?: following_trackersWhereInput
    orderBy?: Enumerable<following_trackersOrderByWithAggregationInput>
    by: Following_trackersScalarFieldEnum[]
    having?: following_trackersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Following_trackersCountAggregateInputType | true
    _avg?: Following_trackersAvgAggregateInputType
    _sum?: Following_trackersSumAggregateInputType
    _min?: Following_trackersMinAggregateInputType
    _max?: Following_trackersMaxAggregateInputType
  }


  export type Following_trackersGroupByOutputType = {
    id: bigint
    created_at: Date
    added: JsonValue
    removed: JsonValue
    fid: bigint
    _count: Following_trackersCountAggregateOutputType | null
    _avg: Following_trackersAvgAggregateOutputType | null
    _sum: Following_trackersSumAggregateOutputType | null
    _min: Following_trackersMinAggregateOutputType | null
    _max: Following_trackersMaxAggregateOutputType | null
  }

  type GetFollowing_trackersGroupByPayload<T extends Following_trackersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Following_trackersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Following_trackersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Following_trackersGroupByOutputType[P]>
            : GetScalarType<T[P], Following_trackersGroupByOutputType[P]>
        }
      >
    >


  export type following_trackersSelect = {
    id?: boolean
    created_at?: boolean
    added?: boolean
    removed?: boolean
    fid?: boolean
  }


  export type following_trackersGetPayload<S extends boolean | null | undefined | following_trackersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? following_trackers :
    S extends undefined ? never :
    S extends { include: any } & (following_trackersArgs | following_trackersFindManyArgs)
    ? following_trackers 
    : S extends { select: any } & (following_trackersArgs | following_trackersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof following_trackers ? following_trackers[P] : never
  } 
      : following_trackers


  type following_trackersCountArgs = 
    Omit<following_trackersFindManyArgs, 'select' | 'include'> & {
      select?: Following_trackersCountAggregateInputType | true
    }

  export interface following_trackersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Following_trackers that matches the filter.
     * @param {following_trackersFindUniqueArgs} args - Arguments to find a Following_trackers
     * @example
     * // Get one Following_trackers
     * const following_trackers = await prisma.following_trackers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends following_trackersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, following_trackersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'following_trackers'> extends True ? Prisma__following_trackersClient<following_trackersGetPayload<T>> : Prisma__following_trackersClient<following_trackersGetPayload<T> | null, null>

    /**
     * Find one Following_trackers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {following_trackersFindUniqueOrThrowArgs} args - Arguments to find a Following_trackers
     * @example
     * // Get one Following_trackers
     * const following_trackers = await prisma.following_trackers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends following_trackersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, following_trackersFindUniqueOrThrowArgs>
    ): Prisma__following_trackersClient<following_trackersGetPayload<T>>

    /**
     * Find the first Following_trackers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {following_trackersFindFirstArgs} args - Arguments to find a Following_trackers
     * @example
     * // Get one Following_trackers
     * const following_trackers = await prisma.following_trackers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends following_trackersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, following_trackersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'following_trackers'> extends True ? Prisma__following_trackersClient<following_trackersGetPayload<T>> : Prisma__following_trackersClient<following_trackersGetPayload<T> | null, null>

    /**
     * Find the first Following_trackers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {following_trackersFindFirstOrThrowArgs} args - Arguments to find a Following_trackers
     * @example
     * // Get one Following_trackers
     * const following_trackers = await prisma.following_trackers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends following_trackersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, following_trackersFindFirstOrThrowArgs>
    ): Prisma__following_trackersClient<following_trackersGetPayload<T>>

    /**
     * Find zero or more Following_trackers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {following_trackersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Following_trackers
     * const following_trackers = await prisma.following_trackers.findMany()
     * 
     * // Get first 10 Following_trackers
     * const following_trackers = await prisma.following_trackers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const following_trackersWithIdOnly = await prisma.following_trackers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends following_trackersFindManyArgs>(
      args?: SelectSubset<T, following_trackersFindManyArgs>
    ): Prisma.PrismaPromise<Array<following_trackersGetPayload<T>>>

    /**
     * Create a Following_trackers.
     * @param {following_trackersCreateArgs} args - Arguments to create a Following_trackers.
     * @example
     * // Create one Following_trackers
     * const Following_trackers = await prisma.following_trackers.create({
     *   data: {
     *     // ... data to create a Following_trackers
     *   }
     * })
     * 
    **/
    create<T extends following_trackersCreateArgs>(
      args: SelectSubset<T, following_trackersCreateArgs>
    ): Prisma__following_trackersClient<following_trackersGetPayload<T>>

    /**
     * Create many Following_trackers.
     *     @param {following_trackersCreateManyArgs} args - Arguments to create many Following_trackers.
     *     @example
     *     // Create many Following_trackers
     *     const following_trackers = await prisma.following_trackers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends following_trackersCreateManyArgs>(
      args?: SelectSubset<T, following_trackersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Following_trackers.
     * @param {following_trackersDeleteArgs} args - Arguments to delete one Following_trackers.
     * @example
     * // Delete one Following_trackers
     * const Following_trackers = await prisma.following_trackers.delete({
     *   where: {
     *     // ... filter to delete one Following_trackers
     *   }
     * })
     * 
    **/
    delete<T extends following_trackersDeleteArgs>(
      args: SelectSubset<T, following_trackersDeleteArgs>
    ): Prisma__following_trackersClient<following_trackersGetPayload<T>>

    /**
     * Update one Following_trackers.
     * @param {following_trackersUpdateArgs} args - Arguments to update one Following_trackers.
     * @example
     * // Update one Following_trackers
     * const following_trackers = await prisma.following_trackers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends following_trackersUpdateArgs>(
      args: SelectSubset<T, following_trackersUpdateArgs>
    ): Prisma__following_trackersClient<following_trackersGetPayload<T>>

    /**
     * Delete zero or more Following_trackers.
     * @param {following_trackersDeleteManyArgs} args - Arguments to filter Following_trackers to delete.
     * @example
     * // Delete a few Following_trackers
     * const { count } = await prisma.following_trackers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends following_trackersDeleteManyArgs>(
      args?: SelectSubset<T, following_trackersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Following_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {following_trackersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Following_trackers
     * const following_trackers = await prisma.following_trackers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends following_trackersUpdateManyArgs>(
      args: SelectSubset<T, following_trackersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Following_trackers.
     * @param {following_trackersUpsertArgs} args - Arguments to update or create a Following_trackers.
     * @example
     * // Update or create a Following_trackers
     * const following_trackers = await prisma.following_trackers.upsert({
     *   create: {
     *     // ... data to create a Following_trackers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Following_trackers we want to update
     *   }
     * })
    **/
    upsert<T extends following_trackersUpsertArgs>(
      args: SelectSubset<T, following_trackersUpsertArgs>
    ): Prisma__following_trackersClient<following_trackersGetPayload<T>>

    /**
     * Count the number of Following_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {following_trackersCountArgs} args - Arguments to filter Following_trackers to count.
     * @example
     * // Count the number of Following_trackers
     * const count = await prisma.following_trackers.count({
     *   where: {
     *     // ... the filter for the Following_trackers we want to count
     *   }
     * })
    **/
    count<T extends following_trackersCountArgs>(
      args?: Subset<T, following_trackersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Following_trackersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Following_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Following_trackersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Following_trackersAggregateArgs>(args: Subset<T, Following_trackersAggregateArgs>): Prisma.PrismaPromise<GetFollowing_trackersAggregateType<T>>

    /**
     * Group by Following_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Following_trackersGroupByArgs} args - Group by arguments.
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
      T extends Following_trackersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Following_trackersGroupByArgs['orderBy'] }
        : { orderBy?: Following_trackersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Following_trackersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowing_trackersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for following_trackers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__following_trackersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * following_trackers base type for findUnique actions
   */
  export type following_trackersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the following_trackers
     */
    select?: following_trackersSelect | null
    /**
     * Filter, which following_trackers to fetch.
     */
    where: following_trackersWhereUniqueInput
  }

  /**
   * following_trackers findUnique
   */
  export interface following_trackersFindUniqueArgs extends following_trackersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * following_trackers findUniqueOrThrow
   */
  export type following_trackersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the following_trackers
     */
    select?: following_trackersSelect | null
    /**
     * Filter, which following_trackers to fetch.
     */
    where: following_trackersWhereUniqueInput
  }


  /**
   * following_trackers base type for findFirst actions
   */
  export type following_trackersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the following_trackers
     */
    select?: following_trackersSelect | null
    /**
     * Filter, which following_trackers to fetch.
     */
    where?: following_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of following_trackers to fetch.
     */
    orderBy?: Enumerable<following_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for following_trackers.
     */
    cursor?: following_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` following_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` following_trackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of following_trackers.
     */
    distinct?: Enumerable<Following_trackersScalarFieldEnum>
  }

  /**
   * following_trackers findFirst
   */
  export interface following_trackersFindFirstArgs extends following_trackersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * following_trackers findFirstOrThrow
   */
  export type following_trackersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the following_trackers
     */
    select?: following_trackersSelect | null
    /**
     * Filter, which following_trackers to fetch.
     */
    where?: following_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of following_trackers to fetch.
     */
    orderBy?: Enumerable<following_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for following_trackers.
     */
    cursor?: following_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` following_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` following_trackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of following_trackers.
     */
    distinct?: Enumerable<Following_trackersScalarFieldEnum>
  }


  /**
   * following_trackers findMany
   */
  export type following_trackersFindManyArgs = {
    /**
     * Select specific fields to fetch from the following_trackers
     */
    select?: following_trackersSelect | null
    /**
     * Filter, which following_trackers to fetch.
     */
    where?: following_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of following_trackers to fetch.
     */
    orderBy?: Enumerable<following_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing following_trackers.
     */
    cursor?: following_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` following_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` following_trackers.
     */
    skip?: number
    distinct?: Enumerable<Following_trackersScalarFieldEnum>
  }


  /**
   * following_trackers create
   */
  export type following_trackersCreateArgs = {
    /**
     * Select specific fields to fetch from the following_trackers
     */
    select?: following_trackersSelect | null
    /**
     * The data needed to create a following_trackers.
     */
    data: XOR<following_trackersCreateInput, following_trackersUncheckedCreateInput>
  }


  /**
   * following_trackers createMany
   */
  export type following_trackersCreateManyArgs = {
    /**
     * The data used to create many following_trackers.
     */
    data: Enumerable<following_trackersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * following_trackers update
   */
  export type following_trackersUpdateArgs = {
    /**
     * Select specific fields to fetch from the following_trackers
     */
    select?: following_trackersSelect | null
    /**
     * The data needed to update a following_trackers.
     */
    data: XOR<following_trackersUpdateInput, following_trackersUncheckedUpdateInput>
    /**
     * Choose, which following_trackers to update.
     */
    where: following_trackersWhereUniqueInput
  }


  /**
   * following_trackers updateMany
   */
  export type following_trackersUpdateManyArgs = {
    /**
     * The data used to update following_trackers.
     */
    data: XOR<following_trackersUpdateManyMutationInput, following_trackersUncheckedUpdateManyInput>
    /**
     * Filter which following_trackers to update
     */
    where?: following_trackersWhereInput
  }


  /**
   * following_trackers upsert
   */
  export type following_trackersUpsertArgs = {
    /**
     * Select specific fields to fetch from the following_trackers
     */
    select?: following_trackersSelect | null
    /**
     * The filter to search for the following_trackers to update in case it exists.
     */
    where: following_trackersWhereUniqueInput
    /**
     * In case the following_trackers found by the `where` argument doesn't exist, create a new following_trackers with this data.
     */
    create: XOR<following_trackersCreateInput, following_trackersUncheckedCreateInput>
    /**
     * In case the following_trackers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<following_trackersUpdateInput, following_trackersUncheckedUpdateInput>
  }


  /**
   * following_trackers delete
   */
  export type following_trackersDeleteArgs = {
    /**
     * Select specific fields to fetch from the following_trackers
     */
    select?: following_trackersSelect | null
    /**
     * Filter which following_trackers to delete.
     */
    where: following_trackersWhereUniqueInput
  }


  /**
   * following_trackers deleteMany
   */
  export type following_trackersDeleteManyArgs = {
    /**
     * Filter which following_trackers to delete
     */
    where?: following_trackersWhereInput
  }


  /**
   * following_trackers without action
   */
  export type following_trackersArgs = {
    /**
     * Select specific fields to fetch from the following_trackers
     */
    select?: following_trackersSelect | null
  }



  /**
   * Model profile_trackers
   */


  export type AggregateProfile_trackers = {
    _count: Profile_trackersCountAggregateOutputType | null
    _avg: Profile_trackersAvgAggregateOutputType | null
    _sum: Profile_trackersSumAggregateOutputType | null
    _min: Profile_trackersMinAggregateOutputType | null
    _max: Profile_trackersMaxAggregateOutputType | null
  }

  export type Profile_trackersAvgAggregateOutputType = {
    id: number | null
    fid: number | null
    following_count: number | null
    follower_count: number | null
  }

  export type Profile_trackersSumAggregateOutputType = {
    id: number | null
    fid: number | null
    following_count: number | null
    follower_count: number | null
  }

  export type Profile_trackersMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    fid: number | null
    username: string | null
    display_name: string | null
    bio: string | null
    following_count: number | null
    follower_count: number | null
    pfp_url: string | null
  }

  export type Profile_trackersMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    fid: number | null
    username: string | null
    display_name: string | null
    bio: string | null
    following_count: number | null
    follower_count: number | null
    pfp_url: string | null
  }

  export type Profile_trackersCountAggregateOutputType = {
    id: number
    created_at: number
    fid: number
    username: number
    display_name: number
    bio: number
    following_count: number
    follower_count: number
    pfp_url: number
    _all: number
  }


  export type Profile_trackersAvgAggregateInputType = {
    id?: true
    fid?: true
    following_count?: true
    follower_count?: true
  }

  export type Profile_trackersSumAggregateInputType = {
    id?: true
    fid?: true
    following_count?: true
    follower_count?: true
  }

  export type Profile_trackersMinAggregateInputType = {
    id?: true
    created_at?: true
    fid?: true
    username?: true
    display_name?: true
    bio?: true
    following_count?: true
    follower_count?: true
    pfp_url?: true
  }

  export type Profile_trackersMaxAggregateInputType = {
    id?: true
    created_at?: true
    fid?: true
    username?: true
    display_name?: true
    bio?: true
    following_count?: true
    follower_count?: true
    pfp_url?: true
  }

  export type Profile_trackersCountAggregateInputType = {
    id?: true
    created_at?: true
    fid?: true
    username?: true
    display_name?: true
    bio?: true
    following_count?: true
    follower_count?: true
    pfp_url?: true
    _all?: true
  }

  export type Profile_trackersAggregateArgs = {
    /**
     * Filter which profile_trackers to aggregate.
     */
    where?: profile_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profile_trackers to fetch.
     */
    orderBy?: Enumerable<profile_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profile_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profile_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profile_trackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profile_trackers
    **/
    _count?: true | Profile_trackersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Profile_trackersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Profile_trackersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Profile_trackersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Profile_trackersMaxAggregateInputType
  }

  export type GetProfile_trackersAggregateType<T extends Profile_trackersAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile_trackers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile_trackers[P]>
      : GetScalarType<T[P], AggregateProfile_trackers[P]>
  }




  export type Profile_trackersGroupByArgs = {
    where?: profile_trackersWhereInput
    orderBy?: Enumerable<profile_trackersOrderByWithAggregationInput>
    by: Profile_trackersScalarFieldEnum[]
    having?: profile_trackersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Profile_trackersCountAggregateInputType | true
    _avg?: Profile_trackersAvgAggregateInputType
    _sum?: Profile_trackersSumAggregateInputType
    _min?: Profile_trackersMinAggregateInputType
    _max?: Profile_trackersMaxAggregateInputType
  }


  export type Profile_trackersGroupByOutputType = {
    id: number
    created_at: Date
    fid: number
    username: string | null
    display_name: string | null
    bio: string | null
    following_count: number | null
    follower_count: number | null
    pfp_url: string | null
    _count: Profile_trackersCountAggregateOutputType | null
    _avg: Profile_trackersAvgAggregateOutputType | null
    _sum: Profile_trackersSumAggregateOutputType | null
    _min: Profile_trackersMinAggregateOutputType | null
    _max: Profile_trackersMaxAggregateOutputType | null
  }

  type GetProfile_trackersGroupByPayload<T extends Profile_trackersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Profile_trackersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Profile_trackersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Profile_trackersGroupByOutputType[P]>
            : GetScalarType<T[P], Profile_trackersGroupByOutputType[P]>
        }
      >
    >


  export type profile_trackersSelect = {
    id?: boolean
    created_at?: boolean
    fid?: boolean
    username?: boolean
    display_name?: boolean
    bio?: boolean
    following_count?: boolean
    follower_count?: boolean
    pfp_url?: boolean
  }


  export type profile_trackersGetPayload<S extends boolean | null | undefined | profile_trackersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? profile_trackers :
    S extends undefined ? never :
    S extends { include: any } & (profile_trackersArgs | profile_trackersFindManyArgs)
    ? profile_trackers 
    : S extends { select: any } & (profile_trackersArgs | profile_trackersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof profile_trackers ? profile_trackers[P] : never
  } 
      : profile_trackers


  type profile_trackersCountArgs = 
    Omit<profile_trackersFindManyArgs, 'select' | 'include'> & {
      select?: Profile_trackersCountAggregateInputType | true
    }

  export interface profile_trackersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Profile_trackers that matches the filter.
     * @param {profile_trackersFindUniqueArgs} args - Arguments to find a Profile_trackers
     * @example
     * // Get one Profile_trackers
     * const profile_trackers = await prisma.profile_trackers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends profile_trackersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, profile_trackersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'profile_trackers'> extends True ? Prisma__profile_trackersClient<profile_trackersGetPayload<T>> : Prisma__profile_trackersClient<profile_trackersGetPayload<T> | null, null>

    /**
     * Find one Profile_trackers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {profile_trackersFindUniqueOrThrowArgs} args - Arguments to find a Profile_trackers
     * @example
     * // Get one Profile_trackers
     * const profile_trackers = await prisma.profile_trackers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends profile_trackersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, profile_trackersFindUniqueOrThrowArgs>
    ): Prisma__profile_trackersClient<profile_trackersGetPayload<T>>

    /**
     * Find the first Profile_trackers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profile_trackersFindFirstArgs} args - Arguments to find a Profile_trackers
     * @example
     * // Get one Profile_trackers
     * const profile_trackers = await prisma.profile_trackers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends profile_trackersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, profile_trackersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'profile_trackers'> extends True ? Prisma__profile_trackersClient<profile_trackersGetPayload<T>> : Prisma__profile_trackersClient<profile_trackersGetPayload<T> | null, null>

    /**
     * Find the first Profile_trackers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profile_trackersFindFirstOrThrowArgs} args - Arguments to find a Profile_trackers
     * @example
     * // Get one Profile_trackers
     * const profile_trackers = await prisma.profile_trackers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends profile_trackersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, profile_trackersFindFirstOrThrowArgs>
    ): Prisma__profile_trackersClient<profile_trackersGetPayload<T>>

    /**
     * Find zero or more Profile_trackers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profile_trackersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profile_trackers
     * const profile_trackers = await prisma.profile_trackers.findMany()
     * 
     * // Get first 10 Profile_trackers
     * const profile_trackers = await prisma.profile_trackers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profile_trackersWithIdOnly = await prisma.profile_trackers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends profile_trackersFindManyArgs>(
      args?: SelectSubset<T, profile_trackersFindManyArgs>
    ): Prisma.PrismaPromise<Array<profile_trackersGetPayload<T>>>

    /**
     * Create a Profile_trackers.
     * @param {profile_trackersCreateArgs} args - Arguments to create a Profile_trackers.
     * @example
     * // Create one Profile_trackers
     * const Profile_trackers = await prisma.profile_trackers.create({
     *   data: {
     *     // ... data to create a Profile_trackers
     *   }
     * })
     * 
    **/
    create<T extends profile_trackersCreateArgs>(
      args: SelectSubset<T, profile_trackersCreateArgs>
    ): Prisma__profile_trackersClient<profile_trackersGetPayload<T>>

    /**
     * Create many Profile_trackers.
     *     @param {profile_trackersCreateManyArgs} args - Arguments to create many Profile_trackers.
     *     @example
     *     // Create many Profile_trackers
     *     const profile_trackers = await prisma.profile_trackers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends profile_trackersCreateManyArgs>(
      args?: SelectSubset<T, profile_trackersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile_trackers.
     * @param {profile_trackersDeleteArgs} args - Arguments to delete one Profile_trackers.
     * @example
     * // Delete one Profile_trackers
     * const Profile_trackers = await prisma.profile_trackers.delete({
     *   where: {
     *     // ... filter to delete one Profile_trackers
     *   }
     * })
     * 
    **/
    delete<T extends profile_trackersDeleteArgs>(
      args: SelectSubset<T, profile_trackersDeleteArgs>
    ): Prisma__profile_trackersClient<profile_trackersGetPayload<T>>

    /**
     * Update one Profile_trackers.
     * @param {profile_trackersUpdateArgs} args - Arguments to update one Profile_trackers.
     * @example
     * // Update one Profile_trackers
     * const profile_trackers = await prisma.profile_trackers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends profile_trackersUpdateArgs>(
      args: SelectSubset<T, profile_trackersUpdateArgs>
    ): Prisma__profile_trackersClient<profile_trackersGetPayload<T>>

    /**
     * Delete zero or more Profile_trackers.
     * @param {profile_trackersDeleteManyArgs} args - Arguments to filter Profile_trackers to delete.
     * @example
     * // Delete a few Profile_trackers
     * const { count } = await prisma.profile_trackers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends profile_trackersDeleteManyArgs>(
      args?: SelectSubset<T, profile_trackersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profile_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profile_trackersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profile_trackers
     * const profile_trackers = await prisma.profile_trackers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends profile_trackersUpdateManyArgs>(
      args: SelectSubset<T, profile_trackersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile_trackers.
     * @param {profile_trackersUpsertArgs} args - Arguments to update or create a Profile_trackers.
     * @example
     * // Update or create a Profile_trackers
     * const profile_trackers = await prisma.profile_trackers.upsert({
     *   create: {
     *     // ... data to create a Profile_trackers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile_trackers we want to update
     *   }
     * })
    **/
    upsert<T extends profile_trackersUpsertArgs>(
      args: SelectSubset<T, profile_trackersUpsertArgs>
    ): Prisma__profile_trackersClient<profile_trackersGetPayload<T>>

    /**
     * Count the number of Profile_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profile_trackersCountArgs} args - Arguments to filter Profile_trackers to count.
     * @example
     * // Count the number of Profile_trackers
     * const count = await prisma.profile_trackers.count({
     *   where: {
     *     // ... the filter for the Profile_trackers we want to count
     *   }
     * })
    **/
    count<T extends profile_trackersCountArgs>(
      args?: Subset<T, profile_trackersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Profile_trackersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Profile_trackersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Profile_trackersAggregateArgs>(args: Subset<T, Profile_trackersAggregateArgs>): Prisma.PrismaPromise<GetProfile_trackersAggregateType<T>>

    /**
     * Group by Profile_trackers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Profile_trackersGroupByArgs} args - Group by arguments.
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
      T extends Profile_trackersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Profile_trackersGroupByArgs['orderBy'] }
        : { orderBy?: Profile_trackersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Profile_trackersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfile_trackersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for profile_trackers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__profile_trackersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * profile_trackers base type for findUnique actions
   */
  export type profile_trackersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the profile_trackers
     */
    select?: profile_trackersSelect | null
    /**
     * Filter, which profile_trackers to fetch.
     */
    where: profile_trackersWhereUniqueInput
  }

  /**
   * profile_trackers findUnique
   */
  export interface profile_trackersFindUniqueArgs extends profile_trackersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * profile_trackers findUniqueOrThrow
   */
  export type profile_trackersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the profile_trackers
     */
    select?: profile_trackersSelect | null
    /**
     * Filter, which profile_trackers to fetch.
     */
    where: profile_trackersWhereUniqueInput
  }


  /**
   * profile_trackers base type for findFirst actions
   */
  export type profile_trackersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the profile_trackers
     */
    select?: profile_trackersSelect | null
    /**
     * Filter, which profile_trackers to fetch.
     */
    where?: profile_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profile_trackers to fetch.
     */
    orderBy?: Enumerable<profile_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profile_trackers.
     */
    cursor?: profile_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profile_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profile_trackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profile_trackers.
     */
    distinct?: Enumerable<Profile_trackersScalarFieldEnum>
  }

  /**
   * profile_trackers findFirst
   */
  export interface profile_trackersFindFirstArgs extends profile_trackersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * profile_trackers findFirstOrThrow
   */
  export type profile_trackersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the profile_trackers
     */
    select?: profile_trackersSelect | null
    /**
     * Filter, which profile_trackers to fetch.
     */
    where?: profile_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profile_trackers to fetch.
     */
    orderBy?: Enumerable<profile_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profile_trackers.
     */
    cursor?: profile_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profile_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profile_trackers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profile_trackers.
     */
    distinct?: Enumerable<Profile_trackersScalarFieldEnum>
  }


  /**
   * profile_trackers findMany
   */
  export type profile_trackersFindManyArgs = {
    /**
     * Select specific fields to fetch from the profile_trackers
     */
    select?: profile_trackersSelect | null
    /**
     * Filter, which profile_trackers to fetch.
     */
    where?: profile_trackersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profile_trackers to fetch.
     */
    orderBy?: Enumerable<profile_trackersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profile_trackers.
     */
    cursor?: profile_trackersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profile_trackers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profile_trackers.
     */
    skip?: number
    distinct?: Enumerable<Profile_trackersScalarFieldEnum>
  }


  /**
   * profile_trackers create
   */
  export type profile_trackersCreateArgs = {
    /**
     * Select specific fields to fetch from the profile_trackers
     */
    select?: profile_trackersSelect | null
    /**
     * The data needed to create a profile_trackers.
     */
    data: XOR<profile_trackersCreateInput, profile_trackersUncheckedCreateInput>
  }


  /**
   * profile_trackers createMany
   */
  export type profile_trackersCreateManyArgs = {
    /**
     * The data used to create many profile_trackers.
     */
    data: Enumerable<profile_trackersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * profile_trackers update
   */
  export type profile_trackersUpdateArgs = {
    /**
     * Select specific fields to fetch from the profile_trackers
     */
    select?: profile_trackersSelect | null
    /**
     * The data needed to update a profile_trackers.
     */
    data: XOR<profile_trackersUpdateInput, profile_trackersUncheckedUpdateInput>
    /**
     * Choose, which profile_trackers to update.
     */
    where: profile_trackersWhereUniqueInput
  }


  /**
   * profile_trackers updateMany
   */
  export type profile_trackersUpdateManyArgs = {
    /**
     * The data used to update profile_trackers.
     */
    data: XOR<profile_trackersUpdateManyMutationInput, profile_trackersUncheckedUpdateManyInput>
    /**
     * Filter which profile_trackers to update
     */
    where?: profile_trackersWhereInput
  }


  /**
   * profile_trackers upsert
   */
  export type profile_trackersUpsertArgs = {
    /**
     * Select specific fields to fetch from the profile_trackers
     */
    select?: profile_trackersSelect | null
    /**
     * The filter to search for the profile_trackers to update in case it exists.
     */
    where: profile_trackersWhereUniqueInput
    /**
     * In case the profile_trackers found by the `where` argument doesn't exist, create a new profile_trackers with this data.
     */
    create: XOR<profile_trackersCreateInput, profile_trackersUncheckedCreateInput>
    /**
     * In case the profile_trackers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profile_trackersUpdateInput, profile_trackersUncheckedUpdateInput>
  }


  /**
   * profile_trackers delete
   */
  export type profile_trackersDeleteArgs = {
    /**
     * Select specific fields to fetch from the profile_trackers
     */
    select?: profile_trackersSelect | null
    /**
     * Filter which profile_trackers to delete.
     */
    where: profile_trackersWhereUniqueInput
  }


  /**
   * profile_trackers deleteMany
   */
  export type profile_trackersDeleteManyArgs = {
    /**
     * Filter which profile_trackers to delete
     */
    where?: profile_trackersWhereInput
  }


  /**
   * profile_trackers without action
   */
  export type profile_trackersArgs = {
    /**
     * Select specific fields to fetch from the profile_trackers
     */
    select?: profile_trackersSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const Audience_trackersScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    following: 'following',
    followers: 'followers',
    fid: 'fid'
  };

  export type Audience_trackersScalarFieldEnum = (typeof Audience_trackersScalarFieldEnum)[keyof typeof Audience_trackersScalarFieldEnum]


  export const Follow_trackersScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    fid: 'fid',
    following_fids: 'following_fids',
    following_changes: 'following_changes',
    follower_fids: 'follower_fids',
    follower_changes: 'follower_changes'
  };

  export type Follow_trackersScalarFieldEnum = (typeof Follow_trackersScalarFieldEnum)[keyof typeof Follow_trackersScalarFieldEnum]


  export const Follower_trackersScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    added: 'added',
    removed: 'removed',
    fid: 'fid'
  };

  export type Follower_trackersScalarFieldEnum = (typeof Follower_trackersScalarFieldEnum)[keyof typeof Follower_trackersScalarFieldEnum]


  export const Following_trackersScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    added: 'added',
    removed: 'removed',
    fid: 'fid'
  };

  export type Following_trackersScalarFieldEnum = (typeof Following_trackersScalarFieldEnum)[keyof typeof Following_trackersScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const Profile_trackersScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    fid: 'fid',
    username: 'username',
    display_name: 'display_name',
    bio: 'bio',
    following_count: 'following_count',
    follower_count: 'follower_count',
    pfp_url: 'pfp_url'
  };

  export type Profile_trackersScalarFieldEnum = (typeof Profile_trackersScalarFieldEnum)[keyof typeof Profile_trackersScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type audience_trackersWhereInput = {
    AND?: Enumerable<audience_trackersWhereInput>
    OR?: Enumerable<audience_trackersWhereInput>
    NOT?: Enumerable<audience_trackersWhereInput>
    id?: BigIntFilter | bigint | number
    created_at?: DateTimeFilter | Date | string
    following?: JsonFilter
    followers?: JsonFilter
    fid?: BigIntFilter | bigint | number
  }

  export type audience_trackersOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    following?: SortOrder
    followers?: SortOrder
    fid?: SortOrder
  }

  export type audience_trackersWhereUniqueInput = {
    id?: bigint | number
    fid?: bigint | number
  }

  export type audience_trackersOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    following?: SortOrder
    followers?: SortOrder
    fid?: SortOrder
    _count?: audience_trackersCountOrderByAggregateInput
    _avg?: audience_trackersAvgOrderByAggregateInput
    _max?: audience_trackersMaxOrderByAggregateInput
    _min?: audience_trackersMinOrderByAggregateInput
    _sum?: audience_trackersSumOrderByAggregateInput
  }

  export type audience_trackersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<audience_trackersScalarWhereWithAggregatesInput>
    OR?: Enumerable<audience_trackersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<audience_trackersScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    following?: JsonWithAggregatesFilter
    followers?: JsonWithAggregatesFilter
    fid?: BigIntWithAggregatesFilter | bigint | number
  }

  export type follow_trackersWhereInput = {
    AND?: Enumerable<follow_trackersWhereInput>
    OR?: Enumerable<follow_trackersWhereInput>
    NOT?: Enumerable<follow_trackersWhereInput>
    id?: IntFilter | number
    created_at?: DateTimeNullableFilter | Date | string | null
    fid?: IntNullableFilter | number | null
    following_fids?: JsonNullableFilter
    following_changes?: JsonNullableFilter
    follower_fids?: JsonNullableFilter
    follower_changes?: JsonNullableFilter
  }

  export type follow_trackersOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    fid?: SortOrder
    following_fids?: SortOrder
    following_changes?: SortOrder
    follower_fids?: SortOrder
    follower_changes?: SortOrder
  }

  export type follow_trackersWhereUniqueInput = {
    id?: number
  }

  export type follow_trackersOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    fid?: SortOrder
    following_fids?: SortOrder
    following_changes?: SortOrder
    follower_fids?: SortOrder
    follower_changes?: SortOrder
    _count?: follow_trackersCountOrderByAggregateInput
    _avg?: follow_trackersAvgOrderByAggregateInput
    _max?: follow_trackersMaxOrderByAggregateInput
    _min?: follow_trackersMinOrderByAggregateInput
    _sum?: follow_trackersSumOrderByAggregateInput
  }

  export type follow_trackersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<follow_trackersScalarWhereWithAggregatesInput>
    OR?: Enumerable<follow_trackersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<follow_trackersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    fid?: IntNullableWithAggregatesFilter | number | null
    following_fids?: JsonNullableWithAggregatesFilter
    following_changes?: JsonNullableWithAggregatesFilter
    follower_fids?: JsonNullableWithAggregatesFilter
    follower_changes?: JsonNullableWithAggregatesFilter
  }

  export type follower_trackersWhereInput = {
    AND?: Enumerable<follower_trackersWhereInput>
    OR?: Enumerable<follower_trackersWhereInput>
    NOT?: Enumerable<follower_trackersWhereInput>
    id?: BigIntFilter | bigint | number
    created_at?: DateTimeFilter | Date | string
    added?: JsonNullableFilter
    removed?: JsonNullableFilter
    fid?: BigIntFilter | bigint | number
  }

  export type follower_trackersOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    added?: SortOrder
    removed?: SortOrder
    fid?: SortOrder
  }

  export type follower_trackersWhereUniqueInput = {
    id?: bigint | number
  }

  export type follower_trackersOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    added?: SortOrder
    removed?: SortOrder
    fid?: SortOrder
    _count?: follower_trackersCountOrderByAggregateInput
    _avg?: follower_trackersAvgOrderByAggregateInput
    _max?: follower_trackersMaxOrderByAggregateInput
    _min?: follower_trackersMinOrderByAggregateInput
    _sum?: follower_trackersSumOrderByAggregateInput
  }

  export type follower_trackersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<follower_trackersScalarWhereWithAggregatesInput>
    OR?: Enumerable<follower_trackersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<follower_trackersScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    added?: JsonNullableWithAggregatesFilter
    removed?: JsonNullableWithAggregatesFilter
    fid?: BigIntWithAggregatesFilter | bigint | number
  }

  export type following_trackersWhereInput = {
    AND?: Enumerable<following_trackersWhereInput>
    OR?: Enumerable<following_trackersWhereInput>
    NOT?: Enumerable<following_trackersWhereInput>
    id?: BigIntFilter | bigint | number
    created_at?: DateTimeFilter | Date | string
    added?: JsonFilter
    removed?: JsonFilter
    fid?: BigIntFilter | bigint | number
  }

  export type following_trackersOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    added?: SortOrder
    removed?: SortOrder
    fid?: SortOrder
  }

  export type following_trackersWhereUniqueInput = {
    id?: bigint | number
  }

  export type following_trackersOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    added?: SortOrder
    removed?: SortOrder
    fid?: SortOrder
    _count?: following_trackersCountOrderByAggregateInput
    _avg?: following_trackersAvgOrderByAggregateInput
    _max?: following_trackersMaxOrderByAggregateInput
    _min?: following_trackersMinOrderByAggregateInput
    _sum?: following_trackersSumOrderByAggregateInput
  }

  export type following_trackersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<following_trackersScalarWhereWithAggregatesInput>
    OR?: Enumerable<following_trackersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<following_trackersScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    added?: JsonWithAggregatesFilter
    removed?: JsonWithAggregatesFilter
    fid?: BigIntWithAggregatesFilter | bigint | number
  }

  export type profile_trackersWhereInput = {
    AND?: Enumerable<profile_trackersWhereInput>
    OR?: Enumerable<profile_trackersWhereInput>
    NOT?: Enumerable<profile_trackersWhereInput>
    id?: IntFilter | number
    created_at?: DateTimeFilter | Date | string
    fid?: IntFilter | number
    username?: StringNullableFilter | string | null
    display_name?: StringNullableFilter | string | null
    bio?: StringNullableFilter | string | null
    following_count?: IntNullableFilter | number | null
    follower_count?: IntNullableFilter | number | null
    pfp_url?: StringNullableFilter | string | null
  }

  export type profile_trackersOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    bio?: SortOrder
    following_count?: SortOrder
    follower_count?: SortOrder
    pfp_url?: SortOrder
  }

  export type profile_trackersWhereUniqueInput = {
    id?: number
  }

  export type profile_trackersOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    bio?: SortOrder
    following_count?: SortOrder
    follower_count?: SortOrder
    pfp_url?: SortOrder
    _count?: profile_trackersCountOrderByAggregateInput
    _avg?: profile_trackersAvgOrderByAggregateInput
    _max?: profile_trackersMaxOrderByAggregateInput
    _min?: profile_trackersMinOrderByAggregateInput
    _sum?: profile_trackersSumOrderByAggregateInput
  }

  export type profile_trackersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<profile_trackersScalarWhereWithAggregatesInput>
    OR?: Enumerable<profile_trackersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<profile_trackersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    created_at?: DateTimeWithAggregatesFilter | Date | string
    fid?: IntWithAggregatesFilter | number
    username?: StringNullableWithAggregatesFilter | string | null
    display_name?: StringNullableWithAggregatesFilter | string | null
    bio?: StringNullableWithAggregatesFilter | string | null
    following_count?: IntNullableWithAggregatesFilter | number | null
    follower_count?: IntNullableWithAggregatesFilter | number | null
    pfp_url?: StringNullableWithAggregatesFilter | string | null
  }

  export type audience_trackersCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    following: JsonNullValueInput | InputJsonValue
    followers: JsonNullValueInput | InputJsonValue
    fid: bigint | number
  }

  export type audience_trackersUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    following: JsonNullValueInput | InputJsonValue
    followers: JsonNullValueInput | InputJsonValue
    fid: bigint | number
  }

  export type audience_trackersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: JsonNullValueInput | InputJsonValue
    followers?: JsonNullValueInput | InputJsonValue
    fid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type audience_trackersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: JsonNullValueInput | InputJsonValue
    followers?: JsonNullValueInput | InputJsonValue
    fid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type audience_trackersCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    following: JsonNullValueInput | InputJsonValue
    followers: JsonNullValueInput | InputJsonValue
    fid: bigint | number
  }

  export type audience_trackersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: JsonNullValueInput | InputJsonValue
    followers?: JsonNullValueInput | InputJsonValue
    fid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type audience_trackersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: JsonNullValueInput | InputJsonValue
    followers?: JsonNullValueInput | InputJsonValue
    fid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type follow_trackersCreateInput = {
    created_at?: Date | string | null
    fid?: number | null
    following_fids?: NullableJsonNullValueInput | InputJsonValue
    following_changes?: NullableJsonNullValueInput | InputJsonValue
    follower_fids?: NullableJsonNullValueInput | InputJsonValue
    follower_changes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type follow_trackersUncheckedCreateInput = {
    id?: number
    created_at?: Date | string | null
    fid?: number | null
    following_fids?: NullableJsonNullValueInput | InputJsonValue
    following_changes?: NullableJsonNullValueInput | InputJsonValue
    follower_fids?: NullableJsonNullValueInput | InputJsonValue
    follower_changes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type follow_trackersUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fid?: NullableIntFieldUpdateOperationsInput | number | null
    following_fids?: NullableJsonNullValueInput | InputJsonValue
    following_changes?: NullableJsonNullValueInput | InputJsonValue
    follower_fids?: NullableJsonNullValueInput | InputJsonValue
    follower_changes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type follow_trackersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fid?: NullableIntFieldUpdateOperationsInput | number | null
    following_fids?: NullableJsonNullValueInput | InputJsonValue
    following_changes?: NullableJsonNullValueInput | InputJsonValue
    follower_fids?: NullableJsonNullValueInput | InputJsonValue
    follower_changes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type follow_trackersCreateManyInput = {
    id?: number
    created_at?: Date | string | null
    fid?: number | null
    following_fids?: NullableJsonNullValueInput | InputJsonValue
    following_changes?: NullableJsonNullValueInput | InputJsonValue
    follower_fids?: NullableJsonNullValueInput | InputJsonValue
    follower_changes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type follow_trackersUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fid?: NullableIntFieldUpdateOperationsInput | number | null
    following_fids?: NullableJsonNullValueInput | InputJsonValue
    following_changes?: NullableJsonNullValueInput | InputJsonValue
    follower_fids?: NullableJsonNullValueInput | InputJsonValue
    follower_changes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type follow_trackersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fid?: NullableIntFieldUpdateOperationsInput | number | null
    following_fids?: NullableJsonNullValueInput | InputJsonValue
    following_changes?: NullableJsonNullValueInput | InputJsonValue
    follower_fids?: NullableJsonNullValueInput | InputJsonValue
    follower_changes?: NullableJsonNullValueInput | InputJsonValue
  }

  export type follower_trackersCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    added?: NullableJsonNullValueInput | InputJsonValue
    removed?: NullableJsonNullValueInput | InputJsonValue
    fid: bigint | number
  }

  export type follower_trackersUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    added?: NullableJsonNullValueInput | InputJsonValue
    removed?: NullableJsonNullValueInput | InputJsonValue
    fid: bigint | number
  }

  export type follower_trackersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    added?: NullableJsonNullValueInput | InputJsonValue
    removed?: NullableJsonNullValueInput | InputJsonValue
    fid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type follower_trackersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    added?: NullableJsonNullValueInput | InputJsonValue
    removed?: NullableJsonNullValueInput | InputJsonValue
    fid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type follower_trackersCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    added?: NullableJsonNullValueInput | InputJsonValue
    removed?: NullableJsonNullValueInput | InputJsonValue
    fid: bigint | number
  }

  export type follower_trackersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    added?: NullableJsonNullValueInput | InputJsonValue
    removed?: NullableJsonNullValueInput | InputJsonValue
    fid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type follower_trackersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    added?: NullableJsonNullValueInput | InputJsonValue
    removed?: NullableJsonNullValueInput | InputJsonValue
    fid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type following_trackersCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    added: JsonNullValueInput | InputJsonValue
    removed: JsonNullValueInput | InputJsonValue
    fid: bigint | number
  }

  export type following_trackersUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    added: JsonNullValueInput | InputJsonValue
    removed: JsonNullValueInput | InputJsonValue
    fid: bigint | number
  }

  export type following_trackersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    added?: JsonNullValueInput | InputJsonValue
    removed?: JsonNullValueInput | InputJsonValue
    fid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type following_trackersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    added?: JsonNullValueInput | InputJsonValue
    removed?: JsonNullValueInput | InputJsonValue
    fid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type following_trackersCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    added: JsonNullValueInput | InputJsonValue
    removed: JsonNullValueInput | InputJsonValue
    fid: bigint | number
  }

  export type following_trackersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    added?: JsonNullValueInput | InputJsonValue
    removed?: JsonNullValueInput | InputJsonValue
    fid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type following_trackersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    added?: JsonNullValueInput | InputJsonValue
    removed?: JsonNullValueInput | InputJsonValue
    fid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type profile_trackersCreateInput = {
    created_at: Date | string
    fid: number
    username?: string | null
    display_name?: string | null
    bio?: string | null
    following_count?: number | null
    follower_count?: number | null
    pfp_url?: string | null
  }

  export type profile_trackersUncheckedCreateInput = {
    id?: number
    created_at: Date | string
    fid: number
    username?: string | null
    display_name?: string | null
    bio?: string | null
    following_count?: number | null
    follower_count?: number | null
    pfp_url?: string | null
  }

  export type profile_trackersUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    follower_count?: NullableIntFieldUpdateOperationsInput | number | null
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profile_trackersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    follower_count?: NullableIntFieldUpdateOperationsInput | number | null
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profile_trackersCreateManyInput = {
    id?: number
    created_at: Date | string
    fid: number
    username?: string | null
    display_name?: string | null
    bio?: string | null
    following_count?: number | null
    follower_count?: number | null
    pfp_url?: string | null
  }

  export type profile_trackersUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    follower_count?: NullableIntFieldUpdateOperationsInput | number | null
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profile_trackersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fid?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    following_count?: NullableIntFieldUpdateOperationsInput | number | null
    follower_count?: NullableIntFieldUpdateOperationsInput | number | null
    pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type audience_trackersCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    following?: SortOrder
    followers?: SortOrder
    fid?: SortOrder
  }

  export type audience_trackersAvgOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
  }

  export type audience_trackersMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    fid?: SortOrder
  }

  export type audience_trackersMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    fid?: SortOrder
  }

  export type audience_trackersSumOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type follow_trackersCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    fid?: SortOrder
    following_fids?: SortOrder
    following_changes?: SortOrder
    follower_fids?: SortOrder
    follower_changes?: SortOrder
  }

  export type follow_trackersAvgOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
  }

  export type follow_trackersMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    fid?: SortOrder
  }

  export type follow_trackersMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    fid?: SortOrder
  }

  export type follow_trackersSumOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type follower_trackersCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    added?: SortOrder
    removed?: SortOrder
    fid?: SortOrder
  }

  export type follower_trackersAvgOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
  }

  export type follower_trackersMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    fid?: SortOrder
  }

  export type follower_trackersMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    fid?: SortOrder
  }

  export type follower_trackersSumOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
  }

  export type following_trackersCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    added?: SortOrder
    removed?: SortOrder
    fid?: SortOrder
  }

  export type following_trackersAvgOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
  }

  export type following_trackersMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    fid?: SortOrder
  }

  export type following_trackersMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    fid?: SortOrder
  }

  export type following_trackersSumOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type profile_trackersCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    bio?: SortOrder
    following_count?: SortOrder
    follower_count?: SortOrder
    pfp_url?: SortOrder
  }

  export type profile_trackersAvgOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
    following_count?: SortOrder
    follower_count?: SortOrder
  }

  export type profile_trackersMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    bio?: SortOrder
    following_count?: SortOrder
    follower_count?: SortOrder
    pfp_url?: SortOrder
  }

  export type profile_trackersMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    fid?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    bio?: SortOrder
    following_count?: SortOrder
    follower_count?: SortOrder
    pfp_url?: SortOrder
  }

  export type profile_trackersSumOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
    following_count?: SortOrder
    follower_count?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
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