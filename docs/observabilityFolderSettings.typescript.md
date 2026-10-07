# `observabilityFolderSettings` Submodule <a name="`observabilityFolderSettings` Submodule" id="@cdktn/provider-google.observabilityFolderSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityFolderSettings <a name="ObservabilityFolderSettings" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings google_observability_folder_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer"></a>

```typescript
import { observabilityFolderSettings } from '@cdktn/provider-google'

new observabilityFolderSettings.ObservabilityFolderSettings(scope: Construct, id: string, config: ObservabilityFolderSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig">ObservabilityFolderSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig">ObservabilityFolderSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetDefaultStorageLocation">resetDefaultStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.putTimeouts"></a>

```typescript
public putTimeouts(value: ObservabilityFolderSettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts">ObservabilityFolderSettingsTimeouts</a>

---

##### `resetDefaultStorageLocation` <a name="resetDefaultStorageLocation" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetDefaultStorageLocation"></a>

```typescript
public resetDefaultStorageLocation(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityFolderSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isConstruct"></a>

```typescript
import { observabilityFolderSettings } from '@cdktn/provider-google'

observabilityFolderSettings.ObservabilityFolderSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isTerraformElement"></a>

```typescript
import { observabilityFolderSettings } from '@cdktn/provider-google'

observabilityFolderSettings.ObservabilityFolderSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isTerraformResource"></a>

```typescript
import { observabilityFolderSettings } from '@cdktn/provider-google'

observabilityFolderSettings.ObservabilityFolderSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport"></a>

```typescript
import { observabilityFolderSettings } from '@cdktn/provider-google'

observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ObservabilityFolderSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObservabilityFolderSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObservabilityFolderSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityFolderSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference">ObservabilityFolderSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.defaultStorageLocationInput">defaultStorageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts">ObservabilityFolderSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.defaultStorageLocation">defaultStorageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.location">location</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.timeouts"></a>

```typescript
public readonly timeouts: ObservabilityFolderSettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference">ObservabilityFolderSettingsTimeoutsOutputReference</a>

---

##### `defaultStorageLocationInput`<sup>Optional</sup> <a name="defaultStorageLocationInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.defaultStorageLocationInput"></a>

```typescript
public readonly defaultStorageLocationInput: string;
```

- *Type:* string

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ObservabilityFolderSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts">ObservabilityFolderSettingsTimeouts</a>

---

##### `defaultStorageLocation`<sup>Required</sup> <a name="defaultStorageLocation" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.defaultStorageLocation"></a>

```typescript
public readonly defaultStorageLocation: string;
```

- *Type:* string

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityFolderSettingsConfig <a name="ObservabilityFolderSettingsConfig" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.Initializer"></a>

```typescript
import { observabilityFolderSettings } from '@cdktn/provider-google'

const observabilityFolderSettingsConfig: observabilityFolderSettings.ObservabilityFolderSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.folder">folder</a></code> | <code>string</code> | The folder ID. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.location">location</a></code> | <code>string</code> | The location of the settings. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.defaultStorageLocation">defaultStorageLocation</a></code> | <code>string</code> | The default storage location for new resources, e.g. buckets. Only valid for global location. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#id ObservabilityFolderSettings#id}. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The default Cloud KMS key to use for new resources. Only valid for regional locations. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts">ObservabilityFolderSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The folder ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#folder ObservabilityFolderSettings#folder}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#location ObservabilityFolderSettings#location}

---

##### `defaultStorageLocation`<sup>Optional</sup> <a name="defaultStorageLocation" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.defaultStorageLocation"></a>

```typescript
public readonly defaultStorageLocation: string;
```

- *Type:* string

The default storage location for new resources, e.g. buckets. Only valid for global location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#default_storage_location ObservabilityFolderSettings#default_storage_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#id ObservabilityFolderSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The default Cloud KMS key to use for new resources. Only valid for regional locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#kms_key_name ObservabilityFolderSettings#kms_key_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ObservabilityFolderSettingsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts">ObservabilityFolderSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#timeouts ObservabilityFolderSettings#timeouts}

---

### ObservabilityFolderSettingsTimeouts <a name="ObservabilityFolderSettingsTimeouts" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.Initializer"></a>

```typescript
import { observabilityFolderSettings } from '@cdktn/provider-google'

const observabilityFolderSettingsTimeouts: observabilityFolderSettings.ObservabilityFolderSettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#create ObservabilityFolderSettings#create}. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#delete ObservabilityFolderSettings#delete}. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#update ObservabilityFolderSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#create ObservabilityFolderSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#delete ObservabilityFolderSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_folder_settings#update ObservabilityFolderSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityFolderSettingsTimeoutsOutputReference <a name="ObservabilityFolderSettingsTimeoutsOutputReference" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { observabilityFolderSettings } from '@cdktn/provider-google'

new observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts">ObservabilityFolderSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityFolderSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.observabilityFolderSettings.ObservabilityFolderSettingsTimeouts">ObservabilityFolderSettingsTimeouts</a>

---



