# `loggingFolderSettings` Submodule <a name="`loggingFolderSettings` Submodule" id="@cdktn/provider-google.loggingFolderSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingFolderSettings <a name="LoggingFolderSettings" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_folder_settings google_logging_folder_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.Initializer"></a>

```typescript
import { loggingFolderSettings } from '@cdktn/provider-google'

new loggingFolderSettings.LoggingFolderSettings(scope: Construct, id: string, config: LoggingFolderSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig">LoggingFolderSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig">LoggingFolderSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.resetDisableDefaultSink">resetDisableDefaultSink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.resetStorageLocation">resetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.putTimeouts"></a>

```typescript
public putTimeouts(value: LoggingFolderSettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeouts">LoggingFolderSettingsTimeouts</a>

---

##### `resetDisableDefaultSink` <a name="resetDisableDefaultSink" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.resetDisableDefaultSink"></a>

```typescript
public resetDisableDefaultSink(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetStorageLocation` <a name="resetStorageLocation" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.resetStorageLocation"></a>

```typescript
public resetStorageLocation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LoggingFolderSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.isConstruct"></a>

```typescript
import { loggingFolderSettings } from '@cdktn/provider-google'

loggingFolderSettings.LoggingFolderSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.isTerraformElement"></a>

```typescript
import { loggingFolderSettings } from '@cdktn/provider-google'

loggingFolderSettings.LoggingFolderSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.isTerraformResource"></a>

```typescript
import { loggingFolderSettings } from '@cdktn/provider-google'

loggingFolderSettings.LoggingFolderSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.generateConfigForImport"></a>

```typescript
import { loggingFolderSettings } from '@cdktn/provider-google'

loggingFolderSettings.LoggingFolderSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LoggingFolderSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoggingFolderSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoggingFolderSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_folder_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LoggingFolderSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.kmsServiceAccountId">kmsServiceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.loggingServiceAccountId">loggingServiceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference">LoggingFolderSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.disableDefaultSinkInput">disableDefaultSinkInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.storageLocationInput">storageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeouts">LoggingFolderSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.disableDefaultSink">disableDefaultSink</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.storageLocation">storageLocation</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `kmsServiceAccountId`<sup>Required</sup> <a name="kmsServiceAccountId" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.kmsServiceAccountId"></a>

```typescript
public readonly kmsServiceAccountId: string;
```

- *Type:* string

---

##### `loggingServiceAccountId`<sup>Required</sup> <a name="loggingServiceAccountId" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.loggingServiceAccountId"></a>

```typescript
public readonly loggingServiceAccountId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.timeouts"></a>

```typescript
public readonly timeouts: LoggingFolderSettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference">LoggingFolderSettingsTimeoutsOutputReference</a>

---

##### `disableDefaultSinkInput`<sup>Optional</sup> <a name="disableDefaultSinkInput" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.disableDefaultSinkInput"></a>

```typescript
public readonly disableDefaultSinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.storageLocationInput"></a>

```typescript
public readonly storageLocationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LoggingFolderSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeouts">LoggingFolderSettingsTimeouts</a>

---

##### `disableDefaultSink`<sup>Required</sup> <a name="disableDefaultSink" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.disableDefaultSink"></a>

```typescript
public readonly disableDefaultSink: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingFolderSettingsConfig <a name="LoggingFolderSettingsConfig" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.Initializer"></a>

```typescript
import { loggingFolderSettings } from '@cdktn/provider-google'

const loggingFolderSettingsConfig: loggingFolderSettings.LoggingFolderSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.folder">folder</a></code> | <code>string</code> | The folder for which to retrieve settings. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.disableDefaultSink">disableDefaultSink</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the _Default sink in newly created projects and folders will created in a disabled state. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_folder_settings#id LoggingFolderSettings#id}. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The resource name for the configured Cloud KMS key. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.storageLocation">storageLocation</a></code> | <code>string</code> | The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeouts">LoggingFolderSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The folder for which to retrieve settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_folder_settings#folder LoggingFolderSettings#folder}

---

##### `disableDefaultSink`<sup>Optional</sup> <a name="disableDefaultSink" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.disableDefaultSink"></a>

```typescript
public readonly disableDefaultSink: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the _Default sink in newly created projects and folders will created in a disabled state.

This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_folder_settings#disable_default_sink LoggingFolderSettings#disable_default_sink}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_folder_settings#id LoggingFolderSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The resource name for the configured Cloud KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_folder_settings#kms_key_name LoggingFolderSettings#kms_key_name}

---

##### `storageLocation`<sup>Optional</sup> <a name="storageLocation" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_folder_settings#storage_location LoggingFolderSettings#storage_location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LoggingFolderSettingsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeouts">LoggingFolderSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_folder_settings#timeouts LoggingFolderSettings#timeouts}

---

### LoggingFolderSettingsTimeouts <a name="LoggingFolderSettingsTimeouts" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeouts.Initializer"></a>

```typescript
import { loggingFolderSettings } from '@cdktn/provider-google'

const loggingFolderSettingsTimeouts: loggingFolderSettings.LoggingFolderSettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_folder_settings#create LoggingFolderSettings#create}. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_folder_settings#delete LoggingFolderSettings#delete}. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_folder_settings#update LoggingFolderSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_folder_settings#create LoggingFolderSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_folder_settings#delete LoggingFolderSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_folder_settings#update LoggingFolderSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingFolderSettingsTimeoutsOutputReference <a name="LoggingFolderSettingsTimeoutsOutputReference" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { loggingFolderSettings } from '@cdktn/provider-google'

new loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeouts">LoggingFolderSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoggingFolderSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingFolderSettings.LoggingFolderSettingsTimeouts">LoggingFolderSettingsTimeouts</a>

---



