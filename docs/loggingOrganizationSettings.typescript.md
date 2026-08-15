# `loggingOrganizationSettings` Submodule <a name="`loggingOrganizationSettings` Submodule" id="@cdktn/provider-google.loggingOrganizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingOrganizationSettings <a name="LoggingOrganizationSettings" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/logging_organization_settings google_logging_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.Initializer"></a>

```typescript
import { loggingOrganizationSettings } from '@cdktn/provider-google'

new loggingOrganizationSettings.LoggingOrganizationSettings(scope: Construct, id: string, config: LoggingOrganizationSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig">LoggingOrganizationSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig">LoggingOrganizationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.resetDisableDefaultSink">resetDisableDefaultSink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.resetStorageLocation">resetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.putTimeouts"></a>

```typescript
public putTimeouts(value: LoggingOrganizationSettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeouts">LoggingOrganizationSettingsTimeouts</a>

---

##### `resetDisableDefaultSink` <a name="resetDisableDefaultSink" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.resetDisableDefaultSink"></a>

```typescript
public resetDisableDefaultSink(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetStorageLocation` <a name="resetStorageLocation" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.resetStorageLocation"></a>

```typescript
public resetStorageLocation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LoggingOrganizationSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.isConstruct"></a>

```typescript
import { loggingOrganizationSettings } from '@cdktn/provider-google'

loggingOrganizationSettings.LoggingOrganizationSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.isTerraformElement"></a>

```typescript
import { loggingOrganizationSettings } from '@cdktn/provider-google'

loggingOrganizationSettings.LoggingOrganizationSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.isTerraformResource"></a>

```typescript
import { loggingOrganizationSettings } from '@cdktn/provider-google'

loggingOrganizationSettings.LoggingOrganizationSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.generateConfigForImport"></a>

```typescript
import { loggingOrganizationSettings } from '@cdktn/provider-google'

loggingOrganizationSettings.LoggingOrganizationSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LoggingOrganizationSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoggingOrganizationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoggingOrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/logging_organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LoggingOrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.kmsServiceAccountId">kmsServiceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.loggingServiceAccountId">loggingServiceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference">LoggingOrganizationSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.disableDefaultSinkInput">disableDefaultSinkInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.storageLocationInput">storageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeouts">LoggingOrganizationSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.disableDefaultSink">disableDefaultSink</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.storageLocation">storageLocation</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `kmsServiceAccountId`<sup>Required</sup> <a name="kmsServiceAccountId" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.kmsServiceAccountId"></a>

```typescript
public readonly kmsServiceAccountId: string;
```

- *Type:* string

---

##### `loggingServiceAccountId`<sup>Required</sup> <a name="loggingServiceAccountId" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.loggingServiceAccountId"></a>

```typescript
public readonly loggingServiceAccountId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.timeouts"></a>

```typescript
public readonly timeouts: LoggingOrganizationSettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference">LoggingOrganizationSettingsTimeoutsOutputReference</a>

---

##### `disableDefaultSinkInput`<sup>Optional</sup> <a name="disableDefaultSinkInput" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.disableDefaultSinkInput"></a>

```typescript
public readonly disableDefaultSinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `storageLocationInput`<sup>Optional</sup> <a name="storageLocationInput" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.storageLocationInput"></a>

```typescript
public readonly storageLocationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LoggingOrganizationSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeouts">LoggingOrganizationSettingsTimeouts</a>

---

##### `disableDefaultSink`<sup>Required</sup> <a name="disableDefaultSink" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.disableDefaultSink"></a>

```typescript
public readonly disableDefaultSink: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `storageLocation`<sup>Required</sup> <a name="storageLocation" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingOrganizationSettingsConfig <a name="LoggingOrganizationSettingsConfig" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.Initializer"></a>

```typescript
import { loggingOrganizationSettings } from '@cdktn/provider-google'

const loggingOrganizationSettingsConfig: loggingOrganizationSettings.LoggingOrganizationSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.organization">organization</a></code> | <code>string</code> | The organization for which to retrieve or configure settings. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.disableDefaultSink">disableDefaultSink</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the _Default sink in newly created projects and folders will created in a disabled state. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/logging_organization_settings#id LoggingOrganizationSettings#id}. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The resource name for the configured Cloud KMS key. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.storageLocation">storageLocation</a></code> | <code>string</code> | The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeouts">LoggingOrganizationSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The organization for which to retrieve or configure settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/logging_organization_settings#organization LoggingOrganizationSettings#organization}

---

##### `disableDefaultSink`<sup>Optional</sup> <a name="disableDefaultSink" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.disableDefaultSink"></a>

```typescript
public readonly disableDefaultSink: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the _Default sink in newly created projects and folders will created in a disabled state.

This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/logging_organization_settings#disable_default_sink LoggingOrganizationSettings#disable_default_sink}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/logging_organization_settings#id LoggingOrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The resource name for the configured Cloud KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/logging_organization_settings#kms_key_name LoggingOrganizationSettings#kms_key_name}

---

##### `storageLocation`<sup>Optional</sup> <a name="storageLocation" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.storageLocation"></a>

```typescript
public readonly storageLocation: string;
```

- *Type:* string

The storage location that Cloud Logging will use to create new resources when a location is needed but not explicitly provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/logging_organization_settings#storage_location LoggingOrganizationSettings#storage_location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LoggingOrganizationSettingsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeouts">LoggingOrganizationSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/logging_organization_settings#timeouts LoggingOrganizationSettings#timeouts}

---

### LoggingOrganizationSettingsTimeouts <a name="LoggingOrganizationSettingsTimeouts" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeouts.Initializer"></a>

```typescript
import { loggingOrganizationSettings } from '@cdktn/provider-google'

const loggingOrganizationSettingsTimeouts: loggingOrganizationSettings.LoggingOrganizationSettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/logging_organization_settings#create LoggingOrganizationSettings#create}. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/logging_organization_settings#delete LoggingOrganizationSettings#delete}. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/logging_organization_settings#update LoggingOrganizationSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/logging_organization_settings#create LoggingOrganizationSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/logging_organization_settings#delete LoggingOrganizationSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/logging_organization_settings#update LoggingOrganizationSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingOrganizationSettingsTimeoutsOutputReference <a name="LoggingOrganizationSettingsTimeoutsOutputReference" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { loggingOrganizationSettings } from '@cdktn/provider-google'

new loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeouts">LoggingOrganizationSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoggingOrganizationSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingOrganizationSettings.LoggingOrganizationSettingsTimeouts">LoggingOrganizationSettingsTimeouts</a>

---



