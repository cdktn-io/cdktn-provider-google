# `storageManagedFolder` Submodule <a name="`storageManagedFolder` Submodule" id="@cdktn/provider-google.storageManagedFolder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageManagedFolder <a name="StorageManagedFolder" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder google_storage_managed_folder}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer"></a>

```typescript
import { storageManagedFolder } from '@cdktn/provider-google'

new storageManagedFolder.StorageManagedFolder(scope: Construct, id: string, config: StorageManagedFolderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig">StorageManagedFolderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig">StorageManagedFolderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.putRapidCacheConfig">putRapidCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetRapidCacheConfig">resetRapidCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRapidCacheConfig` <a name="putRapidCacheConfig" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.putRapidCacheConfig"></a>

```typescript
public putRapidCacheConfig(value: StorageManagedFolderRapidCacheConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.putRapidCacheConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig">StorageManagedFolderRapidCacheConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageManagedFolderTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts">StorageManagedFolderTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRapidCacheConfig` <a name="resetRapidCacheConfig" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetRapidCacheConfig"></a>

```typescript
public resetRapidCacheConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StorageManagedFolder resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.isConstruct"></a>

```typescript
import { storageManagedFolder } from '@cdktn/provider-google'

storageManagedFolder.StorageManagedFolder.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.isTerraformElement"></a>

```typescript
import { storageManagedFolder } from '@cdktn/provider-google'

storageManagedFolder.StorageManagedFolder.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.isTerraformResource"></a>

```typescript
import { storageManagedFolder } from '@cdktn/provider-google'

storageManagedFolder.StorageManagedFolder.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.generateConfigForImport"></a>

```typescript
import { storageManagedFolder } from '@cdktn/provider-google'

storageManagedFolder.StorageManagedFolder.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StorageManagedFolder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageManagedFolder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageManagedFolder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StorageManagedFolder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.metageneration">metageneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.rapidCacheConfig">rapidCacheConfig</a></code> | <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference">StorageManagedFolderRapidCacheConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference">StorageManagedFolderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.rapidCacheConfigInput">rapidCacheConfigInput</a></code> | <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig">StorageManagedFolderRapidCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts">StorageManagedFolderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `metageneration`<sup>Required</sup> <a name="metageneration" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.metageneration"></a>

```typescript
public readonly metageneration: string;
```

- *Type:* string

---

##### `rapidCacheConfig`<sup>Required</sup> <a name="rapidCacheConfig" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.rapidCacheConfig"></a>

```typescript
public readonly rapidCacheConfig: StorageManagedFolderRapidCacheConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference">StorageManagedFolderRapidCacheConfigOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.timeouts"></a>

```typescript
public readonly timeouts: StorageManagedFolderTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference">StorageManagedFolderTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rapidCacheConfigInput`<sup>Optional</sup> <a name="rapidCacheConfigInput" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.rapidCacheConfigInput"></a>

```typescript
public readonly rapidCacheConfigInput: StorageManagedFolderRapidCacheConfig;
```

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig">StorageManagedFolderRapidCacheConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageManagedFolderTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts">StorageManagedFolderTimeouts</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolder.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageManagedFolderConfig <a name="StorageManagedFolderConfig" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.Initializer"></a>

```typescript
import { storageManagedFolder } from '@cdktn/provider-google'

const storageManagedFolderConfig: storageManagedFolder.StorageManagedFolderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.bucket">bucket</a></code> | <code>string</code> | The name of the bucket that contains the managed folder. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.name">name</a></code> | <code>string</code> | The name of the managed folder expressed as a path. Must include trailing '/'. For example, 'example_dir/example_dir2/'. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktn.IResolvable</code> | Allows the deletion of a managed folder even if contains objects. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#id StorageManagedFolder#id}. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.rapidCacheConfig">rapidCacheConfig</a></code> | <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig">StorageManagedFolderRapidCacheConfig</a></code> | rapid_cache_config block. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts">StorageManagedFolderTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The name of the bucket that contains the managed folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#bucket StorageManagedFolder#bucket}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the managed folder expressed as a path. Must include trailing '/'. For example, 'example_dir/example_dir2/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#name StorageManagedFolder#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#deletion_policy StorageManagedFolder#deletion_policy}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Allows the deletion of a managed folder even if contains objects.

If a non-empty managed folder is deleted, any objects
within the folder will remain in a simulated folder with the
same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#force_destroy StorageManagedFolder#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#id StorageManagedFolder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rapidCacheConfig`<sup>Optional</sup> <a name="rapidCacheConfig" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.rapidCacheConfig"></a>

```typescript
public readonly rapidCacheConfig: StorageManagedFolderRapidCacheConfig;
```

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig">StorageManagedFolderRapidCacheConfig</a>

rapid_cache_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#rapid_cache_config StorageManagedFolder#rapid_cache_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageManagedFolderTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts">StorageManagedFolderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#timeouts StorageManagedFolder#timeouts}

---

### StorageManagedFolderRapidCacheConfig <a name="StorageManagedFolderRapidCacheConfig" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig.Initializer"></a>

```typescript
import { storageManagedFolder } from '@cdktn/provider-google'

const storageManagedFolderRapidCacheConfig: storageManagedFolder.StorageManagedFolderRapidCacheConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig.property.policies">policies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a>[]</code> | policies block. |

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig.property.policies"></a>

```typescript
public readonly policies: IResolvable | StorageManagedFolderRapidCacheConfigPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a>[]

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#policies StorageManagedFolder#policies}

---

### StorageManagedFolderRapidCacheConfigPolicies <a name="StorageManagedFolderRapidCacheConfigPolicies" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies.Initializer"></a>

```typescript
import { storageManagedFolder } from '@cdktn/provider-google'

const storageManagedFolderRapidCacheConfigPolicies: storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies.property.rapidCacheId">rapidCacheId</a></code> | <code>string</code> | The unique identifier of the rapid cache. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies.property.ingestOnWrite">ingestOnWrite</a></code> | <code>string</code> | The ingest-on-write policy for objects in the managed folder. |

---

##### `rapidCacheId`<sup>Required</sup> <a name="rapidCacheId" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies.property.rapidCacheId"></a>

```typescript
public readonly rapidCacheId: string;
```

- *Type:* string

The unique identifier of the rapid cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#rapid_cache_id StorageManagedFolder#rapid_cache_id}

---

##### `ingestOnWrite`<sup>Optional</sup> <a name="ingestOnWrite" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies.property.ingestOnWrite"></a>

```typescript
public readonly ingestOnWrite: string;
```

- *Type:* string

The ingest-on-write policy for objects in the managed folder.

When
set to 'enabled', objects are automatically ingested into the cache
when they are written to the managed folder.
Possible values: ["enabled", "unspecified"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#ingest_on_write StorageManagedFolder#ingest_on_write}

---

### StorageManagedFolderTimeouts <a name="StorageManagedFolderTimeouts" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts.Initializer"></a>

```typescript
import { storageManagedFolder } from '@cdktn/provider-google'

const storageManagedFolderTimeouts: storageManagedFolder.StorageManagedFolderTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#create StorageManagedFolder#create}. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#delete StorageManagedFolder#delete}. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#update StorageManagedFolder#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#create StorageManagedFolder#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#delete StorageManagedFolder#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/storage_managed_folder#update StorageManagedFolder#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageManagedFolderRapidCacheConfigOutputReference <a name="StorageManagedFolderRapidCacheConfigOutputReference" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.Initializer"></a>

```typescript
import { storageManagedFolder } from '@cdktn/provider-google'

new storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.putPolicies">putPolicies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPolicies` <a name="putPolicies" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.putPolicies"></a>

```typescript
public putPolicies(value: IResolvable | StorageManagedFolderRapidCacheConfigPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.putPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList">StorageManagedFolderRapidCacheConfigPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.policiesInput">policiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig">StorageManagedFolderRapidCacheConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.policies"></a>

```typescript
public readonly policies: StorageManagedFolderRapidCacheConfigPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList">StorageManagedFolderRapidCacheConfigPoliciesList</a>

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.policiesInput"></a>

```typescript
public readonly policiesInput: IResolvable | StorageManagedFolderRapidCacheConfigPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageManagedFolderRapidCacheConfig;
```

- *Type:* <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfig">StorageManagedFolderRapidCacheConfig</a>

---


### StorageManagedFolderRapidCacheConfigPoliciesList <a name="StorageManagedFolderRapidCacheConfigPoliciesList" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.Initializer"></a>

```typescript
import { storageManagedFolder } from '@cdktn/provider-google'

new storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.get"></a>

```typescript
public get(index: number): StorageManagedFolderRapidCacheConfigPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageManagedFolderRapidCacheConfigPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a>[]

---


### StorageManagedFolderRapidCacheConfigPoliciesOutputReference <a name="StorageManagedFolderRapidCacheConfigPoliciesOutputReference" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.Initializer"></a>

```typescript
import { storageManagedFolder } from '@cdktn/provider-google'

new storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.resetIngestOnWrite">resetIngestOnWrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIngestOnWrite` <a name="resetIngestOnWrite" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.resetIngestOnWrite"></a>

```typescript
public resetIngestOnWrite(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.ingestOnWriteInput">ingestOnWriteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.rapidCacheIdInput">rapidCacheIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.ingestOnWrite">ingestOnWrite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.rapidCacheId">rapidCacheId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingestOnWriteInput`<sup>Optional</sup> <a name="ingestOnWriteInput" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.ingestOnWriteInput"></a>

```typescript
public readonly ingestOnWriteInput: string;
```

- *Type:* string

---

##### `rapidCacheIdInput`<sup>Optional</sup> <a name="rapidCacheIdInput" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.rapidCacheIdInput"></a>

```typescript
public readonly rapidCacheIdInput: string;
```

- *Type:* string

---

##### `ingestOnWrite`<sup>Required</sup> <a name="ingestOnWrite" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.ingestOnWrite"></a>

```typescript
public readonly ingestOnWrite: string;
```

- *Type:* string

---

##### `rapidCacheId`<sup>Required</sup> <a name="rapidCacheId" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.rapidCacheId"></a>

```typescript
public readonly rapidCacheId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageManagedFolderRapidCacheConfigPolicies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderRapidCacheConfigPolicies">StorageManagedFolderRapidCacheConfigPolicies</a>

---


### StorageManagedFolderTimeoutsOutputReference <a name="StorageManagedFolderTimeoutsOutputReference" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageManagedFolder } from '@cdktn/provider-google'

new storageManagedFolder.StorageManagedFolderTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts">StorageManagedFolderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageManagedFolderTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageManagedFolder.StorageManagedFolderTimeouts">StorageManagedFolderTimeouts</a>

---



