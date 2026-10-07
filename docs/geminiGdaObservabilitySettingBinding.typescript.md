# `geminiGdaObservabilitySettingBinding` Submodule <a name="`geminiGdaObservabilitySettingBinding` Submodule" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiGdaObservabilitySettingBinding <a name="GeminiGdaObservabilitySettingBinding" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding google_gemini_gda_observability_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer"></a>

```typescript
import { geminiGdaObservabilitySettingBinding } from '@cdktn/provider-google'

new geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding(scope: Construct, id: string, config: GeminiGdaObservabilitySettingBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig">GeminiGdaObservabilitySettingBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig">GeminiGdaObservabilitySettingBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetProduct">resetProduct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: GeminiGdaObservabilitySettingBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts">GeminiGdaObservabilitySettingBindingTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProduct` <a name="resetProduct" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetProduct"></a>

```typescript
public resetProduct(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GeminiGdaObservabilitySettingBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isConstruct"></a>

```typescript
import { geminiGdaObservabilitySettingBinding } from '@cdktn/provider-google'

geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isTerraformElement"></a>

```typescript
import { geminiGdaObservabilitySettingBinding } from '@cdktn/provider-google'

geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isTerraformResource"></a>

```typescript
import { geminiGdaObservabilitySettingBinding } from '@cdktn/provider-google'

geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.generateConfigForImport"></a>

```typescript
import { geminiGdaObservabilitySettingBinding } from '@cdktn/provider-google'

geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GeminiGdaObservabilitySettingBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiGdaObservabilitySettingBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiGdaObservabilitySettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GeminiGdaObservabilitySettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference">GeminiGdaObservabilitySettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.gdaObservabilitySettingIdInput">gdaObservabilitySettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.productInput">productInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.settingBindingIdInput">settingBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts">GeminiGdaObservabilitySettingBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.gdaObservabilitySettingId">gdaObservabilitySettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.settingBindingId">settingBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiGdaObservabilitySettingBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference">GeminiGdaObservabilitySettingBindingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `gdaObservabilitySettingIdInput`<sup>Optional</sup> <a name="gdaObservabilitySettingIdInput" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.gdaObservabilitySettingIdInput"></a>

```typescript
public readonly gdaObservabilitySettingIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.productInput"></a>

```typescript
public readonly productInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `settingBindingIdInput`<sup>Optional</sup> <a name="settingBindingIdInput" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.settingBindingIdInput"></a>

```typescript
public readonly settingBindingIdInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GeminiGdaObservabilitySettingBindingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts">GeminiGdaObservabilitySettingBindingTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `gdaObservabilitySettingId`<sup>Required</sup> <a name="gdaObservabilitySettingId" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.gdaObservabilitySettingId"></a>

```typescript
public readonly gdaObservabilitySettingId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.settingBindingId"></a>

```typescript
public readonly settingBindingId: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiGdaObservabilitySettingBindingConfig <a name="GeminiGdaObservabilitySettingBindingConfig" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.Initializer"></a>

```typescript
import { geminiGdaObservabilitySettingBinding } from '@cdktn/provider-google'

const geminiGdaObservabilitySettingBindingConfig: geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.gdaObservabilitySettingId">gdaObservabilitySettingId</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.settingBindingId">settingBindingId</a></code> | <code>string</code> | Id of the setting binding. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.target">target</a></code> | <code>string</code> | Target of the binding. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#id GeminiGdaObservabilitySettingBinding#id}. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.product">product</a></code> | <code>string</code> | Product type of the setting binding. Values include GEMINI_IN_LOOKER. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.gdaObservabilitySettings.settingBindings) for a complete list. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#project GeminiGdaObservabilitySettingBinding#project}. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts">GeminiGdaObservabilitySettingBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `gdaObservabilitySettingId`<sup>Required</sup> <a name="gdaObservabilitySettingId" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.gdaObservabilitySettingId"></a>

```typescript
public readonly gdaObservabilitySettingId: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#gda_observability_setting_id GeminiGdaObservabilitySettingBinding#gda_observability_setting_id}

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.settingBindingId"></a>

```typescript
public readonly settingBindingId: string;
```

- *Type:* string

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#setting_binding_id GeminiGdaObservabilitySettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#target GeminiGdaObservabilitySettingBinding#target}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#deletion_policy GeminiGdaObservabilitySettingBinding#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#id GeminiGdaObservabilitySettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#labels GeminiGdaObservabilitySettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#location GeminiGdaObservabilitySettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

Product type of the setting binding. Values include GEMINI_IN_LOOKER. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.gdaObservabilitySettings.settingBindings) for a complete list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#product GeminiGdaObservabilitySettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#project GeminiGdaObservabilitySettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiGdaObservabilitySettingBindingTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts">GeminiGdaObservabilitySettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#timeouts GeminiGdaObservabilitySettingBinding#timeouts}

---

### GeminiGdaObservabilitySettingBindingTimeouts <a name="GeminiGdaObservabilitySettingBindingTimeouts" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts.Initializer"></a>

```typescript
import { geminiGdaObservabilitySettingBinding } from '@cdktn/provider-google'

const geminiGdaObservabilitySettingBindingTimeouts: geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#create GeminiGdaObservabilitySettingBinding#create}. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#delete GeminiGdaObservabilitySettingBinding#delete}. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#update GeminiGdaObservabilitySettingBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#create GeminiGdaObservabilitySettingBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#delete GeminiGdaObservabilitySettingBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#update GeminiGdaObservabilitySettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiGdaObservabilitySettingBindingTimeoutsOutputReference <a name="GeminiGdaObservabilitySettingBindingTimeoutsOutputReference" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { geminiGdaObservabilitySettingBinding } from '@cdktn/provider-google'

new geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts">GeminiGdaObservabilitySettingBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiGdaObservabilitySettingBindingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts">GeminiGdaObservabilitySettingBindingTimeouts</a>

---



