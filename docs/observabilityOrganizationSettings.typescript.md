# `observabilityOrganizationSettings` Submodule <a name="`observabilityOrganizationSettings` Submodule" id="@cdktn/provider-google.observabilityOrganizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityOrganizationSettings <a name="ObservabilityOrganizationSettings" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings google_observability_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer"></a>

```typescript
import { observabilityOrganizationSettings } from '@cdktn/provider-google'

new observabilityOrganizationSettings.ObservabilityOrganizationSettings(scope: Construct, id: string, config: ObservabilityOrganizationSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig">ObservabilityOrganizationSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig">ObservabilityOrganizationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetDefaultStorageLocation">resetDefaultStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.putTimeouts"></a>

```typescript
public putTimeouts(value: ObservabilityOrganizationSettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a>

---

##### `resetDefaultStorageLocation` <a name="resetDefaultStorageLocation" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetDefaultStorageLocation"></a>

```typescript
public resetDefaultStorageLocation(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityOrganizationSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isConstruct"></a>

```typescript
import { observabilityOrganizationSettings } from '@cdktn/provider-google'

observabilityOrganizationSettings.ObservabilityOrganizationSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformElement"></a>

```typescript
import { observabilityOrganizationSettings } from '@cdktn/provider-google'

observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformResource"></a>

```typescript
import { observabilityOrganizationSettings } from '@cdktn/provider-google'

observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport"></a>

```typescript
import { observabilityOrganizationSettings } from '@cdktn/provider-google'

observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ObservabilityOrganizationSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObservabilityOrganizationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObservabilityOrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityOrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference">ObservabilityOrganizationSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.defaultStorageLocationInput">defaultStorageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.defaultStorageLocation">defaultStorageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.organization">organization</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.timeouts"></a>

```typescript
public readonly timeouts: ObservabilityOrganizationSettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference">ObservabilityOrganizationSettingsTimeoutsOutputReference</a>

---

##### `defaultStorageLocationInput`<sup>Optional</sup> <a name="defaultStorageLocationInput" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.defaultStorageLocationInput"></a>

```typescript
public readonly defaultStorageLocationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ObservabilityOrganizationSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a>

---

##### `defaultStorageLocation`<sup>Required</sup> <a name="defaultStorageLocation" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.defaultStorageLocation"></a>

```typescript
public readonly defaultStorageLocation: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityOrganizationSettingsConfig <a name="ObservabilityOrganizationSettingsConfig" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.Initializer"></a>

```typescript
import { observabilityOrganizationSettings } from '@cdktn/provider-google'

const observabilityOrganizationSettingsConfig: observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.location">location</a></code> | <code>string</code> | The location of the settings. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.organization">organization</a></code> | <code>string</code> | The organization ID. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.defaultStorageLocation">defaultStorageLocation</a></code> | <code>string</code> | The default storage location for new resources, e.g. buckets. Only valid for global location. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#id ObservabilityOrganizationSettings#id}. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The default Cloud KMS key to use for new resources. Only valid for regional locations. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#location ObservabilityOrganizationSettings#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#organization ObservabilityOrganizationSettings#organization}

---

##### `defaultStorageLocation`<sup>Optional</sup> <a name="defaultStorageLocation" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.defaultStorageLocation"></a>

```typescript
public readonly defaultStorageLocation: string;
```

- *Type:* string

The default storage location for new resources, e.g. buckets. Only valid for global location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#default_storage_location ObservabilityOrganizationSettings#default_storage_location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#id ObservabilityOrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The default Cloud KMS key to use for new resources. Only valid for regional locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#kms_key_name ObservabilityOrganizationSettings#kms_key_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ObservabilityOrganizationSettingsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#timeouts ObservabilityOrganizationSettings#timeouts}

---

### ObservabilityOrganizationSettingsTimeouts <a name="ObservabilityOrganizationSettingsTimeouts" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.Initializer"></a>

```typescript
import { observabilityOrganizationSettings } from '@cdktn/provider-google'

const observabilityOrganizationSettingsTimeouts: observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#create ObservabilityOrganizationSettings#create}. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#delete ObservabilityOrganizationSettings#delete}. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#update ObservabilityOrganizationSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#create ObservabilityOrganizationSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#delete ObservabilityOrganizationSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/observability_organization_settings#update ObservabilityOrganizationSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityOrganizationSettingsTimeoutsOutputReference <a name="ObservabilityOrganizationSettingsTimeoutsOutputReference" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { observabilityOrganizationSettings } from '@cdktn/provider-google'

new observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ObservabilityOrganizationSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.observabilityOrganizationSettings.ObservabilityOrganizationSettingsTimeouts">ObservabilityOrganizationSettingsTimeouts</a>

---



