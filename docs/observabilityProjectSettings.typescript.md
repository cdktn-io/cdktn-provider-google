# `observabilityProjectSettings` Submodule <a name="`observabilityProjectSettings` Submodule" id="@cdktn/provider-google.observabilityProjectSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityProjectSettings <a name="ObservabilityProjectSettings" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings google_observability_project_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer"></a>

```typescript
import { observabilityProjectSettings } from '@cdktn/provider-google'

new observabilityProjectSettings.ObservabilityProjectSettings(scope: Construct, id: string, config: ObservabilityProjectSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig">ObservabilityProjectSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig">ObservabilityProjectSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetDefaultStorageLocation">resetDefaultStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.putTimeouts"></a>

```typescript
public putTimeouts(value: ObservabilityProjectSettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts">ObservabilityProjectSettingsTimeouts</a>

---

##### `resetDefaultStorageLocation` <a name="resetDefaultStorageLocation" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetDefaultStorageLocation"></a>

```typescript
public resetDefaultStorageLocation(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityProjectSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.isConstruct"></a>

```typescript
import { observabilityProjectSettings } from '@cdktn/provider-google'

observabilityProjectSettings.ObservabilityProjectSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.isTerraformElement"></a>

```typescript
import { observabilityProjectSettings } from '@cdktn/provider-google'

observabilityProjectSettings.ObservabilityProjectSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.isTerraformResource"></a>

```typescript
import { observabilityProjectSettings } from '@cdktn/provider-google'

observabilityProjectSettings.ObservabilityProjectSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.generateConfigForImport"></a>

```typescript
import { observabilityProjectSettings } from '@cdktn/provider-google'

observabilityProjectSettings.ObservabilityProjectSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ObservabilityProjectSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObservabilityProjectSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObservabilityProjectSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityProjectSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference">ObservabilityProjectSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.defaultStorageLocationInput">defaultStorageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts">ObservabilityProjectSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.defaultStorageLocation">defaultStorageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.timeouts"></a>

```typescript
public readonly timeouts: ObservabilityProjectSettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference">ObservabilityProjectSettingsTimeoutsOutputReference</a>

---

##### `defaultStorageLocationInput`<sup>Optional</sup> <a name="defaultStorageLocationInput" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.defaultStorageLocationInput"></a>

```typescript
public readonly defaultStorageLocationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ObservabilityProjectSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts">ObservabilityProjectSettingsTimeouts</a>

---

##### `defaultStorageLocation`<sup>Required</sup> <a name="defaultStorageLocation" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.defaultStorageLocation"></a>

```typescript
public readonly defaultStorageLocation: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityProjectSettingsConfig <a name="ObservabilityProjectSettingsConfig" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.Initializer"></a>

```typescript
import { observabilityProjectSettings } from '@cdktn/provider-google'

const observabilityProjectSettingsConfig: observabilityProjectSettings.ObservabilityProjectSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.location">location</a></code> | <code>string</code> | The location of the settings. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.defaultStorageLocation">defaultStorageLocation</a></code> | <code>string</code> | The default storage location for new resources, e.g. buckets. Only valid for global location. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#id ObservabilityProjectSettings#id}. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The default Cloud KMS key to use for new resources. Only valid for regional locations. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#project ObservabilityProjectSettings#project}. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts">ObservabilityProjectSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#location ObservabilityProjectSettings#location}

---

##### `defaultStorageLocation`<sup>Optional</sup> <a name="defaultStorageLocation" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.defaultStorageLocation"></a>

```typescript
public readonly defaultStorageLocation: string;
```

- *Type:* string

The default storage location for new resources, e.g. buckets. Only valid for global location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#default_storage_location ObservabilityProjectSettings#default_storage_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#id ObservabilityProjectSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The default Cloud KMS key to use for new resources. Only valid for regional locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#kms_key_name ObservabilityProjectSettings#kms_key_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#project ObservabilityProjectSettings#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ObservabilityProjectSettingsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts">ObservabilityProjectSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#timeouts ObservabilityProjectSettings#timeouts}

---

### ObservabilityProjectSettingsTimeouts <a name="ObservabilityProjectSettingsTimeouts" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts.Initializer"></a>

```typescript
import { observabilityProjectSettings } from '@cdktn/provider-google'

const observabilityProjectSettingsTimeouts: observabilityProjectSettings.ObservabilityProjectSettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#create ObservabilityProjectSettings#create}. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#delete ObservabilityProjectSettings#delete}. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#update ObservabilityProjectSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#create ObservabilityProjectSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#delete ObservabilityProjectSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_project_settings#update ObservabilityProjectSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityProjectSettingsTimeoutsOutputReference <a name="ObservabilityProjectSettingsTimeoutsOutputReference" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { observabilityProjectSettings } from '@cdktn/provider-google'

new observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts">ObservabilityProjectSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityProjectSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.observabilityProjectSettings.ObservabilityProjectSettingsTimeouts">ObservabilityProjectSettingsTimeouts</a>

---



