# `storageBucketAccessControl` Submodule <a name="`storageBucketAccessControl` Submodule" id="@cdktn/provider-google.storageBucketAccessControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBucketAccessControl <a name="StorageBucketAccessControl" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/storage_bucket_access_control google_storage_bucket_access_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.Initializer"></a>

```typescript
import { storageBucketAccessControl } from '@cdktn/provider-google'

new storageBucketAccessControl.StorageBucketAccessControl(scope: Construct, id: string, config: StorageBucketAccessControlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig">StorageBucketAccessControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig">StorageBucketAccessControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageBucketAccessControlTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeouts">StorageBucketAccessControlTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRole` <a name="resetRole" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StorageBucketAccessControl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.isConstruct"></a>

```typescript
import { storageBucketAccessControl } from '@cdktn/provider-google'

storageBucketAccessControl.StorageBucketAccessControl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.isTerraformElement"></a>

```typescript
import { storageBucketAccessControl } from '@cdktn/provider-google'

storageBucketAccessControl.StorageBucketAccessControl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.isTerraformResource"></a>

```typescript
import { storageBucketAccessControl } from '@cdktn/provider-google'

storageBucketAccessControl.StorageBucketAccessControl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.generateConfigForImport"></a>

```typescript
import { storageBucketAccessControl } from '@cdktn/provider-google'

storageBucketAccessControl.StorageBucketAccessControl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StorageBucketAccessControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageBucketAccessControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageBucketAccessControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/storage_bucket_access_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StorageBucketAccessControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference">StorageBucketAccessControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.entityInput">entityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeouts">StorageBucketAccessControlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.entity">entity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.timeouts"></a>

```typescript
public readonly timeouts: StorageBucketAccessControlTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference">StorageBucketAccessControlTimeoutsOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `entityInput`<sup>Optional</sup> <a name="entityInput" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.entityInput"></a>

```typescript
public readonly entityInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageBucketAccessControlTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeouts">StorageBucketAccessControlTimeouts</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.entity"></a>

```typescript
public readonly entity: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBucketAccessControlConfig <a name="StorageBucketAccessControlConfig" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.Initializer"></a>

```typescript
import { storageBucketAccessControl } from '@cdktn/provider-google'

const storageBucketAccessControlConfig: storageBucketAccessControl.StorageBucketAccessControlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.bucket">bucket</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.entity">entity</a></code> | <code>string</code> | The entity holding the permission, in one of the following forms:   user-userId   user-email   group-groupId   group-email   domain-domain   project-team-projectId   allUsers   allAuthenticatedUsers Examples:   The user liz@example.com would be user-liz@example.com.   The group example@googlegroups.com would be   group-example@googlegroups.com.   To refer to all members of the Google Apps for Business domain   example.com, the entity would be domain-example.com. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/storage_bucket_access_control#id StorageBucketAccessControl#id}. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.role">role</a></code> | <code>string</code> | The access permission for the entity. Possible values: ["OWNER", "READER", "WRITER"]. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeouts">StorageBucketAccessControlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/storage_bucket_access_control#bucket StorageBucketAccessControl#bucket}

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.entity"></a>

```typescript
public readonly entity: string;
```

- *Type:* string

The entity holding the permission, in one of the following forms:   user-userId   user-email   group-groupId   group-email   domain-domain   project-team-projectId   allUsers   allAuthenticatedUsers Examples:   The user liz@example.com would be user-liz@example.com.   The group example@googlegroups.com would be   group-example@googlegroups.com.   To refer to all members of the Google Apps for Business domain   example.com, the entity would be domain-example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/storage_bucket_access_control#entity StorageBucketAccessControl#entity}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/storage_bucket_access_control#deletion_policy StorageBucketAccessControl#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/storage_bucket_access_control#id StorageBucketAccessControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The access permission for the entity. Possible values: ["OWNER", "READER", "WRITER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/storage_bucket_access_control#role StorageBucketAccessControl#role}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageBucketAccessControlTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeouts">StorageBucketAccessControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/storage_bucket_access_control#timeouts StorageBucketAccessControl#timeouts}

---

### StorageBucketAccessControlTimeouts <a name="StorageBucketAccessControlTimeouts" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeouts.Initializer"></a>

```typescript
import { storageBucketAccessControl } from '@cdktn/provider-google'

const storageBucketAccessControlTimeouts: storageBucketAccessControl.StorageBucketAccessControlTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/storage_bucket_access_control#create StorageBucketAccessControl#create}. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/storage_bucket_access_control#delete StorageBucketAccessControl#delete}. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/storage_bucket_access_control#update StorageBucketAccessControl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/storage_bucket_access_control#create StorageBucketAccessControl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/storage_bucket_access_control#delete StorageBucketAccessControl#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/storage_bucket_access_control#update StorageBucketAccessControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBucketAccessControlTimeoutsOutputReference <a name="StorageBucketAccessControlTimeoutsOutputReference" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageBucketAccessControl } from '@cdktn/provider-google'

new storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeouts">StorageBucketAccessControlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageBucketAccessControlTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageBucketAccessControl.StorageBucketAccessControlTimeouts">StorageBucketAccessControlTimeouts</a>

---



