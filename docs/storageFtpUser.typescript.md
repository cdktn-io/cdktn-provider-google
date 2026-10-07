# `storageFtpUser` Submodule <a name="`storageFtpUser` Submodule" id="@cdktn/provider-google.storageFtpUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageFtpUser <a name="StorageFtpUser" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user google_storage_ftp_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer"></a>

```typescript
import { storageFtpUser } from '@cdktn/provider-google'

new storageFtpUser.StorageFtpUser(scope: Construct, id: string, config: StorageFtpUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig">StorageFtpUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig">StorageFtpUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.putStorageDirectoryMappings">putStorageDirectoryMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.putUserCredentials">putUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetStorageDirectoryMappings">resetStorageDirectoryMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetUserCredentials">resetUserCredentials</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStorageDirectoryMappings` <a name="putStorageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putStorageDirectoryMappings"></a>

```typescript
public putStorageDirectoryMappings(value: IResolvable | StorageFtpUserStorageDirectoryMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putStorageDirectoryMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageFtpUserTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

---

##### `putUserCredentials` <a name="putUserCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putUserCredentials"></a>

```typescript
public putUserCredentials(value: IResolvable | StorageFtpUserUserCredentials[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.putUserCredentials.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>[]

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetStorageDirectoryMappings` <a name="resetStorageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetStorageDirectoryMappings"></a>

```typescript
public resetStorageDirectoryMappings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserCredentials` <a name="resetUserCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.resetUserCredentials"></a>

```typescript
public resetUserCredentials(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StorageFtpUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isConstruct"></a>

```typescript
import { storageFtpUser } from '@cdktn/provider-google'

storageFtpUser.StorageFtpUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformElement"></a>

```typescript
import { storageFtpUser } from '@cdktn/provider-google'

storageFtpUser.StorageFtpUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformResource"></a>

```typescript
import { storageFtpUser } from '@cdktn/provider-google'

storageFtpUser.StorageFtpUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport"></a>

```typescript
import { storageFtpUser } from '@cdktn/provider-google'

storageFtpUser.StorageFtpUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StorageFtpUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageFtpUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageFtpUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StorageFtpUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappings">storageDirectoryMappings</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList">StorageFtpUserStorageDirectoryMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference">StorageFtpUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentials">userCredentials</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList">StorageFtpUserUserCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccountInput">customerServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverIdInput">serverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappingsInput">storageDirectoryMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentialsInput">userCredentialsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccount">customerServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userId">userId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageDirectoryMappings`<sup>Required</sup> <a name="storageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappings"></a>

```typescript
public readonly storageDirectoryMappings: StorageFtpUserStorageDirectoryMappingsList;
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList">StorageFtpUserStorageDirectoryMappingsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeouts"></a>

```typescript
public readonly timeouts: StorageFtpUserTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference">StorageFtpUserTimeoutsOutputReference</a>

---

##### `userCredentials`<sup>Required</sup> <a name="userCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentials"></a>

```typescript
public readonly userCredentials: StorageFtpUserUserCredentialsList;
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList">StorageFtpUserUserCredentialsList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `customerServiceAccountInput`<sup>Optional</sup> <a name="customerServiceAccountInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccountInput"></a>

```typescript
public readonly customerServiceAccountInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverIdInput"></a>

```typescript
public readonly serverIdInput: string;
```

- *Type:* string

---

##### `storageDirectoryMappingsInput`<sup>Optional</sup> <a name="storageDirectoryMappingsInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.storageDirectoryMappingsInput"></a>

```typescript
public readonly storageDirectoryMappingsInput: IResolvable | StorageFtpUserStorageDirectoryMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageFtpUserTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

---

##### `userCredentialsInput`<sup>Optional</sup> <a name="userCredentialsInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userCredentialsInput"></a>

```typescript
public readonly userCredentialsInput: IResolvable | StorageFtpUserUserCredentials[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>[]

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `customerServiceAccount`<sup>Required</sup> <a name="customerServiceAccount" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.customerServiceAccount"></a>

```typescript
public readonly customerServiceAccount: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageFtpUserConfig <a name="StorageFtpUserConfig" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.Initializer"></a>

```typescript
import { storageFtpUser } from '@cdktn/provider-google'

const storageFtpUserConfig: storageFtpUser.StorageFtpUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.customerServiceAccount">customerServiceAccount</a></code> | <code>string</code> | The email address of the service account associated with the user. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.location">location</a></code> | <code>string</code> | The location (region) of the Storage FTP User. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.serverId">serverId</a></code> | <code>string</code> | The ID of the server. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userId">userId</a></code> | <code>string</code> | The unique ID for the user. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#id StorageFtpUser#id}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels that can contain user-provided metadata. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#project StorageFtpUser#project}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.storageDirectoryMappings">storageDirectoryMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>[]</code> | storage_directory_mappings block. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userCredentials">userCredentials</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>[]</code> | user_credentials block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `customerServiceAccount`<sup>Required</sup> <a name="customerServiceAccount" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.customerServiceAccount"></a>

```typescript
public readonly customerServiceAccount: string;
```

- *Type:* string

The email address of the service account associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#customer_service_account StorageFtpUser#customer_service_account}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location (region) of the Storage FTP User.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#location StorageFtpUser#location}

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

The ID of the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#server_id StorageFtpUser#server_id}

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The unique ID for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#user_id StorageFtpUser#user_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#deletion_policy StorageFtpUser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#id StorageFtpUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels that can contain user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#labels StorageFtpUser#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#project StorageFtpUser#project}.

---

##### `storageDirectoryMappings`<sup>Optional</sup> <a name="storageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.storageDirectoryMappings"></a>

```typescript
public readonly storageDirectoryMappings: IResolvable | StorageFtpUserStorageDirectoryMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>[]

storage_directory_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#storage_directory_mappings StorageFtpUser#storage_directory_mappings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageFtpUserTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#timeouts StorageFtpUser#timeouts}

---

##### `userCredentials`<sup>Optional</sup> <a name="userCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserConfig.property.userCredentials"></a>

```typescript
public readonly userCredentials: IResolvable | StorageFtpUserUserCredentials[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>[]

user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#user_credentials StorageFtpUser#user_credentials}

---

### StorageFtpUserStorageDirectoryMappings <a name="StorageFtpUserStorageDirectoryMappings" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.Initializer"></a>

```typescript
import { storageFtpUser } from '@cdktn/provider-google'

const storageFtpUserStorageDirectoryMappings: storageFtpUser.StorageFtpUserStorageDirectoryMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucket">bucket</a></code> | <code>string</code> | The Cloud Storage bucket name. Omit the gs://. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | The path of a folder within the bucket to set as the root directory for this directory mapping. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.directory">directory</a></code> | <code>string</code> | The directory path in the virtual file system. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.permission">permission</a></code> | <code>string</code> | The access level for the directory. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The Cloud Storage bucket name. Omit the gs://.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#bucket StorageFtpUser#bucket}

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

The path of a folder within the bucket to set as the root directory for this directory mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#bucket_prefix StorageFtpUser#bucket_prefix}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

The directory path in the virtual file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#directory StorageFtpUser#directory}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

The access level for the directory.

For read-only access, set this value to READ_ONLY. For read and write access, set this value to READ_WRITE. Possible values: ["READ_ONLY", "READ_WRITE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#permission StorageFtpUser#permission}

---

### StorageFtpUserTimeouts <a name="StorageFtpUserTimeouts" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.Initializer"></a>

```typescript
import { storageFtpUser } from '@cdktn/provider-google'

const storageFtpUserTimeouts: storageFtpUser.StorageFtpUserTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#create StorageFtpUser#create}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#delete StorageFtpUser#delete}. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#update StorageFtpUser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#create StorageFtpUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#delete StorageFtpUser#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#update StorageFtpUser#update}.

---

### StorageFtpUserUserCredentials <a name="StorageFtpUserUserCredentials" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.Initializer"></a>

```typescript
import { storageFtpUser } from '@cdktn/provider-google'

const storageFtpUserUserCredentials: storageFtpUser.StorageFtpUserUserCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialName">credentialName</a></code> | <code>string</code> | The name of the credential. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialType">credentialType</a></code> | <code>string</code> | The type of the credential. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.sshPublicKeyBody">sshPublicKeyBody</a></code> | <code>string</code> | The SSH public key body. |

---

##### `credentialName`<sup>Optional</sup> <a name="credentialName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialName"></a>

```typescript
public readonly credentialName: string;
```

- *Type:* string

The name of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#credential_name StorageFtpUser#credential_name}

---

##### `credentialType`<sup>Optional</sup> <a name="credentialType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

The type of the credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#credential_type StorageFtpUser#credential_type}

---

##### `sshPublicKeyBody`<sup>Optional</sup> <a name="sshPublicKeyBody" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials.property.sshPublicKeyBody"></a>

```typescript
public readonly sshPublicKeyBody: string;
```

- *Type:* string

The SSH public key body.

A file either absolute or relative path should be provided which contains the ssh public key using file() interpolation in Terraform, not recommended to have key as a literal string in config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_user#ssh_public_key_body StorageFtpUser#ssh_public_key_body}

---

## Classes <a name="Classes" id="Classes"></a>

### StorageFtpUserStorageDirectoryMappingsList <a name="StorageFtpUserStorageDirectoryMappingsList" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer"></a>

```typescript
import { storageFtpUser } from '@cdktn/provider-google'

new storageFtpUser.StorageFtpUserStorageDirectoryMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.get"></a>

```typescript
public get(index: number): StorageFtpUserStorageDirectoryMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageFtpUserStorageDirectoryMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>[]

---


### StorageFtpUserStorageDirectoryMappingsOutputReference <a name="StorageFtpUserStorageDirectoryMappingsOutputReference" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer"></a>

```typescript
import { storageFtpUser } from '@cdktn/provider-google'

new storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetBucketPrefix"></a>

```typescript
public resetBucketPrefix(): void
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetDirectory"></a>

```typescript
public resetDirectory(): void
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.resetPermission"></a>

```typescript
public resetPermission(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directoryInput">directoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directory">directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefixInput"></a>

```typescript
public readonly bucketPrefixInput: string;
```

- *Type:* string

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directoryInput"></a>

```typescript
public readonly directoryInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageFtpUserStorageDirectoryMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserStorageDirectoryMappings">StorageFtpUserStorageDirectoryMappings</a>

---


### StorageFtpUserTimeoutsOutputReference <a name="StorageFtpUserTimeoutsOutputReference" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageFtpUser } from '@cdktn/provider-google'

new storageFtpUser.StorageFtpUserTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageFtpUserTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserTimeouts">StorageFtpUserTimeouts</a>

---


### StorageFtpUserUserCredentialsList <a name="StorageFtpUserUserCredentialsList" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer"></a>

```typescript
import { storageFtpUser } from '@cdktn/provider-google'

new storageFtpUser.StorageFtpUserUserCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.get"></a>

```typescript
public get(index: number): StorageFtpUserUserCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageFtpUserUserCredentials[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>[]

---


### StorageFtpUserUserCredentialsOutputReference <a name="StorageFtpUserUserCredentialsOutputReference" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer"></a>

```typescript
import { storageFtpUser } from '@cdktn/provider-google'

new storageFtpUser.StorageFtpUserUserCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialName">resetCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialType">resetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetSshPublicKeyBody">resetSshPublicKeyBody</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialName` <a name="resetCredentialName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialName"></a>

```typescript
public resetCredentialName(): void
```

##### `resetCredentialType` <a name="resetCredentialType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetCredentialType"></a>

```typescript
public resetCredentialType(): void
```

##### `resetSshPublicKeyBody` <a name="resetSshPublicKeyBody" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.resetSshPublicKeyBody"></a>

```typescript
public resetSshPublicKeyBody(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialNameInput">credentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBodyInput">sshPublicKeyBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialName">credentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBody">sshPublicKeyBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialNameInput`<sup>Optional</sup> <a name="credentialNameInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialNameInput"></a>

```typescript
public readonly credentialNameInput: string;
```

- *Type:* string

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialTypeInput"></a>

```typescript
public readonly credentialTypeInput: string;
```

- *Type:* string

---

##### `sshPublicKeyBodyInput`<sup>Optional</sup> <a name="sshPublicKeyBodyInput" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBodyInput"></a>

```typescript
public readonly sshPublicKeyBodyInput: string;
```

- *Type:* string

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialName"></a>

```typescript
public readonly credentialName: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `sshPublicKeyBody`<sup>Required</sup> <a name="sshPublicKeyBody" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.sshPublicKeyBody"></a>

```typescript
public readonly sshPublicKeyBody: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageFtpUserUserCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpUser.StorageFtpUserUserCredentials">StorageFtpUserUserCredentials</a>

---



