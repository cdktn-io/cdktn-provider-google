# `geminiGibqObservabilitySettingBinding` Submodule <a name="`geminiGibqObservabilitySettingBinding` Submodule" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiGibqObservabilitySettingBinding <a name="GeminiGibqObservabilitySettingBinding" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding google_gemini_gibq_observability_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.Initializer"></a>

```typescript
import { geminiGibqObservabilitySettingBinding } from '@cdktn/provider-google'

new geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding(scope: Construct, id: string, config: GeminiGibqObservabilitySettingBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig">GeminiGibqObservabilitySettingBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig">GeminiGibqObservabilitySettingBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetProduct">resetProduct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: GeminiGibqObservabilitySettingBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts">GeminiGibqObservabilitySettingBindingTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProduct` <a name="resetProduct" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetProduct"></a>

```typescript
public resetProduct(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GeminiGibqObservabilitySettingBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isConstruct"></a>

```typescript
import { geminiGibqObservabilitySettingBinding } from '@cdktn/provider-google'

geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isTerraformElement"></a>

```typescript
import { geminiGibqObservabilitySettingBinding } from '@cdktn/provider-google'

geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isTerraformResource"></a>

```typescript
import { geminiGibqObservabilitySettingBinding } from '@cdktn/provider-google'

geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.generateConfigForImport"></a>

```typescript
import { geminiGibqObservabilitySettingBinding } from '@cdktn/provider-google'

geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GeminiGibqObservabilitySettingBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiGibqObservabilitySettingBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiGibqObservabilitySettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GeminiGibqObservabilitySettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference">GeminiGibqObservabilitySettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.gibqObservabilitySettingIdInput">gibqObservabilitySettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.productInput">productInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.settingBindingIdInput">settingBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts">GeminiGibqObservabilitySettingBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.gibqObservabilitySettingId">gibqObservabilitySettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.settingBindingId">settingBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiGibqObservabilitySettingBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference">GeminiGibqObservabilitySettingBindingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `gibqObservabilitySettingIdInput`<sup>Optional</sup> <a name="gibqObservabilitySettingIdInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.gibqObservabilitySettingIdInput"></a>

```typescript
public readonly gibqObservabilitySettingIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.productInput"></a>

```typescript
public readonly productInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `settingBindingIdInput`<sup>Optional</sup> <a name="settingBindingIdInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.settingBindingIdInput"></a>

```typescript
public readonly settingBindingIdInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GeminiGibqObservabilitySettingBindingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts">GeminiGibqObservabilitySettingBindingTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `gibqObservabilitySettingId`<sup>Required</sup> <a name="gibqObservabilitySettingId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.gibqObservabilitySettingId"></a>

```typescript
public readonly gibqObservabilitySettingId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.settingBindingId"></a>

```typescript
public readonly settingBindingId: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiGibqObservabilitySettingBindingConfig <a name="GeminiGibqObservabilitySettingBindingConfig" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.Initializer"></a>

```typescript
import { geminiGibqObservabilitySettingBinding } from '@cdktn/provider-google'

const geminiGibqObservabilitySettingBindingConfig: geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.gibqObservabilitySettingId">gibqObservabilitySettingId</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.settingBindingId">settingBindingId</a></code> | <code>string</code> | Id of the setting binding. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.target">target</a></code> | <code>string</code> | Target of the binding. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#id GeminiGibqObservabilitySettingBinding#id}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.product">product</a></code> | <code>string</code> | Product type of the setting binding. Values include GEMINI_IN_BIGQUERY, GEMINI_CLOUD_ASSIST, etc. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.gibqObservabilitySettings.settingBindings) for a complete list. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#project GeminiGibqObservabilitySettingBinding#project}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts">GeminiGibqObservabilitySettingBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `gibqObservabilitySettingId`<sup>Required</sup> <a name="gibqObservabilitySettingId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.gibqObservabilitySettingId"></a>

```typescript
public readonly gibqObservabilitySettingId: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#gibq_observability_setting_id GeminiGibqObservabilitySettingBinding#gibq_observability_setting_id}

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.settingBindingId"></a>

```typescript
public readonly settingBindingId: string;
```

- *Type:* string

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#setting_binding_id GeminiGibqObservabilitySettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#target GeminiGibqObservabilitySettingBinding#target}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#deletion_policy GeminiGibqObservabilitySettingBinding#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#id GeminiGibqObservabilitySettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#labels GeminiGibqObservabilitySettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#location GeminiGibqObservabilitySettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

Product type of the setting binding. Values include GEMINI_IN_BIGQUERY, GEMINI_CLOUD_ASSIST, etc. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.gibqObservabilitySettings.settingBindings) for a complete list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#product GeminiGibqObservabilitySettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#project GeminiGibqObservabilitySettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiGibqObservabilitySettingBindingTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts">GeminiGibqObservabilitySettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#timeouts GeminiGibqObservabilitySettingBinding#timeouts}

---

### GeminiGibqObservabilitySettingBindingTimeouts <a name="GeminiGibqObservabilitySettingBindingTimeouts" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts.Initializer"></a>

```typescript
import { geminiGibqObservabilitySettingBinding } from '@cdktn/provider-google'

const geminiGibqObservabilitySettingBindingTimeouts: geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#create GeminiGibqObservabilitySettingBinding#create}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#delete GeminiGibqObservabilitySettingBinding#delete}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#update GeminiGibqObservabilitySettingBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#create GeminiGibqObservabilitySettingBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#delete GeminiGibqObservabilitySettingBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting_binding#update GeminiGibqObservabilitySettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiGibqObservabilitySettingBindingTimeoutsOutputReference <a name="GeminiGibqObservabilitySettingBindingTimeoutsOutputReference" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { geminiGibqObservabilitySettingBinding } from '@cdktn/provider-google'

new geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts">GeminiGibqObservabilitySettingBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiGibqObservabilitySettingBindingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiGibqObservabilitySettingBinding.GeminiGibqObservabilitySettingBindingTimeouts">GeminiGibqObservabilitySettingBindingTimeouts</a>

---



