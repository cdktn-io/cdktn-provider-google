# `storageFtpServer` Submodule <a name="`storageFtpServer` Submodule" id="@cdktn/provider-google.storageFtpServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageFtpServer <a name="StorageFtpServer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server google_storage_ftp_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer"></a>

```typescript
import { storageFtpServer } from '@cdktn/provider-google'

new storageFtpServer.StorageFtpServer(scope: Construct, id: string, config: StorageFtpServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig">StorageFtpServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig">StorageFtpServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.putExternalConfig">putExternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.putInternalConfig">putInternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetExternalConfig">resetExternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetInternalConfig">resetInternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExternalConfig` <a name="putExternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putExternalConfig"></a>

```typescript
public putExternalConfig(value: StorageFtpServerExternalConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putExternalConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a>

---

##### `putInternalConfig` <a name="putInternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putInternalConfig"></a>

```typescript
public putInternalConfig(value: StorageFtpServerInternalConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putInternalConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageFtpServerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExternalConfig` <a name="resetExternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetExternalConfig"></a>

```typescript
public resetExternalConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInternalConfig` <a name="resetInternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetInternalConfig"></a>

```typescript
public resetInternalConfig(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StorageFtpServer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isConstruct"></a>

```typescript
import { storageFtpServer } from '@cdktn/provider-google'

storageFtpServer.StorageFtpServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformElement"></a>

```typescript
import { storageFtpServer } from '@cdktn/provider-google'

storageFtpServer.StorageFtpServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformResource"></a>

```typescript
import { storageFtpServer } from '@cdktn/provider-google'

storageFtpServer.StorageFtpServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport"></a>

```typescript
import { storageFtpServer } from '@cdktn/provider-google'

storageFtpServer.StorageFtpServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StorageFtpServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageFtpServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageFtpServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StorageFtpServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.externalConfig">externalConfig</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference">StorageFtpServerExternalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.internalConfig">internalConfig</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference">StorageFtpServerInternalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serviceAgent">serviceAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference">StorageFtpServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.accessTypeInput">accessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.externalConfigInput">externalConfigInput</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.internalConfigInput">internalConfigInput</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serverIdInput">serverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.accessType">accessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `externalConfig`<sup>Required</sup> <a name="externalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.externalConfig"></a>

```typescript
public readonly externalConfig: StorageFtpServerExternalConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference">StorageFtpServerExternalConfigOutputReference</a>

---

##### `internalConfig`<sup>Required</sup> <a name="internalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.internalConfig"></a>

```typescript
public readonly internalConfig: StorageFtpServerInternalConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference">StorageFtpServerInternalConfigOutputReference</a>

---

##### `serviceAgent`<sup>Required</sup> <a name="serviceAgent" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serviceAgent"></a>

```typescript
public readonly serviceAgent: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.timeouts"></a>

```typescript
public readonly timeouts: StorageFtpServerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference">StorageFtpServerTimeoutsOutputReference</a>

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.accessTypeInput"></a>

```typescript
public readonly accessTypeInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `externalConfigInput`<sup>Optional</sup> <a name="externalConfigInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.externalConfigInput"></a>

```typescript
public readonly externalConfigInput: StorageFtpServerExternalConfig;
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `internalConfigInput`<sup>Optional</sup> <a name="internalConfigInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.internalConfigInput"></a>

```typescript
public readonly internalConfigInput: StorageFtpServerInternalConfig;
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serverIdInput"></a>

```typescript
public readonly serverIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageFtpServerTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a>

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.storageFtpServer.StorageFtpServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageFtpServerConfig <a name="StorageFtpServerConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.Initializer"></a>

```typescript
import { storageFtpServer } from '@cdktn/provider-google'

const storageFtpServerConfig: storageFtpServer.StorageFtpServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.accessType">accessType</a></code> | <code>string</code> | The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"]. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.location">location</a></code> | <code>string</code> | The location (region) of the Storage FTP Server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.serverId">serverId</a></code> | <code>string</code> | A unique ID for the server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.displayName">displayName</a></code> | <code>string</code> | A display name for the server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.externalConfig">externalConfig</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a></code> | external_config block. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#id StorageFtpServer#id}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.internalConfig">internalConfig</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a></code> | internal_config block. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to the Storage FTP Server. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.accessType"></a>

```typescript
public readonly accessType: string;
```

- *Type:* string

The access type for this SFTP server. Possible values: INTERNAL, EXTERNAL Possible values: ["INTERNAL", "EXTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#access_type StorageFtpServer#access_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location (region) of the Storage FTP Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#location StorageFtpServer#location}

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

A unique ID for the server.

Must start with a lowercase letter, and end with a lowercase letter or number. Can contain lowercase letters, numbers, and hyphens. Maximum 30 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#server_id StorageFtpServer#server_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#deletion_policy StorageFtpServer#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A display name for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#display_name StorageFtpServer#display_name}

---

##### `externalConfig`<sup>Optional</sup> <a name="externalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.externalConfig"></a>

```typescript
public readonly externalConfig: StorageFtpServerExternalConfig;
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a>

external_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#external_config StorageFtpServer#external_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#id StorageFtpServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internalConfig`<sup>Optional</sup> <a name="internalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.internalConfig"></a>

```typescript
public readonly internalConfig: StorageFtpServerInternalConfig;
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a>

internal_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#internal_config StorageFtpServer#internal_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to the Storage FTP Server.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#labels StorageFtpServer#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StorageFtpServerTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#timeouts StorageFtpServer#timeouts}

---

### StorageFtpServerExternalConfig <a name="StorageFtpServerExternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig.Initializer"></a>

```typescript
import { storageFtpServer } from '@cdktn/provider-google'

const storageFtpServerExternalConfig: storageFtpServer.StorageFtpServerExternalConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig.property.allowedCidrBlocks">allowedCidrBlocks</a></code> | <code>string[]</code> | A list of allowed IPv4 or IPv6 CIDR block ranges that can connect to this server. |

---

##### `allowedCidrBlocks`<sup>Optional</sup> <a name="allowedCidrBlocks" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig.property.allowedCidrBlocks"></a>

```typescript
public readonly allowedCidrBlocks: string[];
```

- *Type:* string[]

A list of allowed IPv4 or IPv6 CIDR block ranges that can connect to this server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#allowed_cidr_blocks StorageFtpServer#allowed_cidr_blocks}

---

### StorageFtpServerInternalConfig <a name="StorageFtpServerInternalConfig" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.Initializer"></a>

```typescript
import { storageFtpServer } from '@cdktn/provider-google'

const storageFtpServerInternalConfig: storageFtpServer.StorageFtpServerInternalConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.property.consumerAcceptList">consumerAcceptList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]</code> | consumer_accept_list block. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.property.consumerRejectList">consumerRejectList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>[]</code> | consumer_reject_list block. |

---

##### `consumerAcceptList`<sup>Optional</sup> <a name="consumerAcceptList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.property.consumerAcceptList"></a>

```typescript
public readonly consumerAcceptList: IResolvable | StorageFtpServerInternalConfigConsumerAcceptListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]

consumer_accept_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#consumer_accept_list StorageFtpServer#consumer_accept_list}

---

##### `consumerRejectList`<sup>Optional</sup> <a name="consumerRejectList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig.property.consumerRejectList"></a>

```typescript
public readonly consumerRejectList: IResolvable | StorageFtpServerInternalConfigConsumerRejectListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>[]

consumer_reject_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#consumer_reject_list StorageFtpServer#consumer_reject_list}

---

### StorageFtpServerInternalConfigConsumerAcceptListStruct <a name="StorageFtpServerInternalConfigConsumerAcceptListStruct" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.Initializer"></a>

```typescript
import { storageFtpServer } from '@cdktn/provider-google'

const storageFtpServerInternalConfigConsumerAcceptListStruct: storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.property.connectionLimit">connectionLimit</a></code> | <code>number</code> | The maximum number of Private Service Connect endpoints that can be created in the consumer project. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.property.project">project</a></code> | <code>string</code> | The project that is allowed to connect, in the format 'projects/{project}'. |

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.property.connectionLimit"></a>

```typescript
public readonly connectionLimit: number;
```

- *Type:* number

The maximum number of Private Service Connect endpoints that can be created in the consumer project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#connection_limit StorageFtpServer#connection_limit}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project that is allowed to connect, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}

---

### StorageFtpServerInternalConfigConsumerRejectListStruct <a name="StorageFtpServerInternalConfigConsumerRejectListStruct" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct.Initializer"></a>

```typescript
import { storageFtpServer } from '@cdktn/provider-google'

const storageFtpServerInternalConfigConsumerRejectListStruct: storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct.property.project">project</a></code> | <code>string</code> | The project that is rejected from connecting, in the format 'projects/{project}'. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project that is rejected from connecting, in the format 'projects/{project}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#project StorageFtpServer#project}

---

### StorageFtpServerTimeouts <a name="StorageFtpServerTimeouts" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.Initializer"></a>

```typescript
import { storageFtpServer } from '@cdktn/provider-google'

const storageFtpServerTimeouts: storageFtpServer.StorageFtpServerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#create StorageFtpServer#create}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#delete StorageFtpServer#delete}. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#update StorageFtpServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#create StorageFtpServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#delete StorageFtpServer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/storage_ftp_server#update StorageFtpServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageFtpServerExternalConfigOutputReference <a name="StorageFtpServerExternalConfigOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer"></a>

```typescript
import { storageFtpServer } from '@cdktn/provider-google'

new storageFtpServer.StorageFtpServerExternalConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resetAllowedCidrBlocks">resetAllowedCidrBlocks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedCidrBlocks` <a name="resetAllowedCidrBlocks" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.resetAllowedCidrBlocks"></a>

```typescript
public resetAllowedCidrBlocks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocksInput">allowedCidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocks">allowedCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `allowedCidrBlocksInput`<sup>Optional</sup> <a name="allowedCidrBlocksInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocksInput"></a>

```typescript
public readonly allowedCidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `allowedCidrBlocks`<sup>Required</sup> <a name="allowedCidrBlocks" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.allowedCidrBlocks"></a>

```typescript
public readonly allowedCidrBlocks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageFtpServerExternalConfig;
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerExternalConfig">StorageFtpServerExternalConfig</a>

---


### StorageFtpServerInternalConfigConsumerAcceptListStructList <a name="StorageFtpServerInternalConfigConsumerAcceptListStructList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer"></a>

```typescript
import { storageFtpServer } from '@cdktn/provider-google'

new storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.get"></a>

```typescript
public get(index: number): StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageFtpServerInternalConfigConsumerAcceptListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]

---


### StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference <a name="StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer"></a>

```typescript
import { storageFtpServer } from '@cdktn/provider-google'

new storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimitInput">connectionLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimit">connectionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionLimitInput`<sup>Optional</sup> <a name="connectionLimitInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimitInput"></a>

```typescript
public readonly connectionLimitInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.connectionLimit"></a>

```typescript
public readonly connectionLimit: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageFtpServerInternalConfigConsumerAcceptListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>

---


### StorageFtpServerInternalConfigConsumerRejectListStructList <a name="StorageFtpServerInternalConfigConsumerRejectListStructList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer"></a>

```typescript
import { storageFtpServer } from '@cdktn/provider-google'

new storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.get"></a>

```typescript
public get(index: number): StorageFtpServerInternalConfigConsumerRejectListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageFtpServerInternalConfigConsumerRejectListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>[]

---


### StorageFtpServerInternalConfigConsumerRejectListStructOutputReference <a name="StorageFtpServerInternalConfigConsumerRejectListStructOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer"></a>

```typescript
import { storageFtpServer } from '@cdktn/provider-google'

new storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageFtpServerInternalConfigConsumerRejectListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>

---


### StorageFtpServerInternalConfigOutputReference <a name="StorageFtpServerInternalConfigOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer"></a>

```typescript
import { storageFtpServer } from '@cdktn/provider-google'

new storageFtpServer.StorageFtpServerInternalConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerAcceptList">putConsumerAcceptList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerRejectList">putConsumerRejectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resetConsumerAcceptList">resetConsumerAcceptList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resetConsumerRejectList">resetConsumerRejectList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConsumerAcceptList` <a name="putConsumerAcceptList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerAcceptList"></a>

```typescript
public putConsumerAcceptList(value: IResolvable | StorageFtpServerInternalConfigConsumerAcceptListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerAcceptList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]

---

##### `putConsumerRejectList` <a name="putConsumerRejectList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerRejectList"></a>

```typescript
public putConsumerRejectList(value: IResolvable | StorageFtpServerInternalConfigConsumerRejectListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.putConsumerRejectList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>[]

---

##### `resetConsumerAcceptList` <a name="resetConsumerAcceptList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resetConsumerAcceptList"></a>

```typescript
public resetConsumerAcceptList(): void
```

##### `resetConsumerRejectList` <a name="resetConsumerRejectList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.resetConsumerRejectList"></a>

```typescript
public resetConsumerRejectList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerAcceptList">consumerAcceptList</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList">StorageFtpServerInternalConfigConsumerAcceptListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerRejectList">consumerRejectList</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList">StorageFtpServerInternalConfigConsumerRejectListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerAcceptListInput">consumerAcceptListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerRejectListInput">consumerRejectListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerAcceptList`<sup>Required</sup> <a name="consumerAcceptList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerAcceptList"></a>

```typescript
public readonly consumerAcceptList: StorageFtpServerInternalConfigConsumerAcceptListStructList;
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStructList">StorageFtpServerInternalConfigConsumerAcceptListStructList</a>

---

##### `consumerRejectList`<sup>Required</sup> <a name="consumerRejectList" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerRejectList"></a>

```typescript
public readonly consumerRejectList: StorageFtpServerInternalConfigConsumerRejectListStructList;
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStructList">StorageFtpServerInternalConfigConsumerRejectListStructList</a>

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

---

##### `consumerAcceptListInput`<sup>Optional</sup> <a name="consumerAcceptListInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerAcceptListInput"></a>

```typescript
public readonly consumerAcceptListInput: IResolvable | StorageFtpServerInternalConfigConsumerAcceptListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerAcceptListStruct">StorageFtpServerInternalConfigConsumerAcceptListStruct</a>[]

---

##### `consumerRejectListInput`<sup>Optional</sup> <a name="consumerRejectListInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.consumerRejectListInput"></a>

```typescript
public readonly consumerRejectListInput: IResolvable | StorageFtpServerInternalConfigConsumerRejectListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigConsumerRejectListStruct">StorageFtpServerInternalConfigConsumerRejectListStruct</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StorageFtpServerInternalConfig;
```

- *Type:* <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerInternalConfig">StorageFtpServerInternalConfig</a>

---


### StorageFtpServerTimeoutsOutputReference <a name="StorageFtpServerTimeoutsOutputReference" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer"></a>

```typescript
import { storageFtpServer } from '@cdktn/provider-google'

new storageFtpServer.StorageFtpServerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StorageFtpServerTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.storageFtpServer.StorageFtpServerTimeouts">StorageFtpServerTimeouts</a>

---



