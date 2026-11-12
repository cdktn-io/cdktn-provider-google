# `redisClusterTokenAuthUser` Submodule <a name="`redisClusterTokenAuthUser` Submodule" id="@cdktn/provider-google.redisClusterTokenAuthUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisClusterTokenAuthUser <a name="RedisClusterTokenAuthUser" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user google_redis_cluster_token_auth_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer"></a>

```typescript
import { redisClusterTokenAuthUser } from '@cdktn/provider-google'

new redisClusterTokenAuthUser.RedisClusterTokenAuthUser(scope: Construct, id: string, config: RedisClusterTokenAuthUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig">RedisClusterTokenAuthUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig">RedisClusterTokenAuthUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.putTimeouts"></a>

```typescript
public putTimeouts(value: RedisClusterTokenAuthUserTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedisClusterTokenAuthUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isConstruct"></a>

```typescript
import { redisClusterTokenAuthUser } from '@cdktn/provider-google'

redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformElement"></a>

```typescript
import { redisClusterTokenAuthUser } from '@cdktn/provider-google'

redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformResource"></a>

```typescript
import { redisClusterTokenAuthUser } from '@cdktn/provider-google'

redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport"></a>

```typescript
import { redisClusterTokenAuthUser } from '@cdktn/provider-google'

redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RedisClusterTokenAuthUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedisClusterTokenAuthUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedisClusterTokenAuthUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RedisClusterTokenAuthUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference">RedisClusterTokenAuthUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userId">userId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeouts"></a>

```typescript
public readonly timeouts: RedisClusterTokenAuthUserTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference">RedisClusterTokenAuthUserTimeoutsOutputReference</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RedisClusterTokenAuthUserTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedisClusterTokenAuthUserConfig <a name="RedisClusterTokenAuthUserConfig" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.Initializer"></a>

```typescript
import { redisClusterTokenAuthUser } from '@cdktn/provider-google'

const redisClusterTokenAuthUserConfig: redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.cluster">cluster</a></code> | <code>string</code> | The name or resource ID of the Redis cluster. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.userId">userId</a></code> | <code>string</code> | The unique ID (username) of the Token Auth User. The 'default' user cannot be managed with this resource. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#id RedisClusterTokenAuthUser#id}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#project RedisClusterTokenAuthUser#project}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.region">region</a></code> | <code>string</code> | The name of the region of the Redis cluster. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

The name or resource ID of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#cluster RedisClusterTokenAuthUser#cluster}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The unique ID (username) of the Token Auth User. The 'default' user cannot be managed with this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#user_id RedisClusterTokenAuthUser#user_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#deletion_policy RedisClusterTokenAuthUser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#id RedisClusterTokenAuthUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#project RedisClusterTokenAuthUser#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The name of the region of the Redis cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#region RedisClusterTokenAuthUser#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RedisClusterTokenAuthUserTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#timeouts RedisClusterTokenAuthUser#timeouts}

---

### RedisClusterTokenAuthUserTimeouts <a name="RedisClusterTokenAuthUserTimeouts" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.Initializer"></a>

```typescript
import { redisClusterTokenAuthUser } from '@cdktn/provider-google'

const redisClusterTokenAuthUserTimeouts: redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#create RedisClusterTokenAuthUser#create}. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#delete RedisClusterTokenAuthUser#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#create RedisClusterTokenAuthUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/redis_cluster_token_auth_user#delete RedisClusterTokenAuthUser#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisClusterTokenAuthUserTimeoutsOutputReference <a name="RedisClusterTokenAuthUserTimeoutsOutputReference" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer"></a>

```typescript
import { redisClusterTokenAuthUser } from '@cdktn/provider-google'

new redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedisClusterTokenAuthUserTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.redisClusterTokenAuthUser.RedisClusterTokenAuthUserTimeouts">RedisClusterTokenAuthUserTimeouts</a>

---



