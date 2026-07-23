# `geminiGeminiGcpEnablementSetting` Submodule <a name="`geminiGeminiGcpEnablementSetting` Submodule" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiGeminiGcpEnablementSetting <a name="GeminiGeminiGcpEnablementSetting" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting google_gemini_gemini_gcp_enablement_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer"></a>

```typescript
import { geminiGeminiGcpEnablementSetting } from '@cdktn/provider-google'

new geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting(scope: Construct, id: string, config: GeminiGeminiGcpEnablementSettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig">GeminiGeminiGcpEnablementSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig">GeminiGeminiGcpEnablementSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetDisableWebGrounding">resetDisableWebGrounding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetEnableCustomerDataSharing">resetEnableCustomerDataSharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetWebGroundingType">resetWebGroundingType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.putTimeouts"></a>

```typescript
public putTimeouts(value: GeminiGeminiGcpEnablementSettingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisableWebGrounding` <a name="resetDisableWebGrounding" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetDisableWebGrounding"></a>

```typescript
public resetDisableWebGrounding(): void
```

##### `resetEnableCustomerDataSharing` <a name="resetEnableCustomerDataSharing" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetEnableCustomerDataSharing"></a>

```typescript
public resetEnableCustomerDataSharing(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWebGroundingType` <a name="resetWebGroundingType" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetWebGroundingType"></a>

```typescript
public resetWebGroundingType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GeminiGeminiGcpEnablementSetting resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isConstruct"></a>

```typescript
import { geminiGeminiGcpEnablementSetting } from '@cdktn/provider-google'

geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformElement"></a>

```typescript
import { geminiGeminiGcpEnablementSetting } from '@cdktn/provider-google'

geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformResource"></a>

```typescript
import { geminiGeminiGcpEnablementSetting } from '@cdktn/provider-google'

geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport"></a>

```typescript
import { geminiGeminiGcpEnablementSetting } from '@cdktn/provider-google'

geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GeminiGeminiGcpEnablementSetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiGeminiGcpEnablementSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiGeminiGcpEnablementSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GeminiGeminiGcpEnablementSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference">GeminiGeminiGcpEnablementSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.disableWebGroundingInput">disableWebGroundingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharingInput">enableCustomerDataSharingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingIdInput">geminiGcpEnablementSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.webGroundingTypeInput">webGroundingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.disableWebGrounding">disableWebGrounding</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharing">enableCustomerDataSharing</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingId">geminiGcpEnablementSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.webGroundingType">webGroundingType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiGeminiGcpEnablementSettingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference">GeminiGeminiGcpEnablementSettingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `disableWebGroundingInput`<sup>Optional</sup> <a name="disableWebGroundingInput" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.disableWebGroundingInput"></a>

```typescript
public readonly disableWebGroundingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableCustomerDataSharingInput`<sup>Optional</sup> <a name="enableCustomerDataSharingInput" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharingInput"></a>

```typescript
public readonly enableCustomerDataSharingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `geminiGcpEnablementSettingIdInput`<sup>Optional</sup> <a name="geminiGcpEnablementSettingIdInput" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingIdInput"></a>

```typescript
public readonly geminiGcpEnablementSettingIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GeminiGeminiGcpEnablementSettingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a>

---

##### `webGroundingTypeInput`<sup>Optional</sup> <a name="webGroundingTypeInput" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.webGroundingTypeInput"></a>

```typescript
public readonly webGroundingTypeInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `disableWebGrounding`<sup>Required</sup> <a name="disableWebGrounding" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.disableWebGrounding"></a>

```typescript
public readonly disableWebGrounding: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableCustomerDataSharing`<sup>Required</sup> <a name="enableCustomerDataSharing" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharing"></a>

```typescript
public readonly enableCustomerDataSharing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `geminiGcpEnablementSettingId`<sup>Required</sup> <a name="geminiGcpEnablementSettingId" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingId"></a>

```typescript
public readonly geminiGcpEnablementSettingId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `webGroundingType`<sup>Required</sup> <a name="webGroundingType" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.webGroundingType"></a>

```typescript
public readonly webGroundingType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiGeminiGcpEnablementSettingConfig <a name="GeminiGeminiGcpEnablementSettingConfig" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.Initializer"></a>

```typescript
import { geminiGeminiGcpEnablementSetting } from '@cdktn/provider-google'

const geminiGeminiGcpEnablementSettingConfig: geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.geminiGcpEnablementSettingId">geminiGcpEnablementSettingId</a></code> | <code>string</code> | Id of the Gemini Gcp Enablement setting. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.disableWebGrounding">disableWebGrounding</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether web grounding should be disabled. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.enableCustomerDataSharing">enableCustomerDataSharing</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether customer data sharing should be enabled. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#id GeminiGeminiGcpEnablementSetting#id}. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#project GeminiGeminiGcpEnablementSetting#project}. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.webGroundingType">webGroundingType</a></code> | <code>string</code> | Web grounding type. Possible values: GROUNDING_WITH_GOOGLE_SEARCH WEB_GROUNDING_FOR_ENTERPRISE. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `geminiGcpEnablementSettingId`<sup>Required</sup> <a name="geminiGcpEnablementSettingId" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.geminiGcpEnablementSettingId"></a>

```typescript
public readonly geminiGcpEnablementSettingId: string;
```

- *Type:* string

Id of the Gemini Gcp Enablement setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#gemini_gcp_enablement_setting_id GeminiGeminiGcpEnablementSetting#gemini_gcp_enablement_setting_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#location GeminiGeminiGcpEnablementSetting#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#deletion_policy GeminiGeminiGcpEnablementSetting#deletion_policy}

---

##### `disableWebGrounding`<sup>Optional</sup> <a name="disableWebGrounding" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.disableWebGrounding"></a>

```typescript
public readonly disableWebGrounding: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether web grounding should be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#disable_web_grounding GeminiGeminiGcpEnablementSetting#disable_web_grounding}

---

##### `enableCustomerDataSharing`<sup>Optional</sup> <a name="enableCustomerDataSharing" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.enableCustomerDataSharing"></a>

```typescript
public readonly enableCustomerDataSharing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether customer data sharing should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#enable_customer_data_sharing GeminiGeminiGcpEnablementSetting#enable_customer_data_sharing}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#id GeminiGeminiGcpEnablementSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#labels GeminiGeminiGcpEnablementSetting#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#project GeminiGeminiGcpEnablementSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GeminiGeminiGcpEnablementSettingTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#timeouts GeminiGeminiGcpEnablementSetting#timeouts}

---

##### `webGroundingType`<sup>Optional</sup> <a name="webGroundingType" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.webGroundingType"></a>

```typescript
public readonly webGroundingType: string;
```

- *Type:* string

Web grounding type. Possible values: GROUNDING_WITH_GOOGLE_SEARCH WEB_GROUNDING_FOR_ENTERPRISE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#web_grounding_type GeminiGeminiGcpEnablementSetting#web_grounding_type}

---

### GeminiGeminiGcpEnablementSettingTimeouts <a name="GeminiGeminiGcpEnablementSettingTimeouts" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.Initializer"></a>

```typescript
import { geminiGeminiGcpEnablementSetting } from '@cdktn/provider-google'

const geminiGeminiGcpEnablementSettingTimeouts: geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#create GeminiGeminiGcpEnablementSetting#create}. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#delete GeminiGeminiGcpEnablementSetting#delete}. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#update GeminiGeminiGcpEnablementSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#create GeminiGeminiGcpEnablementSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#delete GeminiGeminiGcpEnablementSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/gemini_gemini_gcp_enablement_setting#update GeminiGeminiGcpEnablementSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiGeminiGcpEnablementSettingTimeoutsOutputReference <a name="GeminiGeminiGcpEnablementSettingTimeoutsOutputReference" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer"></a>

```typescript
import { geminiGeminiGcpEnablementSetting } from '@cdktn/provider-google'

new geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GeminiGeminiGcpEnablementSettingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a>

---



