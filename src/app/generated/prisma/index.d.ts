
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
 * Model Internship
 * 
 */
export type Internship = $Result.DefaultSelection<Prisma.$InternshipPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model CoverImage
 * 
 */
export type CoverImage = $Result.DefaultSelection<Prisma.$CoverImagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Internships
 * const internships = await prisma.internship.findMany()
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
   * // Fetch zero or more Internships
   * const internships = await prisma.internship.findMany()
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
   * `prisma.internship`: Exposes CRUD operations for the **Internship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Internships
    * const internships = await prisma.internship.findMany()
    * ```
    */
  get internship(): Prisma.InternshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coverImage`: Exposes CRUD operations for the **CoverImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoverImages
    * const coverImages = await prisma.coverImage.findMany()
    * ```
    */
  get coverImage(): Prisma.CoverImageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Internship: 'Internship',
    Blog: 'Blog',
    CoverImage: 'CoverImage'
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
      modelProps: "internship" | "blog" | "coverImage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Internship: {
        payload: Prisma.$InternshipPayload<ExtArgs>
        fields: Prisma.InternshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InternshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InternshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload>
          }
          findFirst: {
            args: Prisma.InternshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InternshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload>
          }
          findMany: {
            args: Prisma.InternshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload>[]
          }
          create: {
            args: Prisma.InternshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload>
          }
          createMany: {
            args: Prisma.InternshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InternshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload>[]
          }
          delete: {
            args: Prisma.InternshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload>
          }
          update: {
            args: Prisma.InternshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload>
          }
          deleteMany: {
            args: Prisma.InternshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InternshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InternshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload>[]
          }
          upsert: {
            args: Prisma.InternshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InternshipPayload>
          }
          aggregate: {
            args: Prisma.InternshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInternship>
          }
          groupBy: {
            args: Prisma.InternshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<InternshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.InternshipCountArgs<ExtArgs>
            result: $Utils.Optional<InternshipCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      CoverImage: {
        payload: Prisma.$CoverImagePayload<ExtArgs>
        fields: Prisma.CoverImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoverImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoverImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>
          }
          findFirst: {
            args: Prisma.CoverImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoverImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>
          }
          findMany: {
            args: Prisma.CoverImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>[]
          }
          create: {
            args: Prisma.CoverImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>
          }
          createMany: {
            args: Prisma.CoverImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoverImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>[]
          }
          delete: {
            args: Prisma.CoverImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>
          }
          update: {
            args: Prisma.CoverImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>
          }
          deleteMany: {
            args: Prisma.CoverImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoverImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoverImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>[]
          }
          upsert: {
            args: Prisma.CoverImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoverImagePayload>
          }
          aggregate: {
            args: Prisma.CoverImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoverImage>
          }
          groupBy: {
            args: Prisma.CoverImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoverImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoverImageCountArgs<ExtArgs>
            result: $Utils.Optional<CoverImageCountAggregateOutputType> | number
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
    internship?: InternshipOmit
    blog?: BlogOmit
    coverImage?: CoverImageOmit
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
   * Models
   */

  /**
   * Model Internship
   */

  export type AggregateInternship = {
    _count: InternshipCountAggregateOutputType | null
    _avg: InternshipAvgAggregateOutputType | null
    _sum: InternshipSumAggregateOutputType | null
    _min: InternshipMinAggregateOutputType | null
    _max: InternshipMaxAggregateOutputType | null
  }

  export type InternshipAvgAggregateOutputType = {
    stipendMin: number | null
    stipendMax: number | null
  }

  export type InternshipSumAggregateOutputType = {
    stipendMin: number | null
    stipendMax: number | null
  }

  export type InternshipMinAggregateOutputType = {
    id: string | null
    companyName: string | null
    companyDescription: string | null
    Responsibilities: string | null
    Requirements: string | null
    Batches: string | null
    Duration: string | null
    Location: string | null
    mode: string | null
    type: string | null
    stipendMin: number | null
    stipendMax: number | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InternshipMaxAggregateOutputType = {
    id: string | null
    companyName: string | null
    companyDescription: string | null
    Responsibilities: string | null
    Requirements: string | null
    Batches: string | null
    Duration: string | null
    Location: string | null
    mode: string | null
    type: string | null
    stipendMin: number | null
    stipendMax: number | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InternshipCountAggregateOutputType = {
    id: number
    companyName: number
    companyDescription: number
    Skills: number
    Responsibilities: number
    Requirements: number
    Batches: number
    Duration: number
    Location: number
    mode: number
    type: number
    stipendMin: number
    stipendMax: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InternshipAvgAggregateInputType = {
    stipendMin?: true
    stipendMax?: true
  }

  export type InternshipSumAggregateInputType = {
    stipendMin?: true
    stipendMax?: true
  }

  export type InternshipMinAggregateInputType = {
    id?: true
    companyName?: true
    companyDescription?: true
    Responsibilities?: true
    Requirements?: true
    Batches?: true
    Duration?: true
    Location?: true
    mode?: true
    type?: true
    stipendMin?: true
    stipendMax?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InternshipMaxAggregateInputType = {
    id?: true
    companyName?: true
    companyDescription?: true
    Responsibilities?: true
    Requirements?: true
    Batches?: true
    Duration?: true
    Location?: true
    mode?: true
    type?: true
    stipendMin?: true
    stipendMax?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InternshipCountAggregateInputType = {
    id?: true
    companyName?: true
    companyDescription?: true
    Skills?: true
    Responsibilities?: true
    Requirements?: true
    Batches?: true
    Duration?: true
    Location?: true
    mode?: true
    type?: true
    stipendMin?: true
    stipendMax?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InternshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Internship to aggregate.
     */
    where?: InternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Internships to fetch.
     */
    orderBy?: InternshipOrderByWithRelationInput | InternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Internships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Internships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Internships
    **/
    _count?: true | InternshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InternshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InternshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InternshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InternshipMaxAggregateInputType
  }

  export type GetInternshipAggregateType<T extends InternshipAggregateArgs> = {
        [P in keyof T & keyof AggregateInternship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInternship[P]>
      : GetScalarType<T[P], AggregateInternship[P]>
  }




  export type InternshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InternshipWhereInput
    orderBy?: InternshipOrderByWithAggregationInput | InternshipOrderByWithAggregationInput[]
    by: InternshipScalarFieldEnum[] | InternshipScalarFieldEnum
    having?: InternshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InternshipCountAggregateInputType | true
    _avg?: InternshipAvgAggregateInputType
    _sum?: InternshipSumAggregateInputType
    _min?: InternshipMinAggregateInputType
    _max?: InternshipMaxAggregateInputType
  }

  export type InternshipGroupByOutputType = {
    id: string
    companyName: string
    companyDescription: string
    Skills: string[]
    Responsibilities: string
    Requirements: string
    Batches: string
    Duration: string
    Location: string
    mode: string
    type: string
    stipendMin: number
    stipendMax: number
    url: string
    createdAt: Date
    updatedAt: Date
    _count: InternshipCountAggregateOutputType | null
    _avg: InternshipAvgAggregateOutputType | null
    _sum: InternshipSumAggregateOutputType | null
    _min: InternshipMinAggregateOutputType | null
    _max: InternshipMaxAggregateOutputType | null
  }

  type GetInternshipGroupByPayload<T extends InternshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InternshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InternshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InternshipGroupByOutputType[P]>
            : GetScalarType<T[P], InternshipGroupByOutputType[P]>
        }
      >
    >


  export type InternshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyDescription?: boolean
    Skills?: boolean
    Responsibilities?: boolean
    Requirements?: boolean
    Batches?: boolean
    Duration?: boolean
    Location?: boolean
    mode?: boolean
    type?: boolean
    stipendMin?: boolean
    stipendMax?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["internship"]>

  export type InternshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyDescription?: boolean
    Skills?: boolean
    Responsibilities?: boolean
    Requirements?: boolean
    Batches?: boolean
    Duration?: boolean
    Location?: boolean
    mode?: boolean
    type?: boolean
    stipendMin?: boolean
    stipendMax?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["internship"]>

  export type InternshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyDescription?: boolean
    Skills?: boolean
    Responsibilities?: boolean
    Requirements?: boolean
    Batches?: boolean
    Duration?: boolean
    Location?: boolean
    mode?: boolean
    type?: boolean
    stipendMin?: boolean
    stipendMax?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["internship"]>

  export type InternshipSelectScalar = {
    id?: boolean
    companyName?: boolean
    companyDescription?: boolean
    Skills?: boolean
    Responsibilities?: boolean
    Requirements?: boolean
    Batches?: boolean
    Duration?: boolean
    Location?: boolean
    mode?: boolean
    type?: boolean
    stipendMin?: boolean
    stipendMax?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InternshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyName" | "companyDescription" | "Skills" | "Responsibilities" | "Requirements" | "Batches" | "Duration" | "Location" | "mode" | "type" | "stipendMin" | "stipendMax" | "url" | "createdAt" | "updatedAt", ExtArgs["result"]["internship"]>

  export type $InternshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Internship"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyName: string
      companyDescription: string
      Skills: string[]
      Responsibilities: string
      Requirements: string
      Batches: string
      Duration: string
      Location: string
      mode: string
      type: string
      stipendMin: number
      stipendMax: number
      url: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["internship"]>
    composites: {}
  }

  type InternshipGetPayload<S extends boolean | null | undefined | InternshipDefaultArgs> = $Result.GetResult<Prisma.$InternshipPayload, S>

  type InternshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InternshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InternshipCountAggregateInputType | true
    }

  export interface InternshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Internship'], meta: { name: 'Internship' } }
    /**
     * Find zero or one Internship that matches the filter.
     * @param {InternshipFindUniqueArgs} args - Arguments to find a Internship
     * @example
     * // Get one Internship
     * const internship = await prisma.internship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InternshipFindUniqueArgs>(args: SelectSubset<T, InternshipFindUniqueArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Internship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InternshipFindUniqueOrThrowArgs} args - Arguments to find a Internship
     * @example
     * // Get one Internship
     * const internship = await prisma.internship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InternshipFindUniqueOrThrowArgs>(args: SelectSubset<T, InternshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Internship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipFindFirstArgs} args - Arguments to find a Internship
     * @example
     * // Get one Internship
     * const internship = await prisma.internship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InternshipFindFirstArgs>(args?: SelectSubset<T, InternshipFindFirstArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Internship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipFindFirstOrThrowArgs} args - Arguments to find a Internship
     * @example
     * // Get one Internship
     * const internship = await prisma.internship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InternshipFindFirstOrThrowArgs>(args?: SelectSubset<T, InternshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Internships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Internships
     * const internships = await prisma.internship.findMany()
     * 
     * // Get first 10 Internships
     * const internships = await prisma.internship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const internshipWithIdOnly = await prisma.internship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InternshipFindManyArgs>(args?: SelectSubset<T, InternshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Internship.
     * @param {InternshipCreateArgs} args - Arguments to create a Internship.
     * @example
     * // Create one Internship
     * const Internship = await prisma.internship.create({
     *   data: {
     *     // ... data to create a Internship
     *   }
     * })
     * 
     */
    create<T extends InternshipCreateArgs>(args: SelectSubset<T, InternshipCreateArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Internships.
     * @param {InternshipCreateManyArgs} args - Arguments to create many Internships.
     * @example
     * // Create many Internships
     * const internship = await prisma.internship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InternshipCreateManyArgs>(args?: SelectSubset<T, InternshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Internships and returns the data saved in the database.
     * @param {InternshipCreateManyAndReturnArgs} args - Arguments to create many Internships.
     * @example
     * // Create many Internships
     * const internship = await prisma.internship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Internships and only return the `id`
     * const internshipWithIdOnly = await prisma.internship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InternshipCreateManyAndReturnArgs>(args?: SelectSubset<T, InternshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Internship.
     * @param {InternshipDeleteArgs} args - Arguments to delete one Internship.
     * @example
     * // Delete one Internship
     * const Internship = await prisma.internship.delete({
     *   where: {
     *     // ... filter to delete one Internship
     *   }
     * })
     * 
     */
    delete<T extends InternshipDeleteArgs>(args: SelectSubset<T, InternshipDeleteArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Internship.
     * @param {InternshipUpdateArgs} args - Arguments to update one Internship.
     * @example
     * // Update one Internship
     * const internship = await prisma.internship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InternshipUpdateArgs>(args: SelectSubset<T, InternshipUpdateArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Internships.
     * @param {InternshipDeleteManyArgs} args - Arguments to filter Internships to delete.
     * @example
     * // Delete a few Internships
     * const { count } = await prisma.internship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InternshipDeleteManyArgs>(args?: SelectSubset<T, InternshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Internships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Internships
     * const internship = await prisma.internship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InternshipUpdateManyArgs>(args: SelectSubset<T, InternshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Internships and returns the data updated in the database.
     * @param {InternshipUpdateManyAndReturnArgs} args - Arguments to update many Internships.
     * @example
     * // Update many Internships
     * const internship = await prisma.internship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Internships and only return the `id`
     * const internshipWithIdOnly = await prisma.internship.updateManyAndReturn({
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
    updateManyAndReturn<T extends InternshipUpdateManyAndReturnArgs>(args: SelectSubset<T, InternshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Internship.
     * @param {InternshipUpsertArgs} args - Arguments to update or create a Internship.
     * @example
     * // Update or create a Internship
     * const internship = await prisma.internship.upsert({
     *   create: {
     *     // ... data to create a Internship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Internship we want to update
     *   }
     * })
     */
    upsert<T extends InternshipUpsertArgs>(args: SelectSubset<T, InternshipUpsertArgs<ExtArgs>>): Prisma__InternshipClient<$Result.GetResult<Prisma.$InternshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Internships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipCountArgs} args - Arguments to filter Internships to count.
     * @example
     * // Count the number of Internships
     * const count = await prisma.internship.count({
     *   where: {
     *     // ... the filter for the Internships we want to count
     *   }
     * })
    **/
    count<T extends InternshipCountArgs>(
      args?: Subset<T, InternshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InternshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Internship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InternshipAggregateArgs>(args: Subset<T, InternshipAggregateArgs>): Prisma.PrismaPromise<GetInternshipAggregateType<T>>

    /**
     * Group by Internship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipGroupByArgs} args - Group by arguments.
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
      T extends InternshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InternshipGroupByArgs['orderBy'] }
        : { orderBy?: InternshipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InternshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInternshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Internship model
   */
  readonly fields: InternshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Internship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InternshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Internship model
   */
  interface InternshipFieldRefs {
    readonly id: FieldRef<"Internship", 'String'>
    readonly companyName: FieldRef<"Internship", 'String'>
    readonly companyDescription: FieldRef<"Internship", 'String'>
    readonly Skills: FieldRef<"Internship", 'String[]'>
    readonly Responsibilities: FieldRef<"Internship", 'String'>
    readonly Requirements: FieldRef<"Internship", 'String'>
    readonly Batches: FieldRef<"Internship", 'String'>
    readonly Duration: FieldRef<"Internship", 'String'>
    readonly Location: FieldRef<"Internship", 'String'>
    readonly mode: FieldRef<"Internship", 'String'>
    readonly type: FieldRef<"Internship", 'String'>
    readonly stipendMin: FieldRef<"Internship", 'Int'>
    readonly stipendMax: FieldRef<"Internship", 'Int'>
    readonly url: FieldRef<"Internship", 'String'>
    readonly createdAt: FieldRef<"Internship", 'DateTime'>
    readonly updatedAt: FieldRef<"Internship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Internship findUnique
   */
  export type InternshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * Filter, which Internship to fetch.
     */
    where: InternshipWhereUniqueInput
  }

  /**
   * Internship findUniqueOrThrow
   */
  export type InternshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * Filter, which Internship to fetch.
     */
    where: InternshipWhereUniqueInput
  }

  /**
   * Internship findFirst
   */
  export type InternshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * Filter, which Internship to fetch.
     */
    where?: InternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Internships to fetch.
     */
    orderBy?: InternshipOrderByWithRelationInput | InternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Internships.
     */
    cursor?: InternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Internships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Internships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Internships.
     */
    distinct?: InternshipScalarFieldEnum | InternshipScalarFieldEnum[]
  }

  /**
   * Internship findFirstOrThrow
   */
  export type InternshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * Filter, which Internship to fetch.
     */
    where?: InternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Internships to fetch.
     */
    orderBy?: InternshipOrderByWithRelationInput | InternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Internships.
     */
    cursor?: InternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Internships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Internships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Internships.
     */
    distinct?: InternshipScalarFieldEnum | InternshipScalarFieldEnum[]
  }

  /**
   * Internship findMany
   */
  export type InternshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * Filter, which Internships to fetch.
     */
    where?: InternshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Internships to fetch.
     */
    orderBy?: InternshipOrderByWithRelationInput | InternshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Internships.
     */
    cursor?: InternshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Internships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Internships.
     */
    skip?: number
    distinct?: InternshipScalarFieldEnum | InternshipScalarFieldEnum[]
  }

  /**
   * Internship create
   */
  export type InternshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * The data needed to create a Internship.
     */
    data: XOR<InternshipCreateInput, InternshipUncheckedCreateInput>
  }

  /**
   * Internship createMany
   */
  export type InternshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Internships.
     */
    data: InternshipCreateManyInput | InternshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Internship createManyAndReturn
   */
  export type InternshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * The data used to create many Internships.
     */
    data: InternshipCreateManyInput | InternshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Internship update
   */
  export type InternshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * The data needed to update a Internship.
     */
    data: XOR<InternshipUpdateInput, InternshipUncheckedUpdateInput>
    /**
     * Choose, which Internship to update.
     */
    where: InternshipWhereUniqueInput
  }

  /**
   * Internship updateMany
   */
  export type InternshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Internships.
     */
    data: XOR<InternshipUpdateManyMutationInput, InternshipUncheckedUpdateManyInput>
    /**
     * Filter which Internships to update
     */
    where?: InternshipWhereInput
    /**
     * Limit how many Internships to update.
     */
    limit?: number
  }

  /**
   * Internship updateManyAndReturn
   */
  export type InternshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * The data used to update Internships.
     */
    data: XOR<InternshipUpdateManyMutationInput, InternshipUncheckedUpdateManyInput>
    /**
     * Filter which Internships to update
     */
    where?: InternshipWhereInput
    /**
     * Limit how many Internships to update.
     */
    limit?: number
  }

  /**
   * Internship upsert
   */
  export type InternshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * The filter to search for the Internship to update in case it exists.
     */
    where: InternshipWhereUniqueInput
    /**
     * In case the Internship found by the `where` argument doesn't exist, create a new Internship with this data.
     */
    create: XOR<InternshipCreateInput, InternshipUncheckedCreateInput>
    /**
     * In case the Internship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InternshipUpdateInput, InternshipUncheckedUpdateInput>
  }

  /**
   * Internship delete
   */
  export type InternshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
    /**
     * Filter which Internship to delete.
     */
    where: InternshipWhereUniqueInput
  }

  /**
   * Internship deleteMany
   */
  export type InternshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Internships to delete
     */
    where?: InternshipWhereInput
    /**
     * Limit how many Internships to delete.
     */
    limit?: number
  }

  /**
   * Internship without action
   */
  export type InternshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Internship
     */
    select?: InternshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Internship
     */
    omit?: InternshipOmit<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    content: number
    category: number
    tags: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    title: string
    content: string
    category: string
    tags: string[]
    createdAt: Date
    updatedAt: Date
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coverImage?: boolean | Blog$coverImageArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "category" | "tags" | "createdAt" | "updatedAt", ExtArgs["result"]["blog"]>
  export type BlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coverImage?: boolean | Blog$coverImageArgs<ExtArgs>
  }
  export type BlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BlogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {
      coverImage: Prisma.$CoverImagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      category: string
      tags: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
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
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
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
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coverImage<T extends Blog$coverImageArgs<ExtArgs> = {}>(args?: Subset<T, Blog$coverImageArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'String'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly content: FieldRef<"Blog", 'String'>
    readonly category: FieldRef<"Blog", 'String'>
    readonly tags: FieldRef<"Blog", 'String[]'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog.coverImage
   */
  export type Blog$coverImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    where?: CoverImageWhereInput
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
  }


  /**
   * Model CoverImage
   */

  export type AggregateCoverImage = {
    _count: CoverImageCountAggregateOutputType | null
    _avg: CoverImageAvgAggregateOutputType | null
    _sum: CoverImageSumAggregateOutputType | null
    _min: CoverImageMinAggregateOutputType | null
    _max: CoverImageMaxAggregateOutputType | null
  }

  export type CoverImageAvgAggregateOutputType = {
    id: number | null
  }

  export type CoverImageSumAggregateOutputType = {
    id: number | null
  }

  export type CoverImageMinAggregateOutputType = {
    id: number | null
    fileName: string | null
    fileUrl: string | null
    createdAt: Date | null
    blogId: string | null
  }

  export type CoverImageMaxAggregateOutputType = {
    id: number | null
    fileName: string | null
    fileUrl: string | null
    createdAt: Date | null
    blogId: string | null
  }

  export type CoverImageCountAggregateOutputType = {
    id: number
    fileName: number
    fileUrl: number
    createdAt: number
    blogId: number
    _all: number
  }


  export type CoverImageAvgAggregateInputType = {
    id?: true
  }

  export type CoverImageSumAggregateInputType = {
    id?: true
  }

  export type CoverImageMinAggregateInputType = {
    id?: true
    fileName?: true
    fileUrl?: true
    createdAt?: true
    blogId?: true
  }

  export type CoverImageMaxAggregateInputType = {
    id?: true
    fileName?: true
    fileUrl?: true
    createdAt?: true
    blogId?: true
  }

  export type CoverImageCountAggregateInputType = {
    id?: true
    fileName?: true
    fileUrl?: true
    createdAt?: true
    blogId?: true
    _all?: true
  }

  export type CoverImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoverImage to aggregate.
     */
    where?: CoverImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverImages to fetch.
     */
    orderBy?: CoverImageOrderByWithRelationInput | CoverImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoverImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoverImages
    **/
    _count?: true | CoverImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoverImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoverImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoverImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoverImageMaxAggregateInputType
  }

  export type GetCoverImageAggregateType<T extends CoverImageAggregateArgs> = {
        [P in keyof T & keyof AggregateCoverImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoverImage[P]>
      : GetScalarType<T[P], AggregateCoverImage[P]>
  }




  export type CoverImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoverImageWhereInput
    orderBy?: CoverImageOrderByWithAggregationInput | CoverImageOrderByWithAggregationInput[]
    by: CoverImageScalarFieldEnum[] | CoverImageScalarFieldEnum
    having?: CoverImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoverImageCountAggregateInputType | true
    _avg?: CoverImageAvgAggregateInputType
    _sum?: CoverImageSumAggregateInputType
    _min?: CoverImageMinAggregateInputType
    _max?: CoverImageMaxAggregateInputType
  }

  export type CoverImageGroupByOutputType = {
    id: number
    fileName: string
    fileUrl: string
    createdAt: Date
    blogId: string
    _count: CoverImageCountAggregateOutputType | null
    _avg: CoverImageAvgAggregateOutputType | null
    _sum: CoverImageSumAggregateOutputType | null
    _min: CoverImageMinAggregateOutputType | null
    _max: CoverImageMaxAggregateOutputType | null
  }

  type GetCoverImageGroupByPayload<T extends CoverImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoverImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoverImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoverImageGroupByOutputType[P]>
            : GetScalarType<T[P], CoverImageGroupByOutputType[P]>
        }
      >
    >


  export type CoverImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    blogId?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coverImage"]>

  export type CoverImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    blogId?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coverImage"]>

  export type CoverImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    blogId?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coverImage"]>

  export type CoverImageSelectScalar = {
    id?: boolean
    fileName?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    blogId?: boolean
  }

  export type CoverImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "fileUrl" | "createdAt" | "blogId", ExtArgs["result"]["coverImage"]>
  export type CoverImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type CoverImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type CoverImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }

  export type $CoverImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoverImage"
    objects: {
      blog: Prisma.$BlogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileName: string
      fileUrl: string
      createdAt: Date
      blogId: string
    }, ExtArgs["result"]["coverImage"]>
    composites: {}
  }

  type CoverImageGetPayload<S extends boolean | null | undefined | CoverImageDefaultArgs> = $Result.GetResult<Prisma.$CoverImagePayload, S>

  type CoverImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoverImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoverImageCountAggregateInputType | true
    }

  export interface CoverImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoverImage'], meta: { name: 'CoverImage' } }
    /**
     * Find zero or one CoverImage that matches the filter.
     * @param {CoverImageFindUniqueArgs} args - Arguments to find a CoverImage
     * @example
     * // Get one CoverImage
     * const coverImage = await prisma.coverImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoverImageFindUniqueArgs>(args: SelectSubset<T, CoverImageFindUniqueArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoverImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoverImageFindUniqueOrThrowArgs} args - Arguments to find a CoverImage
     * @example
     * // Get one CoverImage
     * const coverImage = await prisma.coverImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoverImageFindUniqueOrThrowArgs>(args: SelectSubset<T, CoverImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoverImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageFindFirstArgs} args - Arguments to find a CoverImage
     * @example
     * // Get one CoverImage
     * const coverImage = await prisma.coverImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoverImageFindFirstArgs>(args?: SelectSubset<T, CoverImageFindFirstArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoverImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageFindFirstOrThrowArgs} args - Arguments to find a CoverImage
     * @example
     * // Get one CoverImage
     * const coverImage = await prisma.coverImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoverImageFindFirstOrThrowArgs>(args?: SelectSubset<T, CoverImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoverImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoverImages
     * const coverImages = await prisma.coverImage.findMany()
     * 
     * // Get first 10 CoverImages
     * const coverImages = await prisma.coverImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coverImageWithIdOnly = await prisma.coverImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoverImageFindManyArgs>(args?: SelectSubset<T, CoverImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoverImage.
     * @param {CoverImageCreateArgs} args - Arguments to create a CoverImage.
     * @example
     * // Create one CoverImage
     * const CoverImage = await prisma.coverImage.create({
     *   data: {
     *     // ... data to create a CoverImage
     *   }
     * })
     * 
     */
    create<T extends CoverImageCreateArgs>(args: SelectSubset<T, CoverImageCreateArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoverImages.
     * @param {CoverImageCreateManyArgs} args - Arguments to create many CoverImages.
     * @example
     * // Create many CoverImages
     * const coverImage = await prisma.coverImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoverImageCreateManyArgs>(args?: SelectSubset<T, CoverImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoverImages and returns the data saved in the database.
     * @param {CoverImageCreateManyAndReturnArgs} args - Arguments to create many CoverImages.
     * @example
     * // Create many CoverImages
     * const coverImage = await prisma.coverImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoverImages and only return the `id`
     * const coverImageWithIdOnly = await prisma.coverImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoverImageCreateManyAndReturnArgs>(args?: SelectSubset<T, CoverImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoverImage.
     * @param {CoverImageDeleteArgs} args - Arguments to delete one CoverImage.
     * @example
     * // Delete one CoverImage
     * const CoverImage = await prisma.coverImage.delete({
     *   where: {
     *     // ... filter to delete one CoverImage
     *   }
     * })
     * 
     */
    delete<T extends CoverImageDeleteArgs>(args: SelectSubset<T, CoverImageDeleteArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoverImage.
     * @param {CoverImageUpdateArgs} args - Arguments to update one CoverImage.
     * @example
     * // Update one CoverImage
     * const coverImage = await prisma.coverImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoverImageUpdateArgs>(args: SelectSubset<T, CoverImageUpdateArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoverImages.
     * @param {CoverImageDeleteManyArgs} args - Arguments to filter CoverImages to delete.
     * @example
     * // Delete a few CoverImages
     * const { count } = await prisma.coverImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoverImageDeleteManyArgs>(args?: SelectSubset<T, CoverImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoverImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoverImages
     * const coverImage = await prisma.coverImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoverImageUpdateManyArgs>(args: SelectSubset<T, CoverImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoverImages and returns the data updated in the database.
     * @param {CoverImageUpdateManyAndReturnArgs} args - Arguments to update many CoverImages.
     * @example
     * // Update many CoverImages
     * const coverImage = await prisma.coverImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoverImages and only return the `id`
     * const coverImageWithIdOnly = await prisma.coverImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends CoverImageUpdateManyAndReturnArgs>(args: SelectSubset<T, CoverImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoverImage.
     * @param {CoverImageUpsertArgs} args - Arguments to update or create a CoverImage.
     * @example
     * // Update or create a CoverImage
     * const coverImage = await prisma.coverImage.upsert({
     *   create: {
     *     // ... data to create a CoverImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoverImage we want to update
     *   }
     * })
     */
    upsert<T extends CoverImageUpsertArgs>(args: SelectSubset<T, CoverImageUpsertArgs<ExtArgs>>): Prisma__CoverImageClient<$Result.GetResult<Prisma.$CoverImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoverImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageCountArgs} args - Arguments to filter CoverImages to count.
     * @example
     * // Count the number of CoverImages
     * const count = await prisma.coverImage.count({
     *   where: {
     *     // ... the filter for the CoverImages we want to count
     *   }
     * })
    **/
    count<T extends CoverImageCountArgs>(
      args?: Subset<T, CoverImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoverImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoverImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoverImageAggregateArgs>(args: Subset<T, CoverImageAggregateArgs>): Prisma.PrismaPromise<GetCoverImageAggregateType<T>>

    /**
     * Group by CoverImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoverImageGroupByArgs} args - Group by arguments.
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
      T extends CoverImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoverImageGroupByArgs['orderBy'] }
        : { orderBy?: CoverImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoverImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoverImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoverImage model
   */
  readonly fields: CoverImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoverImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoverImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blog<T extends BlogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogDefaultArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CoverImage model
   */
  interface CoverImageFieldRefs {
    readonly id: FieldRef<"CoverImage", 'Int'>
    readonly fileName: FieldRef<"CoverImage", 'String'>
    readonly fileUrl: FieldRef<"CoverImage", 'String'>
    readonly createdAt: FieldRef<"CoverImage", 'DateTime'>
    readonly blogId: FieldRef<"CoverImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CoverImage findUnique
   */
  export type CoverImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    /**
     * Filter, which CoverImage to fetch.
     */
    where: CoverImageWhereUniqueInput
  }

  /**
   * CoverImage findUniqueOrThrow
   */
  export type CoverImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    /**
     * Filter, which CoverImage to fetch.
     */
    where: CoverImageWhereUniqueInput
  }

  /**
   * CoverImage findFirst
   */
  export type CoverImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    /**
     * Filter, which CoverImage to fetch.
     */
    where?: CoverImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverImages to fetch.
     */
    orderBy?: CoverImageOrderByWithRelationInput | CoverImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoverImages.
     */
    cursor?: CoverImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoverImages.
     */
    distinct?: CoverImageScalarFieldEnum | CoverImageScalarFieldEnum[]
  }

  /**
   * CoverImage findFirstOrThrow
   */
  export type CoverImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    /**
     * Filter, which CoverImage to fetch.
     */
    where?: CoverImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverImages to fetch.
     */
    orderBy?: CoverImageOrderByWithRelationInput | CoverImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoverImages.
     */
    cursor?: CoverImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoverImages.
     */
    distinct?: CoverImageScalarFieldEnum | CoverImageScalarFieldEnum[]
  }

  /**
   * CoverImage findMany
   */
  export type CoverImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    /**
     * Filter, which CoverImages to fetch.
     */
    where?: CoverImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoverImages to fetch.
     */
    orderBy?: CoverImageOrderByWithRelationInput | CoverImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoverImages.
     */
    cursor?: CoverImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoverImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoverImages.
     */
    skip?: number
    distinct?: CoverImageScalarFieldEnum | CoverImageScalarFieldEnum[]
  }

  /**
   * CoverImage create
   */
  export type CoverImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    /**
     * The data needed to create a CoverImage.
     */
    data: XOR<CoverImageCreateInput, CoverImageUncheckedCreateInput>
  }

  /**
   * CoverImage createMany
   */
  export type CoverImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoverImages.
     */
    data: CoverImageCreateManyInput | CoverImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoverImage createManyAndReturn
   */
  export type CoverImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * The data used to create many CoverImages.
     */
    data: CoverImageCreateManyInput | CoverImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoverImage update
   */
  export type CoverImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    /**
     * The data needed to update a CoverImage.
     */
    data: XOR<CoverImageUpdateInput, CoverImageUncheckedUpdateInput>
    /**
     * Choose, which CoverImage to update.
     */
    where: CoverImageWhereUniqueInput
  }

  /**
   * CoverImage updateMany
   */
  export type CoverImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoverImages.
     */
    data: XOR<CoverImageUpdateManyMutationInput, CoverImageUncheckedUpdateManyInput>
    /**
     * Filter which CoverImages to update
     */
    where?: CoverImageWhereInput
    /**
     * Limit how many CoverImages to update.
     */
    limit?: number
  }

  /**
   * CoverImage updateManyAndReturn
   */
  export type CoverImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * The data used to update CoverImages.
     */
    data: XOR<CoverImageUpdateManyMutationInput, CoverImageUncheckedUpdateManyInput>
    /**
     * Filter which CoverImages to update
     */
    where?: CoverImageWhereInput
    /**
     * Limit how many CoverImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoverImage upsert
   */
  export type CoverImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    /**
     * The filter to search for the CoverImage to update in case it exists.
     */
    where: CoverImageWhereUniqueInput
    /**
     * In case the CoverImage found by the `where` argument doesn't exist, create a new CoverImage with this data.
     */
    create: XOR<CoverImageCreateInput, CoverImageUncheckedCreateInput>
    /**
     * In case the CoverImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoverImageUpdateInput, CoverImageUncheckedUpdateInput>
  }

  /**
   * CoverImage delete
   */
  export type CoverImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
    /**
     * Filter which CoverImage to delete.
     */
    where: CoverImageWhereUniqueInput
  }

  /**
   * CoverImage deleteMany
   */
  export type CoverImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoverImages to delete
     */
    where?: CoverImageWhereInput
    /**
     * Limit how many CoverImages to delete.
     */
    limit?: number
  }

  /**
   * CoverImage without action
   */
  export type CoverImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoverImage
     */
    select?: CoverImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoverImage
     */
    omit?: CoverImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoverImageInclude<ExtArgs> | null
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


  export const InternshipScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    companyDescription: 'companyDescription',
    Skills: 'Skills',
    Responsibilities: 'Responsibilities',
    Requirements: 'Requirements',
    Batches: 'Batches',
    Duration: 'Duration',
    Location: 'Location',
    mode: 'mode',
    type: 'type',
    stipendMin: 'stipendMin',
    stipendMax: 'stipendMax',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InternshipScalarFieldEnum = (typeof InternshipScalarFieldEnum)[keyof typeof InternshipScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    category: 'category',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const CoverImageScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    fileUrl: 'fileUrl',
    createdAt: 'createdAt',
    blogId: 'blogId'
  };

  export type CoverImageScalarFieldEnum = (typeof CoverImageScalarFieldEnum)[keyof typeof CoverImageScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type InternshipWhereInput = {
    AND?: InternshipWhereInput | InternshipWhereInput[]
    OR?: InternshipWhereInput[]
    NOT?: InternshipWhereInput | InternshipWhereInput[]
    id?: StringFilter<"Internship"> | string
    companyName?: StringFilter<"Internship"> | string
    companyDescription?: StringFilter<"Internship"> | string
    Skills?: StringNullableListFilter<"Internship">
    Responsibilities?: StringFilter<"Internship"> | string
    Requirements?: StringFilter<"Internship"> | string
    Batches?: StringFilter<"Internship"> | string
    Duration?: StringFilter<"Internship"> | string
    Location?: StringFilter<"Internship"> | string
    mode?: StringFilter<"Internship"> | string
    type?: StringFilter<"Internship"> | string
    stipendMin?: IntFilter<"Internship"> | number
    stipendMax?: IntFilter<"Internship"> | number
    url?: StringFilter<"Internship"> | string
    createdAt?: DateTimeFilter<"Internship"> | Date | string
    updatedAt?: DateTimeFilter<"Internship"> | Date | string
  }

  export type InternshipOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyDescription?: SortOrder
    Skills?: SortOrder
    Responsibilities?: SortOrder
    Requirements?: SortOrder
    Batches?: SortOrder
    Duration?: SortOrder
    Location?: SortOrder
    mode?: SortOrder
    type?: SortOrder
    stipendMin?: SortOrder
    stipendMax?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InternshipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InternshipWhereInput | InternshipWhereInput[]
    OR?: InternshipWhereInput[]
    NOT?: InternshipWhereInput | InternshipWhereInput[]
    companyName?: StringFilter<"Internship"> | string
    companyDescription?: StringFilter<"Internship"> | string
    Skills?: StringNullableListFilter<"Internship">
    Responsibilities?: StringFilter<"Internship"> | string
    Requirements?: StringFilter<"Internship"> | string
    Batches?: StringFilter<"Internship"> | string
    Duration?: StringFilter<"Internship"> | string
    Location?: StringFilter<"Internship"> | string
    mode?: StringFilter<"Internship"> | string
    type?: StringFilter<"Internship"> | string
    stipendMin?: IntFilter<"Internship"> | number
    stipendMax?: IntFilter<"Internship"> | number
    url?: StringFilter<"Internship"> | string
    createdAt?: DateTimeFilter<"Internship"> | Date | string
    updatedAt?: DateTimeFilter<"Internship"> | Date | string
  }, "id">

  export type InternshipOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyDescription?: SortOrder
    Skills?: SortOrder
    Responsibilities?: SortOrder
    Requirements?: SortOrder
    Batches?: SortOrder
    Duration?: SortOrder
    Location?: SortOrder
    mode?: SortOrder
    type?: SortOrder
    stipendMin?: SortOrder
    stipendMax?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InternshipCountOrderByAggregateInput
    _avg?: InternshipAvgOrderByAggregateInput
    _max?: InternshipMaxOrderByAggregateInput
    _min?: InternshipMinOrderByAggregateInput
    _sum?: InternshipSumOrderByAggregateInput
  }

  export type InternshipScalarWhereWithAggregatesInput = {
    AND?: InternshipScalarWhereWithAggregatesInput | InternshipScalarWhereWithAggregatesInput[]
    OR?: InternshipScalarWhereWithAggregatesInput[]
    NOT?: InternshipScalarWhereWithAggregatesInput | InternshipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Internship"> | string
    companyName?: StringWithAggregatesFilter<"Internship"> | string
    companyDescription?: StringWithAggregatesFilter<"Internship"> | string
    Skills?: StringNullableListFilter<"Internship">
    Responsibilities?: StringWithAggregatesFilter<"Internship"> | string
    Requirements?: StringWithAggregatesFilter<"Internship"> | string
    Batches?: StringWithAggregatesFilter<"Internship"> | string
    Duration?: StringWithAggregatesFilter<"Internship"> | string
    Location?: StringWithAggregatesFilter<"Internship"> | string
    mode?: StringWithAggregatesFilter<"Internship"> | string
    type?: StringWithAggregatesFilter<"Internship"> | string
    stipendMin?: IntWithAggregatesFilter<"Internship"> | number
    stipendMax?: IntWithAggregatesFilter<"Internship"> | number
    url?: StringWithAggregatesFilter<"Internship"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Internship"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Internship"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    category?: StringFilter<"Blog"> | string
    tags?: StringNullableListFilter<"Blog">
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    coverImage?: XOR<CoverImageNullableScalarRelationFilter, CoverImageWhereInput> | null
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coverImage?: CoverImageOrderByWithRelationInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    title?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    category?: StringFilter<"Blog"> | string
    tags?: StringNullableListFilter<"Blog">
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    coverImage?: XOR<CoverImageNullableScalarRelationFilter, CoverImageWhereInput> | null
  }, "id">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blog"> | string
    title?: StringWithAggregatesFilter<"Blog"> | string
    content?: StringWithAggregatesFilter<"Blog"> | string
    category?: StringWithAggregatesFilter<"Blog"> | string
    tags?: StringNullableListFilter<"Blog">
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
  }

  export type CoverImageWhereInput = {
    AND?: CoverImageWhereInput | CoverImageWhereInput[]
    OR?: CoverImageWhereInput[]
    NOT?: CoverImageWhereInput | CoverImageWhereInput[]
    id?: IntFilter<"CoverImage"> | number
    fileName?: StringFilter<"CoverImage"> | string
    fileUrl?: StringFilter<"CoverImage"> | string
    createdAt?: DateTimeFilter<"CoverImage"> | Date | string
    blogId?: StringFilter<"CoverImage"> | string
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
  }

  export type CoverImageOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    blogId?: SortOrder
    blog?: BlogOrderByWithRelationInput
  }

  export type CoverImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    blogId?: string
    AND?: CoverImageWhereInput | CoverImageWhereInput[]
    OR?: CoverImageWhereInput[]
    NOT?: CoverImageWhereInput | CoverImageWhereInput[]
    fileName?: StringFilter<"CoverImage"> | string
    fileUrl?: StringFilter<"CoverImage"> | string
    createdAt?: DateTimeFilter<"CoverImage"> | Date | string
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
  }, "id" | "blogId">

  export type CoverImageOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    blogId?: SortOrder
    _count?: CoverImageCountOrderByAggregateInput
    _avg?: CoverImageAvgOrderByAggregateInput
    _max?: CoverImageMaxOrderByAggregateInput
    _min?: CoverImageMinOrderByAggregateInput
    _sum?: CoverImageSumOrderByAggregateInput
  }

  export type CoverImageScalarWhereWithAggregatesInput = {
    AND?: CoverImageScalarWhereWithAggregatesInput | CoverImageScalarWhereWithAggregatesInput[]
    OR?: CoverImageScalarWhereWithAggregatesInput[]
    NOT?: CoverImageScalarWhereWithAggregatesInput | CoverImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CoverImage"> | number
    fileName?: StringWithAggregatesFilter<"CoverImage"> | string
    fileUrl?: StringWithAggregatesFilter<"CoverImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CoverImage"> | Date | string
    blogId?: StringWithAggregatesFilter<"CoverImage"> | string
  }

  export type InternshipCreateInput = {
    id?: string
    companyName: string
    companyDescription: string
    Skills?: InternshipCreateSkillsInput | string[]
    Responsibilities: string
    Requirements: string
    Batches: string
    Duration: string
    Location: string
    mode: string
    type: string
    stipendMin: number
    stipendMax: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InternshipUncheckedCreateInput = {
    id?: string
    companyName: string
    companyDescription: string
    Skills?: InternshipCreateSkillsInput | string[]
    Responsibilities: string
    Requirements: string
    Batches: string
    Duration: string
    Location: string
    mode: string
    type: string
    stipendMin: number
    stipendMax: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InternshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyDescription?: StringFieldUpdateOperationsInput | string
    Skills?: InternshipUpdateSkillsInput | string[]
    Responsibilities?: StringFieldUpdateOperationsInput | string
    Requirements?: StringFieldUpdateOperationsInput | string
    Batches?: StringFieldUpdateOperationsInput | string
    Duration?: StringFieldUpdateOperationsInput | string
    Location?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    stipendMin?: IntFieldUpdateOperationsInput | number
    stipendMax?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InternshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyDescription?: StringFieldUpdateOperationsInput | string
    Skills?: InternshipUpdateSkillsInput | string[]
    Responsibilities?: StringFieldUpdateOperationsInput | string
    Requirements?: StringFieldUpdateOperationsInput | string
    Batches?: StringFieldUpdateOperationsInput | string
    Duration?: StringFieldUpdateOperationsInput | string
    Location?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    stipendMin?: IntFieldUpdateOperationsInput | number
    stipendMax?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InternshipCreateManyInput = {
    id?: string
    companyName: string
    companyDescription: string
    Skills?: InternshipCreateSkillsInput | string[]
    Responsibilities: string
    Requirements: string
    Batches: string
    Duration: string
    Location: string
    mode: string
    type: string
    stipendMin: number
    stipendMax: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InternshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyDescription?: StringFieldUpdateOperationsInput | string
    Skills?: InternshipUpdateSkillsInput | string[]
    Responsibilities?: StringFieldUpdateOperationsInput | string
    Requirements?: StringFieldUpdateOperationsInput | string
    Batches?: StringFieldUpdateOperationsInput | string
    Duration?: StringFieldUpdateOperationsInput | string
    Location?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    stipendMin?: IntFieldUpdateOperationsInput | number
    stipendMax?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InternshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyDescription?: StringFieldUpdateOperationsInput | string
    Skills?: InternshipUpdateSkillsInput | string[]
    Responsibilities?: StringFieldUpdateOperationsInput | string
    Requirements?: StringFieldUpdateOperationsInput | string
    Batches?: StringFieldUpdateOperationsInput | string
    Duration?: StringFieldUpdateOperationsInput | string
    Location?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    stipendMin?: IntFieldUpdateOperationsInput | number
    stipendMax?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    id?: string
    title: string
    content: string
    category: string
    tags?: BlogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    coverImage?: CoverImageCreateNestedOneWithoutBlogInput
  }

  export type BlogUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    category: string
    tags?: BlogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    coverImage?: CoverImageUncheckedCreateNestedOneWithoutBlogInput
  }

  export type BlogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coverImage?: CoverImageUpdateOneWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coverImage?: CoverImageUncheckedUpdateOneWithoutBlogNestedInput
  }

  export type BlogCreateManyInput = {
    id?: string
    title: string
    content: string
    category: string
    tags?: BlogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverImageCreateInput = {
    fileName: string
    fileUrl: string
    createdAt?: Date | string
    blog: BlogCreateNestedOneWithoutCoverImageInput
  }

  export type CoverImageUncheckedCreateInput = {
    id?: number
    fileName: string
    fileUrl: string
    createdAt?: Date | string
    blogId: string
  }

  export type CoverImageUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: BlogUpdateOneRequiredWithoutCoverImageNestedInput
  }

  export type CoverImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogId?: StringFieldUpdateOperationsInput | string
  }

  export type CoverImageCreateManyInput = {
    id?: number
    fileName: string
    fileUrl: string
    createdAt?: Date | string
    blogId: string
  }

  export type CoverImageUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogId?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type InternshipCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyDescription?: SortOrder
    Skills?: SortOrder
    Responsibilities?: SortOrder
    Requirements?: SortOrder
    Batches?: SortOrder
    Duration?: SortOrder
    Location?: SortOrder
    mode?: SortOrder
    type?: SortOrder
    stipendMin?: SortOrder
    stipendMax?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InternshipAvgOrderByAggregateInput = {
    stipendMin?: SortOrder
    stipendMax?: SortOrder
  }

  export type InternshipMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyDescription?: SortOrder
    Responsibilities?: SortOrder
    Requirements?: SortOrder
    Batches?: SortOrder
    Duration?: SortOrder
    Location?: SortOrder
    mode?: SortOrder
    type?: SortOrder
    stipendMin?: SortOrder
    stipendMax?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InternshipMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyDescription?: SortOrder
    Responsibilities?: SortOrder
    Requirements?: SortOrder
    Batches?: SortOrder
    Duration?: SortOrder
    Location?: SortOrder
    mode?: SortOrder
    type?: SortOrder
    stipendMin?: SortOrder
    stipendMax?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InternshipSumOrderByAggregateInput = {
    stipendMin?: SortOrder
    stipendMax?: SortOrder
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type CoverImageNullableScalarRelationFilter = {
    is?: CoverImageWhereInput | null
    isNot?: CoverImageWhereInput | null
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogScalarRelationFilter = {
    is?: BlogWhereInput
    isNot?: BlogWhereInput
  }

  export type CoverImageCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    blogId?: SortOrder
  }

  export type CoverImageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CoverImageMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    blogId?: SortOrder
  }

  export type CoverImageMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    blogId?: SortOrder
  }

  export type CoverImageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InternshipCreateSkillsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type InternshipUpdateSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BlogCreatetagsInput = {
    set: string[]
  }

  export type CoverImageCreateNestedOneWithoutBlogInput = {
    create?: XOR<CoverImageCreateWithoutBlogInput, CoverImageUncheckedCreateWithoutBlogInput>
    connectOrCreate?: CoverImageCreateOrConnectWithoutBlogInput
    connect?: CoverImageWhereUniqueInput
  }

  export type CoverImageUncheckedCreateNestedOneWithoutBlogInput = {
    create?: XOR<CoverImageCreateWithoutBlogInput, CoverImageUncheckedCreateWithoutBlogInput>
    connectOrCreate?: CoverImageCreateOrConnectWithoutBlogInput
    connect?: CoverImageWhereUniqueInput
  }

  export type BlogUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CoverImageUpdateOneWithoutBlogNestedInput = {
    create?: XOR<CoverImageCreateWithoutBlogInput, CoverImageUncheckedCreateWithoutBlogInput>
    connectOrCreate?: CoverImageCreateOrConnectWithoutBlogInput
    upsert?: CoverImageUpsertWithoutBlogInput
    disconnect?: CoverImageWhereInput | boolean
    delete?: CoverImageWhereInput | boolean
    connect?: CoverImageWhereUniqueInput
    update?: XOR<XOR<CoverImageUpdateToOneWithWhereWithoutBlogInput, CoverImageUpdateWithoutBlogInput>, CoverImageUncheckedUpdateWithoutBlogInput>
  }

  export type CoverImageUncheckedUpdateOneWithoutBlogNestedInput = {
    create?: XOR<CoverImageCreateWithoutBlogInput, CoverImageUncheckedCreateWithoutBlogInput>
    connectOrCreate?: CoverImageCreateOrConnectWithoutBlogInput
    upsert?: CoverImageUpsertWithoutBlogInput
    disconnect?: CoverImageWhereInput | boolean
    delete?: CoverImageWhereInput | boolean
    connect?: CoverImageWhereUniqueInput
    update?: XOR<XOR<CoverImageUpdateToOneWithWhereWithoutBlogInput, CoverImageUpdateWithoutBlogInput>, CoverImageUncheckedUpdateWithoutBlogInput>
  }

  export type BlogCreateNestedOneWithoutCoverImageInput = {
    create?: XOR<BlogCreateWithoutCoverImageInput, BlogUncheckedCreateWithoutCoverImageInput>
    connectOrCreate?: BlogCreateOrConnectWithoutCoverImageInput
    connect?: BlogWhereUniqueInput
  }

  export type BlogUpdateOneRequiredWithoutCoverImageNestedInput = {
    create?: XOR<BlogCreateWithoutCoverImageInput, BlogUncheckedCreateWithoutCoverImageInput>
    connectOrCreate?: BlogCreateOrConnectWithoutCoverImageInput
    upsert?: BlogUpsertWithoutCoverImageInput
    connect?: BlogWhereUniqueInput
    update?: XOR<XOR<BlogUpdateToOneWithWhereWithoutCoverImageInput, BlogUpdateWithoutCoverImageInput>, BlogUncheckedUpdateWithoutCoverImageInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type CoverImageCreateWithoutBlogInput = {
    fileName: string
    fileUrl: string
    createdAt?: Date | string
  }

  export type CoverImageUncheckedCreateWithoutBlogInput = {
    id?: number
    fileName: string
    fileUrl: string
    createdAt?: Date | string
  }

  export type CoverImageCreateOrConnectWithoutBlogInput = {
    where: CoverImageWhereUniqueInput
    create: XOR<CoverImageCreateWithoutBlogInput, CoverImageUncheckedCreateWithoutBlogInput>
  }

  export type CoverImageUpsertWithoutBlogInput = {
    update: XOR<CoverImageUpdateWithoutBlogInput, CoverImageUncheckedUpdateWithoutBlogInput>
    create: XOR<CoverImageCreateWithoutBlogInput, CoverImageUncheckedCreateWithoutBlogInput>
    where?: CoverImageWhereInput
  }

  export type CoverImageUpdateToOneWithWhereWithoutBlogInput = {
    where?: CoverImageWhereInput
    data: XOR<CoverImageUpdateWithoutBlogInput, CoverImageUncheckedUpdateWithoutBlogInput>
  }

  export type CoverImageUpdateWithoutBlogInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoverImageUncheckedUpdateWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateWithoutCoverImageInput = {
    id?: string
    title: string
    content: string
    category: string
    tags?: BlogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUncheckedCreateWithoutCoverImageInput = {
    id?: string
    title: string
    content: string
    category: string
    tags?: BlogCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCreateOrConnectWithoutCoverImageInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutCoverImageInput, BlogUncheckedCreateWithoutCoverImageInput>
  }

  export type BlogUpsertWithoutCoverImageInput = {
    update: XOR<BlogUpdateWithoutCoverImageInput, BlogUncheckedUpdateWithoutCoverImageInput>
    create: XOR<BlogCreateWithoutCoverImageInput, BlogUncheckedCreateWithoutCoverImageInput>
    where?: BlogWhereInput
  }

  export type BlogUpdateToOneWithWhereWithoutCoverImageInput = {
    where?: BlogWhereInput
    data: XOR<BlogUpdateWithoutCoverImageInput, BlogUncheckedUpdateWithoutCoverImageInput>
  }

  export type BlogUpdateWithoutCoverImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateWithoutCoverImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    tags?: BlogUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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