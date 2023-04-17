
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
 * Model casts
 * 
 */
export type casts = {
  hash: string
  thread_hash: string
  parent_hash: string | null
  author_fid: bigint
  author_username: string | null
  author_display_name: string | null
  author_pfp_url: string | null
  author_pfp_verified: boolean | null
  text: string
  published_at: Date
  mentions: Prisma.JsonValue | null
  replies_count: number | null
  reactions_count: number | null
  recasts_count: number | null
  watches_count: number | null
  deleted: boolean | null
  parent_author_fid: bigint | null
  parent_author_username: string | null
  hash_v1: string | null
  parent_hash_v1: string | null
  thread_hash_v1: string | null
}

/**
 * Model profile
 * 
 */
export type profile = {
  id: bigint
  owner: string | null
  username: string | null
  display_name: string | null
  avatar_url: string | null
  avatar_verified: boolean | null
  followers: bigint | null
  following: bigint | null
  bio: string | null
  referrer: string | null
  registered_at: Date | null
  updated_at: Date | null
}

/**
 * Model verification
 * 
 */
export type verification = {
  fid: bigint
  address: string
  created_at: Date | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Casts
 * const casts = await prisma.casts.findMany()
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
   * // Fetch zero or more Casts
   * const casts = await prisma.casts.findMany()
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
   * `prisma.casts`: Exposes CRUD operations for the **casts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Casts
    * const casts = await prisma.casts.findMany()
    * ```
    */
  get casts(): Prisma.castsDelegate<GlobalReject>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.profileDelegate<GlobalReject>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.verificationDelegate<GlobalReject>;
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
    casts: 'casts',
    profile: 'profile',
    verification: 'verification'
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
   * Count Type ProfileCountOutputType
   */


  export type ProfileCountOutputType = {
    casts_casts_author_fidToprofile: number
    casts_casts_parent_author_fidToprofile: number
    verification: number
  }

  export type ProfileCountOutputTypeSelect = {
    casts_casts_author_fidToprofile?: boolean
    casts_casts_parent_author_fidToprofile?: boolean
    verification?: boolean
  }

  export type ProfileCountOutputTypeGetPayload<S extends boolean | null | undefined | ProfileCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProfileCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProfileCountOutputTypeArgs)
    ? ProfileCountOutputType 
    : S extends { select: any } & (ProfileCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProfileCountOutputType ? ProfileCountOutputType[P] : never
  } 
      : ProfileCountOutputType




  // Custom InputTypes

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model casts
   */


  export type AggregateCasts = {
    _count: CastsCountAggregateOutputType | null
    _avg: CastsAvgAggregateOutputType | null
    _sum: CastsSumAggregateOutputType | null
    _min: CastsMinAggregateOutputType | null
    _max: CastsMaxAggregateOutputType | null
  }

  export type CastsAvgAggregateOutputType = {
    author_fid: number | null
    replies_count: number | null
    reactions_count: number | null
    recasts_count: number | null
    watches_count: number | null
    parent_author_fid: number | null
  }

  export type CastsSumAggregateOutputType = {
    author_fid: bigint | null
    replies_count: number | null
    reactions_count: number | null
    recasts_count: number | null
    watches_count: number | null
    parent_author_fid: bigint | null
  }

  export type CastsMinAggregateOutputType = {
    hash: string | null
    thread_hash: string | null
    parent_hash: string | null
    author_fid: bigint | null
    author_username: string | null
    author_display_name: string | null
    author_pfp_url: string | null
    author_pfp_verified: boolean | null
    text: string | null
    published_at: Date | null
    replies_count: number | null
    reactions_count: number | null
    recasts_count: number | null
    watches_count: number | null
    deleted: boolean | null
    parent_author_fid: bigint | null
    parent_author_username: string | null
    hash_v1: string | null
    parent_hash_v1: string | null
    thread_hash_v1: string | null
  }

  export type CastsMaxAggregateOutputType = {
    hash: string | null
    thread_hash: string | null
    parent_hash: string | null
    author_fid: bigint | null
    author_username: string | null
    author_display_name: string | null
    author_pfp_url: string | null
    author_pfp_verified: boolean | null
    text: string | null
    published_at: Date | null
    replies_count: number | null
    reactions_count: number | null
    recasts_count: number | null
    watches_count: number | null
    deleted: boolean | null
    parent_author_fid: bigint | null
    parent_author_username: string | null
    hash_v1: string | null
    parent_hash_v1: string | null
    thread_hash_v1: string | null
  }

  export type CastsCountAggregateOutputType = {
    hash: number
    thread_hash: number
    parent_hash: number
    author_fid: number
    author_username: number
    author_display_name: number
    author_pfp_url: number
    author_pfp_verified: number
    text: number
    published_at: number
    mentions: number
    replies_count: number
    reactions_count: number
    recasts_count: number
    watches_count: number
    deleted: number
    parent_author_fid: number
    parent_author_username: number
    hash_v1: number
    parent_hash_v1: number
    thread_hash_v1: number
    _all: number
  }


  export type CastsAvgAggregateInputType = {
    author_fid?: true
    replies_count?: true
    reactions_count?: true
    recasts_count?: true
    watches_count?: true
    parent_author_fid?: true
  }

  export type CastsSumAggregateInputType = {
    author_fid?: true
    replies_count?: true
    reactions_count?: true
    recasts_count?: true
    watches_count?: true
    parent_author_fid?: true
  }

  export type CastsMinAggregateInputType = {
    hash?: true
    thread_hash?: true
    parent_hash?: true
    author_fid?: true
    author_username?: true
    author_display_name?: true
    author_pfp_url?: true
    author_pfp_verified?: true
    text?: true
    published_at?: true
    replies_count?: true
    reactions_count?: true
    recasts_count?: true
    watches_count?: true
    deleted?: true
    parent_author_fid?: true
    parent_author_username?: true
    hash_v1?: true
    parent_hash_v1?: true
    thread_hash_v1?: true
  }

  export type CastsMaxAggregateInputType = {
    hash?: true
    thread_hash?: true
    parent_hash?: true
    author_fid?: true
    author_username?: true
    author_display_name?: true
    author_pfp_url?: true
    author_pfp_verified?: true
    text?: true
    published_at?: true
    replies_count?: true
    reactions_count?: true
    recasts_count?: true
    watches_count?: true
    deleted?: true
    parent_author_fid?: true
    parent_author_username?: true
    hash_v1?: true
    parent_hash_v1?: true
    thread_hash_v1?: true
  }

  export type CastsCountAggregateInputType = {
    hash?: true
    thread_hash?: true
    parent_hash?: true
    author_fid?: true
    author_username?: true
    author_display_name?: true
    author_pfp_url?: true
    author_pfp_verified?: true
    text?: true
    published_at?: true
    mentions?: true
    replies_count?: true
    reactions_count?: true
    recasts_count?: true
    watches_count?: true
    deleted?: true
    parent_author_fid?: true
    parent_author_username?: true
    hash_v1?: true
    parent_hash_v1?: true
    thread_hash_v1?: true
    _all?: true
  }

  export type CastsAggregateArgs = {
    /**
     * Filter which casts to aggregate.
     */
    where?: castsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of casts to fetch.
     */
    orderBy?: Enumerable<castsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: castsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` casts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` casts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned casts
    **/
    _count?: true | CastsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CastsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CastsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CastsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CastsMaxAggregateInputType
  }

  export type GetCastsAggregateType<T extends CastsAggregateArgs> = {
        [P in keyof T & keyof AggregateCasts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCasts[P]>
      : GetScalarType<T[P], AggregateCasts[P]>
  }




  export type CastsGroupByArgs = {
    where?: castsWhereInput
    orderBy?: Enumerable<castsOrderByWithAggregationInput>
    by: CastsScalarFieldEnum[]
    having?: castsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CastsCountAggregateInputType | true
    _avg?: CastsAvgAggregateInputType
    _sum?: CastsSumAggregateInputType
    _min?: CastsMinAggregateInputType
    _max?: CastsMaxAggregateInputType
  }


  export type CastsGroupByOutputType = {
    hash: string
    thread_hash: string
    parent_hash: string | null
    author_fid: bigint
    author_username: string | null
    author_display_name: string | null
    author_pfp_url: string | null
    author_pfp_verified: boolean | null
    text: string
    published_at: Date
    mentions: JsonValue | null
    replies_count: number | null
    reactions_count: number | null
    recasts_count: number | null
    watches_count: number | null
    deleted: boolean | null
    parent_author_fid: bigint | null
    parent_author_username: string | null
    hash_v1: string | null
    parent_hash_v1: string | null
    thread_hash_v1: string | null
    _count: CastsCountAggregateOutputType | null
    _avg: CastsAvgAggregateOutputType | null
    _sum: CastsSumAggregateOutputType | null
    _min: CastsMinAggregateOutputType | null
    _max: CastsMaxAggregateOutputType | null
  }

  type GetCastsGroupByPayload<T extends CastsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CastsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CastsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CastsGroupByOutputType[P]>
            : GetScalarType<T[P], CastsGroupByOutputType[P]>
        }
      >
    >


  export type castsSelect = {
    hash?: boolean
    thread_hash?: boolean
    parent_hash?: boolean
    author_fid?: boolean
    author_username?: boolean
    author_display_name?: boolean
    author_pfp_url?: boolean
    author_pfp_verified?: boolean
    text?: boolean
    published_at?: boolean
    mentions?: boolean
    replies_count?: boolean
    reactions_count?: boolean
    recasts_count?: boolean
    watches_count?: boolean
    deleted?: boolean
    parent_author_fid?: boolean
    parent_author_username?: boolean
    hash_v1?: boolean
    parent_hash_v1?: boolean
    thread_hash_v1?: boolean
    profile_casts_author_fidToprofile?: boolean | profileArgs
    profile_casts_parent_author_fidToprofile?: boolean | profileArgs
  }


  export type castsInclude = {
    profile_casts_author_fidToprofile?: boolean | profileArgs
    profile_casts_parent_author_fidToprofile?: boolean | profileArgs
  }

  export type castsGetPayload<S extends boolean | null | undefined | castsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? casts :
    S extends undefined ? never :
    S extends { include: any } & (castsArgs | castsFindManyArgs)
    ? casts  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'profile_casts_author_fidToprofile' ? profileGetPayload<S['include'][P]> :
        P extends 'profile_casts_parent_author_fidToprofile' ? profileGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (castsArgs | castsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'profile_casts_author_fidToprofile' ? profileGetPayload<S['select'][P]> :
        P extends 'profile_casts_parent_author_fidToprofile' ? profileGetPayload<S['select'][P]> | null :  P extends keyof casts ? casts[P] : never
  } 
      : casts


  type castsCountArgs = 
    Omit<castsFindManyArgs, 'select' | 'include'> & {
      select?: CastsCountAggregateInputType | true
    }

  export interface castsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Casts that matches the filter.
     * @param {castsFindUniqueArgs} args - Arguments to find a Casts
     * @example
     * // Get one Casts
     * const casts = await prisma.casts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends castsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, castsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'casts'> extends True ? Prisma__castsClient<castsGetPayload<T>> : Prisma__castsClient<castsGetPayload<T> | null, null>

    /**
     * Find one Casts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {castsFindUniqueOrThrowArgs} args - Arguments to find a Casts
     * @example
     * // Get one Casts
     * const casts = await prisma.casts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends castsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, castsFindUniqueOrThrowArgs>
    ): Prisma__castsClient<castsGetPayload<T>>

    /**
     * Find the first Casts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {castsFindFirstArgs} args - Arguments to find a Casts
     * @example
     * // Get one Casts
     * const casts = await prisma.casts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends castsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, castsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'casts'> extends True ? Prisma__castsClient<castsGetPayload<T>> : Prisma__castsClient<castsGetPayload<T> | null, null>

    /**
     * Find the first Casts that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {castsFindFirstOrThrowArgs} args - Arguments to find a Casts
     * @example
     * // Get one Casts
     * const casts = await prisma.casts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends castsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, castsFindFirstOrThrowArgs>
    ): Prisma__castsClient<castsGetPayload<T>>

    /**
     * Find zero or more Casts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {castsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Casts
     * const casts = await prisma.casts.findMany()
     * 
     * // Get first 10 Casts
     * const casts = await prisma.casts.findMany({ take: 10 })
     * 
     * // Only select the `hash`
     * const castsWithHashOnly = await prisma.casts.findMany({ select: { hash: true } })
     * 
    **/
    findMany<T extends castsFindManyArgs>(
      args?: SelectSubset<T, castsFindManyArgs>
    ): Prisma.PrismaPromise<Array<castsGetPayload<T>>>

    /**
     * Create a Casts.
     * @param {castsCreateArgs} args - Arguments to create a Casts.
     * @example
     * // Create one Casts
     * const Casts = await prisma.casts.create({
     *   data: {
     *     // ... data to create a Casts
     *   }
     * })
     * 
    **/
    create<T extends castsCreateArgs>(
      args: SelectSubset<T, castsCreateArgs>
    ): Prisma__castsClient<castsGetPayload<T>>

    /**
     * Create many Casts.
     *     @param {castsCreateManyArgs} args - Arguments to create many Casts.
     *     @example
     *     // Create many Casts
     *     const casts = await prisma.casts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends castsCreateManyArgs>(
      args?: SelectSubset<T, castsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Casts.
     * @param {castsDeleteArgs} args - Arguments to delete one Casts.
     * @example
     * // Delete one Casts
     * const Casts = await prisma.casts.delete({
     *   where: {
     *     // ... filter to delete one Casts
     *   }
     * })
     * 
    **/
    delete<T extends castsDeleteArgs>(
      args: SelectSubset<T, castsDeleteArgs>
    ): Prisma__castsClient<castsGetPayload<T>>

    /**
     * Update one Casts.
     * @param {castsUpdateArgs} args - Arguments to update one Casts.
     * @example
     * // Update one Casts
     * const casts = await prisma.casts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends castsUpdateArgs>(
      args: SelectSubset<T, castsUpdateArgs>
    ): Prisma__castsClient<castsGetPayload<T>>

    /**
     * Delete zero or more Casts.
     * @param {castsDeleteManyArgs} args - Arguments to filter Casts to delete.
     * @example
     * // Delete a few Casts
     * const { count } = await prisma.casts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends castsDeleteManyArgs>(
      args?: SelectSubset<T, castsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Casts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {castsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Casts
     * const casts = await prisma.casts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends castsUpdateManyArgs>(
      args: SelectSubset<T, castsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Casts.
     * @param {castsUpsertArgs} args - Arguments to update or create a Casts.
     * @example
     * // Update or create a Casts
     * const casts = await prisma.casts.upsert({
     *   create: {
     *     // ... data to create a Casts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Casts we want to update
     *   }
     * })
    **/
    upsert<T extends castsUpsertArgs>(
      args: SelectSubset<T, castsUpsertArgs>
    ): Prisma__castsClient<castsGetPayload<T>>

    /**
     * Count the number of Casts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {castsCountArgs} args - Arguments to filter Casts to count.
     * @example
     * // Count the number of Casts
     * const count = await prisma.casts.count({
     *   where: {
     *     // ... the filter for the Casts we want to count
     *   }
     * })
    **/
    count<T extends castsCountArgs>(
      args?: Subset<T, castsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CastsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Casts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CastsAggregateArgs>(args: Subset<T, CastsAggregateArgs>): Prisma.PrismaPromise<GetCastsAggregateType<T>>

    /**
     * Group by Casts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CastsGroupByArgs} args - Group by arguments.
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
      T extends CastsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CastsGroupByArgs['orderBy'] }
        : { orderBy?: CastsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CastsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCastsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for casts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__castsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    profile_casts_author_fidToprofile<T extends profileArgs= {}>(args?: Subset<T, profileArgs>): Prisma__profileClient<profileGetPayload<T> | Null>;

    profile_casts_parent_author_fidToprofile<T extends profileArgs= {}>(args?: Subset<T, profileArgs>): Prisma__profileClient<profileGetPayload<T> | Null>;

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
   * casts base type for findUnique actions
   */
  export type castsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the casts
     */
    select?: castsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: castsInclude | null
    /**
     * Filter, which casts to fetch.
     */
    where: castsWhereUniqueInput
  }

  /**
   * casts findUnique
   */
  export interface castsFindUniqueArgs extends castsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * casts findUniqueOrThrow
   */
  export type castsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the casts
     */
    select?: castsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: castsInclude | null
    /**
     * Filter, which casts to fetch.
     */
    where: castsWhereUniqueInput
  }


  /**
   * casts base type for findFirst actions
   */
  export type castsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the casts
     */
    select?: castsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: castsInclude | null
    /**
     * Filter, which casts to fetch.
     */
    where?: castsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of casts to fetch.
     */
    orderBy?: Enumerable<castsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for casts.
     */
    cursor?: castsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` casts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` casts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of casts.
     */
    distinct?: Enumerable<CastsScalarFieldEnum>
  }

  /**
   * casts findFirst
   */
  export interface castsFindFirstArgs extends castsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * casts findFirstOrThrow
   */
  export type castsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the casts
     */
    select?: castsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: castsInclude | null
    /**
     * Filter, which casts to fetch.
     */
    where?: castsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of casts to fetch.
     */
    orderBy?: Enumerable<castsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for casts.
     */
    cursor?: castsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` casts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` casts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of casts.
     */
    distinct?: Enumerable<CastsScalarFieldEnum>
  }


  /**
   * casts findMany
   */
  export type castsFindManyArgs = {
    /**
     * Select specific fields to fetch from the casts
     */
    select?: castsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: castsInclude | null
    /**
     * Filter, which casts to fetch.
     */
    where?: castsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of casts to fetch.
     */
    orderBy?: Enumerable<castsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing casts.
     */
    cursor?: castsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` casts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` casts.
     */
    skip?: number
    distinct?: Enumerable<CastsScalarFieldEnum>
  }


  /**
   * casts create
   */
  export type castsCreateArgs = {
    /**
     * Select specific fields to fetch from the casts
     */
    select?: castsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: castsInclude | null
    /**
     * The data needed to create a casts.
     */
    data: XOR<castsCreateInput, castsUncheckedCreateInput>
  }


  /**
   * casts createMany
   */
  export type castsCreateManyArgs = {
    /**
     * The data used to create many casts.
     */
    data: Enumerable<castsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * casts update
   */
  export type castsUpdateArgs = {
    /**
     * Select specific fields to fetch from the casts
     */
    select?: castsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: castsInclude | null
    /**
     * The data needed to update a casts.
     */
    data: XOR<castsUpdateInput, castsUncheckedUpdateInput>
    /**
     * Choose, which casts to update.
     */
    where: castsWhereUniqueInput
  }


  /**
   * casts updateMany
   */
  export type castsUpdateManyArgs = {
    /**
     * The data used to update casts.
     */
    data: XOR<castsUpdateManyMutationInput, castsUncheckedUpdateManyInput>
    /**
     * Filter which casts to update
     */
    where?: castsWhereInput
  }


  /**
   * casts upsert
   */
  export type castsUpsertArgs = {
    /**
     * Select specific fields to fetch from the casts
     */
    select?: castsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: castsInclude | null
    /**
     * The filter to search for the casts to update in case it exists.
     */
    where: castsWhereUniqueInput
    /**
     * In case the casts found by the `where` argument doesn't exist, create a new casts with this data.
     */
    create: XOR<castsCreateInput, castsUncheckedCreateInput>
    /**
     * In case the casts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<castsUpdateInput, castsUncheckedUpdateInput>
  }


  /**
   * casts delete
   */
  export type castsDeleteArgs = {
    /**
     * Select specific fields to fetch from the casts
     */
    select?: castsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: castsInclude | null
    /**
     * Filter which casts to delete.
     */
    where: castsWhereUniqueInput
  }


  /**
   * casts deleteMany
   */
  export type castsDeleteManyArgs = {
    /**
     * Filter which casts to delete
     */
    where?: castsWhereInput
  }


  /**
   * casts without action
   */
  export type castsArgs = {
    /**
     * Select specific fields to fetch from the casts
     */
    select?: castsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: castsInclude | null
  }



  /**
   * Model profile
   */


  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    followers: number | null
    following: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: bigint | null
    followers: bigint | null
    following: bigint | null
  }

  export type ProfileMinAggregateOutputType = {
    id: bigint | null
    owner: string | null
    username: string | null
    display_name: string | null
    avatar_url: string | null
    avatar_verified: boolean | null
    followers: bigint | null
    following: bigint | null
    bio: string | null
    referrer: string | null
    registered_at: Date | null
    updated_at: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: bigint | null
    owner: string | null
    username: string | null
    display_name: string | null
    avatar_url: string | null
    avatar_verified: boolean | null
    followers: bigint | null
    following: bigint | null
    bio: string | null
    referrer: string | null
    registered_at: Date | null
    updated_at: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    owner: number
    username: number
    display_name: number
    avatar_url: number
    avatar_verified: number
    followers: number
    following: number
    bio: number
    referrer: number
    registered_at: number
    updated_at: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    followers?: true
    following?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    followers?: true
    following?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    owner?: true
    username?: true
    display_name?: true
    avatar_url?: true
    avatar_verified?: true
    followers?: true
    following?: true
    bio?: true
    referrer?: true
    registered_at?: true
    updated_at?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    owner?: true
    username?: true
    display_name?: true
    avatar_url?: true
    avatar_verified?: true
    followers?: true
    following?: true
    bio?: true
    referrer?: true
    registered_at?: true
    updated_at?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    owner?: true
    username?: true
    display_name?: true
    avatar_url?: true
    avatar_verified?: true
    followers?: true
    following?: true
    bio?: true
    referrer?: true
    registered_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProfileAggregateArgs = {
    /**
     * Filter which profile to aggregate.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: Enumerable<profileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs = {
    where?: profileWhereInput
    orderBy?: Enumerable<profileOrderByWithAggregationInput>
    by: ProfileScalarFieldEnum[]
    having?: profileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }


  export type ProfileGroupByOutputType = {
    id: bigint
    owner: string | null
    username: string | null
    display_name: string | null
    avatar_url: string | null
    avatar_verified: boolean | null
    followers: bigint | null
    following: bigint | null
    bio: string | null
    referrer: string | null
    registered_at: Date | null
    updated_at: Date | null
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type profileSelect = {
    id?: boolean
    owner?: boolean
    username?: boolean
    display_name?: boolean
    avatar_url?: boolean
    avatar_verified?: boolean
    followers?: boolean
    following?: boolean
    bio?: boolean
    referrer?: boolean
    registered_at?: boolean
    updated_at?: boolean
    casts_casts_author_fidToprofile?: boolean | profile$casts_casts_author_fidToprofileArgs
    casts_casts_parent_author_fidToprofile?: boolean | profile$casts_casts_parent_author_fidToprofileArgs
    verification?: boolean | profile$verificationArgs
    _count?: boolean | ProfileCountOutputTypeArgs
  }


  export type profileInclude = {
    casts_casts_author_fidToprofile?: boolean | profile$casts_casts_author_fidToprofileArgs
    casts_casts_parent_author_fidToprofile?: boolean | profile$casts_casts_parent_author_fidToprofileArgs
    verification?: boolean | profile$verificationArgs
    _count?: boolean | ProfileCountOutputTypeArgs
  }

  export type profileGetPayload<S extends boolean | null | undefined | profileArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? profile :
    S extends undefined ? never :
    S extends { include: any } & (profileArgs | profileFindManyArgs)
    ? profile  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'casts_casts_author_fidToprofile' ? Array < castsGetPayload<S['include'][P]>>  :
        P extends 'casts_casts_parent_author_fidToprofile' ? Array < castsGetPayload<S['include'][P]>>  :
        P extends 'verification' ? Array < verificationGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProfileCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (profileArgs | profileFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'casts_casts_author_fidToprofile' ? Array < castsGetPayload<S['select'][P]>>  :
        P extends 'casts_casts_parent_author_fidToprofile' ? Array < castsGetPayload<S['select'][P]>>  :
        P extends 'verification' ? Array < verificationGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProfileCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof profile ? profile[P] : never
  } 
      : profile


  type profileCountArgs = 
    Omit<profileFindManyArgs, 'select' | 'include'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface profileDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Profile that matches the filter.
     * @param {profileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends profileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, profileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'profile'> extends True ? Prisma__profileClient<profileGetPayload<T>> : Prisma__profileClient<profileGetPayload<T> | null, null>

    /**
     * Find one Profile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {profileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends profileFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, profileFindUniqueOrThrowArgs>
    ): Prisma__profileClient<profileGetPayload<T>>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends profileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, profileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'profile'> extends True ? Prisma__profileClient<profileGetPayload<T>> : Prisma__profileClient<profileGetPayload<T> | null, null>

    /**
     * Find the first Profile that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends profileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, profileFindFirstOrThrowArgs>
    ): Prisma__profileClient<profileGetPayload<T>>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends profileFindManyArgs>(
      args?: SelectSubset<T, profileFindManyArgs>
    ): Prisma.PrismaPromise<Array<profileGetPayload<T>>>

    /**
     * Create a Profile.
     * @param {profileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends profileCreateArgs>(
      args: SelectSubset<T, profileCreateArgs>
    ): Prisma__profileClient<profileGetPayload<T>>

    /**
     * Create many Profiles.
     *     @param {profileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends profileCreateManyArgs>(
      args?: SelectSubset<T, profileCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {profileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends profileDeleteArgs>(
      args: SelectSubset<T, profileDeleteArgs>
    ): Prisma__profileClient<profileGetPayload<T>>

    /**
     * Update one Profile.
     * @param {profileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends profileUpdateArgs>(
      args: SelectSubset<T, profileUpdateArgs>
    ): Prisma__profileClient<profileGetPayload<T>>

    /**
     * Delete zero or more Profiles.
     * @param {profileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends profileDeleteManyArgs>(
      args?: SelectSubset<T, profileDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends profileUpdateManyArgs>(
      args: SelectSubset<T, profileUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {profileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends profileUpsertArgs>(
      args: SelectSubset<T, profileUpsertArgs>
    ): Prisma__profileClient<profileGetPayload<T>>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profileCountArgs>(
      args?: Subset<T, profileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__profileClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    casts_casts_author_fidToprofile<T extends profile$casts_casts_author_fidToprofileArgs= {}>(args?: Subset<T, profile$casts_casts_author_fidToprofileArgs>): Prisma.PrismaPromise<Array<castsGetPayload<T>>| Null>;

    casts_casts_parent_author_fidToprofile<T extends profile$casts_casts_parent_author_fidToprofileArgs= {}>(args?: Subset<T, profile$casts_casts_parent_author_fidToprofileArgs>): Prisma.PrismaPromise<Array<castsGetPayload<T>>| Null>;

    verification<T extends profile$verificationArgs= {}>(args?: Subset<T, profile$verificationArgs>): Prisma.PrismaPromise<Array<verificationGetPayload<T>>| Null>;

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
   * profile base type for findUnique actions
   */
  export type profileFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
    /**
     * Filter, which profile to fetch.
     */
    where: profileWhereUniqueInput
  }

  /**
   * profile findUnique
   */
  export interface profileFindUniqueArgs extends profileFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * profile findUniqueOrThrow
   */
  export type profileFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
    /**
     * Filter, which profile to fetch.
     */
    where: profileWhereUniqueInput
  }


  /**
   * profile base type for findFirst actions
   */
  export type profileFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
    /**
     * Filter, which profile to fetch.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: Enumerable<profileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }

  /**
   * profile findFirst
   */
  export interface profileFindFirstArgs extends profileFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * profile findFirstOrThrow
   */
  export type profileFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
    /**
     * Filter, which profile to fetch.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: Enumerable<profileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * profile findMany
   */
  export type profileFindManyArgs = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: Enumerable<profileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * profile create
   */
  export type profileCreateArgs = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
    /**
     * The data needed to create a profile.
     */
    data: XOR<profileCreateInput, profileUncheckedCreateInput>
  }


  /**
   * profile createMany
   */
  export type profileCreateManyArgs = {
    /**
     * The data used to create many profiles.
     */
    data: Enumerable<profileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * profile update
   */
  export type profileUpdateArgs = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
    /**
     * The data needed to update a profile.
     */
    data: XOR<profileUpdateInput, profileUncheckedUpdateInput>
    /**
     * Choose, which profile to update.
     */
    where: profileWhereUniqueInput
  }


  /**
   * profile updateMany
   */
  export type profileUpdateManyArgs = {
    /**
     * The data used to update profiles.
     */
    data: XOR<profileUpdateManyMutationInput, profileUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profileWhereInput
  }


  /**
   * profile upsert
   */
  export type profileUpsertArgs = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
    /**
     * The filter to search for the profile to update in case it exists.
     */
    where: profileWhereUniqueInput
    /**
     * In case the profile found by the `where` argument doesn't exist, create a new profile with this data.
     */
    create: XOR<profileCreateInput, profileUncheckedCreateInput>
    /**
     * In case the profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profileUpdateInput, profileUncheckedUpdateInput>
  }


  /**
   * profile delete
   */
  export type profileDeleteArgs = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
    /**
     * Filter which profile to delete.
     */
    where: profileWhereUniqueInput
  }


  /**
   * profile deleteMany
   */
  export type profileDeleteManyArgs = {
    /**
     * Filter which profiles to delete
     */
    where?: profileWhereInput
  }


  /**
   * profile.casts_casts_author_fidToprofile
   */
  export type profile$casts_casts_author_fidToprofileArgs = {
    /**
     * Select specific fields to fetch from the casts
     */
    select?: castsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: castsInclude | null
    where?: castsWhereInput
    orderBy?: Enumerable<castsOrderByWithRelationInput>
    cursor?: castsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CastsScalarFieldEnum>
  }


  /**
   * profile.casts_casts_parent_author_fidToprofile
   */
  export type profile$casts_casts_parent_author_fidToprofileArgs = {
    /**
     * Select specific fields to fetch from the casts
     */
    select?: castsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: castsInclude | null
    where?: castsWhereInput
    orderBy?: Enumerable<castsOrderByWithRelationInput>
    cursor?: castsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CastsScalarFieldEnum>
  }


  /**
   * profile.verification
   */
  export type profile$verificationArgs = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: verificationInclude | null
    where?: verificationWhereInput
    orderBy?: Enumerable<verificationOrderByWithRelationInput>
    cursor?: verificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<VerificationScalarFieldEnum>
  }


  /**
   * profile without action
   */
  export type profileArgs = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: profileInclude | null
  }



  /**
   * Model verification
   */


  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _avg: VerificationAvgAggregateOutputType | null
    _sum: VerificationSumAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationAvgAggregateOutputType = {
    fid: number | null
  }

  export type VerificationSumAggregateOutputType = {
    fid: bigint | null
  }

  export type VerificationMinAggregateOutputType = {
    fid: bigint | null
    address: string | null
    created_at: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    fid: bigint | null
    address: string | null
    created_at: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    fid: number
    address: number
    created_at: number
    _all: number
  }


  export type VerificationAvgAggregateInputType = {
    fid?: true
  }

  export type VerificationSumAggregateInputType = {
    fid?: true
  }

  export type VerificationMinAggregateInputType = {
    fid?: true
    address?: true
    created_at?: true
  }

  export type VerificationMaxAggregateInputType = {
    fid?: true
    address?: true
    created_at?: true
  }

  export type VerificationCountAggregateInputType = {
    fid?: true
    address?: true
    created_at?: true
    _all?: true
  }

  export type VerificationAggregateArgs = {
    /**
     * Filter which verification to aggregate.
     */
    where?: verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifications to fetch.
     */
    orderBy?: Enumerable<verificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs = {
    where?: verificationWhereInput
    orderBy?: Enumerable<verificationOrderByWithAggregationInput>
    by: VerificationScalarFieldEnum[]
    having?: verificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _avg?: VerificationAvgAggregateInputType
    _sum?: VerificationSumAggregateInputType
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }


  export type VerificationGroupByOutputType = {
    fid: bigint
    address: string
    created_at: Date | null
    _count: VerificationCountAggregateOutputType | null
    _avg: VerificationAvgAggregateOutputType | null
    _sum: VerificationSumAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type verificationSelect = {
    fid?: boolean
    address?: boolean
    created_at?: boolean
    profile?: boolean | profileArgs
  }


  export type verificationInclude = {
    profile?: boolean | profileArgs
  }

  export type verificationGetPayload<S extends boolean | null | undefined | verificationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? verification :
    S extends undefined ? never :
    S extends { include: any } & (verificationArgs | verificationFindManyArgs)
    ? verification  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'profile' ? profileGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (verificationArgs | verificationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'profile' ? profileGetPayload<S['select'][P]> :  P extends keyof verification ? verification[P] : never
  } 
      : verification


  type verificationCountArgs = 
    Omit<verificationFindManyArgs, 'select' | 'include'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface verificationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Verification that matches the filter.
     * @param {verificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends verificationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, verificationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'verification'> extends True ? Prisma__verificationClient<verificationGetPayload<T>> : Prisma__verificationClient<verificationGetPayload<T> | null, null>

    /**
     * Find one Verification that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {verificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends verificationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, verificationFindUniqueOrThrowArgs>
    ): Prisma__verificationClient<verificationGetPayload<T>>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends verificationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, verificationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'verification'> extends True ? Prisma__verificationClient<verificationGetPayload<T>> : Prisma__verificationClient<verificationGetPayload<T> | null, null>

    /**
     * Find the first Verification that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends verificationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, verificationFindFirstOrThrowArgs>
    ): Prisma__verificationClient<verificationGetPayload<T>>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `fid`
     * const verificationWithFidOnly = await prisma.verification.findMany({ select: { fid: true } })
     * 
    **/
    findMany<T extends verificationFindManyArgs>(
      args?: SelectSubset<T, verificationFindManyArgs>
    ): Prisma.PrismaPromise<Array<verificationGetPayload<T>>>

    /**
     * Create a Verification.
     * @param {verificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
    **/
    create<T extends verificationCreateArgs>(
      args: SelectSubset<T, verificationCreateArgs>
    ): Prisma__verificationClient<verificationGetPayload<T>>

    /**
     * Create many Verifications.
     *     @param {verificationCreateManyArgs} args - Arguments to create many Verifications.
     *     @example
     *     // Create many Verifications
     *     const verification = await prisma.verification.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends verificationCreateManyArgs>(
      args?: SelectSubset<T, verificationCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Verification.
     * @param {verificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
    **/
    delete<T extends verificationDeleteArgs>(
      args: SelectSubset<T, verificationDeleteArgs>
    ): Prisma__verificationClient<verificationGetPayload<T>>

    /**
     * Update one Verification.
     * @param {verificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends verificationUpdateArgs>(
      args: SelectSubset<T, verificationUpdateArgs>
    ): Prisma__verificationClient<verificationGetPayload<T>>

    /**
     * Delete zero or more Verifications.
     * @param {verificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends verificationDeleteManyArgs>(
      args?: SelectSubset<T, verificationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends verificationUpdateManyArgs>(
      args: SelectSubset<T, verificationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Verification.
     * @param {verificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
    **/
    upsert<T extends verificationUpsertArgs>(
      args: SelectSubset<T, verificationUpsertArgs>
    ): Prisma__verificationClient<verificationGetPayload<T>>

    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends verificationCountArgs>(
      args?: Subset<T, verificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__verificationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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

    profile<T extends profileArgs= {}>(args?: Subset<T, profileArgs>): Prisma__profileClient<profileGetPayload<T> | Null>;

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
   * verification base type for findUnique actions
   */
  export type verificationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: verificationInclude | null
    /**
     * Filter, which verification to fetch.
     */
    where: verificationWhereUniqueInput
  }

  /**
   * verification findUnique
   */
  export interface verificationFindUniqueArgs extends verificationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * verification findUniqueOrThrow
   */
  export type verificationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: verificationInclude | null
    /**
     * Filter, which verification to fetch.
     */
    where: verificationWhereUniqueInput
  }


  /**
   * verification base type for findFirst actions
   */
  export type verificationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: verificationInclude | null
    /**
     * Filter, which verification to fetch.
     */
    where?: verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifications to fetch.
     */
    orderBy?: Enumerable<verificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verifications.
     */
    cursor?: verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verifications.
     */
    distinct?: Enumerable<VerificationScalarFieldEnum>
  }

  /**
   * verification findFirst
   */
  export interface verificationFindFirstArgs extends verificationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * verification findFirstOrThrow
   */
  export type verificationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: verificationInclude | null
    /**
     * Filter, which verification to fetch.
     */
    where?: verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifications to fetch.
     */
    orderBy?: Enumerable<verificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verifications.
     */
    cursor?: verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verifications.
     */
    distinct?: Enumerable<VerificationScalarFieldEnum>
  }


  /**
   * verification findMany
   */
  export type verificationFindManyArgs = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: verificationInclude | null
    /**
     * Filter, which verifications to fetch.
     */
    where?: verificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verifications to fetch.
     */
    orderBy?: Enumerable<verificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing verifications.
     */
    cursor?: verificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verifications.
     */
    skip?: number
    distinct?: Enumerable<VerificationScalarFieldEnum>
  }


  /**
   * verification create
   */
  export type verificationCreateArgs = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: verificationInclude | null
    /**
     * The data needed to create a verification.
     */
    data: XOR<verificationCreateInput, verificationUncheckedCreateInput>
  }


  /**
   * verification createMany
   */
  export type verificationCreateManyArgs = {
    /**
     * The data used to create many verifications.
     */
    data: Enumerable<verificationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * verification update
   */
  export type verificationUpdateArgs = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: verificationInclude | null
    /**
     * The data needed to update a verification.
     */
    data: XOR<verificationUpdateInput, verificationUncheckedUpdateInput>
    /**
     * Choose, which verification to update.
     */
    where: verificationWhereUniqueInput
  }


  /**
   * verification updateMany
   */
  export type verificationUpdateManyArgs = {
    /**
     * The data used to update verifications.
     */
    data: XOR<verificationUpdateManyMutationInput, verificationUncheckedUpdateManyInput>
    /**
     * Filter which verifications to update
     */
    where?: verificationWhereInput
  }


  /**
   * verification upsert
   */
  export type verificationUpsertArgs = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: verificationInclude | null
    /**
     * The filter to search for the verification to update in case it exists.
     */
    where: verificationWhereUniqueInput
    /**
     * In case the verification found by the `where` argument doesn't exist, create a new verification with this data.
     */
    create: XOR<verificationCreateInput, verificationUncheckedCreateInput>
    /**
     * In case the verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<verificationUpdateInput, verificationUncheckedUpdateInput>
  }


  /**
   * verification delete
   */
  export type verificationDeleteArgs = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: verificationInclude | null
    /**
     * Filter which verification to delete.
     */
    where: verificationWhereUniqueInput
  }


  /**
   * verification deleteMany
   */
  export type verificationDeleteManyArgs = {
    /**
     * Filter which verifications to delete
     */
    where?: verificationWhereInput
  }


  /**
   * verification without action
   */
  export type verificationArgs = {
    /**
     * Select specific fields to fetch from the verification
     */
    select?: verificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: verificationInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CastsScalarFieldEnum: {
    hash: 'hash',
    thread_hash: 'thread_hash',
    parent_hash: 'parent_hash',
    author_fid: 'author_fid',
    author_username: 'author_username',
    author_display_name: 'author_display_name',
    author_pfp_url: 'author_pfp_url',
    author_pfp_verified: 'author_pfp_verified',
    text: 'text',
    published_at: 'published_at',
    mentions: 'mentions',
    replies_count: 'replies_count',
    reactions_count: 'reactions_count',
    recasts_count: 'recasts_count',
    watches_count: 'watches_count',
    deleted: 'deleted',
    parent_author_fid: 'parent_author_fid',
    parent_author_username: 'parent_author_username',
    hash_v1: 'hash_v1',
    parent_hash_v1: 'parent_hash_v1',
    thread_hash_v1: 'thread_hash_v1'
  };

  export type CastsScalarFieldEnum = (typeof CastsScalarFieldEnum)[keyof typeof CastsScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    owner: 'owner',
    username: 'username',
    display_name: 'display_name',
    avatar_url: 'avatar_url',
    avatar_verified: 'avatar_verified',
    followers: 'followers',
    following: 'following',
    bio: 'bio',
    referrer: 'referrer',
    registered_at: 'registered_at',
    updated_at: 'updated_at'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


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


  export const VerificationScalarFieldEnum: {
    fid: 'fid',
    address: 'address',
    created_at: 'created_at'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type castsWhereInput = {
    AND?: Enumerable<castsWhereInput>
    OR?: Enumerable<castsWhereInput>
    NOT?: Enumerable<castsWhereInput>
    hash?: StringFilter | string
    thread_hash?: StringFilter | string
    parent_hash?: StringNullableFilter | string | null
    author_fid?: BigIntFilter | bigint | number
    author_username?: StringNullableFilter | string | null
    author_display_name?: StringNullableFilter | string | null
    author_pfp_url?: StringNullableFilter | string | null
    author_pfp_verified?: BoolNullableFilter | boolean | null
    text?: StringFilter | string
    published_at?: DateTimeFilter | Date | string
    mentions?: JsonNullableFilter
    replies_count?: IntNullableFilter | number | null
    reactions_count?: IntNullableFilter | number | null
    recasts_count?: IntNullableFilter | number | null
    watches_count?: IntNullableFilter | number | null
    deleted?: BoolNullableFilter | boolean | null
    parent_author_fid?: BigIntNullableFilter | bigint | number | null
    parent_author_username?: StringNullableFilter | string | null
    hash_v1?: StringNullableFilter | string | null
    parent_hash_v1?: StringNullableFilter | string | null
    thread_hash_v1?: StringNullableFilter | string | null
    profile_casts_author_fidToprofile?: XOR<ProfileRelationFilter, profileWhereInput>
    profile_casts_parent_author_fidToprofile?: XOR<ProfileRelationFilter, profileWhereInput> | null
  }

  export type castsOrderByWithRelationInput = {
    hash?: SortOrder
    thread_hash?: SortOrder
    parent_hash?: SortOrder
    author_fid?: SortOrder
    author_username?: SortOrder
    author_display_name?: SortOrder
    author_pfp_url?: SortOrder
    author_pfp_verified?: SortOrder
    text?: SortOrder
    published_at?: SortOrder
    mentions?: SortOrder
    replies_count?: SortOrder
    reactions_count?: SortOrder
    recasts_count?: SortOrder
    watches_count?: SortOrder
    deleted?: SortOrder
    parent_author_fid?: SortOrder
    parent_author_username?: SortOrder
    hash_v1?: SortOrder
    parent_hash_v1?: SortOrder
    thread_hash_v1?: SortOrder
    profile_casts_author_fidToprofile?: profileOrderByWithRelationInput
    profile_casts_parent_author_fidToprofile?: profileOrderByWithRelationInput
  }

  export type castsWhereUniqueInput = {
    hash?: string
  }

  export type castsOrderByWithAggregationInput = {
    hash?: SortOrder
    thread_hash?: SortOrder
    parent_hash?: SortOrder
    author_fid?: SortOrder
    author_username?: SortOrder
    author_display_name?: SortOrder
    author_pfp_url?: SortOrder
    author_pfp_verified?: SortOrder
    text?: SortOrder
    published_at?: SortOrder
    mentions?: SortOrder
    replies_count?: SortOrder
    reactions_count?: SortOrder
    recasts_count?: SortOrder
    watches_count?: SortOrder
    deleted?: SortOrder
    parent_author_fid?: SortOrder
    parent_author_username?: SortOrder
    hash_v1?: SortOrder
    parent_hash_v1?: SortOrder
    thread_hash_v1?: SortOrder
    _count?: castsCountOrderByAggregateInput
    _avg?: castsAvgOrderByAggregateInput
    _max?: castsMaxOrderByAggregateInput
    _min?: castsMinOrderByAggregateInput
    _sum?: castsSumOrderByAggregateInput
  }

  export type castsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<castsScalarWhereWithAggregatesInput>
    OR?: Enumerable<castsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<castsScalarWhereWithAggregatesInput>
    hash?: StringWithAggregatesFilter | string
    thread_hash?: StringWithAggregatesFilter | string
    parent_hash?: StringNullableWithAggregatesFilter | string | null
    author_fid?: BigIntWithAggregatesFilter | bigint | number
    author_username?: StringNullableWithAggregatesFilter | string | null
    author_display_name?: StringNullableWithAggregatesFilter | string | null
    author_pfp_url?: StringNullableWithAggregatesFilter | string | null
    author_pfp_verified?: BoolNullableWithAggregatesFilter | boolean | null
    text?: StringWithAggregatesFilter | string
    published_at?: DateTimeWithAggregatesFilter | Date | string
    mentions?: JsonNullableWithAggregatesFilter
    replies_count?: IntNullableWithAggregatesFilter | number | null
    reactions_count?: IntNullableWithAggregatesFilter | number | null
    recasts_count?: IntNullableWithAggregatesFilter | number | null
    watches_count?: IntNullableWithAggregatesFilter | number | null
    deleted?: BoolNullableWithAggregatesFilter | boolean | null
    parent_author_fid?: BigIntNullableWithAggregatesFilter | bigint | number | null
    parent_author_username?: StringNullableWithAggregatesFilter | string | null
    hash_v1?: StringNullableWithAggregatesFilter | string | null
    parent_hash_v1?: StringNullableWithAggregatesFilter | string | null
    thread_hash_v1?: StringNullableWithAggregatesFilter | string | null
  }

  export type profileWhereInput = {
    AND?: Enumerable<profileWhereInput>
    OR?: Enumerable<profileWhereInput>
    NOT?: Enumerable<profileWhereInput>
    id?: BigIntFilter | bigint | number
    owner?: StringNullableFilter | string | null
    username?: StringNullableFilter | string | null
    display_name?: StringNullableFilter | string | null
    avatar_url?: StringNullableFilter | string | null
    avatar_verified?: BoolNullableFilter | boolean | null
    followers?: BigIntNullableFilter | bigint | number | null
    following?: BigIntNullableFilter | bigint | number | null
    bio?: StringNullableFilter | string | null
    referrer?: StringNullableFilter | string | null
    registered_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
    casts_casts_author_fidToprofile?: CastsListRelationFilter
    casts_casts_parent_author_fidToprofile?: CastsListRelationFilter
    verification?: VerificationListRelationFilter
  }

  export type profileOrderByWithRelationInput = {
    id?: SortOrder
    owner?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    avatar_url?: SortOrder
    avatar_verified?: SortOrder
    followers?: SortOrder
    following?: SortOrder
    bio?: SortOrder
    referrer?: SortOrder
    registered_at?: SortOrder
    updated_at?: SortOrder
    casts_casts_author_fidToprofile?: castsOrderByRelationAggregateInput
    casts_casts_parent_author_fidToprofile?: castsOrderByRelationAggregateInput
    verification?: verificationOrderByRelationAggregateInput
  }

  export type profileWhereUniqueInput = {
    id?: bigint | number
  }

  export type profileOrderByWithAggregationInput = {
    id?: SortOrder
    owner?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    avatar_url?: SortOrder
    avatar_verified?: SortOrder
    followers?: SortOrder
    following?: SortOrder
    bio?: SortOrder
    referrer?: SortOrder
    registered_at?: SortOrder
    updated_at?: SortOrder
    _count?: profileCountOrderByAggregateInput
    _avg?: profileAvgOrderByAggregateInput
    _max?: profileMaxOrderByAggregateInput
    _min?: profileMinOrderByAggregateInput
    _sum?: profileSumOrderByAggregateInput
  }

  export type profileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<profileScalarWhereWithAggregatesInput>
    OR?: Enumerable<profileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<profileScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    owner?: StringNullableWithAggregatesFilter | string | null
    username?: StringNullableWithAggregatesFilter | string | null
    display_name?: StringNullableWithAggregatesFilter | string | null
    avatar_url?: StringNullableWithAggregatesFilter | string | null
    avatar_verified?: BoolNullableWithAggregatesFilter | boolean | null
    followers?: BigIntNullableWithAggregatesFilter | bigint | number | null
    following?: BigIntNullableWithAggregatesFilter | bigint | number | null
    bio?: StringNullableWithAggregatesFilter | string | null
    referrer?: StringNullableWithAggregatesFilter | string | null
    registered_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type verificationWhereInput = {
    AND?: Enumerable<verificationWhereInput>
    OR?: Enumerable<verificationWhereInput>
    NOT?: Enumerable<verificationWhereInput>
    fid?: BigIntFilter | bigint | number
    address?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    profile?: XOR<ProfileRelationFilter, profileWhereInput>
  }

  export type verificationOrderByWithRelationInput = {
    fid?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    profile?: profileOrderByWithRelationInput
  }

  export type verificationWhereUniqueInput = {
    fid_address?: verificationFidAddressCompoundUniqueInput
  }

  export type verificationOrderByWithAggregationInput = {
    fid?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    _count?: verificationCountOrderByAggregateInput
    _avg?: verificationAvgOrderByAggregateInput
    _max?: verificationMaxOrderByAggregateInput
    _min?: verificationMinOrderByAggregateInput
    _sum?: verificationSumOrderByAggregateInput
  }

  export type verificationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<verificationScalarWhereWithAggregatesInput>
    OR?: Enumerable<verificationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<verificationScalarWhereWithAggregatesInput>
    fid?: BigIntWithAggregatesFilter | bigint | number
    address?: StringWithAggregatesFilter | string
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type castsCreateInput = {
    hash: string
    thread_hash: string
    parent_hash?: string | null
    author_username?: string | null
    author_display_name?: string | null
    author_pfp_url?: string | null
    author_pfp_verified?: boolean | null
    text: string
    published_at: Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: number | null
    reactions_count?: number | null
    recasts_count?: number | null
    watches_count?: number | null
    deleted?: boolean | null
    parent_author_username?: string | null
    hash_v1?: string | null
    parent_hash_v1?: string | null
    thread_hash_v1?: string | null
    profile_casts_author_fidToprofile: profileCreateNestedOneWithoutCasts_casts_author_fidToprofileInput
    profile_casts_parent_author_fidToprofile?: profileCreateNestedOneWithoutCasts_casts_parent_author_fidToprofileInput
  }

  export type castsUncheckedCreateInput = {
    hash: string
    thread_hash: string
    parent_hash?: string | null
    author_fid: bigint | number
    author_username?: string | null
    author_display_name?: string | null
    author_pfp_url?: string | null
    author_pfp_verified?: boolean | null
    text: string
    published_at: Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: number | null
    reactions_count?: number | null
    recasts_count?: number | null
    watches_count?: number | null
    deleted?: boolean | null
    parent_author_fid?: bigint | number | null
    parent_author_username?: string | null
    hash_v1?: string | null
    parent_hash_v1?: string | null
    thread_hash_v1?: string | null
  }

  export type castsUpdateInput = {
    hash?: StringFieldUpdateOperationsInput | string
    thread_hash?: StringFieldUpdateOperationsInput | string
    parent_hash?: NullableStringFieldUpdateOperationsInput | string | null
    author_username?: NullableStringFieldUpdateOperationsInput | string | null
    author_display_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: NullableIntFieldUpdateOperationsInput | number | null
    reactions_count?: NullableIntFieldUpdateOperationsInput | number | null
    recasts_count?: NullableIntFieldUpdateOperationsInput | number | null
    watches_count?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parent_author_username?: NullableStringFieldUpdateOperationsInput | string | null
    hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    parent_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    thread_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    profile_casts_author_fidToprofile?: profileUpdateOneRequiredWithoutCasts_casts_author_fidToprofileNestedInput
    profile_casts_parent_author_fidToprofile?: profileUpdateOneWithoutCasts_casts_parent_author_fidToprofileNestedInput
  }

  export type castsUncheckedUpdateInput = {
    hash?: StringFieldUpdateOperationsInput | string
    thread_hash?: StringFieldUpdateOperationsInput | string
    parent_hash?: NullableStringFieldUpdateOperationsInput | string | null
    author_fid?: BigIntFieldUpdateOperationsInput | bigint | number
    author_username?: NullableStringFieldUpdateOperationsInput | string | null
    author_display_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: NullableIntFieldUpdateOperationsInput | number | null
    reactions_count?: NullableIntFieldUpdateOperationsInput | number | null
    recasts_count?: NullableIntFieldUpdateOperationsInput | number | null
    watches_count?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parent_author_fid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    parent_author_username?: NullableStringFieldUpdateOperationsInput | string | null
    hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    parent_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    thread_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type castsCreateManyInput = {
    hash: string
    thread_hash: string
    parent_hash?: string | null
    author_fid: bigint | number
    author_username?: string | null
    author_display_name?: string | null
    author_pfp_url?: string | null
    author_pfp_verified?: boolean | null
    text: string
    published_at: Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: number | null
    reactions_count?: number | null
    recasts_count?: number | null
    watches_count?: number | null
    deleted?: boolean | null
    parent_author_fid?: bigint | number | null
    parent_author_username?: string | null
    hash_v1?: string | null
    parent_hash_v1?: string | null
    thread_hash_v1?: string | null
  }

  export type castsUpdateManyMutationInput = {
    hash?: StringFieldUpdateOperationsInput | string
    thread_hash?: StringFieldUpdateOperationsInput | string
    parent_hash?: NullableStringFieldUpdateOperationsInput | string | null
    author_username?: NullableStringFieldUpdateOperationsInput | string | null
    author_display_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: NullableIntFieldUpdateOperationsInput | number | null
    reactions_count?: NullableIntFieldUpdateOperationsInput | number | null
    recasts_count?: NullableIntFieldUpdateOperationsInput | number | null
    watches_count?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parent_author_username?: NullableStringFieldUpdateOperationsInput | string | null
    hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    parent_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    thread_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type castsUncheckedUpdateManyInput = {
    hash?: StringFieldUpdateOperationsInput | string
    thread_hash?: StringFieldUpdateOperationsInput | string
    parent_hash?: NullableStringFieldUpdateOperationsInput | string | null
    author_fid?: BigIntFieldUpdateOperationsInput | bigint | number
    author_username?: NullableStringFieldUpdateOperationsInput | string | null
    author_display_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: NullableIntFieldUpdateOperationsInput | number | null
    reactions_count?: NullableIntFieldUpdateOperationsInput | number | null
    recasts_count?: NullableIntFieldUpdateOperationsInput | number | null
    watches_count?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parent_author_fid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    parent_author_username?: NullableStringFieldUpdateOperationsInput | string | null
    hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    parent_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    thread_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profileCreateInput = {
    id: bigint | number
    owner?: string | null
    username?: string | null
    display_name?: string | null
    avatar_url?: string | null
    avatar_verified?: boolean | null
    followers?: bigint | number | null
    following?: bigint | number | null
    bio?: string | null
    referrer?: string | null
    registered_at?: Date | string | null
    updated_at?: Date | string | null
    casts_casts_author_fidToprofile?: castsCreateNestedManyWithoutProfile_casts_author_fidToprofileInput
    casts_casts_parent_author_fidToprofile?: castsCreateNestedManyWithoutProfile_casts_parent_author_fidToprofileInput
    verification?: verificationCreateNestedManyWithoutProfileInput
  }

  export type profileUncheckedCreateInput = {
    id: bigint | number
    owner?: string | null
    username?: string | null
    display_name?: string | null
    avatar_url?: string | null
    avatar_verified?: boolean | null
    followers?: bigint | number | null
    following?: bigint | number | null
    bio?: string | null
    referrer?: string | null
    registered_at?: Date | string | null
    updated_at?: Date | string | null
    casts_casts_author_fidToprofile?: castsUncheckedCreateNestedManyWithoutProfile_casts_author_fidToprofileInput
    casts_casts_parent_author_fidToprofile?: castsUncheckedCreateNestedManyWithoutProfile_casts_parent_author_fidToprofileInput
    verification?: verificationUncheckedCreateNestedManyWithoutProfileInput
  }

  export type profileUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    casts_casts_author_fidToprofile?: castsUpdateManyWithoutProfile_casts_author_fidToprofileNestedInput
    casts_casts_parent_author_fidToprofile?: castsUpdateManyWithoutProfile_casts_parent_author_fidToprofileNestedInput
    verification?: verificationUpdateManyWithoutProfileNestedInput
  }

  export type profileUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    casts_casts_author_fidToprofile?: castsUncheckedUpdateManyWithoutProfile_casts_author_fidToprofileNestedInput
    casts_casts_parent_author_fidToprofile?: castsUncheckedUpdateManyWithoutProfile_casts_parent_author_fidToprofileNestedInput
    verification?: verificationUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type profileCreateManyInput = {
    id: bigint | number
    owner?: string | null
    username?: string | null
    display_name?: string | null
    avatar_url?: string | null
    avatar_verified?: boolean | null
    followers?: bigint | number | null
    following?: bigint | number | null
    bio?: string | null
    referrer?: string | null
    registered_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type profileUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profileUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type verificationCreateInput = {
    address: string
    created_at?: Date | string | null
    profile: profileCreateNestedOneWithoutVerificationInput
  }

  export type verificationUncheckedCreateInput = {
    fid: bigint | number
    address: string
    created_at?: Date | string | null
  }

  export type verificationUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: profileUpdateOneRequiredWithoutVerificationNestedInput
  }

  export type verificationUncheckedUpdateInput = {
    fid?: BigIntFieldUpdateOperationsInput | bigint | number
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type verificationCreateManyInput = {
    fid: bigint | number
    address: string
    created_at?: Date | string | null
  }

  export type verificationUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type verificationUncheckedUpdateManyInput = {
    fid?: BigIntFieldUpdateOperationsInput | bigint | number
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
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

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
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

  export type BigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type ProfileRelationFilter = {
    is?: profileWhereInput
    isNot?: profileWhereInput
  }

  export type castsCountOrderByAggregateInput = {
    hash?: SortOrder
    thread_hash?: SortOrder
    parent_hash?: SortOrder
    author_fid?: SortOrder
    author_username?: SortOrder
    author_display_name?: SortOrder
    author_pfp_url?: SortOrder
    author_pfp_verified?: SortOrder
    text?: SortOrder
    published_at?: SortOrder
    mentions?: SortOrder
    replies_count?: SortOrder
    reactions_count?: SortOrder
    recasts_count?: SortOrder
    watches_count?: SortOrder
    deleted?: SortOrder
    parent_author_fid?: SortOrder
    parent_author_username?: SortOrder
    hash_v1?: SortOrder
    parent_hash_v1?: SortOrder
    thread_hash_v1?: SortOrder
  }

  export type castsAvgOrderByAggregateInput = {
    author_fid?: SortOrder
    replies_count?: SortOrder
    reactions_count?: SortOrder
    recasts_count?: SortOrder
    watches_count?: SortOrder
    parent_author_fid?: SortOrder
  }

  export type castsMaxOrderByAggregateInput = {
    hash?: SortOrder
    thread_hash?: SortOrder
    parent_hash?: SortOrder
    author_fid?: SortOrder
    author_username?: SortOrder
    author_display_name?: SortOrder
    author_pfp_url?: SortOrder
    author_pfp_verified?: SortOrder
    text?: SortOrder
    published_at?: SortOrder
    replies_count?: SortOrder
    reactions_count?: SortOrder
    recasts_count?: SortOrder
    watches_count?: SortOrder
    deleted?: SortOrder
    parent_author_fid?: SortOrder
    parent_author_username?: SortOrder
    hash_v1?: SortOrder
    parent_hash_v1?: SortOrder
    thread_hash_v1?: SortOrder
  }

  export type castsMinOrderByAggregateInput = {
    hash?: SortOrder
    thread_hash?: SortOrder
    parent_hash?: SortOrder
    author_fid?: SortOrder
    author_username?: SortOrder
    author_display_name?: SortOrder
    author_pfp_url?: SortOrder
    author_pfp_verified?: SortOrder
    text?: SortOrder
    published_at?: SortOrder
    replies_count?: SortOrder
    reactions_count?: SortOrder
    recasts_count?: SortOrder
    watches_count?: SortOrder
    deleted?: SortOrder
    parent_author_fid?: SortOrder
    parent_author_username?: SortOrder
    hash_v1?: SortOrder
    parent_hash_v1?: SortOrder
    thread_hash_v1?: SortOrder
  }

  export type castsSumOrderByAggregateInput = {
    author_fid?: SortOrder
    replies_count?: SortOrder
    reactions_count?: SortOrder
    recasts_count?: SortOrder
    watches_count?: SortOrder
    parent_author_fid?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
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

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
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

  export type BigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
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

  export type CastsListRelationFilter = {
    every?: castsWhereInput
    some?: castsWhereInput
    none?: castsWhereInput
  }

  export type VerificationListRelationFilter = {
    every?: verificationWhereInput
    some?: verificationWhereInput
    none?: verificationWhereInput
  }

  export type castsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type verificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type profileCountOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    avatar_url?: SortOrder
    avatar_verified?: SortOrder
    followers?: SortOrder
    following?: SortOrder
    bio?: SortOrder
    referrer?: SortOrder
    registered_at?: SortOrder
    updated_at?: SortOrder
  }

  export type profileAvgOrderByAggregateInput = {
    id?: SortOrder
    followers?: SortOrder
    following?: SortOrder
  }

  export type profileMaxOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    avatar_url?: SortOrder
    avatar_verified?: SortOrder
    followers?: SortOrder
    following?: SortOrder
    bio?: SortOrder
    referrer?: SortOrder
    registered_at?: SortOrder
    updated_at?: SortOrder
  }

  export type profileMinOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    username?: SortOrder
    display_name?: SortOrder
    avatar_url?: SortOrder
    avatar_verified?: SortOrder
    followers?: SortOrder
    following?: SortOrder
    bio?: SortOrder
    referrer?: SortOrder
    registered_at?: SortOrder
    updated_at?: SortOrder
  }

  export type profileSumOrderByAggregateInput = {
    id?: SortOrder
    followers?: SortOrder
    following?: SortOrder
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

  export type verificationFidAddressCompoundUniqueInput = {
    fid: bigint | number
    address: string
  }

  export type verificationCountOrderByAggregateInput = {
    fid?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type verificationAvgOrderByAggregateInput = {
    fid?: SortOrder
  }

  export type verificationMaxOrderByAggregateInput = {
    fid?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type verificationMinOrderByAggregateInput = {
    fid?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type verificationSumOrderByAggregateInput = {
    fid?: SortOrder
  }

  export type profileCreateNestedOneWithoutCasts_casts_author_fidToprofileInput = {
    create?: XOR<profileCreateWithoutCasts_casts_author_fidToprofileInput, profileUncheckedCreateWithoutCasts_casts_author_fidToprofileInput>
    connectOrCreate?: profileCreateOrConnectWithoutCasts_casts_author_fidToprofileInput
    connect?: profileWhereUniqueInput
  }

  export type profileCreateNestedOneWithoutCasts_casts_parent_author_fidToprofileInput = {
    create?: XOR<profileCreateWithoutCasts_casts_parent_author_fidToprofileInput, profileUncheckedCreateWithoutCasts_casts_parent_author_fidToprofileInput>
    connectOrCreate?: profileCreateOrConnectWithoutCasts_casts_parent_author_fidToprofileInput
    connect?: profileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type profileUpdateOneRequiredWithoutCasts_casts_author_fidToprofileNestedInput = {
    create?: XOR<profileCreateWithoutCasts_casts_author_fidToprofileInput, profileUncheckedCreateWithoutCasts_casts_author_fidToprofileInput>
    connectOrCreate?: profileCreateOrConnectWithoutCasts_casts_author_fidToprofileInput
    upsert?: profileUpsertWithoutCasts_casts_author_fidToprofileInput
    connect?: profileWhereUniqueInput
    update?: XOR<profileUpdateWithoutCasts_casts_author_fidToprofileInput, profileUncheckedUpdateWithoutCasts_casts_author_fidToprofileInput>
  }

  export type profileUpdateOneWithoutCasts_casts_parent_author_fidToprofileNestedInput = {
    create?: XOR<profileCreateWithoutCasts_casts_parent_author_fidToprofileInput, profileUncheckedCreateWithoutCasts_casts_parent_author_fidToprofileInput>
    connectOrCreate?: profileCreateOrConnectWithoutCasts_casts_parent_author_fidToprofileInput
    upsert?: profileUpsertWithoutCasts_casts_parent_author_fidToprofileInput
    disconnect?: boolean
    delete?: boolean
    connect?: profileWhereUniqueInput
    update?: XOR<profileUpdateWithoutCasts_casts_parent_author_fidToprofileInput, profileUncheckedUpdateWithoutCasts_casts_parent_author_fidToprofileInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type castsCreateNestedManyWithoutProfile_casts_author_fidToprofileInput = {
    create?: XOR<Enumerable<castsCreateWithoutProfile_casts_author_fidToprofileInput>, Enumerable<castsUncheckedCreateWithoutProfile_casts_author_fidToprofileInput>>
    connectOrCreate?: Enumerable<castsCreateOrConnectWithoutProfile_casts_author_fidToprofileInput>
    createMany?: castsCreateManyProfile_casts_author_fidToprofileInputEnvelope
    connect?: Enumerable<castsWhereUniqueInput>
  }

  export type castsCreateNestedManyWithoutProfile_casts_parent_author_fidToprofileInput = {
    create?: XOR<Enumerable<castsCreateWithoutProfile_casts_parent_author_fidToprofileInput>, Enumerable<castsUncheckedCreateWithoutProfile_casts_parent_author_fidToprofileInput>>
    connectOrCreate?: Enumerable<castsCreateOrConnectWithoutProfile_casts_parent_author_fidToprofileInput>
    createMany?: castsCreateManyProfile_casts_parent_author_fidToprofileInputEnvelope
    connect?: Enumerable<castsWhereUniqueInput>
  }

  export type verificationCreateNestedManyWithoutProfileInput = {
    create?: XOR<Enumerable<verificationCreateWithoutProfileInput>, Enumerable<verificationUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<verificationCreateOrConnectWithoutProfileInput>
    createMany?: verificationCreateManyProfileInputEnvelope
    connect?: Enumerable<verificationWhereUniqueInput>
  }

  export type castsUncheckedCreateNestedManyWithoutProfile_casts_author_fidToprofileInput = {
    create?: XOR<Enumerable<castsCreateWithoutProfile_casts_author_fidToprofileInput>, Enumerable<castsUncheckedCreateWithoutProfile_casts_author_fidToprofileInput>>
    connectOrCreate?: Enumerable<castsCreateOrConnectWithoutProfile_casts_author_fidToprofileInput>
    createMany?: castsCreateManyProfile_casts_author_fidToprofileInputEnvelope
    connect?: Enumerable<castsWhereUniqueInput>
  }

  export type castsUncheckedCreateNestedManyWithoutProfile_casts_parent_author_fidToprofileInput = {
    create?: XOR<Enumerable<castsCreateWithoutProfile_casts_parent_author_fidToprofileInput>, Enumerable<castsUncheckedCreateWithoutProfile_casts_parent_author_fidToprofileInput>>
    connectOrCreate?: Enumerable<castsCreateOrConnectWithoutProfile_casts_parent_author_fidToprofileInput>
    createMany?: castsCreateManyProfile_casts_parent_author_fidToprofileInputEnvelope
    connect?: Enumerable<castsWhereUniqueInput>
  }

  export type verificationUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<Enumerable<verificationCreateWithoutProfileInput>, Enumerable<verificationUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<verificationCreateOrConnectWithoutProfileInput>
    createMany?: verificationCreateManyProfileInputEnvelope
    connect?: Enumerable<verificationWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type castsUpdateManyWithoutProfile_casts_author_fidToprofileNestedInput = {
    create?: XOR<Enumerable<castsCreateWithoutProfile_casts_author_fidToprofileInput>, Enumerable<castsUncheckedCreateWithoutProfile_casts_author_fidToprofileInput>>
    connectOrCreate?: Enumerable<castsCreateOrConnectWithoutProfile_casts_author_fidToprofileInput>
    upsert?: Enumerable<castsUpsertWithWhereUniqueWithoutProfile_casts_author_fidToprofileInput>
    createMany?: castsCreateManyProfile_casts_author_fidToprofileInputEnvelope
    set?: Enumerable<castsWhereUniqueInput>
    disconnect?: Enumerable<castsWhereUniqueInput>
    delete?: Enumerable<castsWhereUniqueInput>
    connect?: Enumerable<castsWhereUniqueInput>
    update?: Enumerable<castsUpdateWithWhereUniqueWithoutProfile_casts_author_fidToprofileInput>
    updateMany?: Enumerable<castsUpdateManyWithWhereWithoutProfile_casts_author_fidToprofileInput>
    deleteMany?: Enumerable<castsScalarWhereInput>
  }

  export type castsUpdateManyWithoutProfile_casts_parent_author_fidToprofileNestedInput = {
    create?: XOR<Enumerable<castsCreateWithoutProfile_casts_parent_author_fidToprofileInput>, Enumerable<castsUncheckedCreateWithoutProfile_casts_parent_author_fidToprofileInput>>
    connectOrCreate?: Enumerable<castsCreateOrConnectWithoutProfile_casts_parent_author_fidToprofileInput>
    upsert?: Enumerable<castsUpsertWithWhereUniqueWithoutProfile_casts_parent_author_fidToprofileInput>
    createMany?: castsCreateManyProfile_casts_parent_author_fidToprofileInputEnvelope
    set?: Enumerable<castsWhereUniqueInput>
    disconnect?: Enumerable<castsWhereUniqueInput>
    delete?: Enumerable<castsWhereUniqueInput>
    connect?: Enumerable<castsWhereUniqueInput>
    update?: Enumerable<castsUpdateWithWhereUniqueWithoutProfile_casts_parent_author_fidToprofileInput>
    updateMany?: Enumerable<castsUpdateManyWithWhereWithoutProfile_casts_parent_author_fidToprofileInput>
    deleteMany?: Enumerable<castsScalarWhereInput>
  }

  export type verificationUpdateManyWithoutProfileNestedInput = {
    create?: XOR<Enumerable<verificationCreateWithoutProfileInput>, Enumerable<verificationUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<verificationCreateOrConnectWithoutProfileInput>
    upsert?: Enumerable<verificationUpsertWithWhereUniqueWithoutProfileInput>
    createMany?: verificationCreateManyProfileInputEnvelope
    set?: Enumerable<verificationWhereUniqueInput>
    disconnect?: Enumerable<verificationWhereUniqueInput>
    delete?: Enumerable<verificationWhereUniqueInput>
    connect?: Enumerable<verificationWhereUniqueInput>
    update?: Enumerable<verificationUpdateWithWhereUniqueWithoutProfileInput>
    updateMany?: Enumerable<verificationUpdateManyWithWhereWithoutProfileInput>
    deleteMany?: Enumerable<verificationScalarWhereInput>
  }

  export type castsUncheckedUpdateManyWithoutProfile_casts_author_fidToprofileNestedInput = {
    create?: XOR<Enumerable<castsCreateWithoutProfile_casts_author_fidToprofileInput>, Enumerable<castsUncheckedCreateWithoutProfile_casts_author_fidToprofileInput>>
    connectOrCreate?: Enumerable<castsCreateOrConnectWithoutProfile_casts_author_fidToprofileInput>
    upsert?: Enumerable<castsUpsertWithWhereUniqueWithoutProfile_casts_author_fidToprofileInput>
    createMany?: castsCreateManyProfile_casts_author_fidToprofileInputEnvelope
    set?: Enumerable<castsWhereUniqueInput>
    disconnect?: Enumerable<castsWhereUniqueInput>
    delete?: Enumerable<castsWhereUniqueInput>
    connect?: Enumerable<castsWhereUniqueInput>
    update?: Enumerable<castsUpdateWithWhereUniqueWithoutProfile_casts_author_fidToprofileInput>
    updateMany?: Enumerable<castsUpdateManyWithWhereWithoutProfile_casts_author_fidToprofileInput>
    deleteMany?: Enumerable<castsScalarWhereInput>
  }

  export type castsUncheckedUpdateManyWithoutProfile_casts_parent_author_fidToprofileNestedInput = {
    create?: XOR<Enumerable<castsCreateWithoutProfile_casts_parent_author_fidToprofileInput>, Enumerable<castsUncheckedCreateWithoutProfile_casts_parent_author_fidToprofileInput>>
    connectOrCreate?: Enumerable<castsCreateOrConnectWithoutProfile_casts_parent_author_fidToprofileInput>
    upsert?: Enumerable<castsUpsertWithWhereUniqueWithoutProfile_casts_parent_author_fidToprofileInput>
    createMany?: castsCreateManyProfile_casts_parent_author_fidToprofileInputEnvelope
    set?: Enumerable<castsWhereUniqueInput>
    disconnect?: Enumerable<castsWhereUniqueInput>
    delete?: Enumerable<castsWhereUniqueInput>
    connect?: Enumerable<castsWhereUniqueInput>
    update?: Enumerable<castsUpdateWithWhereUniqueWithoutProfile_casts_parent_author_fidToprofileInput>
    updateMany?: Enumerable<castsUpdateManyWithWhereWithoutProfile_casts_parent_author_fidToprofileInput>
    deleteMany?: Enumerable<castsScalarWhereInput>
  }

  export type verificationUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<Enumerable<verificationCreateWithoutProfileInput>, Enumerable<verificationUncheckedCreateWithoutProfileInput>>
    connectOrCreate?: Enumerable<verificationCreateOrConnectWithoutProfileInput>
    upsert?: Enumerable<verificationUpsertWithWhereUniqueWithoutProfileInput>
    createMany?: verificationCreateManyProfileInputEnvelope
    set?: Enumerable<verificationWhereUniqueInput>
    disconnect?: Enumerable<verificationWhereUniqueInput>
    delete?: Enumerable<verificationWhereUniqueInput>
    connect?: Enumerable<verificationWhereUniqueInput>
    update?: Enumerable<verificationUpdateWithWhereUniqueWithoutProfileInput>
    updateMany?: Enumerable<verificationUpdateManyWithWhereWithoutProfileInput>
    deleteMany?: Enumerable<verificationScalarWhereInput>
  }

  export type profileCreateNestedOneWithoutVerificationInput = {
    create?: XOR<profileCreateWithoutVerificationInput, profileUncheckedCreateWithoutVerificationInput>
    connectOrCreate?: profileCreateOrConnectWithoutVerificationInput
    connect?: profileWhereUniqueInput
  }

  export type profileUpdateOneRequiredWithoutVerificationNestedInput = {
    create?: XOR<profileCreateWithoutVerificationInput, profileUncheckedCreateWithoutVerificationInput>
    connectOrCreate?: profileCreateOrConnectWithoutVerificationInput
    upsert?: profileUpsertWithoutVerificationInput
    connect?: profileWhereUniqueInput
    update?: XOR<profileUpdateWithoutVerificationInput, profileUncheckedUpdateWithoutVerificationInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
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

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
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

  export type NestedBigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
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

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
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

  export type NestedBigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
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

  export type profileCreateWithoutCasts_casts_author_fidToprofileInput = {
    id: bigint | number
    owner?: string | null
    username?: string | null
    display_name?: string | null
    avatar_url?: string | null
    avatar_verified?: boolean | null
    followers?: bigint | number | null
    following?: bigint | number | null
    bio?: string | null
    referrer?: string | null
    registered_at?: Date | string | null
    updated_at?: Date | string | null
    casts_casts_parent_author_fidToprofile?: castsCreateNestedManyWithoutProfile_casts_parent_author_fidToprofileInput
    verification?: verificationCreateNestedManyWithoutProfileInput
  }

  export type profileUncheckedCreateWithoutCasts_casts_author_fidToprofileInput = {
    id: bigint | number
    owner?: string | null
    username?: string | null
    display_name?: string | null
    avatar_url?: string | null
    avatar_verified?: boolean | null
    followers?: bigint | number | null
    following?: bigint | number | null
    bio?: string | null
    referrer?: string | null
    registered_at?: Date | string | null
    updated_at?: Date | string | null
    casts_casts_parent_author_fidToprofile?: castsUncheckedCreateNestedManyWithoutProfile_casts_parent_author_fidToprofileInput
    verification?: verificationUncheckedCreateNestedManyWithoutProfileInput
  }

  export type profileCreateOrConnectWithoutCasts_casts_author_fidToprofileInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutCasts_casts_author_fidToprofileInput, profileUncheckedCreateWithoutCasts_casts_author_fidToprofileInput>
  }

  export type profileCreateWithoutCasts_casts_parent_author_fidToprofileInput = {
    id: bigint | number
    owner?: string | null
    username?: string | null
    display_name?: string | null
    avatar_url?: string | null
    avatar_verified?: boolean | null
    followers?: bigint | number | null
    following?: bigint | number | null
    bio?: string | null
    referrer?: string | null
    registered_at?: Date | string | null
    updated_at?: Date | string | null
    casts_casts_author_fidToprofile?: castsCreateNestedManyWithoutProfile_casts_author_fidToprofileInput
    verification?: verificationCreateNestedManyWithoutProfileInput
  }

  export type profileUncheckedCreateWithoutCasts_casts_parent_author_fidToprofileInput = {
    id: bigint | number
    owner?: string | null
    username?: string | null
    display_name?: string | null
    avatar_url?: string | null
    avatar_verified?: boolean | null
    followers?: bigint | number | null
    following?: bigint | number | null
    bio?: string | null
    referrer?: string | null
    registered_at?: Date | string | null
    updated_at?: Date | string | null
    casts_casts_author_fidToprofile?: castsUncheckedCreateNestedManyWithoutProfile_casts_author_fidToprofileInput
    verification?: verificationUncheckedCreateNestedManyWithoutProfileInput
  }

  export type profileCreateOrConnectWithoutCasts_casts_parent_author_fidToprofileInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutCasts_casts_parent_author_fidToprofileInput, profileUncheckedCreateWithoutCasts_casts_parent_author_fidToprofileInput>
  }

  export type profileUpsertWithoutCasts_casts_author_fidToprofileInput = {
    update: XOR<profileUpdateWithoutCasts_casts_author_fidToprofileInput, profileUncheckedUpdateWithoutCasts_casts_author_fidToprofileInput>
    create: XOR<profileCreateWithoutCasts_casts_author_fidToprofileInput, profileUncheckedCreateWithoutCasts_casts_author_fidToprofileInput>
  }

  export type profileUpdateWithoutCasts_casts_author_fidToprofileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    casts_casts_parent_author_fidToprofile?: castsUpdateManyWithoutProfile_casts_parent_author_fidToprofileNestedInput
    verification?: verificationUpdateManyWithoutProfileNestedInput
  }

  export type profileUncheckedUpdateWithoutCasts_casts_author_fidToprofileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    casts_casts_parent_author_fidToprofile?: castsUncheckedUpdateManyWithoutProfile_casts_parent_author_fidToprofileNestedInput
    verification?: verificationUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type profileUpsertWithoutCasts_casts_parent_author_fidToprofileInput = {
    update: XOR<profileUpdateWithoutCasts_casts_parent_author_fidToprofileInput, profileUncheckedUpdateWithoutCasts_casts_parent_author_fidToprofileInput>
    create: XOR<profileCreateWithoutCasts_casts_parent_author_fidToprofileInput, profileUncheckedCreateWithoutCasts_casts_parent_author_fidToprofileInput>
  }

  export type profileUpdateWithoutCasts_casts_parent_author_fidToprofileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    casts_casts_author_fidToprofile?: castsUpdateManyWithoutProfile_casts_author_fidToprofileNestedInput
    verification?: verificationUpdateManyWithoutProfileNestedInput
  }

  export type profileUncheckedUpdateWithoutCasts_casts_parent_author_fidToprofileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    casts_casts_author_fidToprofile?: castsUncheckedUpdateManyWithoutProfile_casts_author_fidToprofileNestedInput
    verification?: verificationUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type castsCreateWithoutProfile_casts_author_fidToprofileInput = {
    hash: string
    thread_hash: string
    parent_hash?: string | null
    author_username?: string | null
    author_display_name?: string | null
    author_pfp_url?: string | null
    author_pfp_verified?: boolean | null
    text: string
    published_at: Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: number | null
    reactions_count?: number | null
    recasts_count?: number | null
    watches_count?: number | null
    deleted?: boolean | null
    parent_author_username?: string | null
    hash_v1?: string | null
    parent_hash_v1?: string | null
    thread_hash_v1?: string | null
    profile_casts_parent_author_fidToprofile?: profileCreateNestedOneWithoutCasts_casts_parent_author_fidToprofileInput
  }

  export type castsUncheckedCreateWithoutProfile_casts_author_fidToprofileInput = {
    hash: string
    thread_hash: string
    parent_hash?: string | null
    author_username?: string | null
    author_display_name?: string | null
    author_pfp_url?: string | null
    author_pfp_verified?: boolean | null
    text: string
    published_at: Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: number | null
    reactions_count?: number | null
    recasts_count?: number | null
    watches_count?: number | null
    deleted?: boolean | null
    parent_author_fid?: bigint | number | null
    parent_author_username?: string | null
    hash_v1?: string | null
    parent_hash_v1?: string | null
    thread_hash_v1?: string | null
  }

  export type castsCreateOrConnectWithoutProfile_casts_author_fidToprofileInput = {
    where: castsWhereUniqueInput
    create: XOR<castsCreateWithoutProfile_casts_author_fidToprofileInput, castsUncheckedCreateWithoutProfile_casts_author_fidToprofileInput>
  }

  export type castsCreateManyProfile_casts_author_fidToprofileInputEnvelope = {
    data: Enumerable<castsCreateManyProfile_casts_author_fidToprofileInput>
    skipDuplicates?: boolean
  }

  export type castsCreateWithoutProfile_casts_parent_author_fidToprofileInput = {
    hash: string
    thread_hash: string
    parent_hash?: string | null
    author_username?: string | null
    author_display_name?: string | null
    author_pfp_url?: string | null
    author_pfp_verified?: boolean | null
    text: string
    published_at: Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: number | null
    reactions_count?: number | null
    recasts_count?: number | null
    watches_count?: number | null
    deleted?: boolean | null
    parent_author_username?: string | null
    hash_v1?: string | null
    parent_hash_v1?: string | null
    thread_hash_v1?: string | null
    profile_casts_author_fidToprofile: profileCreateNestedOneWithoutCasts_casts_author_fidToprofileInput
  }

  export type castsUncheckedCreateWithoutProfile_casts_parent_author_fidToprofileInput = {
    hash: string
    thread_hash: string
    parent_hash?: string | null
    author_fid: bigint | number
    author_username?: string | null
    author_display_name?: string | null
    author_pfp_url?: string | null
    author_pfp_verified?: boolean | null
    text: string
    published_at: Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: number | null
    reactions_count?: number | null
    recasts_count?: number | null
    watches_count?: number | null
    deleted?: boolean | null
    parent_author_username?: string | null
    hash_v1?: string | null
    parent_hash_v1?: string | null
    thread_hash_v1?: string | null
  }

  export type castsCreateOrConnectWithoutProfile_casts_parent_author_fidToprofileInput = {
    where: castsWhereUniqueInput
    create: XOR<castsCreateWithoutProfile_casts_parent_author_fidToprofileInput, castsUncheckedCreateWithoutProfile_casts_parent_author_fidToprofileInput>
  }

  export type castsCreateManyProfile_casts_parent_author_fidToprofileInputEnvelope = {
    data: Enumerable<castsCreateManyProfile_casts_parent_author_fidToprofileInput>
    skipDuplicates?: boolean
  }

  export type verificationCreateWithoutProfileInput = {
    address: string
    created_at?: Date | string | null
  }

  export type verificationUncheckedCreateWithoutProfileInput = {
    address: string
    created_at?: Date | string | null
  }

  export type verificationCreateOrConnectWithoutProfileInput = {
    where: verificationWhereUniqueInput
    create: XOR<verificationCreateWithoutProfileInput, verificationUncheckedCreateWithoutProfileInput>
  }

  export type verificationCreateManyProfileInputEnvelope = {
    data: Enumerable<verificationCreateManyProfileInput>
    skipDuplicates?: boolean
  }

  export type castsUpsertWithWhereUniqueWithoutProfile_casts_author_fidToprofileInput = {
    where: castsWhereUniqueInput
    update: XOR<castsUpdateWithoutProfile_casts_author_fidToprofileInput, castsUncheckedUpdateWithoutProfile_casts_author_fidToprofileInput>
    create: XOR<castsCreateWithoutProfile_casts_author_fidToprofileInput, castsUncheckedCreateWithoutProfile_casts_author_fidToprofileInput>
  }

  export type castsUpdateWithWhereUniqueWithoutProfile_casts_author_fidToprofileInput = {
    where: castsWhereUniqueInput
    data: XOR<castsUpdateWithoutProfile_casts_author_fidToprofileInput, castsUncheckedUpdateWithoutProfile_casts_author_fidToprofileInput>
  }

  export type castsUpdateManyWithWhereWithoutProfile_casts_author_fidToprofileInput = {
    where: castsScalarWhereInput
    data: XOR<castsUpdateManyMutationInput, castsUncheckedUpdateManyWithoutCasts_casts_author_fidToprofileInput>
  }

  export type castsScalarWhereInput = {
    AND?: Enumerable<castsScalarWhereInput>
    OR?: Enumerable<castsScalarWhereInput>
    NOT?: Enumerable<castsScalarWhereInput>
    hash?: StringFilter | string
    thread_hash?: StringFilter | string
    parent_hash?: StringNullableFilter | string | null
    author_fid?: BigIntFilter | bigint | number
    author_username?: StringNullableFilter | string | null
    author_display_name?: StringNullableFilter | string | null
    author_pfp_url?: StringNullableFilter | string | null
    author_pfp_verified?: BoolNullableFilter | boolean | null
    text?: StringFilter | string
    published_at?: DateTimeFilter | Date | string
    mentions?: JsonNullableFilter
    replies_count?: IntNullableFilter | number | null
    reactions_count?: IntNullableFilter | number | null
    recasts_count?: IntNullableFilter | number | null
    watches_count?: IntNullableFilter | number | null
    deleted?: BoolNullableFilter | boolean | null
    parent_author_fid?: BigIntNullableFilter | bigint | number | null
    parent_author_username?: StringNullableFilter | string | null
    hash_v1?: StringNullableFilter | string | null
    parent_hash_v1?: StringNullableFilter | string | null
    thread_hash_v1?: StringNullableFilter | string | null
  }

  export type castsUpsertWithWhereUniqueWithoutProfile_casts_parent_author_fidToprofileInput = {
    where: castsWhereUniqueInput
    update: XOR<castsUpdateWithoutProfile_casts_parent_author_fidToprofileInput, castsUncheckedUpdateWithoutProfile_casts_parent_author_fidToprofileInput>
    create: XOR<castsCreateWithoutProfile_casts_parent_author_fidToprofileInput, castsUncheckedCreateWithoutProfile_casts_parent_author_fidToprofileInput>
  }

  export type castsUpdateWithWhereUniqueWithoutProfile_casts_parent_author_fidToprofileInput = {
    where: castsWhereUniqueInput
    data: XOR<castsUpdateWithoutProfile_casts_parent_author_fidToprofileInput, castsUncheckedUpdateWithoutProfile_casts_parent_author_fidToprofileInput>
  }

  export type castsUpdateManyWithWhereWithoutProfile_casts_parent_author_fidToprofileInput = {
    where: castsScalarWhereInput
    data: XOR<castsUpdateManyMutationInput, castsUncheckedUpdateManyWithoutCasts_casts_parent_author_fidToprofileInput>
  }

  export type verificationUpsertWithWhereUniqueWithoutProfileInput = {
    where: verificationWhereUniqueInput
    update: XOR<verificationUpdateWithoutProfileInput, verificationUncheckedUpdateWithoutProfileInput>
    create: XOR<verificationCreateWithoutProfileInput, verificationUncheckedCreateWithoutProfileInput>
  }

  export type verificationUpdateWithWhereUniqueWithoutProfileInput = {
    where: verificationWhereUniqueInput
    data: XOR<verificationUpdateWithoutProfileInput, verificationUncheckedUpdateWithoutProfileInput>
  }

  export type verificationUpdateManyWithWhereWithoutProfileInput = {
    where: verificationScalarWhereInput
    data: XOR<verificationUpdateManyMutationInput, verificationUncheckedUpdateManyWithoutVerificationInput>
  }

  export type verificationScalarWhereInput = {
    AND?: Enumerable<verificationScalarWhereInput>
    OR?: Enumerable<verificationScalarWhereInput>
    NOT?: Enumerable<verificationScalarWhereInput>
    fid?: BigIntFilter | bigint | number
    address?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
  }

  export type profileCreateWithoutVerificationInput = {
    id: bigint | number
    owner?: string | null
    username?: string | null
    display_name?: string | null
    avatar_url?: string | null
    avatar_verified?: boolean | null
    followers?: bigint | number | null
    following?: bigint | number | null
    bio?: string | null
    referrer?: string | null
    registered_at?: Date | string | null
    updated_at?: Date | string | null
    casts_casts_author_fidToprofile?: castsCreateNestedManyWithoutProfile_casts_author_fidToprofileInput
    casts_casts_parent_author_fidToprofile?: castsCreateNestedManyWithoutProfile_casts_parent_author_fidToprofileInput
  }

  export type profileUncheckedCreateWithoutVerificationInput = {
    id: bigint | number
    owner?: string | null
    username?: string | null
    display_name?: string | null
    avatar_url?: string | null
    avatar_verified?: boolean | null
    followers?: bigint | number | null
    following?: bigint | number | null
    bio?: string | null
    referrer?: string | null
    registered_at?: Date | string | null
    updated_at?: Date | string | null
    casts_casts_author_fidToprofile?: castsUncheckedCreateNestedManyWithoutProfile_casts_author_fidToprofileInput
    casts_casts_parent_author_fidToprofile?: castsUncheckedCreateNestedManyWithoutProfile_casts_parent_author_fidToprofileInput
  }

  export type profileCreateOrConnectWithoutVerificationInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutVerificationInput, profileUncheckedCreateWithoutVerificationInput>
  }

  export type profileUpsertWithoutVerificationInput = {
    update: XOR<profileUpdateWithoutVerificationInput, profileUncheckedUpdateWithoutVerificationInput>
    create: XOR<profileCreateWithoutVerificationInput, profileUncheckedCreateWithoutVerificationInput>
  }

  export type profileUpdateWithoutVerificationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    casts_casts_author_fidToprofile?: castsUpdateManyWithoutProfile_casts_author_fidToprofileNestedInput
    casts_casts_parent_author_fidToprofile?: castsUpdateManyWithoutProfile_casts_parent_author_fidToprofileNestedInput
  }

  export type profileUncheckedUpdateWithoutVerificationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    followers?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    following?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    registered_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    casts_casts_author_fidToprofile?: castsUncheckedUpdateManyWithoutProfile_casts_author_fidToprofileNestedInput
    casts_casts_parent_author_fidToprofile?: castsUncheckedUpdateManyWithoutProfile_casts_parent_author_fidToprofileNestedInput
  }

  export type castsCreateManyProfile_casts_author_fidToprofileInput = {
    hash: string
    thread_hash: string
    parent_hash?: string | null
    author_username?: string | null
    author_display_name?: string | null
    author_pfp_url?: string | null
    author_pfp_verified?: boolean | null
    text: string
    published_at: Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: number | null
    reactions_count?: number | null
    recasts_count?: number | null
    watches_count?: number | null
    deleted?: boolean | null
    parent_author_fid?: bigint | number | null
    parent_author_username?: string | null
    hash_v1?: string | null
    parent_hash_v1?: string | null
    thread_hash_v1?: string | null
  }

  export type castsCreateManyProfile_casts_parent_author_fidToprofileInput = {
    hash: string
    thread_hash: string
    parent_hash?: string | null
    author_fid: bigint | number
    author_username?: string | null
    author_display_name?: string | null
    author_pfp_url?: string | null
    author_pfp_verified?: boolean | null
    text: string
    published_at: Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: number | null
    reactions_count?: number | null
    recasts_count?: number | null
    watches_count?: number | null
    deleted?: boolean | null
    parent_author_username?: string | null
    hash_v1?: string | null
    parent_hash_v1?: string | null
    thread_hash_v1?: string | null
  }

  export type verificationCreateManyProfileInput = {
    address: string
    created_at?: Date | string | null
  }

  export type castsUpdateWithoutProfile_casts_author_fidToprofileInput = {
    hash?: StringFieldUpdateOperationsInput | string
    thread_hash?: StringFieldUpdateOperationsInput | string
    parent_hash?: NullableStringFieldUpdateOperationsInput | string | null
    author_username?: NullableStringFieldUpdateOperationsInput | string | null
    author_display_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: NullableIntFieldUpdateOperationsInput | number | null
    reactions_count?: NullableIntFieldUpdateOperationsInput | number | null
    recasts_count?: NullableIntFieldUpdateOperationsInput | number | null
    watches_count?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parent_author_username?: NullableStringFieldUpdateOperationsInput | string | null
    hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    parent_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    thread_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    profile_casts_parent_author_fidToprofile?: profileUpdateOneWithoutCasts_casts_parent_author_fidToprofileNestedInput
  }

  export type castsUncheckedUpdateWithoutProfile_casts_author_fidToprofileInput = {
    hash?: StringFieldUpdateOperationsInput | string
    thread_hash?: StringFieldUpdateOperationsInput | string
    parent_hash?: NullableStringFieldUpdateOperationsInput | string | null
    author_username?: NullableStringFieldUpdateOperationsInput | string | null
    author_display_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: NullableIntFieldUpdateOperationsInput | number | null
    reactions_count?: NullableIntFieldUpdateOperationsInput | number | null
    recasts_count?: NullableIntFieldUpdateOperationsInput | number | null
    watches_count?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parent_author_fid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    parent_author_username?: NullableStringFieldUpdateOperationsInput | string | null
    hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    parent_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    thread_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type castsUncheckedUpdateManyWithoutCasts_casts_author_fidToprofileInput = {
    hash?: StringFieldUpdateOperationsInput | string
    thread_hash?: StringFieldUpdateOperationsInput | string
    parent_hash?: NullableStringFieldUpdateOperationsInput | string | null
    author_username?: NullableStringFieldUpdateOperationsInput | string | null
    author_display_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: NullableIntFieldUpdateOperationsInput | number | null
    reactions_count?: NullableIntFieldUpdateOperationsInput | number | null
    recasts_count?: NullableIntFieldUpdateOperationsInput | number | null
    watches_count?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parent_author_fid?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    parent_author_username?: NullableStringFieldUpdateOperationsInput | string | null
    hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    parent_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    thread_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type castsUpdateWithoutProfile_casts_parent_author_fidToprofileInput = {
    hash?: StringFieldUpdateOperationsInput | string
    thread_hash?: StringFieldUpdateOperationsInput | string
    parent_hash?: NullableStringFieldUpdateOperationsInput | string | null
    author_username?: NullableStringFieldUpdateOperationsInput | string | null
    author_display_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: NullableIntFieldUpdateOperationsInput | number | null
    reactions_count?: NullableIntFieldUpdateOperationsInput | number | null
    recasts_count?: NullableIntFieldUpdateOperationsInput | number | null
    watches_count?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parent_author_username?: NullableStringFieldUpdateOperationsInput | string | null
    hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    parent_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    thread_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    profile_casts_author_fidToprofile?: profileUpdateOneRequiredWithoutCasts_casts_author_fidToprofileNestedInput
  }

  export type castsUncheckedUpdateWithoutProfile_casts_parent_author_fidToprofileInput = {
    hash?: StringFieldUpdateOperationsInput | string
    thread_hash?: StringFieldUpdateOperationsInput | string
    parent_hash?: NullableStringFieldUpdateOperationsInput | string | null
    author_fid?: BigIntFieldUpdateOperationsInput | bigint | number
    author_username?: NullableStringFieldUpdateOperationsInput | string | null
    author_display_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: NullableIntFieldUpdateOperationsInput | number | null
    reactions_count?: NullableIntFieldUpdateOperationsInput | number | null
    recasts_count?: NullableIntFieldUpdateOperationsInput | number | null
    watches_count?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parent_author_username?: NullableStringFieldUpdateOperationsInput | string | null
    hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    parent_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    thread_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type castsUncheckedUpdateManyWithoutCasts_casts_parent_author_fidToprofileInput = {
    hash?: StringFieldUpdateOperationsInput | string
    thread_hash?: StringFieldUpdateOperationsInput | string
    parent_hash?: NullableStringFieldUpdateOperationsInput | string | null
    author_fid?: BigIntFieldUpdateOperationsInput | bigint | number
    author_username?: NullableStringFieldUpdateOperationsInput | string | null
    author_display_name?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_url?: NullableStringFieldUpdateOperationsInput | string | null
    author_pfp_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    text?: StringFieldUpdateOperationsInput | string
    published_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mentions?: NullableJsonNullValueInput | InputJsonValue
    replies_count?: NullableIntFieldUpdateOperationsInput | number | null
    reactions_count?: NullableIntFieldUpdateOperationsInput | number | null
    recasts_count?: NullableIntFieldUpdateOperationsInput | number | null
    watches_count?: NullableIntFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parent_author_username?: NullableStringFieldUpdateOperationsInput | string | null
    hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    parent_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
    thread_hash_v1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type verificationUpdateWithoutProfileInput = {
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type verificationUncheckedUpdateWithoutProfileInput = {
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type verificationUncheckedUpdateManyWithoutVerificationInput = {
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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