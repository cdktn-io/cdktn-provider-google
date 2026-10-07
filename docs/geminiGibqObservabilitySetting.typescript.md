# `geminiGibqObservabilitySetting` Submodule <a name="`geminiGibqObservabilitySetting` Submodule" id="@cdktn/provider-google.geminiGibqObservabilitySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiGibqObservabilitySetting <a name="GeminiGibqObservabilitySetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting google_gemini_gibq_observability_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer"></a>

```typescript
import { geminiGibqObservabilitySetting } from '@cdktn/provider-google'

new geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting(scope: Construct, id: string, config: GeminiGibqObservabilitySettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig">GeminiGibqObservabilitySettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig">GeminiGibqObservabilitySettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putConversationalAnalyticsSetting">putConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetConversationalAnalyticsSetting">resetConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConversationalAnalyticsSetting` <a name="putConversationalAnalyticsSetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putConversationalAnalyticsSetting"></a>

```typescript
public putConversationalAnalyticsSetting(value: GeminiGibqObservabilitySettingConversationalAnalyticsSetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putConversationalAnalyticsSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putTimeouts"></a>

```typescript
public putTimeouts(value: GeminiGibqObservabilitySettingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a>

---

##### `resetConversationalAnalyticsSetting` <a name="resetConversationalAnalyticsSetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetConversationalAnalyticsSetting"></a>

```typescript
public resetConversationalAnalyticsSetting(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GeminiGibqObservabilitySetting resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isConstruct"></a>

```typescript
import { geminiGibqObservabilitySetting } from '@cdktn/provider-google'

geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformElement"></a>

```typescript
import { geminiGibqObservabilitySetting } from '@cdktn/provider-google'

geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformResource"></a>

```typescript
import { geminiGibqObservabilitySetting } from '@cdktn/provider-google'

geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport"></a>

```typescript
import { geminiGibqObservabilitySetting } from '@cdktn/provider-google'

geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GeminiGibqObservabilitySetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiGibqObservabilitySetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiGibqObservabilitySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GeminiGibqObservabilitySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.conversationalAnalyticsSetting">conversationalAnalyticsSetting</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference">GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference">GeminiGibqObservabilitySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.conversationalAnalyticsSettingInput">conversationalAnalyticsSettingInput</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.gibqObservabilitySettingIdInput">gibqObservabilitySettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.gibqObservabilitySettingId">gibqObservabilitySettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `conversationalAnalyticsSetting`<sup>Required</sup> <a name="conversationalAnalyticsSetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.conversationalAnalyticsSetting"></a>

```typescript
public readonly conversationalAnalyticsSetting: GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference">GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiGibqObservabilitySettingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference">GeminiGibqObservabilitySettingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `conversationalAnalyticsSettingInput`<sup>Optional</sup> <a name="conversationalAnalyticsSettingInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.conversationalAnalyticsSettingInput"></a>

```typescript
public readonly conversationalAnalyticsSettingInput: GeminiGibqObservabilitySettingConversationalAnalyticsSetting;
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `gibqObservabilitySettingIdInput`<sup>Optional</sup> <a name="gibqObservabilitySettingIdInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.gibqObservabilitySettingIdInput"></a>

```typescript
public readonly gibqObservabilitySettingIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GeminiGibqObservabilitySettingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `gibqObservabilitySettingId`<sup>Required</sup> <a name="gibqObservabilitySettingId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.gibqObservabilitySettingId"></a>

```typescript
public readonly gibqObservabilitySettingId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiGibqObservabilitySettingConfig <a name="GeminiGibqObservabilitySettingConfig" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.Initializer"></a>

```typescript
import { geminiGibqObservabilitySetting } from '@cdktn/provider-google'

const geminiGibqObservabilitySettingConfig: geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.gibqObservabilitySettingId">gibqObservabilitySettingId</a></code> | <code>string</code> | Id of the requesting object. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.conversationalAnalyticsSetting">conversationalAnalyticsSetting</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | conversational_analytics_setting block. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#id GeminiGibqObservabilitySetting#id}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#project GeminiGibqObservabilitySetting#project}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `gibqObservabilitySettingId`<sup>Required</sup> <a name="gibqObservabilitySettingId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.gibqObservabilitySettingId"></a>

```typescript
public readonly gibqObservabilitySettingId: string;
```

- *Type:* string

Id of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#gibq_observability_setting_id GeminiGibqObservabilitySetting#gibq_observability_setting_id}

---

##### `conversationalAnalyticsSetting`<sup>Optional</sup> <a name="conversationalAnalyticsSetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.conversationalAnalyticsSetting"></a>

```typescript
public readonly conversationalAnalyticsSetting: GeminiGibqObservabilitySettingConversationalAnalyticsSetting;
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

conversational_analytics_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#conversational_analytics_setting GeminiGibqObservabilitySetting#conversational_analytics_setting}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#deletion_policy GeminiGibqObservabilitySetting#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#id GeminiGibqObservabilitySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#labels GeminiGibqObservabilitySetting#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#location GeminiGibqObservabilitySetting#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#project GeminiGibqObservabilitySetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiGibqObservabilitySettingTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#timeouts GeminiGibqObservabilitySetting#timeouts}

---

### GeminiGibqObservabilitySettingConversationalAnalyticsSetting <a name="GeminiGibqObservabilitySettingConversationalAnalyticsSetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.Initializer"></a>

```typescript
import { geminiGibqObservabilitySetting } from '@cdktn/provider-google'

const geminiGibqObservabilitySettingConversationalAnalyticsSetting: geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.feedbackEnabled">feedbackEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable feedback. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.loggingEnabled">loggingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable logging. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.metricsEnabled">metricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable metrics. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.tracesEnabled">tracesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable traces. |

---

##### `feedbackEnabled`<sup>Optional</sup> <a name="feedbackEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.feedbackEnabled"></a>

```typescript
public readonly feedbackEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#feedback_enabled GeminiGibqObservabilitySetting#feedback_enabled}

---

##### `loggingEnabled`<sup>Optional</sup> <a name="loggingEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.loggingEnabled"></a>

```typescript
public readonly loggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#logging_enabled GeminiGibqObservabilitySetting#logging_enabled}

---

##### `metricsEnabled`<sup>Optional</sup> <a name="metricsEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.metricsEnabled"></a>

```typescript
public readonly metricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#metrics_enabled GeminiGibqObservabilitySetting#metrics_enabled}

---

##### `tracesEnabled`<sup>Optional</sup> <a name="tracesEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.tracesEnabled"></a>

```typescript
public readonly tracesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#traces_enabled GeminiGibqObservabilitySetting#traces_enabled}

---

### GeminiGibqObservabilitySettingTimeouts <a name="GeminiGibqObservabilitySettingTimeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.Initializer"></a>

```typescript
import { geminiGibqObservabilitySetting } from '@cdktn/provider-google'

const geminiGibqObservabilitySettingTimeouts: geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#create GeminiGibqObservabilitySetting#create}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#delete GeminiGibqObservabilitySetting#delete}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#update GeminiGibqObservabilitySetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#create GeminiGibqObservabilitySetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#delete GeminiGibqObservabilitySetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#update GeminiGibqObservabilitySetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference <a name="GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer"></a>

```typescript
import { geminiGibqObservabilitySetting } from '@cdktn/provider-google'

new geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetFeedbackEnabled">resetFeedbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetLoggingEnabled">resetLoggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetMetricsEnabled">resetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetTracesEnabled">resetTracesEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFeedbackEnabled` <a name="resetFeedbackEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetFeedbackEnabled"></a>

```typescript
public resetFeedbackEnabled(): void
```

##### `resetLoggingEnabled` <a name="resetLoggingEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetLoggingEnabled"></a>

```typescript
public resetLoggingEnabled(): void
```

##### `resetMetricsEnabled` <a name="resetMetricsEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetMetricsEnabled"></a>

```typescript
public resetMetricsEnabled(): void
```

##### `resetTracesEnabled` <a name="resetTracesEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetTracesEnabled"></a>

```typescript
public resetTracesEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabledInput">feedbackEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabledInput">loggingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabledInput">metricsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabledInput">tracesEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabled">feedbackEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabled">loggingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabled">metricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabled">tracesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `feedbackEnabledInput`<sup>Optional</sup> <a name="feedbackEnabledInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabledInput"></a>

```typescript
public readonly feedbackEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `loggingEnabledInput`<sup>Optional</sup> <a name="loggingEnabledInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabledInput"></a>

```typescript
public readonly loggingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `metricsEnabledInput`<sup>Optional</sup> <a name="metricsEnabledInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabledInput"></a>

```typescript
public readonly metricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tracesEnabledInput`<sup>Optional</sup> <a name="tracesEnabledInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabledInput"></a>

```typescript
public readonly tracesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `feedbackEnabled`<sup>Required</sup> <a name="feedbackEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabled"></a>

```typescript
public readonly feedbackEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `loggingEnabled`<sup>Required</sup> <a name="loggingEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabled"></a>

```typescript
public readonly loggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `metricsEnabled`<sup>Required</sup> <a name="metricsEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabled"></a>

```typescript
public readonly metricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tracesEnabled`<sup>Required</sup> <a name="tracesEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabled"></a>

```typescript
public readonly tracesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiGibqObservabilitySettingConversationalAnalyticsSetting;
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---


### GeminiGibqObservabilitySettingTimeoutsOutputReference <a name="GeminiGibqObservabilitySettingTimeoutsOutputReference" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer"></a>

```typescript
import { geminiGibqObservabilitySetting } from '@cdktn/provider-google'

new geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiGibqObservabilitySettingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a>

---



