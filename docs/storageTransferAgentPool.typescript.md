# `storageTransferAgentPool` Submodule <a name="`storageTransferAgentPool` Submodule" id="@cdktn/provider-google.storageTransferAgentPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageTransferAgentPool <a name="StorageTransferAgentPool" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_transfer_agent_pool google_storage_transfer_agent_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer"></a>

```typescript
import { storageTransferAgentPool } from '@cdktn/provider-google'

new storageTransferAgentPool.StorageTransferAgentPool(scope: Construct, id: string, config: StorageTransferAgentPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig">StorageTransferAgentPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig">StorageTransferAgentPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putBandwidthLimit">putBandwidthLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetBandwidthLimit">resetBandwidthLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBandwidthLimit` <a name="putBandwidthLimit" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putBandwidthLimit"></a>

```typescript
public putBandwidthLimit(value: StorageTransferAgentPoolBandwidthLimit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putBandwidthLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageTransferAgentPoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a>

---

##### `resetBandwidthLimit` <a name="resetBandwidthLimit" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetBandwidthLimit"></a>

```typescript
public resetBandwidthLimit(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StorageTransferAgentPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isConstruct"></a>

```typescript
import { storageTransferAgentPool } from '@cdktn/provider-google'

storageTransferAgentPool.StorageTransferAgentPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isTerraformElement"></a>

```typescript
import { storageTransferAgentPool } from '@cdktn/provider-google'

storageTransferAgentPool.StorageTransferAgentPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isTerraformResource"></a>

```typescript
import { storageTransferAgentPool } from '@cdktn/provider-google'

storageTransferAgentPool.StorageTransferAgentPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.generateConfigForImport"></a>

```typescript
import { storageTransferAgentPool } from '@cdktn/provider-google'

storageTransferAgentPool.StorageTransferAgentPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StorageTransferAgentPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageTransferAgentPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageTransferAgentPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_transfer_agent_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StorageTransferAgentPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.bandwidthLimit">bandwidthLimit</a></code> | <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference">StorageTransferAgentPoolBandwidthLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference">StorageTransferAgentPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.bandwidthLimitInput">bandwidthLimitInput</a></code> | <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bandwidthLimit`<sup>Required</sup> <a name="bandwidthLimit" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.bandwidthLimit"></a>

```typescript
public readonly bandwidthLimit: StorageTransferAgentPoolBandwidthLimitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference">StorageTransferAgentPoolBandwidthLimitOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.timeouts"></a>

```typescript
public readonly timeouts: StorageTransferAgentPoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference">StorageTransferAgentPoolTimeoutsOutputReference</a>

---

##### `bandwidthLimitInput`<sup>Optional</sup> <a name="bandwidthLimitInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.bandwidthLimitInput"></a>

```typescript
public readonly bandwidthLimitInput: StorageTransferAgentPoolBandwidthLimit;
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageTransferAgentPoolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageTransferAgentPoolBandwidthLimit <a name="StorageTransferAgentPoolBandwidthLimit" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit.Initializer"></a>

```typescript
import { storageTransferAgentPool } from '@cdktn/provider-google'

const storageTransferAgentPoolBandwidthLimit: storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit.property.limitMbps">limitMbps</a></code> | <code>string</code> | Bandwidth rate in megabytes per second, distributed across all the agents in the pool. |

---

##### `limitMbps`<sup>Required</sup> <a name="limitMbps" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit.property.limitMbps"></a>

```typescript
public readonly limitMbps: string;
```

- *Type:* string

Bandwidth rate in megabytes per second, distributed across all the agents in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_transfer_agent_pool#limit_mbps StorageTransferAgentPool#limit_mbps}

---

### StorageTransferAgentPoolConfig <a name="StorageTransferAgentPoolConfig" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.Initializer"></a>

```typescript
import { storageTransferAgentPool } from '@cdktn/provider-google'

const storageTransferAgentPoolConfig: storageTransferAgentPool.StorageTransferAgentPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.name">name</a></code> | <code>string</code> | The ID of the agent pool to create. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.bandwidthLimit">bandwidthLimit</a></code> | <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a></code> | bandwidth_limit block. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.displayName">displayName</a></code> | <code>string</code> | Specifies the client-specified AgentPool description. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_transfer_agent_pool#id StorageTransferAgentPool#id}. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_transfer_agent_pool#project StorageTransferAgentPool#project}. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the agent pool to create.

The agentPoolId must meet the following requirements:
* Length of 128 characters or less.
* Not start with the string goog.
* Start with a lowercase ASCII character, followed by:
  * Zero or more: lowercase Latin alphabet characters, numerals, hyphens (-), periods (.), underscores (_), or tildes (~).
  * One or more numerals or lowercase ASCII characters.

As expressed by the regular expression: ^(?!goog)[a-z]([a-z0-9-._~]*[a-z0-9])?$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_transfer_agent_pool#name StorageTransferAgentPool#name}

---

##### `bandwidthLimit`<sup>Optional</sup> <a name="bandwidthLimit" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.bandwidthLimit"></a>

```typescript
public readonly bandwidthLimit: StorageTransferAgentPoolBandwidthLimit;
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a>

bandwidth_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_transfer_agent_pool#bandwidth_limit StorageTransferAgentPool#bandwidth_limit}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Specifies the client-specified AgentPool description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_transfer_agent_pool#display_name StorageTransferAgentPool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_transfer_agent_pool#id StorageTransferAgentPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_transfer_agent_pool#project StorageTransferAgentPool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageTransferAgentPoolTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_transfer_agent_pool#timeouts StorageTransferAgentPool#timeouts}

---

### StorageTransferAgentPoolTimeouts <a name="StorageTransferAgentPoolTimeouts" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.Initializer"></a>

```typescript
import { storageTransferAgentPool } from '@cdktn/provider-google'

const storageTransferAgentPoolTimeouts: storageTransferAgentPool.StorageTransferAgentPoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_transfer_agent_pool#create StorageTransferAgentPool#create}. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_transfer_agent_pool#delete StorageTransferAgentPool#delete}. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_transfer_agent_pool#update StorageTransferAgentPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_transfer_agent_pool#create StorageTransferAgentPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_transfer_agent_pool#delete StorageTransferAgentPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/storage_transfer_agent_pool#update StorageTransferAgentPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageTransferAgentPoolBandwidthLimitOutputReference <a name="StorageTransferAgentPoolBandwidthLimitOutputReference" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.Initializer"></a>

```typescript
import { storageTransferAgentPool } from '@cdktn/provider-google'

new storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbpsInput">limitMbpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbps">limitMbps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limitMbpsInput`<sup>Optional</sup> <a name="limitMbpsInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbpsInput"></a>

```typescript
public readonly limitMbpsInput: string;
```

- *Type:* string

---

##### `limitMbps`<sup>Required</sup> <a name="limitMbps" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.limitMbps"></a>

```typescript
public readonly limitMbps: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageTransferAgentPoolBandwidthLimit;
```

- *Type:* <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolBandwidthLimit">StorageTransferAgentPoolBandwidthLimit</a>

---


### StorageTransferAgentPoolTimeoutsOutputReference <a name="StorageTransferAgentPoolTimeoutsOutputReference" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageTransferAgentPool } from '@cdktn/provider-google'

new storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageTransferAgentPoolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageTransferAgentPool.StorageTransferAgentPoolTimeouts">StorageTransferAgentPoolTimeouts</a>

---



