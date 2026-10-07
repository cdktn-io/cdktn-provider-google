# `cesApp` Submodule <a name="`cesApp` Submodule" id="@cdktn/provider-google.cesApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesApp <a name="CesApp" id="@cdktn/provider-google.cesApp.CesApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app google_ces_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesApp.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesApp(scope: Construct, id: string, config: CesAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig">CesAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppConfig">CesAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putAudioProcessingConfig">putAudioProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putClientCertificateSettings">putClientCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putDataStoreSettings">putDataStoreSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putDefaultChannelProfile">putDefaultChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putErrorHandlingSettings">putErrorHandlingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putEvaluationMetricsThresholds">putEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putLanguageSettings">putLanguageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putLoggingSettings">putLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putModelSettings">putModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putTimeZoneSettings">putTimeZoneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putVariableDeclarations">putVariableDeclarations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putVpcScSettings">putVpcScSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetAudioProcessingConfig">resetAudioProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetClientCertificateSettings">resetClientCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetDataStoreSettings">resetDataStoreSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetDefaultChannelProfile">resetDefaultChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetErrorHandlingSettings">resetErrorHandlingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetEvaluationMetricsThresholds">resetEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetGlobalInstruction">resetGlobalInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetGuardrails">resetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetLanguageSettings">resetLanguageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetLocked">resetLocked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetLoggingSettings">resetLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetModelSettings">resetModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetPinned">resetPinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetRootAgent">resetRootAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetTimeZoneSettings">resetTimeZoneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetToolExecutionMode">resetToolExecutionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetVariableDeclarations">resetVariableDeclarations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetVpcScSettings">resetVpcScSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cesApp.CesApp.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesApp.CesApp.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cesApp.CesApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesApp.CesApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cesApp.CesApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cesApp.CesApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cesApp.CesApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cesApp.CesApp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cesApp.CesApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cesApp.CesApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cesApp.CesApp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesApp.CesApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cesApp.CesApp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cesApp.CesApp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesApp.CesApp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cesApp.CesApp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cesApp.CesApp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesApp.CesApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesApp.CesApp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cesApp.CesApp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAudioProcessingConfig` <a name="putAudioProcessingConfig" id="@cdktn/provider-google.cesApp.CesApp.putAudioProcessingConfig"></a>

```typescript
public putAudioProcessingConfig(value: CesAppAudioProcessingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putAudioProcessingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a>

---

##### `putClientCertificateSettings` <a name="putClientCertificateSettings" id="@cdktn/provider-google.cesApp.CesApp.putClientCertificateSettings"></a>

```typescript
public putClientCertificateSettings(value: CesAppClientCertificateSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putClientCertificateSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a>

---

##### `putDataStoreSettings` <a name="putDataStoreSettings" id="@cdktn/provider-google.cesApp.CesApp.putDataStoreSettings"></a>

```typescript
public putDataStoreSettings(value: CesAppDataStoreSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putDataStoreSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a>

---

##### `putDefaultChannelProfile` <a name="putDefaultChannelProfile" id="@cdktn/provider-google.cesApp.CesApp.putDefaultChannelProfile"></a>

```typescript
public putDefaultChannelProfile(value: CesAppDefaultChannelProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putDefaultChannelProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a>

---

##### `putErrorHandlingSettings` <a name="putErrorHandlingSettings" id="@cdktn/provider-google.cesApp.CesApp.putErrorHandlingSettings"></a>

```typescript
public putErrorHandlingSettings(value: CesAppErrorHandlingSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putErrorHandlingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettings">CesAppErrorHandlingSettings</a>

---

##### `putEvaluationMetricsThresholds` <a name="putEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesApp.putEvaluationMetricsThresholds"></a>

```typescript
public putEvaluationMetricsThresholds(value: CesAppEvaluationMetricsThresholds): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putEvaluationMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a>

---

##### `putLanguageSettings` <a name="putLanguageSettings" id="@cdktn/provider-google.cesApp.CesApp.putLanguageSettings"></a>

```typescript
public putLanguageSettings(value: CesAppLanguageSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putLanguageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a>

---

##### `putLoggingSettings` <a name="putLoggingSettings" id="@cdktn/provider-google.cesApp.CesApp.putLoggingSettings"></a>

```typescript
public putLoggingSettings(value: CesAppLoggingSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putLoggingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a>

---

##### `putModelSettings` <a name="putModelSettings" id="@cdktn/provider-google.cesApp.CesApp.putModelSettings"></a>

```typescript
public putModelSettings(value: CesAppModelSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cesApp.CesApp.putTimeouts"></a>

```typescript
public putTimeouts(value: CesAppTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a>

---

##### `putTimeZoneSettings` <a name="putTimeZoneSettings" id="@cdktn/provider-google.cesApp.CesApp.putTimeZoneSettings"></a>

```typescript
public putTimeZoneSettings(value: CesAppTimeZoneSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putTimeZoneSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a>

---

##### `putVariableDeclarations` <a name="putVariableDeclarations" id="@cdktn/provider-google.cesApp.CesApp.putVariableDeclarations"></a>

```typescript
public putVariableDeclarations(value: IResolvable | CesAppVariableDeclarations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putVariableDeclarations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>[]

---

##### `putVpcScSettings` <a name="putVpcScSettings" id="@cdktn/provider-google.cesApp.CesApp.putVpcScSettings"></a>

```typescript
public putVpcScSettings(value: CesAppVpcScSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putVpcScSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettings">CesAppVpcScSettings</a>

---

##### `resetAudioProcessingConfig` <a name="resetAudioProcessingConfig" id="@cdktn/provider-google.cesApp.CesApp.resetAudioProcessingConfig"></a>

```typescript
public resetAudioProcessingConfig(): void
```

##### `resetClientCertificateSettings` <a name="resetClientCertificateSettings" id="@cdktn/provider-google.cesApp.CesApp.resetClientCertificateSettings"></a>

```typescript
public resetClientCertificateSettings(): void
```

##### `resetDataStoreSettings` <a name="resetDataStoreSettings" id="@cdktn/provider-google.cesApp.CesApp.resetDataStoreSettings"></a>

```typescript
public resetDataStoreSettings(): void
```

##### `resetDefaultChannelProfile` <a name="resetDefaultChannelProfile" id="@cdktn/provider-google.cesApp.CesApp.resetDefaultChannelProfile"></a>

```typescript
public resetDefaultChannelProfile(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cesApp.CesApp.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesApp.CesApp.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetErrorHandlingSettings` <a name="resetErrorHandlingSettings" id="@cdktn/provider-google.cesApp.CesApp.resetErrorHandlingSettings"></a>

```typescript
public resetErrorHandlingSettings(): void
```

##### `resetEvaluationMetricsThresholds` <a name="resetEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesApp.resetEvaluationMetricsThresholds"></a>

```typescript
public resetEvaluationMetricsThresholds(): void
```

##### `resetGlobalInstruction` <a name="resetGlobalInstruction" id="@cdktn/provider-google.cesApp.CesApp.resetGlobalInstruction"></a>

```typescript
public resetGlobalInstruction(): void
```

##### `resetGuardrails` <a name="resetGuardrails" id="@cdktn/provider-google.cesApp.CesApp.resetGuardrails"></a>

```typescript
public resetGuardrails(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cesApp.CesApp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLanguageSettings` <a name="resetLanguageSettings" id="@cdktn/provider-google.cesApp.CesApp.resetLanguageSettings"></a>

```typescript
public resetLanguageSettings(): void
```

##### `resetLocked` <a name="resetLocked" id="@cdktn/provider-google.cesApp.CesApp.resetLocked"></a>

```typescript
public resetLocked(): void
```

##### `resetLoggingSettings` <a name="resetLoggingSettings" id="@cdktn/provider-google.cesApp.CesApp.resetLoggingSettings"></a>

```typescript
public resetLoggingSettings(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-google.cesApp.CesApp.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetModelSettings` <a name="resetModelSettings" id="@cdktn/provider-google.cesApp.CesApp.resetModelSettings"></a>

```typescript
public resetModelSettings(): void
```

##### `resetPinned` <a name="resetPinned" id="@cdktn/provider-google.cesApp.CesApp.resetPinned"></a>

```typescript
public resetPinned(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.cesApp.CesApp.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRootAgent` <a name="resetRootAgent" id="@cdktn/provider-google.cesApp.CesApp.resetRootAgent"></a>

```typescript
public resetRootAgent(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cesApp.CesApp.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeZoneSettings` <a name="resetTimeZoneSettings" id="@cdktn/provider-google.cesApp.CesApp.resetTimeZoneSettings"></a>

```typescript
public resetTimeZoneSettings(): void
```

##### `resetToolExecutionMode` <a name="resetToolExecutionMode" id="@cdktn/provider-google.cesApp.CesApp.resetToolExecutionMode"></a>

```typescript
public resetToolExecutionMode(): void
```

##### `resetVariableDeclarations` <a name="resetVariableDeclarations" id="@cdktn/provider-google.cesApp.CesApp.resetVariableDeclarations"></a>

```typescript
public resetVariableDeclarations(): void
```

##### `resetVpcScSettings` <a name="resetVpcScSettings" id="@cdktn/provider-google.cesApp.CesApp.resetVpcScSettings"></a>

```typescript
public resetVpcScSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CesApp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cesApp.CesApp.isConstruct"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

cesApp.CesApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesApp.CesApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cesApp.CesApp.isTerraformElement"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

cesApp.CesApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesApp.CesApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cesApp.CesApp.isTerraformResource"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

cesApp.CesApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesApp.CesApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

cesApp.CesApp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CesApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CesApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CesApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CesApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.audioProcessingConfig">audioProcessingConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference">CesAppAudioProcessingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.clientCertificateSettings">clientCertificateSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference">CesAppClientCertificateSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.dataStoreSettings">dataStoreSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference">CesAppDataStoreSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.defaultChannelProfile">defaultChannelProfile</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference">CesAppDefaultChannelProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.deploymentCount">deploymentCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.errorHandlingSettings">errorHandlingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference">CesAppErrorHandlingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.evaluationMetricsThresholds">evaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.languageSettings">languageSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference">CesAppLanguageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.loggingSettings">loggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference">CesAppLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference">CesAppModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference">CesAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.timeZoneSettings">timeZoneSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference">CesAppTimeZoneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.variableDeclarations">variableDeclarations</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList">CesAppVariableDeclarationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.vpcScSettings">vpcScSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference">CesAppVpcScSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.audioProcessingConfigInput">audioProcessingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.clientCertificateSettingsInput">clientCertificateSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.dataStoreSettingsInput">dataStoreSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.defaultChannelProfileInput">defaultChannelProfileInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.errorHandlingSettingsInput">errorHandlingSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettings">CesAppErrorHandlingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.evaluationMetricsThresholdsInput">evaluationMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.globalInstructionInput">globalInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.guardrailsInput">guardrailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.languageSettingsInput">languageSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.lockedInput">lockedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.loggingSettingsInput">loggingSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.modelSettingsInput">modelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.pinnedInput">pinnedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.rootAgentInput">rootAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.timeZoneSettingsInput">timeZoneSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.toolExecutionModeInput">toolExecutionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.variableDeclarationsInput">variableDeclarationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.vpcScSettingsInput">vpcScSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettings">CesAppVpcScSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.globalInstruction">globalInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.guardrails">guardrails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.locked">locked</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.pinned">pinned</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.rootAgent">rootAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.toolExecutionMode">toolExecutionMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cesApp.CesApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cesApp.CesApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cesApp.CesApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cesApp.CesApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cesApp.CesApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cesApp.CesApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesApp.CesApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesApp.CesApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesApp.CesApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesApp.CesApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesApp.CesApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesApp.CesApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesApp.CesApp.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `audioProcessingConfig`<sup>Required</sup> <a name="audioProcessingConfig" id="@cdktn/provider-google.cesApp.CesApp.property.audioProcessingConfig"></a>

```typescript
public readonly audioProcessingConfig: CesAppAudioProcessingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference">CesAppAudioProcessingConfigOutputReference</a>

---

##### `clientCertificateSettings`<sup>Required</sup> <a name="clientCertificateSettings" id="@cdktn/provider-google.cesApp.CesApp.property.clientCertificateSettings"></a>

```typescript
public readonly clientCertificateSettings: CesAppClientCertificateSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference">CesAppClientCertificateSettingsOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.cesApp.CesApp.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataStoreSettings`<sup>Required</sup> <a name="dataStoreSettings" id="@cdktn/provider-google.cesApp.CesApp.property.dataStoreSettings"></a>

```typescript
public readonly dataStoreSettings: CesAppDataStoreSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference">CesAppDataStoreSettingsOutputReference</a>

---

##### `defaultChannelProfile`<sup>Required</sup> <a name="defaultChannelProfile" id="@cdktn/provider-google.cesApp.CesApp.property.defaultChannelProfile"></a>

```typescript
public readonly defaultChannelProfile: CesAppDefaultChannelProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference">CesAppDefaultChannelProfileOutputReference</a>

---

##### `deploymentCount`<sup>Required</sup> <a name="deploymentCount" id="@cdktn/provider-google.cesApp.CesApp.property.deploymentCount"></a>

```typescript
public readonly deploymentCount: number;
```

- *Type:* number

---

##### `errorHandlingSettings`<sup>Required</sup> <a name="errorHandlingSettings" id="@cdktn/provider-google.cesApp.CesApp.property.errorHandlingSettings"></a>

```typescript
public readonly errorHandlingSettings: CesAppErrorHandlingSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference">CesAppErrorHandlingSettingsOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cesApp.CesApp.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `evaluationMetricsThresholds`<sup>Required</sup> <a name="evaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesApp.property.evaluationMetricsThresholds"></a>

```typescript
public readonly evaluationMetricsThresholds: CesAppEvaluationMetricsThresholdsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsOutputReference</a>

---

##### `languageSettings`<sup>Required</sup> <a name="languageSettings" id="@cdktn/provider-google.cesApp.CesApp.property.languageSettings"></a>

```typescript
public readonly languageSettings: CesAppLanguageSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference">CesAppLanguageSettingsOutputReference</a>

---

##### `loggingSettings`<sup>Required</sup> <a name="loggingSettings" id="@cdktn/provider-google.cesApp.CesApp.property.loggingSettings"></a>

```typescript
public readonly loggingSettings: CesAppLoggingSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference">CesAppLoggingSettingsOutputReference</a>

---

##### `modelSettings`<sup>Required</sup> <a name="modelSettings" id="@cdktn/provider-google.cesApp.CesApp.property.modelSettings"></a>

```typescript
public readonly modelSettings: CesAppModelSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference">CesAppModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesApp.CesApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cesApp.CesApp.property.timeouts"></a>

```typescript
public readonly timeouts: CesAppTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference">CesAppTimeoutsOutputReference</a>

---

##### `timeZoneSettings`<sup>Required</sup> <a name="timeZoneSettings" id="@cdktn/provider-google.cesApp.CesApp.property.timeZoneSettings"></a>

```typescript
public readonly timeZoneSettings: CesAppTimeZoneSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference">CesAppTimeZoneSettingsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.cesApp.CesApp.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `variableDeclarations`<sup>Required</sup> <a name="variableDeclarations" id="@cdktn/provider-google.cesApp.CesApp.property.variableDeclarations"></a>

```typescript
public readonly variableDeclarations: CesAppVariableDeclarationsList;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList">CesAppVariableDeclarationsList</a>

---

##### `vpcScSettings`<sup>Required</sup> <a name="vpcScSettings" id="@cdktn/provider-google.cesApp.CesApp.property.vpcScSettings"></a>

```typescript
public readonly vpcScSettings: CesAppVpcScSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference">CesAppVpcScSettingsOutputReference</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktn/provider-google.cesApp.CesApp.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `audioProcessingConfigInput`<sup>Optional</sup> <a name="audioProcessingConfigInput" id="@cdktn/provider-google.cesApp.CesApp.property.audioProcessingConfigInput"></a>

```typescript
public readonly audioProcessingConfigInput: CesAppAudioProcessingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a>

---

##### `clientCertificateSettingsInput`<sup>Optional</sup> <a name="clientCertificateSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.clientCertificateSettingsInput"></a>

```typescript
public readonly clientCertificateSettingsInput: CesAppClientCertificateSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a>

---

##### `dataStoreSettingsInput`<sup>Optional</sup> <a name="dataStoreSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.dataStoreSettingsInput"></a>

```typescript
public readonly dataStoreSettingsInput: CesAppDataStoreSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a>

---

##### `defaultChannelProfileInput`<sup>Optional</sup> <a name="defaultChannelProfileInput" id="@cdktn/provider-google.cesApp.CesApp.property.defaultChannelProfileInput"></a>

```typescript
public readonly defaultChannelProfileInput: CesAppDefaultChannelProfile;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cesApp.CesApp.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesApp.CesApp.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.cesApp.CesApp.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `errorHandlingSettingsInput`<sup>Optional</sup> <a name="errorHandlingSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.errorHandlingSettingsInput"></a>

```typescript
public readonly errorHandlingSettingsInput: CesAppErrorHandlingSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettings">CesAppErrorHandlingSettings</a>

---

##### `evaluationMetricsThresholdsInput`<sup>Optional</sup> <a name="evaluationMetricsThresholdsInput" id="@cdktn/provider-google.cesApp.CesApp.property.evaluationMetricsThresholdsInput"></a>

```typescript
public readonly evaluationMetricsThresholdsInput: CesAppEvaluationMetricsThresholds;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a>

---

##### `globalInstructionInput`<sup>Optional</sup> <a name="globalInstructionInput" id="@cdktn/provider-google.cesApp.CesApp.property.globalInstructionInput"></a>

```typescript
public readonly globalInstructionInput: string;
```

- *Type:* string

---

##### `guardrailsInput`<sup>Optional</sup> <a name="guardrailsInput" id="@cdktn/provider-google.cesApp.CesApp.property.guardrailsInput"></a>

```typescript
public readonly guardrailsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cesApp.CesApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `languageSettingsInput`<sup>Optional</sup> <a name="languageSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.languageSettingsInput"></a>

```typescript
public readonly languageSettingsInput: CesAppLanguageSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.cesApp.CesApp.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `lockedInput`<sup>Optional</sup> <a name="lockedInput" id="@cdktn/provider-google.cesApp.CesApp.property.lockedInput"></a>

```typescript
public readonly lockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `loggingSettingsInput`<sup>Optional</sup> <a name="loggingSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.loggingSettingsInput"></a>

```typescript
public readonly loggingSettingsInput: CesAppLoggingSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-google.cesApp.CesApp.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `modelSettingsInput`<sup>Optional</sup> <a name="modelSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.modelSettingsInput"></a>

```typescript
public readonly modelSettingsInput: CesAppModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a>

---

##### `pinnedInput`<sup>Optional</sup> <a name="pinnedInput" id="@cdktn/provider-google.cesApp.CesApp.property.pinnedInput"></a>

```typescript
public readonly pinnedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.cesApp.CesApp.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `rootAgentInput`<sup>Optional</sup> <a name="rootAgentInput" id="@cdktn/provider-google.cesApp.CesApp.property.rootAgentInput"></a>

```typescript
public readonly rootAgentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cesApp.CesApp.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CesAppTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a>

---

##### `timeZoneSettingsInput`<sup>Optional</sup> <a name="timeZoneSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.timeZoneSettingsInput"></a>

```typescript
public readonly timeZoneSettingsInput: CesAppTimeZoneSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a>

---

##### `toolExecutionModeInput`<sup>Optional</sup> <a name="toolExecutionModeInput" id="@cdktn/provider-google.cesApp.CesApp.property.toolExecutionModeInput"></a>

```typescript
public readonly toolExecutionModeInput: string;
```

- *Type:* string

---

##### `variableDeclarationsInput`<sup>Optional</sup> <a name="variableDeclarationsInput" id="@cdktn/provider-google.cesApp.CesApp.property.variableDeclarationsInput"></a>

```typescript
public readonly variableDeclarationsInput: IResolvable | CesAppVariableDeclarations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>[]

---

##### `vpcScSettingsInput`<sup>Optional</sup> <a name="vpcScSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.vpcScSettingsInput"></a>

```typescript
public readonly vpcScSettingsInput: CesAppVpcScSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettings">CesAppVpcScSettings</a>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-google.cesApp.CesApp.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesApp.CesApp.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesApp.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesApp.CesApp.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `globalInstruction`<sup>Required</sup> <a name="globalInstruction" id="@cdktn/provider-google.cesApp.CesApp.property.globalInstruction"></a>

```typescript
public readonly globalInstruction: string;
```

- *Type:* string

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktn/provider-google.cesApp.CesApp.property.guardrails"></a>

```typescript
public readonly guardrails: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesApp.CesApp.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktn/provider-google.cesApp.CesApp.property.locked"></a>

```typescript
public readonly locked: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google.cesApp.CesApp.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `pinned`<sup>Required</sup> <a name="pinned" id="@cdktn/provider-google.cesApp.CesApp.property.pinned"></a>

```typescript
public readonly pinned: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesApp.CesApp.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `rootAgent`<sup>Required</sup> <a name="rootAgent" id="@cdktn/provider-google.cesApp.CesApp.property.rootAgent"></a>

```typescript
public readonly rootAgent: string;
```

- *Type:* string

---

##### `toolExecutionMode`<sup>Required</sup> <a name="toolExecutionMode" id="@cdktn/provider-google.cesApp.CesApp.property.toolExecutionMode"></a>

```typescript
public readonly toolExecutionMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cesApp.CesApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CesAppAudioProcessingConfig <a name="CesAppAudioProcessingConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppAudioProcessingConfig: cesApp.CesAppAudioProcessingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.ambientSoundConfig">ambientSoundConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a></code> | ambient_sound_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.bargeInConfig">bargeInConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a></code> | barge_in_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.inactivityTimeout">inactivityTimeout</a></code> | <code>string</code> | The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.synthesizeSpeechConfigs">synthesizeSpeechConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>[]</code> | synthesize_speech_configs block. |

---

##### `ambientSoundConfig`<sup>Optional</sup> <a name="ambientSoundConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.ambientSoundConfig"></a>

```typescript
public readonly ambientSoundConfig: CesAppAudioProcessingConfigAmbientSoundConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a>

ambient_sound_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#ambient_sound_config CesApp#ambient_sound_config}

---

##### `bargeInConfig`<sup>Optional</sup> <a name="bargeInConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.bargeInConfig"></a>

```typescript
public readonly bargeInConfig: CesAppAudioProcessingConfigBargeInConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a>

barge_in_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#barge_in_config CesApp#barge_in_config}

---

##### `inactivityTimeout`<sup>Optional</sup> <a name="inactivityTimeout" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.inactivityTimeout"></a>

```typescript
public readonly inactivityTimeout: string;
```

- *Type:* string

The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement.

If not set, the agent will not prompt
the user for reengagement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#inactivity_timeout CesApp#inactivity_timeout}

---

##### `synthesizeSpeechConfigs`<sup>Optional</sup> <a name="synthesizeSpeechConfigs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.synthesizeSpeechConfigs"></a>

```typescript
public readonly synthesizeSpeechConfigs: IResolvable | CesAppAudioProcessingConfigSynthesizeSpeechConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>[]

synthesize_speech_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#synthesize_speech_configs CesApp#synthesize_speech_configs}

---

### CesAppAudioProcessingConfigAmbientSoundConfig <a name="CesAppAudioProcessingConfigAmbientSoundConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppAudioProcessingConfigAmbientSoundConfig: cesApp.CesAppAudioProcessingConfigAmbientSoundConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.gcsUri">gcsUri</a></code> | <code>string</code> | Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud Storage](https://cloud.google.com/storage). Note: Please make sure the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com' has 'storage.objects.get' permission to the Cloud Storage object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.prebuiltAmbientSound">prebuiltAmbientSound</a></code> | <code>string</code> | Name of the prebuilt ambient sound. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.volumeGainDb">volumeGainDb</a></code> | <code>number</code> | Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that. |

---

##### `gcsUri`<sup>Optional</sup> <a name="gcsUri" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.gcsUri"></a>

```typescript
public readonly gcsUri: string;
```

- *Type:* string

Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud Storage](https://cloud.google.com/storage). Note: Please make sure the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com' has 'storage.objects.get' permission to the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#gcs_uri CesApp#gcs_uri}

---

##### `prebuiltAmbientSound`<sup>Optional</sup> <a name="prebuiltAmbientSound" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.prebuiltAmbientSound"></a>

```typescript
public readonly prebuiltAmbientSound: string;
```

- *Type:* string

Name of the prebuilt ambient sound.

Valid values are: - "coffee_shop" - "keyboard" - "keypad" - "hum"
-"office_1" - "office_2" - "office_3"
-"room_1" - "room_2" - "room_3"
-"room_4" - "room_5" - "air_conditioner"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#prebuilt_ambient_sound CesApp#prebuilt_ambient_sound}

---

##### `volumeGainDb`<sup>Optional</sup> <a name="volumeGainDb" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.volumeGainDb"></a>

```typescript
public readonly volumeGainDb: number;
```

- *Type:* number

Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#volume_gain_db CesApp#volume_gain_db}

---

### CesAppAudioProcessingConfigBargeInConfig <a name="CesAppAudioProcessingConfigBargeInConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppAudioProcessingConfigBargeInConfig: cesApp.CesAppAudioProcessingConfigBargeInConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig.property.bargeInAwareness">bargeInAwareness</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message. |

---

##### `bargeInAwareness`<sup>Optional</sup> <a name="bargeInAwareness" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig.property.bargeInAwareness"></a>

```typescript
public readonly bargeInAwareness: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message.

This should not be used in scenarios where agent responses are displayed
visually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#barge_in_awareness CesApp#barge_in_awareness}

---

### CesAppAudioProcessingConfigSynthesizeSpeechConfigs <a name="CesAppAudioProcessingConfigSynthesizeSpeechConfigs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppAudioProcessingConfigSynthesizeSpeechConfigs: cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.languageCode">languageCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#language_code CesApp#language_code}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.instruction">instruction</a></code> | <code>string</code> | The instruction used to synthesize speech when using a generative model. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.model">model</a></code> | <code>string</code> | The model used to synthesize audio. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.speakingRate">speakingRate</a></code> | <code>number</code> | The speaking rate/speed in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. Values outside of the range [0.25, 2.0] will return an error. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.voice">voice</a></code> | <code>string</code> | The name of the voice. |

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#language_code CesApp#language_code}.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

The instruction used to synthesize speech when using a generative model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#instruction CesApp#instruction}

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

The model used to synthesize audio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#model CesApp#model}

---

##### `speakingRate`<sup>Optional</sup> <a name="speakingRate" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.speakingRate"></a>

```typescript
public readonly speakingRate: number;
```

- *Type:* number

The speaking rate/speed in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. Values outside of the range [0.25, 2.0] will return an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#speaking_rate CesApp#speaking_rate}

---

##### `voice`<sup>Optional</sup> <a name="voice" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.voice"></a>

```typescript
public readonly voice: string;
```

- *Type:* string

The name of the voice.

If not set, the service will choose a
voice based on the other parameters such as language_code.
For the list of available voices, please refer to Supported voices and
languages from Cloud Text-to-Speech.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#voice CesApp#voice}

---

### CesAppClientCertificateSettings <a name="CesAppClientCertificateSettings" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppClientCertificateSettings: cesApp.CesAppClientCertificateSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.privateKey">privateKey</a></code> | <code>string</code> | The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: projects/{project}/secrets/{secret}/versions/{version}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.tlsCertificate">tlsCertificate</a></code> | <code>string</code> | The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.passphrase">passphrase</a></code> | <code>string</code> | The passphrase to decrypt the private key. Should be left unset if the private key is not encrypted. |

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#private_key CesApp#private_key}

---

##### `tlsCertificate`<sup>Required</sup> <a name="tlsCertificate" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.tlsCertificate"></a>

```typescript
public readonly tlsCertificate: string;
```

- *Type:* string

The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#tls_certificate CesApp#tls_certificate}

---

##### `passphrase`<sup>Optional</sup> <a name="passphrase" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.passphrase"></a>

```typescript
public readonly passphrase: string;
```

- *Type:* string

The passphrase to decrypt the private key. Should be left unset if the private key is not encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#passphrase CesApp#passphrase}

---

### CesAppConfig <a name="CesAppConfig" id="@cdktn/provider-google.cesApp.CesAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppConfig.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppConfig: cesApp.CesAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.appId">appId</a></code> | <code>string</code> | The ID to use for the app, which will become the final component of the app's resource name. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.audioProcessingConfig">audioProcessingConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a></code> | audio_processing_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.clientCertificateSettings">clientCertificateSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a></code> | client_certificate_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.dataStoreSettings">dataStoreSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a></code> | data_store_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.defaultChannelProfile">defaultChannelProfile</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a></code> | default_channel_profile block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.description">description</a></code> | <code>string</code> | Human-readable description of the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.errorHandlingSettings">errorHandlingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettings">CesAppErrorHandlingSettings</a></code> | error_handling_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.evaluationMetricsThresholds">evaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a></code> | evaluation_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.globalInstruction">globalInstruction</a></code> | <code>string</code> | Instructions for all the agents in the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.guardrails">guardrails</a></code> | <code>string[]</code> | List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#id CesApp#id}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.languageSettings">languageSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a></code> | language_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.locked">locked</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the app is locked for changes. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.loggingSettings">loggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a></code> | logging_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata about the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.pinned">pinned</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the app is pinned in the app list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#project CesApp#project}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.rootAgent">rootAgent</a></code> | <code>string</code> | The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.timeZoneSettings">timeZoneSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a></code> | time_zone_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.toolExecutionMode">toolExecutionMode</a></code> | <code>string</code> | The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.variableDeclarations">variableDeclarations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>[]</code> | variable_declarations block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.vpcScSettings">vpcScSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettings">CesAppVpcScSettings</a></code> | vpc_sc_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesApp.CesAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesApp.CesAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesApp.CesAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesApp.CesAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesApp.CesAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesApp.CesAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesApp.CesAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-google.cesApp.CesAppConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The ID to use for the app, which will become the final component of the app's resource name.

If not provided, a unique ID will be
automatically assigned for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#app_id CesApp#app_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesApp.CesAppConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#display_name CesApp#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesApp.CesAppConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#location CesApp#location}

---

##### `audioProcessingConfig`<sup>Optional</sup> <a name="audioProcessingConfig" id="@cdktn/provider-google.cesApp.CesAppConfig.property.audioProcessingConfig"></a>

```typescript
public readonly audioProcessingConfig: CesAppAudioProcessingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a>

audio_processing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#audio_processing_config CesApp#audio_processing_config}

---

##### `clientCertificateSettings`<sup>Optional</sup> <a name="clientCertificateSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.clientCertificateSettings"></a>

```typescript
public readonly clientCertificateSettings: CesAppClientCertificateSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a>

client_certificate_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#client_certificate_settings CesApp#client_certificate_settings}

---

##### `dataStoreSettings`<sup>Optional</sup> <a name="dataStoreSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.dataStoreSettings"></a>

```typescript
public readonly dataStoreSettings: CesAppDataStoreSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a>

data_store_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#data_store_settings CesApp#data_store_settings}

---

##### `defaultChannelProfile`<sup>Optional</sup> <a name="defaultChannelProfile" id="@cdktn/provider-google.cesApp.CesAppConfig.property.defaultChannelProfile"></a>

```typescript
public readonly defaultChannelProfile: CesAppDefaultChannelProfile;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a>

default_channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#default_channel_profile CesApp#default_channel_profile}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesApp.CesAppConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#deletion_policy CesApp#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesAppConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#description CesApp#description}

---

##### `errorHandlingSettings`<sup>Optional</sup> <a name="errorHandlingSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.errorHandlingSettings"></a>

```typescript
public readonly errorHandlingSettings: CesAppErrorHandlingSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettings">CesAppErrorHandlingSettings</a>

error_handling_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#error_handling_settings CesApp#error_handling_settings}

---

##### `evaluationMetricsThresholds`<sup>Optional</sup> <a name="evaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppConfig.property.evaluationMetricsThresholds"></a>

```typescript
public readonly evaluationMetricsThresholds: CesAppEvaluationMetricsThresholds;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a>

evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#evaluation_metrics_thresholds CesApp#evaluation_metrics_thresholds}

---

##### `globalInstruction`<sup>Optional</sup> <a name="globalInstruction" id="@cdktn/provider-google.cesApp.CesAppConfig.property.globalInstruction"></a>

```typescript
public readonly globalInstruction: string;
```

- *Type:* string

Instructions for all the agents in the app.

You can use this instruction to set up a stable identity or personality
across all the agents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#global_instruction CesApp#global_instruction}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google.cesApp.CesAppConfig.property.guardrails"></a>

```typescript
public readonly guardrails: string[];
```

- *Type:* string[]

List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#guardrails CesApp#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#id CesApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `languageSettings`<sup>Optional</sup> <a name="languageSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.languageSettings"></a>

```typescript
public readonly languageSettings: CesAppLanguageSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a>

language_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#language_settings CesApp#language_settings}

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktn/provider-google.cesApp.CesAppConfig.property.locked"></a>

```typescript
public readonly locked: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the app is locked for changes.

If the app is locked,
modifications to the app resources will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#locked CesApp#locked}

---

##### `loggingSettings`<sup>Optional</sup> <a name="loggingSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.loggingSettings"></a>

```typescript
public readonly loggingSettings: CesAppLoggingSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a>

logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#logging_settings CesApp#logging_settings}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.cesApp.CesAppConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata about the app.

This field can be used to store additional
information relevant to the app's details or intended usages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#metadata CesApp#metadata}

---

##### `modelSettings`<sup>Optional</sup> <a name="modelSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.modelSettings"></a>

```typescript
public readonly modelSettings: CesAppModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#model_settings CesApp#model_settings}

---

##### `pinned`<sup>Optional</sup> <a name="pinned" id="@cdktn/provider-google.cesApp.CesAppConfig.property.pinned"></a>

```typescript
public readonly pinned: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the app is pinned in the app list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#pinned CesApp#pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesApp.CesAppConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#project CesApp#project}.

---

##### `rootAgent`<sup>Optional</sup> <a name="rootAgent" id="@cdktn/provider-google.cesApp.CesAppConfig.property.rootAgent"></a>

```typescript
public readonly rootAgent: string;
```

- *Type:* string

The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#root_agent CesApp#root_agent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesApp.CesAppConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CesAppTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#timeouts CesApp#timeouts}

---

##### `timeZoneSettings`<sup>Optional</sup> <a name="timeZoneSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.timeZoneSettings"></a>

```typescript
public readonly timeZoneSettings: CesAppTimeZoneSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a>

time_zone_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#time_zone_settings CesApp#time_zone_settings}

---

##### `toolExecutionMode`<sup>Optional</sup> <a name="toolExecutionMode" id="@cdktn/provider-google.cesApp.CesAppConfig.property.toolExecutionMode"></a>

```typescript
public readonly toolExecutionMode: string;
```

- *Type:* string

The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#tool_execution_mode CesApp#tool_execution_mode}

---

##### `variableDeclarations`<sup>Optional</sup> <a name="variableDeclarations" id="@cdktn/provider-google.cesApp.CesAppConfig.property.variableDeclarations"></a>

```typescript
public readonly variableDeclarations: IResolvable | CesAppVariableDeclarations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>[]

variable_declarations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#variable_declarations CesApp#variable_declarations}

---

##### `vpcScSettings`<sup>Optional</sup> <a name="vpcScSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.vpcScSettings"></a>

```typescript
public readonly vpcScSettings: CesAppVpcScSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettings">CesAppVpcScSettings</a>

vpc_sc_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#vpc_sc_settings CesApp#vpc_sc_settings}

---

### CesAppDataStoreSettings <a name="CesAppDataStoreSettings" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettings.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppDataStoreSettings: cesApp.CesAppDataStoreSettings = { ... }
```


### CesAppDataStoreSettingsEngines <a name="CesAppDataStoreSettingsEngines" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEngines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEngines.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppDataStoreSettingsEngines: cesApp.CesAppDataStoreSettingsEngines = { ... }
```


### CesAppDefaultChannelProfile <a name="CesAppDefaultChannelProfile" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppDefaultChannelProfile: cesApp.CesAppDefaultChannelProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.channelType">channelType</a></code> | <code>string</code> | The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.disableBargeInControl">disableBargeInControl</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to disable user barge-in in the conversation. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.disableDtmf">disableDtmf</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to disable DTMF (dual-tone multi-frequency). |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.personaProperty">personaProperty</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a></code> | persona_property block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.profileId">profileId</a></code> | <code>string</code> | The unique identifier of the channel profile. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.webWidgetConfig">webWidgetConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a></code> | web_widget_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.whatsappConfig">whatsappConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfig">CesAppDefaultChannelProfileWhatsappConfig</a></code> | whatsapp_config block. |

---

##### `channelType`<sup>Optional</sup> <a name="channelType" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.channelType"></a>

```typescript
public readonly channelType: string;
```

- *Type:* string

The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#channel_type CesApp#channel_type}

---

##### `disableBargeInControl`<sup>Optional</sup> <a name="disableBargeInControl" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.disableBargeInControl"></a>

```typescript
public readonly disableBargeInControl: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to disable user barge-in in the conversation.

true: User interruptions are disabled while the agent is speaking.
- false: The agent retains automatic control over when the user can interrupt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#disable_barge_in_control CesApp#disable_barge_in_control}

---

##### `disableDtmf`<sup>Optional</sup> <a name="disableDtmf" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.disableDtmf"></a>

```typescript
public readonly disableDtmf: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to disable DTMF (dual-tone multi-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#disable_dtmf CesApp#disable_dtmf}

---

##### `personaProperty`<sup>Optional</sup> <a name="personaProperty" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.personaProperty"></a>

```typescript
public readonly personaProperty: CesAppDefaultChannelProfilePersonaProperty;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a>

persona_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#persona_property CesApp#persona_property}

---

##### `profileId`<sup>Optional</sup> <a name="profileId" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

The unique identifier of the channel profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#profile_id CesApp#profile_id}

---

##### `webWidgetConfig`<sup>Optional</sup> <a name="webWidgetConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.webWidgetConfig"></a>

```typescript
public readonly webWidgetConfig: CesAppDefaultChannelProfileWebWidgetConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a>

web_widget_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#web_widget_config CesApp#web_widget_config}

---

##### `whatsappConfig`<sup>Optional</sup> <a name="whatsappConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.whatsappConfig"></a>

```typescript
public readonly whatsappConfig: CesAppDefaultChannelProfileWhatsappConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfig">CesAppDefaultChannelProfileWhatsappConfig</a>

whatsapp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#whatsapp_config CesApp#whatsapp_config}

---

### CesAppDefaultChannelProfilePersonaProperty <a name="CesAppDefaultChannelProfilePersonaProperty" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppDefaultChannelProfilePersonaProperty: cesApp.CesAppDefaultChannelProfilePersonaProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty.property.persona">persona</a></code> | <code>string</code> | The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY. |

---

##### `persona`<sup>Optional</sup> <a name="persona" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty.property.persona"></a>

```typescript
public readonly persona: string;
```

- *Type:* string

The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#persona CesApp#persona}

---

### CesAppDefaultChannelProfileWebWidgetConfig <a name="CesAppDefaultChannelProfileWebWidgetConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppDefaultChannelProfileWebWidgetConfig: cesApp.CesAppDefaultChannelProfileWebWidgetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.modality">modality</a></code> | <code>string</code> | The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.securitySettings">securitySettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings">CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings</a></code> | security_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.theme">theme</a></code> | <code>string</code> | The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.webWidgetTitle">webWidgetTitle</a></code> | <code>string</code> | The title of the web widget. |

---

##### `modality`<sup>Optional</sup> <a name="modality" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.modality"></a>

```typescript
public readonly modality: string;
```

- *Type:* string

The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#modality CesApp#modality}

---

##### `securitySettings`<sup>Optional</sup> <a name="securitySettings" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.securitySettings"></a>

```typescript
public readonly securitySettings: CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings">CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings</a>

security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#security_settings CesApp#security_settings}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* string

The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#theme CesApp#theme}

---

##### `webWidgetTitle`<sup>Optional</sup> <a name="webWidgetTitle" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.webWidgetTitle"></a>

```typescript
public readonly webWidgetTitle: string;
```

- *Type:* string

The title of the web widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#web_widget_title CesApp#web_widget_title}

---

### CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings <a name="CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppDefaultChannelProfileWebWidgetConfigSecuritySettings: cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | The origins that are allowed to host the web widget. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings.property.enableOriginCheck">enableOriginCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether origin check for the web widget is enabled. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings.property.enablePublicAccess">enablePublicAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether public access to the web widget is enabled. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings.property.enableRecaptcha">enableRecaptcha</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether reCAPTCHA verification for the web widget is enabled. |

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

The origins that are allowed to host the web widget.

An origin is
defined by RFC 6454. If empty, all origins are allowed.
A maximum of 100 origins is allowed.
Example: "https://example.com"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#allowed_origins CesApp#allowed_origins}

---

##### `enableOriginCheck`<sup>Optional</sup> <a name="enableOriginCheck" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings.property.enableOriginCheck"></a>

```typescript
public readonly enableOriginCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether origin check for the web widget is enabled.

If 'true', the web widget will check the origin of the website that
loads the web widget and only allow it to be loaded in the same origin
or any of the allowed origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#enable_origin_check CesApp#enable_origin_check}

---

##### `enablePublicAccess`<sup>Optional</sup> <a name="enablePublicAccess" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings.property.enablePublicAccess"></a>

```typescript
public readonly enablePublicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether public access to the web widget is enabled.

If 'true', the web widget will be publicly accessible.
If 'false', the web widget must be integrated with your own
authentication and authorization system to return valid credentials for
accessing the CES agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#enable_public_access CesApp#enable_public_access}

---

##### `enableRecaptcha`<sup>Optional</sup> <a name="enableRecaptcha" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings.property.enableRecaptcha"></a>

```typescript
public readonly enableRecaptcha: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether reCAPTCHA verification for the web widget is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#enable_recaptcha CesApp#enable_recaptcha}

---

### CesAppDefaultChannelProfileWhatsappConfig <a name="CesAppDefaultChannelProfileWhatsappConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfig.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppDefaultChannelProfileWhatsappConfig: cesApp.CesAppDefaultChannelProfileWhatsappConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfig.property.phoneNumberId">phoneNumberId</a></code> | <code>string</code> | The Meta phone number ID. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfig.property.wabaId">wabaId</a></code> | <code>string</code> | The WhatsApp Business Account ID. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfig.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | The phone number in E.164 format. |

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfig.property.phoneNumberId"></a>

```typescript
public readonly phoneNumberId: string;
```

- *Type:* string

The Meta phone number ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#phone_number_id CesApp#phone_number_id}

---

##### `wabaId`<sup>Required</sup> <a name="wabaId" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfig.property.wabaId"></a>

```typescript
public readonly wabaId: string;
```

- *Type:* string

The WhatsApp Business Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#waba_id CesApp#waba_id}

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfig.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

The phone number in E.164 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#phone_number CesApp#phone_number}

---

### CesAppErrorHandlingSettings <a name="CesAppErrorHandlingSettings" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettings.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppErrorHandlingSettings: cesApp.CesAppErrorHandlingSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettings.property.endSessionConfig">endSessionConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfig">CesAppErrorHandlingSettingsEndSessionConfig</a></code> | end_session_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettings.property.errorHandlingStrategy">errorHandlingStrategy</a></code> | <code>string</code> | The strategy to use for error handling. Possible values: NONE FALLBACK_RESPONSE END_SESSION. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettings.property.fallbackResponseConfig">fallbackResponseConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfig">CesAppErrorHandlingSettingsFallbackResponseConfig</a></code> | fallback_response_config block. |

---

##### `endSessionConfig`<sup>Optional</sup> <a name="endSessionConfig" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettings.property.endSessionConfig"></a>

```typescript
public readonly endSessionConfig: CesAppErrorHandlingSettingsEndSessionConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfig">CesAppErrorHandlingSettingsEndSessionConfig</a>

end_session_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#end_session_config CesApp#end_session_config}

---

##### `errorHandlingStrategy`<sup>Optional</sup> <a name="errorHandlingStrategy" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettings.property.errorHandlingStrategy"></a>

```typescript
public readonly errorHandlingStrategy: string;
```

- *Type:* string

The strategy to use for error handling. Possible values: NONE FALLBACK_RESPONSE END_SESSION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#error_handling_strategy CesApp#error_handling_strategy}

---

##### `fallbackResponseConfig`<sup>Optional</sup> <a name="fallbackResponseConfig" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettings.property.fallbackResponseConfig"></a>

```typescript
public readonly fallbackResponseConfig: CesAppErrorHandlingSettingsFallbackResponseConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfig">CesAppErrorHandlingSettingsFallbackResponseConfig</a>

fallback_response_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#fallback_response_config CesApp#fallback_response_config}

---

### CesAppErrorHandlingSettingsEndSessionConfig <a name="CesAppErrorHandlingSettingsEndSessionConfig" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfig.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppErrorHandlingSettingsEndSessionConfig: cesApp.CesAppErrorHandlingSettingsEndSessionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfig.property.escalateSession">escalateSession</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to escalate the session in EndSession. If session is escalated, metadata in EndSession will contain session_escalated = true. |

---

##### `escalateSession`<sup>Optional</sup> <a name="escalateSession" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfig.property.escalateSession"></a>

```typescript
public readonly escalateSession: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to escalate the session in EndSession. If session is escalated, metadata in EndSession will contain session_escalated = true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#escalate_session CesApp#escalate_session}

---

### CesAppErrorHandlingSettingsFallbackResponseConfig <a name="CesAppErrorHandlingSettingsFallbackResponseConfig" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfig.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppErrorHandlingSettingsFallbackResponseConfig: cesApp.CesAppErrorHandlingSettingsFallbackResponseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfig.property.customFallbackMessages">customFallbackMessages</a></code> | <code>{[ key: string ]: string}</code> | The fallback messages in case of system errors (e.g. LLM errors), mapped by supported language code (https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/language). |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfig.property.maxFallbackAttempts">maxFallbackAttempts</a></code> | <code>number</code> | The maximum number of fallback attempts to make before the agent emitting EndSession Signal. |

---

##### `customFallbackMessages`<sup>Optional</sup> <a name="customFallbackMessages" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfig.property.customFallbackMessages"></a>

```typescript
public readonly customFallbackMessages: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The fallback messages in case of system errors (e.g. LLM errors), mapped by supported language code (https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/language).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#custom_fallback_messages CesApp#custom_fallback_messages}

---

##### `maxFallbackAttempts`<sup>Optional</sup> <a name="maxFallbackAttempts" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfig.property.maxFallbackAttempts"></a>

```typescript
public readonly maxFallbackAttempts: number;
```

- *Type:* number

The maximum number of fallback attempts to make before the agent emitting EndSession Signal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#max_fallback_attempts CesApp#max_fallback_attempts}

---

### CesAppEvaluationMetricsThresholds <a name="CesAppEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppEvaluationMetricsThresholds: cesApp.CesAppEvaluationMetricsThresholds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds.property.goldenEvaluationMetricsThresholds">goldenEvaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | golden_evaluation_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds.property.goldenHallucinationMetricBehavior">goldenHallucinationMetricBehavior</a></code> | <code>string</code> | The hallucination metric behavior for golden evaluations. Possible values: ["DISABLED", "ENABLED"]. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds.property.scenarioHallucinationMetricBehavior">scenarioHallucinationMetricBehavior</a></code> | <code>string</code> | The hallucination metric behavior for scenario evaluations. Possible values: ["DISABLED", "ENABLED"]. |

---

##### `goldenEvaluationMetricsThresholds`<sup>Optional</sup> <a name="goldenEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds.property.goldenEvaluationMetricsThresholds"></a>

```typescript
public readonly goldenEvaluationMetricsThresholds: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

golden_evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#golden_evaluation_metrics_thresholds CesApp#golden_evaluation_metrics_thresholds}

---

##### `goldenHallucinationMetricBehavior`<sup>Optional</sup> <a name="goldenHallucinationMetricBehavior" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds.property.goldenHallucinationMetricBehavior"></a>

```typescript
public readonly goldenHallucinationMetricBehavior: string;
```

- *Type:* string

The hallucination metric behavior for golden evaluations. Possible values: ["DISABLED", "ENABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#golden_hallucination_metric_behavior CesApp#golden_hallucination_metric_behavior}

---

##### `scenarioHallucinationMetricBehavior`<sup>Optional</sup> <a name="scenarioHallucinationMetricBehavior" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds.property.scenarioHallucinationMetricBehavior"></a>

```typescript
public readonly scenarioHallucinationMetricBehavior: string;
```

- *Type:* string

The hallucination metric behavior for scenario evaluations. Possible values: ["DISABLED", "ENABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#scenario_hallucination_metric_behavior CesApp#scenario_hallucination_metric_behavior}

---

### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds: cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.expectationLevelMetricsThresholds">expectationLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | expectation_level_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.toolMatchingSettings">toolMatchingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings</a></code> | tool_matching_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.turnLevelMetricsThresholds">turnLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | turn_level_metrics_thresholds block. |

---

##### `expectationLevelMetricsThresholds`<sup>Optional</sup> <a name="expectationLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.expectationLevelMetricsThresholds"></a>

```typescript
public readonly expectationLevelMetricsThresholds: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

expectation_level_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#expectation_level_metrics_thresholds CesApp#expectation_level_metrics_thresholds}

---

##### `toolMatchingSettings`<sup>Optional</sup> <a name="toolMatchingSettings" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.toolMatchingSettings"></a>

```typescript
public readonly toolMatchingSettings: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings</a>

tool_matching_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#tool_matching_settings CesApp#tool_matching_settings}

---

##### `turnLevelMetricsThresholds`<sup>Optional</sup> <a name="turnLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.turnLevelMetricsThresholds"></a>

```typescript
public readonly turnLevelMetricsThresholds: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

turn_level_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#turn_level_metrics_thresholds CesApp#turn_level_metrics_thresholds}

---

### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds: cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.property.toolInvocationParameterCorrectnessThreshold">toolInvocationParameterCorrectnessThreshold</a></code> | <code>number</code> | The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0. |

---

##### `toolInvocationParameterCorrectnessThreshold`<sup>Optional</sup> <a name="toolInvocationParameterCorrectnessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.property.toolInvocationParameterCorrectnessThreshold"></a>

```typescript
public readonly toolInvocationParameterCorrectnessThreshold: number;
```

- *Type:* number

The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#tool_invocation_parameter_correctness_threshold CesApp#tool_invocation_parameter_correctness_threshold}

---

### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings: cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings.property.extraToolCallBehavior">extraToolCallBehavior</a></code> | <code>string</code> | Defines the behavior when an extra tool call is encountered. |

---

##### `extraToolCallBehavior`<sup>Optional</sup> <a name="extraToolCallBehavior" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings.property.extraToolCallBehavior"></a>

```typescript
public readonly extraToolCallBehavior: string;
```

- *Type:* string

Defines the behavior when an extra tool call is encountered.

An extra
tool call is a tool call that is present in the execution but does
not match any tool call in the golden expectation. Possible values: ["FAIL", "ALLOW"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#extra_tool_call_behavior CesApp#extra_tool_call_behavior}

---

### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds: cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.overallToolInvocationCorrectnessThreshold">overallToolInvocationCorrectnessThreshold</a></code> | <code>number</code> | The success threshold for overall tool invocation correctness. Must be a float between 0 and 1. Default is 1.0. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.semanticSimilarityChannel">semanticSimilarityChannel</a></code> | <code>string</code> | The semantic similarity channel to use for evaluation. Possible values: SEMANTIC_SIMILARITY_CHANNEL_UNSPECIFIED TEXT AUDIO. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.semanticSimilaritySuccessThreshold">semanticSimilaritySuccessThreshold</a></code> | <code>number</code> | The success threshold for semantic similarity. Must be an integer between 0 and 4. Default is >= 3. |

---

##### `overallToolInvocationCorrectnessThreshold`<sup>Optional</sup> <a name="overallToolInvocationCorrectnessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.overallToolInvocationCorrectnessThreshold"></a>

```typescript
public readonly overallToolInvocationCorrectnessThreshold: number;
```

- *Type:* number

The success threshold for overall tool invocation correctness. Must be a float between 0 and 1. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#overall_tool_invocation_correctness_threshold CesApp#overall_tool_invocation_correctness_threshold}

---

##### `semanticSimilarityChannel`<sup>Optional</sup> <a name="semanticSimilarityChannel" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.semanticSimilarityChannel"></a>

```typescript
public readonly semanticSimilarityChannel: string;
```

- *Type:* string

The semantic similarity channel to use for evaluation. Possible values: SEMANTIC_SIMILARITY_CHANNEL_UNSPECIFIED TEXT AUDIO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#semantic_similarity_channel CesApp#semantic_similarity_channel}

---

##### `semanticSimilaritySuccessThreshold`<sup>Optional</sup> <a name="semanticSimilaritySuccessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.semanticSimilaritySuccessThreshold"></a>

```typescript
public readonly semanticSimilaritySuccessThreshold: number;
```

- *Type:* number

The success threshold for semantic similarity. Must be an integer between 0 and 4. Default is >= 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#semantic_similarity_success_threshold CesApp#semantic_similarity_success_threshold}

---

### CesAppLanguageSettings <a name="CesAppLanguageSettings" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppLanguageSettings: cesApp.CesAppLanguageSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.defaultLanguageCode">defaultLanguageCode</a></code> | <code>string</code> | The default language code of the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.enableMultilingualSupport">enableMultilingualSupport</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.fallbackAction">fallbackAction</a></code> | <code>string</code> | The action to perform when an agent receives input in an unsupported language. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.supportedLanguageCodes">supportedLanguageCodes</a></code> | <code>string[]</code> | List of languages codes supported by the app, in addition to the 'default_language_code'. |

---

##### `defaultLanguageCode`<sup>Optional</sup> <a name="defaultLanguageCode" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.defaultLanguageCode"></a>

```typescript
public readonly defaultLanguageCode: string;
```

- *Type:* string

The default language code of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#default_language_code CesApp#default_language_code}

---

##### `enableMultilingualSupport`<sup>Optional</sup> <a name="enableMultilingualSupport" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.enableMultilingualSupport"></a>

```typescript
public readonly enableMultilingualSupport: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#enable_multilingual_support CesApp#enable_multilingual_support}

---

##### `fallbackAction`<sup>Optional</sup> <a name="fallbackAction" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.fallbackAction"></a>

```typescript
public readonly fallbackAction: string;
```

- *Type:* string

The action to perform when an agent receives input in an unsupported language.

This can be a predefined action or a custom tool call.
Valid values are:
- A tool's full resource name, which triggers a specific tool execution.
- A predefined system action, such as "escalate" or "exit", which triggers
an EndSession signal with corresponding metadata
to terminate the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#fallback_action CesApp#fallback_action}

---

##### `supportedLanguageCodes`<sup>Optional</sup> <a name="supportedLanguageCodes" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.supportedLanguageCodes"></a>

```typescript
public readonly supportedLanguageCodes: string[];
```

- *Type:* string[]

List of languages codes supported by the app, in addition to the 'default_language_code'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#supported_language_codes CesApp#supported_language_codes}

---

### CesAppLoggingSettings <a name="CesAppLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppLoggingSettings: cesApp.CesAppLoggingSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.audioRecordingConfig">audioRecordingConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a></code> | audio_recording_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.bigqueryExportSettings">bigqueryExportSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a></code> | bigquery_export_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.cloudLoggingSettings">cloudLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a></code> | cloud_logging_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.conversationLoggingSettings">conversationLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a></code> | conversation_logging_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.metricAnalysisSettings">metricAnalysisSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettings">CesAppLoggingSettingsMetricAnalysisSettings</a></code> | metric_analysis_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.redactionConfig">redactionConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a></code> | redaction_config block. |

---

##### `audioRecordingConfig`<sup>Optional</sup> <a name="audioRecordingConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.audioRecordingConfig"></a>

```typescript
public readonly audioRecordingConfig: CesAppLoggingSettingsAudioRecordingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a>

audio_recording_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#audio_recording_config CesApp#audio_recording_config}

---

##### `bigqueryExportSettings`<sup>Optional</sup> <a name="bigqueryExportSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.bigqueryExportSettings"></a>

```typescript
public readonly bigqueryExportSettings: CesAppLoggingSettingsBigqueryExportSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a>

bigquery_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#bigquery_export_settings CesApp#bigquery_export_settings}

---

##### `cloudLoggingSettings`<sup>Optional</sup> <a name="cloudLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.cloudLoggingSettings"></a>

```typescript
public readonly cloudLoggingSettings: CesAppLoggingSettingsCloudLoggingSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a>

cloud_logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#cloud_logging_settings CesApp#cloud_logging_settings}

---

##### `conversationLoggingSettings`<sup>Optional</sup> <a name="conversationLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.conversationLoggingSettings"></a>

```typescript
public readonly conversationLoggingSettings: CesAppLoggingSettingsConversationLoggingSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a>

conversation_logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#conversation_logging_settings CesApp#conversation_logging_settings}

---

##### `metricAnalysisSettings`<sup>Optional</sup> <a name="metricAnalysisSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.metricAnalysisSettings"></a>

```typescript
public readonly metricAnalysisSettings: CesAppLoggingSettingsMetricAnalysisSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettings">CesAppLoggingSettingsMetricAnalysisSettings</a>

metric_analysis_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#metric_analysis_settings CesApp#metric_analysis_settings}

---

##### `redactionConfig`<sup>Optional</sup> <a name="redactionConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.redactionConfig"></a>

```typescript
public readonly redactionConfig: CesAppLoggingSettingsRedactionConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a>

redaction_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#redaction_config CesApp#redaction_config}

---

### CesAppLoggingSettingsAudioRecordingConfig <a name="CesAppLoggingSettingsAudioRecordingConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppLoggingSettingsAudioRecordingConfig: cesApp.CesAppLoggingSettingsAudioRecordingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.property.gcsBucket">gcsBucket</a></code> | <code>string</code> | The [Cloud Storage](https://cloud.google.com/storage) bucket to store the session audio recordings. The URI must start with "gs://". Note: If the Cloud Storage bucket is in a different project from the app, you should grant 'storage.objects.create' permission to the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.property.gcsPathPrefix">gcsPathPrefix</a></code> | <code>string</code> | The Cloud Storage path prefix for audio recordings. |

---

##### `gcsBucket`<sup>Optional</sup> <a name="gcsBucket" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.property.gcsBucket"></a>

```typescript
public readonly gcsBucket: string;
```

- *Type:* string

The [Cloud Storage](https://cloud.google.com/storage) bucket to store the session audio recordings. The URI must start with "gs://". Note: If the Cloud Storage bucket is in a different project from the app, you should grant 'storage.objects.create' permission to the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#gcs_bucket CesApp#gcs_bucket}

---

##### `gcsPathPrefix`<sup>Optional</sup> <a name="gcsPathPrefix" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.property.gcsPathPrefix"></a>

```typescript
public readonly gcsPathPrefix: string;
```

- *Type:* string

The Cloud Storage path prefix for audio recordings.

This prefix can include the following placeholders, which will be
dynamically substituted at serving time:
- $project:   project ID
- $location:  app location
- $app:       app ID
- $date:      session date in YYYY-MM-DD format
- $session:   session ID
If the path prefix is not specified, the default prefix
'$project/$location/$app/$date/$session/' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#gcs_path_prefix CesApp#gcs_path_prefix}

---

### CesAppLoggingSettingsBigqueryExportSettings <a name="CesAppLoggingSettingsBigqueryExportSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppLoggingSettingsBigqueryExportSettings: cesApp.CesAppLoggingSettingsBigqueryExportSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.dataset">dataset</a></code> | <code>string</code> | The BigQuery dataset to export the data to. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the BigQuery export is enabled. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.project">project</a></code> | <code>string</code> | The project ID of the BigQuery dataset to export the data to. |

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

The BigQuery dataset to export the data to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#dataset CesApp#dataset}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the BigQuery export is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#enabled CesApp#enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project ID of the BigQuery dataset to export the data to.

Note: If the BigQuery dataset is in a different project from the app, you should grant
roles/bigquery.admin role to the CES service agent service-<PROJECT-
NUMBER>@gcp-sa-ces.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#project CesApp#project}

---

### CesAppLoggingSettingsCloudLoggingSettings <a name="CesAppLoggingSettingsCloudLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppLoggingSettingsCloudLoggingSettings: cesApp.CesAppLoggingSettingsCloudLoggingSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings.property.enableCloudLogging">enableCloudLogging</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable Cloud Logging for the sessions. |

---

##### `enableCloudLogging`<sup>Optional</sup> <a name="enableCloudLogging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings.property.enableCloudLogging"></a>

```typescript
public readonly enableCloudLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable Cloud Logging for the sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#enable_cloud_logging CesApp#enable_cloud_logging}

---

### CesAppLoggingSettingsConversationLoggingSettings <a name="CesAppLoggingSettingsConversationLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppLoggingSettingsConversationLoggingSettings: cesApp.CesAppLoggingSettingsConversationLoggingSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings.property.disableConversationLogging">disableConversationLogging</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to disable conversation logging for the sessions. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings.property.retentionWindow">retentionWindow</a></code> | <code>string</code> | Controls the retention window for the conversation. If not set, the conversation will be retained for 365 days. |

---

##### `disableConversationLogging`<sup>Optional</sup> <a name="disableConversationLogging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings.property.disableConversationLogging"></a>

```typescript
public readonly disableConversationLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to disable conversation logging for the sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#disable_conversation_logging CesApp#disable_conversation_logging}

---

##### `retentionWindow`<sup>Optional</sup> <a name="retentionWindow" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings.property.retentionWindow"></a>

```typescript
public readonly retentionWindow: string;
```

- *Type:* string

Controls the retention window for the conversation. If not set, the conversation will be retained for 365 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#retention_window CesApp#retention_window}

---

### CesAppLoggingSettingsMetricAnalysisSettings <a name="CesAppLoggingSettingsMetricAnalysisSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettings.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppLoggingSettingsMetricAnalysisSettings: cesApp.CesAppLoggingSettingsMetricAnalysisSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettings.property.llmMetricsOptedOut">llmMetricsOptedOut</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to collect conversation data for llm analysis metrics. |

---

##### `llmMetricsOptedOut`<sup>Optional</sup> <a name="llmMetricsOptedOut" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettings.property.llmMetricsOptedOut"></a>

```typescript
public readonly llmMetricsOptedOut: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to collect conversation data for llm analysis metrics.

If true,
conversation data will not be collected for llm analysis metrics;
otherwise, conversation data will be collected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#llm_metrics_opted_out CesApp#llm_metrics_opted_out}

---

### CesAppLoggingSettingsRedactionConfig <a name="CesAppLoggingSettingsRedactionConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppLoggingSettingsRedactionConfig: cesApp.CesAppLoggingSettingsRedactionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>string</code> | [DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.enableRedaction">enableRedaction</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.inspectTemplate">inspectTemplate</a></code> | <code>string</code> | [DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'. |

---

##### `deidentifyTemplate`<sup>Optional</sup> <a name="deidentifyTemplate" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.deidentifyTemplate"></a>

```typescript
public readonly deidentifyTemplate: string;
```

- *Type:* string

[DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#deidentify_template CesApp#deidentify_template}

---

##### `enableRedaction`<sup>Optional</sup> <a name="enableRedaction" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.enableRedaction"></a>

```typescript
public readonly enableRedaction: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#enable_redaction CesApp#enable_redaction}

---

##### `inspectTemplate`<sup>Optional</sup> <a name="inspectTemplate" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.inspectTemplate"></a>

```typescript
public readonly inspectTemplate: string;
```

- *Type:* string

[DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#inspect_template CesApp#inspect_template}

---

### CesAppModelSettings <a name="CesAppModelSettings" id="@cdktn/provider-google.cesApp.CesAppModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppModelSettings.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppModelSettings: cesApp.CesAppModelSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings.property.model">model</a></code> | <code>string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings.property.temperature">temperature</a></code> | <code>number</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesApp.CesAppModelSettings.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#model CesApp#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesApp.CesAppModelSettings.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#temperature CesApp#temperature}

---

### CesAppTimeouts <a name="CesAppTimeouts" id="@cdktn/provider-google.cesApp.CesAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppTimeouts.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppTimeouts: cesApp.CesAppTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#create CesApp#create}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#delete CesApp#delete}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#update CesApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesApp.CesAppTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#create CesApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesApp.CesAppTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#delete CesApp#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesApp.CesAppTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#update CesApp#update}.

---

### CesAppTimeZoneSettings <a name="CesAppTimeZoneSettings" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettings.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppTimeZoneSettings: cesApp.CesAppTimeZoneSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings.property.timeZone">timeZone</a></code> | <code>string</code> | The time zone of the app from the time zone database, e.g., America/Los_Angeles, Europe/Paris. |

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettings.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The time zone of the app from the time zone database, e.g., America/Los_Angeles, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#time_zone CesApp#time_zone}

---

### CesAppVariableDeclarations <a name="CesAppVariableDeclarations" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppVariableDeclarations: cesApp.CesAppVariableDeclarations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.description">description</a></code> | <code>string</code> | The description of the variable. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.name">name</a></code> | <code>string</code> | The name of the variable. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a></code> | schema block. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#description CesApp#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the variable.

The name must start with a letter or underscore
and contain only letters, numbers, or underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#name CesApp#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.schema"></a>

```typescript
public readonly schema: CesAppVariableDeclarationsSchema;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#schema CesApp#schema}

---

### CesAppVariableDeclarationsSchema <a name="CesAppVariableDeclarationsSchema" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppVariableDeclarationsSchema: cesApp.CesAppVariableDeclarationsSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.type">type</a></code> | <code>string</code> | The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.additionalProperties">additionalProperties</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.anyOf">anyOf</a></code> | <code>string</code> | Optional. The instance value should be valid against at least one of the schemas in this list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.default">default</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.defs">defs</a></code> | <code>string</code> | A map of definitions for use by ref. Only allowed at the root of the schema. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.description">description</a></code> | <code>string</code> | The description of the data. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.enum">enum</a></code> | <code>string[]</code> | Possible values of the element of primitive type with enum format. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.items">items</a></code> | <code>string</code> | Schema of the elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.nullable">nullable</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates if the value may be null. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.prefixItems">prefixItems</a></code> | <code>string</code> | Optional. Schemas of initial elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.properties">properties</a></code> | <code>string</code> | Properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.ref">ref</a></code> | <code>string</code> | Allows indirect references between schema nodes. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.required">required</a></code> | <code>string[]</code> | Required properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.title">title</a></code> | <code>string</code> | The title of the schema. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.uniqueItems">uniqueItems</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicate the items in the array must be unique. Only applies to TYPE.ARRAY. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#type CesApp#type}

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: string;
```

- *Type:* string

Optional.

Defines the schema for additional properties allowed in an object.
The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#additional_properties CesApp#additional_properties}

---

##### `anyOf`<sup>Optional</sup> <a name="anyOf" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.anyOf"></a>

```typescript
public readonly anyOf: string;
```

- *Type:* string

Optional. The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#any_of CesApp#any_of}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Optional.

Default value of the data. Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be encoded as a JSON string.
Use 'jsonencode' in Terraform HCL to encode the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#default CesApp#default}

---

##### `defs`<sup>Optional</sup> <a name="defs" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.defs"></a>

```typescript
public readonly defs: string;
```

- *Type:* string

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#defs CesApp#defs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#description CesApp#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.enum"></a>

```typescript
public readonly enum: string[];
```

- *Type:* string[]

Possible values of the element of primitive type with enum format.

Examples:
1. We can define direction as :
{type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
{type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#enum CesApp#enum}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.items"></a>

```typescript
public readonly items: string;
```

- *Type:* string

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#items CesApp#items}

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.nullable"></a>

```typescript
public readonly nullable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#nullable CesApp#nullable}

---

##### `prefixItems`<sup>Optional</sup> <a name="prefixItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.prefixItems"></a>

```typescript
public readonly prefixItems: string;
```

- *Type:* string

Optional. Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#prefix_items CesApp#prefix_items}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.properties"></a>

```typescript
public readonly properties: string;
```

- *Type:* string

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#properties CesApp#properties}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Allows indirect references between schema nodes.

The value should be a
valid reference to a child of the root 'defs'.
For example, the following schema defines a reference to a schema node
named "Pet":
type: object
properties:
  pet:
    ref: #/defs/Pet
defs:
  Pet:
    type: object
    properties:
      name:
        type: string
The value of the "pet" property is a reference to the schema node
named "Pet".
See details in
https://json-schema.org/understanding-json-schema/structuring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#ref CesApp#ref}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.required"></a>

```typescript
public readonly required: string[];
```

- *Type:* string[]

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#required CesApp#required}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#title CesApp#title}

---

##### `uniqueItems`<sup>Optional</sup> <a name="uniqueItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.uniqueItems"></a>

```typescript
public readonly uniqueItems: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#unique_items CesApp#unique_items}

---

### CesAppVpcScSettings <a name="CesAppVpcScSettings" id="@cdktn/provider-google.cesApp.CesAppVpcScSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppVpcScSettings.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

const cesAppVpcScSettings: cesApp.CesAppVpcScSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettings.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | The allowed HTTP(s) origins that OpenAPI tools in the App are able to directly call when VPC Service Controls are enabled. |

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="@cdktn/provider-google.cesApp.CesAppVpcScSettings.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

The allowed HTTP(s) origins that OpenAPI tools in the App are able to directly call when VPC Service Controls are enabled.

These strings
must match the origin exactly, including the port if specified. For
example, "https://example.com" or "https://example.com:443". This list does
not yet apply to Python tools that may make direct HTTP calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_app#allowed_origins CesApp#allowed_origins}

---

## Classes <a name="Classes" id="Classes"></a>

### CesAppAudioProcessingConfigAmbientSoundConfigOutputReference <a name="CesAppAudioProcessingConfigAmbientSoundConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetGcsUri">resetGcsUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetPrebuiltAmbientSound">resetPrebuiltAmbientSound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetVolumeGainDb">resetVolumeGainDb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGcsUri` <a name="resetGcsUri" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetGcsUri"></a>

```typescript
public resetGcsUri(): void
```

##### `resetPrebuiltAmbientSound` <a name="resetPrebuiltAmbientSound" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetPrebuiltAmbientSound"></a>

```typescript
public resetPrebuiltAmbientSound(): void
```

##### `resetVolumeGainDb` <a name="resetVolumeGainDb" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetVolumeGainDb"></a>

```typescript
public resetVolumeGainDb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUriInput">gcsUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSoundInput">prebuiltAmbientSoundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDbInput">volumeGainDbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUri">gcsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSound">prebuiltAmbientSound</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDb">volumeGainDb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gcsUriInput`<sup>Optional</sup> <a name="gcsUriInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUriInput"></a>

```typescript
public readonly gcsUriInput: string;
```

- *Type:* string

---

##### `prebuiltAmbientSoundInput`<sup>Optional</sup> <a name="prebuiltAmbientSoundInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSoundInput"></a>

```typescript
public readonly prebuiltAmbientSoundInput: string;
```

- *Type:* string

---

##### `volumeGainDbInput`<sup>Optional</sup> <a name="volumeGainDbInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDbInput"></a>

```typescript
public readonly volumeGainDbInput: number;
```

- *Type:* number

---

##### `gcsUri`<sup>Required</sup> <a name="gcsUri" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUri"></a>

```typescript
public readonly gcsUri: string;
```

- *Type:* string

---

##### `prebuiltAmbientSound`<sup>Required</sup> <a name="prebuiltAmbientSound" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSound"></a>

```typescript
public readonly prebuiltAmbientSound: string;
```

- *Type:* string

---

##### `volumeGainDb`<sup>Required</sup> <a name="volumeGainDb" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDb"></a>

```typescript
public readonly volumeGainDb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppAudioProcessingConfigAmbientSoundConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a>

---


### CesAppAudioProcessingConfigBargeInConfigOutputReference <a name="CesAppAudioProcessingConfigBargeInConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resetBargeInAwareness">resetBargeInAwareness</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBargeInAwareness` <a name="resetBargeInAwareness" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resetBargeInAwareness"></a>

```typescript
public resetBargeInAwareness(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwarenessInput">bargeInAwarenessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwareness">bargeInAwareness</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bargeInAwarenessInput`<sup>Optional</sup> <a name="bargeInAwarenessInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwarenessInput"></a>

```typescript
public readonly bargeInAwarenessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bargeInAwareness`<sup>Required</sup> <a name="bargeInAwareness" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwareness"></a>

```typescript
public readonly bargeInAwareness: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppAudioProcessingConfigBargeInConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a>

---


### CesAppAudioProcessingConfigOutputReference <a name="CesAppAudioProcessingConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppAudioProcessingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig">putAmbientSoundConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putBargeInConfig">putBargeInConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs">putSynthesizeSpeechConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetAmbientSoundConfig">resetAmbientSoundConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetBargeInConfig">resetBargeInConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetInactivityTimeout">resetInactivityTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetSynthesizeSpeechConfigs">resetSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmbientSoundConfig` <a name="putAmbientSoundConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig"></a>

```typescript
public putAmbientSoundConfig(value: CesAppAudioProcessingConfigAmbientSoundConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a>

---

##### `putBargeInConfig` <a name="putBargeInConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putBargeInConfig"></a>

```typescript
public putBargeInConfig(value: CesAppAudioProcessingConfigBargeInConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putBargeInConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a>

---

##### `putSynthesizeSpeechConfigs` <a name="putSynthesizeSpeechConfigs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs"></a>

```typescript
public putSynthesizeSpeechConfigs(value: IResolvable | CesAppAudioProcessingConfigSynthesizeSpeechConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>[]

---

##### `resetAmbientSoundConfig` <a name="resetAmbientSoundConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetAmbientSoundConfig"></a>

```typescript
public resetAmbientSoundConfig(): void
```

##### `resetBargeInConfig` <a name="resetBargeInConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetBargeInConfig"></a>

```typescript
public resetBargeInConfig(): void
```

##### `resetInactivityTimeout` <a name="resetInactivityTimeout" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetInactivityTimeout"></a>

```typescript
public resetInactivityTimeout(): void
```

##### `resetSynthesizeSpeechConfigs` <a name="resetSynthesizeSpeechConfigs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetSynthesizeSpeechConfigs"></a>

```typescript
public resetSynthesizeSpeechConfigs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.ambientSoundConfig">ambientSoundConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference">CesAppAudioProcessingConfigAmbientSoundConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.bargeInConfig">bargeInConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference">CesAppAudioProcessingConfigBargeInConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigs">synthesizeSpeechConfigs</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList">CesAppAudioProcessingConfigSynthesizeSpeechConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.ambientSoundConfigInput">ambientSoundConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.bargeInConfigInput">bargeInConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.inactivityTimeoutInput">inactivityTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigsInput">synthesizeSpeechConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.inactivityTimeout">inactivityTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ambientSoundConfig`<sup>Required</sup> <a name="ambientSoundConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.ambientSoundConfig"></a>

```typescript
public readonly ambientSoundConfig: CesAppAudioProcessingConfigAmbientSoundConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference">CesAppAudioProcessingConfigAmbientSoundConfigOutputReference</a>

---

##### `bargeInConfig`<sup>Required</sup> <a name="bargeInConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.bargeInConfig"></a>

```typescript
public readonly bargeInConfig: CesAppAudioProcessingConfigBargeInConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference">CesAppAudioProcessingConfigBargeInConfigOutputReference</a>

---

##### `synthesizeSpeechConfigs`<sup>Required</sup> <a name="synthesizeSpeechConfigs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigs"></a>

```typescript
public readonly synthesizeSpeechConfigs: CesAppAudioProcessingConfigSynthesizeSpeechConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList">CesAppAudioProcessingConfigSynthesizeSpeechConfigsList</a>

---

##### `ambientSoundConfigInput`<sup>Optional</sup> <a name="ambientSoundConfigInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.ambientSoundConfigInput"></a>

```typescript
public readonly ambientSoundConfigInput: CesAppAudioProcessingConfigAmbientSoundConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a>

---

##### `bargeInConfigInput`<sup>Optional</sup> <a name="bargeInConfigInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.bargeInConfigInput"></a>

```typescript
public readonly bargeInConfigInput: CesAppAudioProcessingConfigBargeInConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a>

---

##### `inactivityTimeoutInput`<sup>Optional</sup> <a name="inactivityTimeoutInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.inactivityTimeoutInput"></a>

```typescript
public readonly inactivityTimeoutInput: string;
```

- *Type:* string

---

##### `synthesizeSpeechConfigsInput`<sup>Optional</sup> <a name="synthesizeSpeechConfigsInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigsInput"></a>

```typescript
public readonly synthesizeSpeechConfigsInput: IResolvable | CesAppAudioProcessingConfigSynthesizeSpeechConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>[]

---

##### `inactivityTimeout`<sup>Required</sup> <a name="inactivityTimeout" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.inactivityTimeout"></a>

```typescript
public readonly inactivityTimeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppAudioProcessingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a>

---


### CesAppAudioProcessingConfigSynthesizeSpeechConfigsList <a name="CesAppAudioProcessingConfigSynthesizeSpeechConfigsList" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get"></a>

```typescript
public get(index: number): CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAppAudioProcessingConfigSynthesizeSpeechConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>[]

---


### CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference <a name="CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetSpeakingRate">resetSpeakingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetVoice">resetVoice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetModel` <a name="resetModel" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetSpeakingRate` <a name="resetSpeakingRate" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetSpeakingRate"></a>

```typescript
public resetSpeakingRate(): void
```

##### `resetVoice` <a name="resetVoice" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetVoice"></a>

```typescript
public resetVoice(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.instructionInput">instructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRateInput">speakingRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voiceInput">voiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRate">speakingRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voice">voice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.instructionInput"></a>

```typescript
public readonly instructionInput: string;
```

- *Type:* string

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `speakingRateInput`<sup>Optional</sup> <a name="speakingRateInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRateInput"></a>

```typescript
public readonly speakingRateInput: number;
```

- *Type:* number

---

##### `voiceInput`<sup>Optional</sup> <a name="voiceInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voiceInput"></a>

```typescript
public readonly voiceInput: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `speakingRate`<sup>Required</sup> <a name="speakingRate" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRate"></a>

```typescript
public readonly speakingRate: number;
```

- *Type:* number

---

##### `voice`<sup>Required</sup> <a name="voice" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voice"></a>

```typescript
public readonly voice: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAppAudioProcessingConfigSynthesizeSpeechConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>

---


### CesAppClientCertificateSettingsOutputReference <a name="CesAppClientCertificateSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppClientCertificateSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resetPassphrase">resetPassphrase</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassphrase` <a name="resetPassphrase" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resetPassphrase"></a>

```typescript
public resetPassphrase(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.passphraseInput">passphraseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.tlsCertificateInput">tlsCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.passphrase">passphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.tlsCertificate">tlsCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passphraseInput`<sup>Optional</sup> <a name="passphraseInput" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.passphraseInput"></a>

```typescript
public readonly passphraseInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `tlsCertificateInput`<sup>Optional</sup> <a name="tlsCertificateInput" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.tlsCertificateInput"></a>

```typescript
public readonly tlsCertificateInput: string;
```

- *Type:* string

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.passphrase"></a>

```typescript
public readonly passphrase: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `tlsCertificate`<sup>Required</sup> <a name="tlsCertificate" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.tlsCertificate"></a>

```typescript
public readonly tlsCertificate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppClientCertificateSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a>

---


### CesAppDataStoreSettingsEnginesList <a name="CesAppDataStoreSettingsEnginesList" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppDataStoreSettingsEnginesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.get"></a>

```typescript
public get(index: number): CesAppDataStoreSettingsEnginesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CesAppDataStoreSettingsEnginesOutputReference <a name="CesAppDataStoreSettingsEnginesOutputReference" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppDataStoreSettingsEnginesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEngines">CesAppDataStoreSettingsEngines</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppDataStoreSettingsEngines;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEngines">CesAppDataStoreSettingsEngines</a>

---


### CesAppDataStoreSettingsOutputReference <a name="CesAppDataStoreSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppDataStoreSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.engines">engines</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList">CesAppDataStoreSettingsEnginesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `engines`<sup>Required</sup> <a name="engines" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.engines"></a>

```typescript
public readonly engines: CesAppDataStoreSettingsEnginesList;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList">CesAppDataStoreSettingsEnginesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppDataStoreSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a>

---


### CesAppDefaultChannelProfileOutputReference <a name="CesAppDefaultChannelProfileOutputReference" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppDefaultChannelProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putPersonaProperty">putPersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putWebWidgetConfig">putWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putWhatsappConfig">putWhatsappConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetChannelType">resetChannelType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetDisableBargeInControl">resetDisableBargeInControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetDisableDtmf">resetDisableDtmf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetPersonaProperty">resetPersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetProfileId">resetProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetWebWidgetConfig">resetWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetWhatsappConfig">resetWhatsappConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPersonaProperty` <a name="putPersonaProperty" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putPersonaProperty"></a>

```typescript
public putPersonaProperty(value: CesAppDefaultChannelProfilePersonaProperty): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putPersonaProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a>

---

##### `putWebWidgetConfig` <a name="putWebWidgetConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putWebWidgetConfig"></a>

```typescript
public putWebWidgetConfig(value: CesAppDefaultChannelProfileWebWidgetConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putWebWidgetConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a>

---

##### `putWhatsappConfig` <a name="putWhatsappConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putWhatsappConfig"></a>

```typescript
public putWhatsappConfig(value: CesAppDefaultChannelProfileWhatsappConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putWhatsappConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfig">CesAppDefaultChannelProfileWhatsappConfig</a>

---

##### `resetChannelType` <a name="resetChannelType" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetChannelType"></a>

```typescript
public resetChannelType(): void
```

##### `resetDisableBargeInControl` <a name="resetDisableBargeInControl" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetDisableBargeInControl"></a>

```typescript
public resetDisableBargeInControl(): void
```

##### `resetDisableDtmf` <a name="resetDisableDtmf" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetDisableDtmf"></a>

```typescript
public resetDisableDtmf(): void
```

##### `resetPersonaProperty` <a name="resetPersonaProperty" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetPersonaProperty"></a>

```typescript
public resetPersonaProperty(): void
```

##### `resetProfileId` <a name="resetProfileId" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetProfileId"></a>

```typescript
public resetProfileId(): void
```

##### `resetWebWidgetConfig` <a name="resetWebWidgetConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetWebWidgetConfig"></a>

```typescript
public resetWebWidgetConfig(): void
```

##### `resetWhatsappConfig` <a name="resetWhatsappConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetWhatsappConfig"></a>

```typescript
public resetWhatsappConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.personaProperty">personaProperty</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference">CesAppDefaultChannelProfilePersonaPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.webWidgetConfig">webWidgetConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference">CesAppDefaultChannelProfileWebWidgetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.whatsappConfig">whatsappConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference">CesAppDefaultChannelProfileWhatsappConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.channelTypeInput">channelTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableBargeInControlInput">disableBargeInControlInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableDtmfInput">disableDtmfInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.personaPropertyInput">personaPropertyInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.profileIdInput">profileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.webWidgetConfigInput">webWidgetConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.whatsappConfigInput">whatsappConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfig">CesAppDefaultChannelProfileWhatsappConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.channelType">channelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableBargeInControl">disableBargeInControl</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableDtmf">disableDtmf</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `personaProperty`<sup>Required</sup> <a name="personaProperty" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.personaProperty"></a>

```typescript
public readonly personaProperty: CesAppDefaultChannelProfilePersonaPropertyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference">CesAppDefaultChannelProfilePersonaPropertyOutputReference</a>

---

##### `webWidgetConfig`<sup>Required</sup> <a name="webWidgetConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.webWidgetConfig"></a>

```typescript
public readonly webWidgetConfig: CesAppDefaultChannelProfileWebWidgetConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference">CesAppDefaultChannelProfileWebWidgetConfigOutputReference</a>

---

##### `whatsappConfig`<sup>Required</sup> <a name="whatsappConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.whatsappConfig"></a>

```typescript
public readonly whatsappConfig: CesAppDefaultChannelProfileWhatsappConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference">CesAppDefaultChannelProfileWhatsappConfigOutputReference</a>

---

##### `channelTypeInput`<sup>Optional</sup> <a name="channelTypeInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.channelTypeInput"></a>

```typescript
public readonly channelTypeInput: string;
```

- *Type:* string

---

##### `disableBargeInControlInput`<sup>Optional</sup> <a name="disableBargeInControlInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableBargeInControlInput"></a>

```typescript
public readonly disableBargeInControlInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableDtmfInput`<sup>Optional</sup> <a name="disableDtmfInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableDtmfInput"></a>

```typescript
public readonly disableDtmfInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `personaPropertyInput`<sup>Optional</sup> <a name="personaPropertyInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.personaPropertyInput"></a>

```typescript
public readonly personaPropertyInput: CesAppDefaultChannelProfilePersonaProperty;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a>

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.profileIdInput"></a>

```typescript
public readonly profileIdInput: string;
```

- *Type:* string

---

##### `webWidgetConfigInput`<sup>Optional</sup> <a name="webWidgetConfigInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.webWidgetConfigInput"></a>

```typescript
public readonly webWidgetConfigInput: CesAppDefaultChannelProfileWebWidgetConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a>

---

##### `whatsappConfigInput`<sup>Optional</sup> <a name="whatsappConfigInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.whatsappConfigInput"></a>

```typescript
public readonly whatsappConfigInput: CesAppDefaultChannelProfileWhatsappConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfig">CesAppDefaultChannelProfileWhatsappConfig</a>

---

##### `channelType`<sup>Required</sup> <a name="channelType" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.channelType"></a>

```typescript
public readonly channelType: string;
```

- *Type:* string

---

##### `disableBargeInControl`<sup>Required</sup> <a name="disableBargeInControl" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableBargeInControl"></a>

```typescript
public readonly disableBargeInControl: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableDtmf`<sup>Required</sup> <a name="disableDtmf" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableDtmf"></a>

```typescript
public readonly disableDtmf: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppDefaultChannelProfile;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a>

---


### CesAppDefaultChannelProfilePersonaPropertyOutputReference <a name="CesAppDefaultChannelProfilePersonaPropertyOutputReference" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resetPersona">resetPersona</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPersona` <a name="resetPersona" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resetPersona"></a>

```typescript
public resetPersona(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.personaInput">personaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.persona">persona</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `personaInput`<sup>Optional</sup> <a name="personaInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.personaInput"></a>

```typescript
public readonly personaInput: string;
```

- *Type:* string

---

##### `persona`<sup>Required</sup> <a name="persona" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.persona"></a>

```typescript
public readonly persona: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppDefaultChannelProfilePersonaProperty;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a>

---


### CesAppDefaultChannelProfileWebWidgetConfigOutputReference <a name="CesAppDefaultChannelProfileWebWidgetConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.putSecuritySettings">putSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetModality">resetModality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetSecuritySettings">resetSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetTheme">resetTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle">resetWebWidgetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecuritySettings` <a name="putSecuritySettings" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.putSecuritySettings"></a>

```typescript
public putSecuritySettings(value: CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.putSecuritySettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings">CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings</a>

---

##### `resetModality` <a name="resetModality" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetModality"></a>

```typescript
public resetModality(): void
```

##### `resetSecuritySettings` <a name="resetSecuritySettings" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetSecuritySettings"></a>

```typescript
public resetSecuritySettings(): void
```

##### `resetTheme` <a name="resetTheme" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetTheme"></a>

```typescript
public resetTheme(): void
```

##### `resetWebWidgetTitle` <a name="resetWebWidgetTitle" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle"></a>

```typescript
public resetWebWidgetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.securitySettings">securitySettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference">CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modalityInput">modalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.securitySettingsInput">securitySettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings">CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.themeInput">themeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput">webWidgetTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modality">modality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.theme">theme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle">webWidgetTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securitySettings`<sup>Required</sup> <a name="securitySettings" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.securitySettings"></a>

```typescript
public readonly securitySettings: CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference">CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference</a>

---

##### `modalityInput`<sup>Optional</sup> <a name="modalityInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modalityInput"></a>

```typescript
public readonly modalityInput: string;
```

- *Type:* string

---

##### `securitySettingsInput`<sup>Optional</sup> <a name="securitySettingsInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.securitySettingsInput"></a>

```typescript
public readonly securitySettingsInput: CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings">CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings</a>

---

##### `themeInput`<sup>Optional</sup> <a name="themeInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.themeInput"></a>

```typescript
public readonly themeInput: string;
```

- *Type:* string

---

##### `webWidgetTitleInput`<sup>Optional</sup> <a name="webWidgetTitleInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput"></a>

```typescript
public readonly webWidgetTitleInput: string;
```

- *Type:* string

---

##### `modality`<sup>Required</sup> <a name="modality" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modality"></a>

```typescript
public readonly modality: string;
```

- *Type:* string

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* string

---

##### `webWidgetTitle`<sup>Required</sup> <a name="webWidgetTitle" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle"></a>

```typescript
public readonly webWidgetTitle: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppDefaultChannelProfileWebWidgetConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a>

---


### CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference <a name="CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetAllowedOrigins">resetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableOriginCheck">resetEnableOriginCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnablePublicAccess">resetEnablePublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableRecaptcha">resetEnableRecaptcha</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedOrigins` <a name="resetAllowedOrigins" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetAllowedOrigins"></a>

```typescript
public resetAllowedOrigins(): void
```

##### `resetEnableOriginCheck` <a name="resetEnableOriginCheck" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableOriginCheck"></a>

```typescript
public resetEnableOriginCheck(): void
```

##### `resetEnablePublicAccess` <a name="resetEnablePublicAccess" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnablePublicAccess"></a>

```typescript
public resetEnablePublicAccess(): void
```

##### `resetEnableRecaptcha` <a name="resetEnableRecaptcha" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableRecaptcha"></a>

```typescript
public resetEnableRecaptcha(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheckInput">enableOriginCheckInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccessInput">enablePublicAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptchaInput">enableRecaptchaInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheck">enableOriginCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccess">enablePublicAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptcha">enableRecaptcha</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings">CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `enableOriginCheckInput`<sup>Optional</sup> <a name="enableOriginCheckInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheckInput"></a>

```typescript
public readonly enableOriginCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePublicAccessInput`<sup>Optional</sup> <a name="enablePublicAccessInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccessInput"></a>

```typescript
public readonly enablePublicAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableRecaptchaInput`<sup>Optional</sup> <a name="enableRecaptchaInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptchaInput"></a>

```typescript
public readonly enableRecaptchaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `enableOriginCheck`<sup>Required</sup> <a name="enableOriginCheck" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheck"></a>

```typescript
public readonly enableOriginCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePublicAccess`<sup>Required</sup> <a name="enablePublicAccess" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccess"></a>

```typescript
public readonly enablePublicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableRecaptcha`<sup>Required</sup> <a name="enableRecaptcha" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptcha"></a>

```typescript
public readonly enableRecaptcha: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings">CesAppDefaultChannelProfileWebWidgetConfigSecuritySettings</a>

---


### CesAppDefaultChannelProfileWhatsappConfigOutputReference <a name="CesAppDefaultChannelProfileWhatsappConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.thumbnailUrl">thumbnailUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.phoneNumberIdInput">phoneNumberIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.wabaIdInput">wabaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.phoneNumberId">phoneNumberId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.wabaId">wabaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfig">CesAppDefaultChannelProfileWhatsappConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `thumbnailUrl`<sup>Required</sup> <a name="thumbnailUrl" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.thumbnailUrl"></a>

```typescript
public readonly thumbnailUrl: string;
```

- *Type:* string

---

##### `phoneNumberIdInput`<sup>Optional</sup> <a name="phoneNumberIdInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.phoneNumberIdInput"></a>

```typescript
public readonly phoneNumberIdInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `wabaIdInput`<sup>Optional</sup> <a name="wabaIdInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.wabaIdInput"></a>

```typescript
public readonly wabaIdInput: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.phoneNumberId"></a>

```typescript
public readonly phoneNumberId: string;
```

- *Type:* string

---

##### `wabaId`<sup>Required</sup> <a name="wabaId" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.wabaId"></a>

```typescript
public readonly wabaId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppDefaultChannelProfileWhatsappConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWhatsappConfig">CesAppDefaultChannelProfileWhatsappConfig</a>

---


### CesAppErrorHandlingSettingsEndSessionConfigOutputReference <a name="CesAppErrorHandlingSettingsEndSessionConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.resetEscalateSession">resetEscalateSession</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEscalateSession` <a name="resetEscalateSession" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.resetEscalateSession"></a>

```typescript
public resetEscalateSession(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.property.escalateSessionInput">escalateSessionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.property.escalateSession">escalateSession</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfig">CesAppErrorHandlingSettingsEndSessionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `escalateSessionInput`<sup>Optional</sup> <a name="escalateSessionInput" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.property.escalateSessionInput"></a>

```typescript
public readonly escalateSessionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `escalateSession`<sup>Required</sup> <a name="escalateSession" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.property.escalateSession"></a>

```typescript
public readonly escalateSession: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppErrorHandlingSettingsEndSessionConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfig">CesAppErrorHandlingSettingsEndSessionConfig</a>

---


### CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference <a name="CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.resetCustomFallbackMessages">resetCustomFallbackMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.resetMaxFallbackAttempts">resetMaxFallbackAttempts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomFallbackMessages` <a name="resetCustomFallbackMessages" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.resetCustomFallbackMessages"></a>

```typescript
public resetCustomFallbackMessages(): void
```

##### `resetMaxFallbackAttempts` <a name="resetMaxFallbackAttempts" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.resetMaxFallbackAttempts"></a>

```typescript
public resetMaxFallbackAttempts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.property.customFallbackMessagesInput">customFallbackMessagesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.property.maxFallbackAttemptsInput">maxFallbackAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.property.customFallbackMessages">customFallbackMessages</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.property.maxFallbackAttempts">maxFallbackAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfig">CesAppErrorHandlingSettingsFallbackResponseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customFallbackMessagesInput`<sup>Optional</sup> <a name="customFallbackMessagesInput" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.property.customFallbackMessagesInput"></a>

```typescript
public readonly customFallbackMessagesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxFallbackAttemptsInput`<sup>Optional</sup> <a name="maxFallbackAttemptsInput" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.property.maxFallbackAttemptsInput"></a>

```typescript
public readonly maxFallbackAttemptsInput: number;
```

- *Type:* number

---

##### `customFallbackMessages`<sup>Required</sup> <a name="customFallbackMessages" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.property.customFallbackMessages"></a>

```typescript
public readonly customFallbackMessages: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxFallbackAttempts`<sup>Required</sup> <a name="maxFallbackAttempts" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.property.maxFallbackAttempts"></a>

```typescript
public readonly maxFallbackAttempts: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppErrorHandlingSettingsFallbackResponseConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfig">CesAppErrorHandlingSettingsFallbackResponseConfig</a>

---


### CesAppErrorHandlingSettingsOutputReference <a name="CesAppErrorHandlingSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppErrorHandlingSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.putEndSessionConfig">putEndSessionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.putFallbackResponseConfig">putFallbackResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.resetEndSessionConfig">resetEndSessionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.resetErrorHandlingStrategy">resetErrorHandlingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.resetFallbackResponseConfig">resetFallbackResponseConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndSessionConfig` <a name="putEndSessionConfig" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.putEndSessionConfig"></a>

```typescript
public putEndSessionConfig(value: CesAppErrorHandlingSettingsEndSessionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.putEndSessionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfig">CesAppErrorHandlingSettingsEndSessionConfig</a>

---

##### `putFallbackResponseConfig` <a name="putFallbackResponseConfig" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.putFallbackResponseConfig"></a>

```typescript
public putFallbackResponseConfig(value: CesAppErrorHandlingSettingsFallbackResponseConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.putFallbackResponseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfig">CesAppErrorHandlingSettingsFallbackResponseConfig</a>

---

##### `resetEndSessionConfig` <a name="resetEndSessionConfig" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.resetEndSessionConfig"></a>

```typescript
public resetEndSessionConfig(): void
```

##### `resetErrorHandlingStrategy` <a name="resetErrorHandlingStrategy" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.resetErrorHandlingStrategy"></a>

```typescript
public resetErrorHandlingStrategy(): void
```

##### `resetFallbackResponseConfig` <a name="resetFallbackResponseConfig" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.resetFallbackResponseConfig"></a>

```typescript
public resetFallbackResponseConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.property.endSessionConfig">endSessionConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference">CesAppErrorHandlingSettingsEndSessionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.property.fallbackResponseConfig">fallbackResponseConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference">CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.property.endSessionConfigInput">endSessionConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfig">CesAppErrorHandlingSettingsEndSessionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.property.errorHandlingStrategyInput">errorHandlingStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.property.fallbackResponseConfigInput">fallbackResponseConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfig">CesAppErrorHandlingSettingsFallbackResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.property.errorHandlingStrategy">errorHandlingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettings">CesAppErrorHandlingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endSessionConfig`<sup>Required</sup> <a name="endSessionConfig" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.property.endSessionConfig"></a>

```typescript
public readonly endSessionConfig: CesAppErrorHandlingSettingsEndSessionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfigOutputReference">CesAppErrorHandlingSettingsEndSessionConfigOutputReference</a>

---

##### `fallbackResponseConfig`<sup>Required</sup> <a name="fallbackResponseConfig" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.property.fallbackResponseConfig"></a>

```typescript
public readonly fallbackResponseConfig: CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference">CesAppErrorHandlingSettingsFallbackResponseConfigOutputReference</a>

---

##### `endSessionConfigInput`<sup>Optional</sup> <a name="endSessionConfigInput" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.property.endSessionConfigInput"></a>

```typescript
public readonly endSessionConfigInput: CesAppErrorHandlingSettingsEndSessionConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsEndSessionConfig">CesAppErrorHandlingSettingsEndSessionConfig</a>

---

##### `errorHandlingStrategyInput`<sup>Optional</sup> <a name="errorHandlingStrategyInput" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.property.errorHandlingStrategyInput"></a>

```typescript
public readonly errorHandlingStrategyInput: string;
```

- *Type:* string

---

##### `fallbackResponseConfigInput`<sup>Optional</sup> <a name="fallbackResponseConfigInput" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.property.fallbackResponseConfigInput"></a>

```typescript
public readonly fallbackResponseConfigInput: CesAppErrorHandlingSettingsFallbackResponseConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsFallbackResponseConfig">CesAppErrorHandlingSettingsFallbackResponseConfig</a>

---

##### `errorHandlingStrategy`<sup>Required</sup> <a name="errorHandlingStrategy" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.property.errorHandlingStrategy"></a>

```typescript
public readonly errorHandlingStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppErrorHandlingSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppErrorHandlingSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppErrorHandlingSettings">CesAppErrorHandlingSettings</a>

---


### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resetToolInvocationParameterCorrectnessThreshold">resetToolInvocationParameterCorrectnessThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolInvocationParameterCorrectnessThreshold` <a name="resetToolInvocationParameterCorrectnessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resetToolInvocationParameterCorrectnessThreshold"></a>

```typescript
public resetToolInvocationParameterCorrectnessThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThresholdInput">toolInvocationParameterCorrectnessThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThreshold">toolInvocationParameterCorrectnessThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `toolInvocationParameterCorrectnessThresholdInput`<sup>Optional</sup> <a name="toolInvocationParameterCorrectnessThresholdInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThresholdInput"></a>

```typescript
public readonly toolInvocationParameterCorrectnessThresholdInput: number;
```

- *Type:* number

---

##### `toolInvocationParameterCorrectnessThreshold`<sup>Required</sup> <a name="toolInvocationParameterCorrectnessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThreshold"></a>

```typescript
public readonly toolInvocationParameterCorrectnessThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---


### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds">putExpectationLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putToolMatchingSettings">putToolMatchingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds">putTurnLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetExpectationLevelMetricsThresholds">resetExpectationLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetToolMatchingSettings">resetToolMatchingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetTurnLevelMetricsThresholds">resetTurnLevelMetricsThresholds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpectationLevelMetricsThresholds` <a name="putExpectationLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds"></a>

```typescript
public putExpectationLevelMetricsThresholds(value: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---

##### `putToolMatchingSettings` <a name="putToolMatchingSettings" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putToolMatchingSettings"></a>

```typescript
public putToolMatchingSettings(value: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putToolMatchingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings</a>

---

##### `putTurnLevelMetricsThresholds` <a name="putTurnLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds"></a>

```typescript
public putTurnLevelMetricsThresholds(value: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---

##### `resetExpectationLevelMetricsThresholds` <a name="resetExpectationLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetExpectationLevelMetricsThresholds"></a>

```typescript
public resetExpectationLevelMetricsThresholds(): void
```

##### `resetToolMatchingSettings` <a name="resetToolMatchingSettings" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetToolMatchingSettings"></a>

```typescript
public resetToolMatchingSettings(): void
```

##### `resetTurnLevelMetricsThresholds` <a name="resetTurnLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetTurnLevelMetricsThresholds"></a>

```typescript
public resetTurnLevelMetricsThresholds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholds">expectationLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.toolMatchingSettings">toolMatchingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholds">turnLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholdsInput">expectationLevelMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.toolMatchingSettingsInput">toolMatchingSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholdsInput">turnLevelMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expectationLevelMetricsThresholds`<sup>Required</sup> <a name="expectationLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholds"></a>

```typescript
public readonly expectationLevelMetricsThresholds: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference</a>

---

##### `toolMatchingSettings`<sup>Required</sup> <a name="toolMatchingSettings" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.toolMatchingSettings"></a>

```typescript
public readonly toolMatchingSettings: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference</a>

---

##### `turnLevelMetricsThresholds`<sup>Required</sup> <a name="turnLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholds"></a>

```typescript
public readonly turnLevelMetricsThresholds: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference</a>

---

##### `expectationLevelMetricsThresholdsInput`<sup>Optional</sup> <a name="expectationLevelMetricsThresholdsInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholdsInput"></a>

```typescript
public readonly expectationLevelMetricsThresholdsInput: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---

##### `toolMatchingSettingsInput`<sup>Optional</sup> <a name="toolMatchingSettingsInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.toolMatchingSettingsInput"></a>

```typescript
public readonly toolMatchingSettingsInput: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings</a>

---

##### `turnLevelMetricsThresholdsInput`<sup>Optional</sup> <a name="turnLevelMetricsThresholdsInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholdsInput"></a>

```typescript
public readonly turnLevelMetricsThresholdsInput: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---


### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.resetExtraToolCallBehavior">resetExtraToolCallBehavior</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExtraToolCallBehavior` <a name="resetExtraToolCallBehavior" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.resetExtraToolCallBehavior"></a>

```typescript
public resetExtraToolCallBehavior(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.property.extraToolCallBehaviorInput">extraToolCallBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.property.extraToolCallBehavior">extraToolCallBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extraToolCallBehaviorInput`<sup>Optional</sup> <a name="extraToolCallBehaviorInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.property.extraToolCallBehaviorInput"></a>

```typescript
public readonly extraToolCallBehaviorInput: string;
```

- *Type:* string

---

##### `extraToolCallBehavior`<sup>Required</sup> <a name="extraToolCallBehavior" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.property.extraToolCallBehavior"></a>

```typescript
public readonly extraToolCallBehavior: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToolMatchingSettings</a>

---


### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetOverallToolInvocationCorrectnessThreshold">resetOverallToolInvocationCorrectnessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetSemanticSimilarityChannel">resetSemanticSimilarityChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetSemanticSimilaritySuccessThreshold">resetSemanticSimilaritySuccessThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOverallToolInvocationCorrectnessThreshold` <a name="resetOverallToolInvocationCorrectnessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetOverallToolInvocationCorrectnessThreshold"></a>

```typescript
public resetOverallToolInvocationCorrectnessThreshold(): void
```

##### `resetSemanticSimilarityChannel` <a name="resetSemanticSimilarityChannel" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetSemanticSimilarityChannel"></a>

```typescript
public resetSemanticSimilarityChannel(): void
```

##### `resetSemanticSimilaritySuccessThreshold` <a name="resetSemanticSimilaritySuccessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetSemanticSimilaritySuccessThreshold"></a>

```typescript
public resetSemanticSimilaritySuccessThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThresholdInput">overallToolInvocationCorrectnessThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilarityChannelInput">semanticSimilarityChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThresholdInput">semanticSimilaritySuccessThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThreshold">overallToolInvocationCorrectnessThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilarityChannel">semanticSimilarityChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThreshold">semanticSimilaritySuccessThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `overallToolInvocationCorrectnessThresholdInput`<sup>Optional</sup> <a name="overallToolInvocationCorrectnessThresholdInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThresholdInput"></a>

```typescript
public readonly overallToolInvocationCorrectnessThresholdInput: number;
```

- *Type:* number

---

##### `semanticSimilarityChannelInput`<sup>Optional</sup> <a name="semanticSimilarityChannelInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilarityChannelInput"></a>

```typescript
public readonly semanticSimilarityChannelInput: string;
```

- *Type:* string

---

##### `semanticSimilaritySuccessThresholdInput`<sup>Optional</sup> <a name="semanticSimilaritySuccessThresholdInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThresholdInput"></a>

```typescript
public readonly semanticSimilaritySuccessThresholdInput: number;
```

- *Type:* number

---

##### `overallToolInvocationCorrectnessThreshold`<sup>Required</sup> <a name="overallToolInvocationCorrectnessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThreshold"></a>

```typescript
public readonly overallToolInvocationCorrectnessThreshold: number;
```

- *Type:* number

---

##### `semanticSimilarityChannel`<sup>Required</sup> <a name="semanticSimilarityChannel" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilarityChannel"></a>

```typescript
public readonly semanticSimilarityChannel: string;
```

- *Type:* string

---

##### `semanticSimilaritySuccessThreshold`<sup>Required</sup> <a name="semanticSimilaritySuccessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThreshold"></a>

```typescript
public readonly semanticSimilaritySuccessThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---


### CesAppEvaluationMetricsThresholdsOutputReference <a name="CesAppEvaluationMetricsThresholdsOutputReference" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppEvaluationMetricsThresholdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds">putGoldenEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resetGoldenEvaluationMetricsThresholds">resetGoldenEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resetGoldenHallucinationMetricBehavior">resetGoldenHallucinationMetricBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resetScenarioHallucinationMetricBehavior">resetScenarioHallucinationMetricBehavior</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGoldenEvaluationMetricsThresholds` <a name="putGoldenEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds"></a>

```typescript
public putGoldenEvaluationMetricsThresholds(value: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---

##### `resetGoldenEvaluationMetricsThresholds` <a name="resetGoldenEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resetGoldenEvaluationMetricsThresholds"></a>

```typescript
public resetGoldenEvaluationMetricsThresholds(): void
```

##### `resetGoldenHallucinationMetricBehavior` <a name="resetGoldenHallucinationMetricBehavior" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resetGoldenHallucinationMetricBehavior"></a>

```typescript
public resetGoldenHallucinationMetricBehavior(): void
```

##### `resetScenarioHallucinationMetricBehavior` <a name="resetScenarioHallucinationMetricBehavior" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resetScenarioHallucinationMetricBehavior"></a>

```typescript
public resetScenarioHallucinationMetricBehavior(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholds">goldenEvaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholdsInput">goldenEvaluationMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenHallucinationMetricBehaviorInput">goldenHallucinationMetricBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.scenarioHallucinationMetricBehaviorInput">scenarioHallucinationMetricBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenHallucinationMetricBehavior">goldenHallucinationMetricBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.scenarioHallucinationMetricBehavior">scenarioHallucinationMetricBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `goldenEvaluationMetricsThresholds`<sup>Required</sup> <a name="goldenEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholds"></a>

```typescript
public readonly goldenEvaluationMetricsThresholds: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference</a>

---

##### `goldenEvaluationMetricsThresholdsInput`<sup>Optional</sup> <a name="goldenEvaluationMetricsThresholdsInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholdsInput"></a>

```typescript
public readonly goldenEvaluationMetricsThresholdsInput: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---

##### `goldenHallucinationMetricBehaviorInput`<sup>Optional</sup> <a name="goldenHallucinationMetricBehaviorInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenHallucinationMetricBehaviorInput"></a>

```typescript
public readonly goldenHallucinationMetricBehaviorInput: string;
```

- *Type:* string

---

##### `scenarioHallucinationMetricBehaviorInput`<sup>Optional</sup> <a name="scenarioHallucinationMetricBehaviorInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.scenarioHallucinationMetricBehaviorInput"></a>

```typescript
public readonly scenarioHallucinationMetricBehaviorInput: string;
```

- *Type:* string

---

##### `goldenHallucinationMetricBehavior`<sup>Required</sup> <a name="goldenHallucinationMetricBehavior" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenHallucinationMetricBehavior"></a>

```typescript
public readonly goldenHallucinationMetricBehavior: string;
```

- *Type:* string

---

##### `scenarioHallucinationMetricBehavior`<sup>Required</sup> <a name="scenarioHallucinationMetricBehavior" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.scenarioHallucinationMetricBehavior"></a>

```typescript
public readonly scenarioHallucinationMetricBehavior: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppEvaluationMetricsThresholds;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a>

---


### CesAppLanguageSettingsOutputReference <a name="CesAppLanguageSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppLanguageSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetDefaultLanguageCode">resetDefaultLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetEnableMultilingualSupport">resetEnableMultilingualSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetFallbackAction">resetFallbackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetSupportedLanguageCodes">resetSupportedLanguageCodes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultLanguageCode` <a name="resetDefaultLanguageCode" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetDefaultLanguageCode"></a>

```typescript
public resetDefaultLanguageCode(): void
```

##### `resetEnableMultilingualSupport` <a name="resetEnableMultilingualSupport" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetEnableMultilingualSupport"></a>

```typescript
public resetEnableMultilingualSupport(): void
```

##### `resetFallbackAction` <a name="resetFallbackAction" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetFallbackAction"></a>

```typescript
public resetFallbackAction(): void
```

##### `resetSupportedLanguageCodes` <a name="resetSupportedLanguageCodes" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetSupportedLanguageCodes"></a>

```typescript
public resetSupportedLanguageCodes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.defaultLanguageCodeInput">defaultLanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.enableMultilingualSupportInput">enableMultilingualSupportInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fallbackActionInput">fallbackActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.supportedLanguageCodesInput">supportedLanguageCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.defaultLanguageCode">defaultLanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.enableMultilingualSupport">enableMultilingualSupport</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fallbackAction">fallbackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.supportedLanguageCodes">supportedLanguageCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultLanguageCodeInput`<sup>Optional</sup> <a name="defaultLanguageCodeInput" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.defaultLanguageCodeInput"></a>

```typescript
public readonly defaultLanguageCodeInput: string;
```

- *Type:* string

---

##### `enableMultilingualSupportInput`<sup>Optional</sup> <a name="enableMultilingualSupportInput" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.enableMultilingualSupportInput"></a>

```typescript
public readonly enableMultilingualSupportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fallbackActionInput`<sup>Optional</sup> <a name="fallbackActionInput" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fallbackActionInput"></a>

```typescript
public readonly fallbackActionInput: string;
```

- *Type:* string

---

##### `supportedLanguageCodesInput`<sup>Optional</sup> <a name="supportedLanguageCodesInput" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.supportedLanguageCodesInput"></a>

```typescript
public readonly supportedLanguageCodesInput: string[];
```

- *Type:* string[]

---

##### `defaultLanguageCode`<sup>Required</sup> <a name="defaultLanguageCode" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.defaultLanguageCode"></a>

```typescript
public readonly defaultLanguageCode: string;
```

- *Type:* string

---

##### `enableMultilingualSupport`<sup>Required</sup> <a name="enableMultilingualSupport" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.enableMultilingualSupport"></a>

```typescript
public readonly enableMultilingualSupport: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fallbackAction`<sup>Required</sup> <a name="fallbackAction" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fallbackAction"></a>

```typescript
public readonly fallbackAction: string;
```

- *Type:* string

---

##### `supportedLanguageCodes`<sup>Required</sup> <a name="supportedLanguageCodes" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.supportedLanguageCodes"></a>

```typescript
public readonly supportedLanguageCodes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppLanguageSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a>

---


### CesAppLoggingSettingsAudioRecordingConfigOutputReference <a name="CesAppLoggingSettingsAudioRecordingConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsBucket">resetGcsBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsPathPrefix">resetGcsPathPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGcsBucket` <a name="resetGcsBucket" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsBucket"></a>

```typescript
public resetGcsBucket(): void
```

##### `resetGcsPathPrefix` <a name="resetGcsPathPrefix" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsPathPrefix"></a>

```typescript
public resetGcsPathPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucketInput">gcsBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefixInput">gcsPathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucket">gcsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefix">gcsPathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gcsBucketInput`<sup>Optional</sup> <a name="gcsBucketInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucketInput"></a>

```typescript
public readonly gcsBucketInput: string;
```

- *Type:* string

---

##### `gcsPathPrefixInput`<sup>Optional</sup> <a name="gcsPathPrefixInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefixInput"></a>

```typescript
public readonly gcsPathPrefixInput: string;
```

- *Type:* string

---

##### `gcsBucket`<sup>Required</sup> <a name="gcsBucket" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucket"></a>

```typescript
public readonly gcsBucket: string;
```

- *Type:* string

---

##### `gcsPathPrefix`<sup>Required</sup> <a name="gcsPathPrefix" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefix"></a>

```typescript
public readonly gcsPathPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppLoggingSettingsAudioRecordingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a>

---


### CesAppLoggingSettingsBigqueryExportSettingsOutputReference <a name="CesAppLoggingSettingsBigqueryExportSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetDataset">resetDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetProject">resetProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataset` <a name="resetDataset" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetDataset"></a>

```typescript
public resetDataset(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetProject"></a>

```typescript
public resetProject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.datasetInput">datasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.datasetInput"></a>

```typescript
public readonly datasetInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppLoggingSettingsBigqueryExportSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a>

---


### CesAppLoggingSettingsCloudLoggingSettingsOutputReference <a name="CesAppLoggingSettingsCloudLoggingSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resetEnableCloudLogging">resetEnableCloudLogging</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableCloudLogging` <a name="resetEnableCloudLogging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resetEnableCloudLogging"></a>

```typescript
public resetEnableCloudLogging(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLoggingInput">enableCloudLoggingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLogging">enableCloudLogging</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableCloudLoggingInput`<sup>Optional</sup> <a name="enableCloudLoggingInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLoggingInput"></a>

```typescript
public readonly enableCloudLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableCloudLogging`<sup>Required</sup> <a name="enableCloudLogging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLogging"></a>

```typescript
public readonly enableCloudLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppLoggingSettingsCloudLoggingSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a>

---


### CesAppLoggingSettingsConversationLoggingSettingsOutputReference <a name="CesAppLoggingSettingsConversationLoggingSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resetDisableConversationLogging">resetDisableConversationLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resetRetentionWindow">resetRetentionWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableConversationLogging` <a name="resetDisableConversationLogging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resetDisableConversationLogging"></a>

```typescript
public resetDisableConversationLogging(): void
```

##### `resetRetentionWindow` <a name="resetRetentionWindow" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resetRetentionWindow"></a>

```typescript
public resetRetentionWindow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLoggingInput">disableConversationLoggingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.retentionWindowInput">retentionWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLogging">disableConversationLogging</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.retentionWindow">retentionWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableConversationLoggingInput`<sup>Optional</sup> <a name="disableConversationLoggingInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLoggingInput"></a>

```typescript
public readonly disableConversationLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionWindowInput`<sup>Optional</sup> <a name="retentionWindowInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.retentionWindowInput"></a>

```typescript
public readonly retentionWindowInput: string;
```

- *Type:* string

---

##### `disableConversationLogging`<sup>Required</sup> <a name="disableConversationLogging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLogging"></a>

```typescript
public readonly disableConversationLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionWindow`<sup>Required</sup> <a name="retentionWindow" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.retentionWindow"></a>

```typescript
public readonly retentionWindow: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppLoggingSettingsConversationLoggingSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a>

---


### CesAppLoggingSettingsMetricAnalysisSettingsOutputReference <a name="CesAppLoggingSettingsMetricAnalysisSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.resetLlmMetricsOptedOut">resetLlmMetricsOptedOut</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLlmMetricsOptedOut` <a name="resetLlmMetricsOptedOut" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.resetLlmMetricsOptedOut"></a>

```typescript
public resetLlmMetricsOptedOut(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.property.llmMetricsOptedOutInput">llmMetricsOptedOutInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.property.llmMetricsOptedOut">llmMetricsOptedOut</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettings">CesAppLoggingSettingsMetricAnalysisSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `llmMetricsOptedOutInput`<sup>Optional</sup> <a name="llmMetricsOptedOutInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.property.llmMetricsOptedOutInput"></a>

```typescript
public readonly llmMetricsOptedOutInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `llmMetricsOptedOut`<sup>Required</sup> <a name="llmMetricsOptedOut" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.property.llmMetricsOptedOut"></a>

```typescript
public readonly llmMetricsOptedOut: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppLoggingSettingsMetricAnalysisSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettings">CesAppLoggingSettingsMetricAnalysisSettings</a>

---


### CesAppLoggingSettingsOutputReference <a name="CesAppLoggingSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppLoggingSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putAudioRecordingConfig">putAudioRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putBigqueryExportSettings">putBigqueryExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putCloudLoggingSettings">putCloudLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putConversationLoggingSettings">putConversationLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putMetricAnalysisSettings">putMetricAnalysisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putRedactionConfig">putRedactionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetAudioRecordingConfig">resetAudioRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetBigqueryExportSettings">resetBigqueryExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetCloudLoggingSettings">resetCloudLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetConversationLoggingSettings">resetConversationLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetMetricAnalysisSettings">resetMetricAnalysisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetRedactionConfig">resetRedactionConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAudioRecordingConfig` <a name="putAudioRecordingConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putAudioRecordingConfig"></a>

```typescript
public putAudioRecordingConfig(value: CesAppLoggingSettingsAudioRecordingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putAudioRecordingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a>

---

##### `putBigqueryExportSettings` <a name="putBigqueryExportSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putBigqueryExportSettings"></a>

```typescript
public putBigqueryExportSettings(value: CesAppLoggingSettingsBigqueryExportSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putBigqueryExportSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a>

---

##### `putCloudLoggingSettings` <a name="putCloudLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putCloudLoggingSettings"></a>

```typescript
public putCloudLoggingSettings(value: CesAppLoggingSettingsCloudLoggingSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putCloudLoggingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a>

---

##### `putConversationLoggingSettings` <a name="putConversationLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putConversationLoggingSettings"></a>

```typescript
public putConversationLoggingSettings(value: CesAppLoggingSettingsConversationLoggingSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putConversationLoggingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a>

---

##### `putMetricAnalysisSettings` <a name="putMetricAnalysisSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putMetricAnalysisSettings"></a>

```typescript
public putMetricAnalysisSettings(value: CesAppLoggingSettingsMetricAnalysisSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putMetricAnalysisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettings">CesAppLoggingSettingsMetricAnalysisSettings</a>

---

##### `putRedactionConfig` <a name="putRedactionConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putRedactionConfig"></a>

```typescript
public putRedactionConfig(value: CesAppLoggingSettingsRedactionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putRedactionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a>

---

##### `resetAudioRecordingConfig` <a name="resetAudioRecordingConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetAudioRecordingConfig"></a>

```typescript
public resetAudioRecordingConfig(): void
```

##### `resetBigqueryExportSettings` <a name="resetBigqueryExportSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetBigqueryExportSettings"></a>

```typescript
public resetBigqueryExportSettings(): void
```

##### `resetCloudLoggingSettings` <a name="resetCloudLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetCloudLoggingSettings"></a>

```typescript
public resetCloudLoggingSettings(): void
```

##### `resetConversationLoggingSettings` <a name="resetConversationLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetConversationLoggingSettings"></a>

```typescript
public resetConversationLoggingSettings(): void
```

##### `resetMetricAnalysisSettings` <a name="resetMetricAnalysisSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetMetricAnalysisSettings"></a>

```typescript
public resetMetricAnalysisSettings(): void
```

##### `resetRedactionConfig` <a name="resetRedactionConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetRedactionConfig"></a>

```typescript
public resetRedactionConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.audioRecordingConfig">audioRecordingConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference">CesAppLoggingSettingsAudioRecordingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.bigqueryExportSettings">bigqueryExportSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference">CesAppLoggingSettingsBigqueryExportSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.cloudLoggingSettings">cloudLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference">CesAppLoggingSettingsCloudLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.conversationLoggingSettings">conversationLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference">CesAppLoggingSettingsConversationLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.metricAnalysisSettings">metricAnalysisSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference">CesAppLoggingSettingsMetricAnalysisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.redactionConfig">redactionConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference">CesAppLoggingSettingsRedactionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.audioRecordingConfigInput">audioRecordingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.bigqueryExportSettingsInput">bigqueryExportSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.cloudLoggingSettingsInput">cloudLoggingSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.conversationLoggingSettingsInput">conversationLoggingSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.metricAnalysisSettingsInput">metricAnalysisSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettings">CesAppLoggingSettingsMetricAnalysisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.redactionConfigInput">redactionConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioRecordingConfig`<sup>Required</sup> <a name="audioRecordingConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.audioRecordingConfig"></a>

```typescript
public readonly audioRecordingConfig: CesAppLoggingSettingsAudioRecordingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference">CesAppLoggingSettingsAudioRecordingConfigOutputReference</a>

---

##### `bigqueryExportSettings`<sup>Required</sup> <a name="bigqueryExportSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.bigqueryExportSettings"></a>

```typescript
public readonly bigqueryExportSettings: CesAppLoggingSettingsBigqueryExportSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference">CesAppLoggingSettingsBigqueryExportSettingsOutputReference</a>

---

##### `cloudLoggingSettings`<sup>Required</sup> <a name="cloudLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.cloudLoggingSettings"></a>

```typescript
public readonly cloudLoggingSettings: CesAppLoggingSettingsCloudLoggingSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference">CesAppLoggingSettingsCloudLoggingSettingsOutputReference</a>

---

##### `conversationLoggingSettings`<sup>Required</sup> <a name="conversationLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.conversationLoggingSettings"></a>

```typescript
public readonly conversationLoggingSettings: CesAppLoggingSettingsConversationLoggingSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference">CesAppLoggingSettingsConversationLoggingSettingsOutputReference</a>

---

##### `metricAnalysisSettings`<sup>Required</sup> <a name="metricAnalysisSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.metricAnalysisSettings"></a>

```typescript
public readonly metricAnalysisSettings: CesAppLoggingSettingsMetricAnalysisSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettingsOutputReference">CesAppLoggingSettingsMetricAnalysisSettingsOutputReference</a>

---

##### `redactionConfig`<sup>Required</sup> <a name="redactionConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.redactionConfig"></a>

```typescript
public readonly redactionConfig: CesAppLoggingSettingsRedactionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference">CesAppLoggingSettingsRedactionConfigOutputReference</a>

---

##### `audioRecordingConfigInput`<sup>Optional</sup> <a name="audioRecordingConfigInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.audioRecordingConfigInput"></a>

```typescript
public readonly audioRecordingConfigInput: CesAppLoggingSettingsAudioRecordingConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a>

---

##### `bigqueryExportSettingsInput`<sup>Optional</sup> <a name="bigqueryExportSettingsInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.bigqueryExportSettingsInput"></a>

```typescript
public readonly bigqueryExportSettingsInput: CesAppLoggingSettingsBigqueryExportSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a>

---

##### `cloudLoggingSettingsInput`<sup>Optional</sup> <a name="cloudLoggingSettingsInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.cloudLoggingSettingsInput"></a>

```typescript
public readonly cloudLoggingSettingsInput: CesAppLoggingSettingsCloudLoggingSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a>

---

##### `conversationLoggingSettingsInput`<sup>Optional</sup> <a name="conversationLoggingSettingsInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.conversationLoggingSettingsInput"></a>

```typescript
public readonly conversationLoggingSettingsInput: CesAppLoggingSettingsConversationLoggingSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a>

---

##### `metricAnalysisSettingsInput`<sup>Optional</sup> <a name="metricAnalysisSettingsInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.metricAnalysisSettingsInput"></a>

```typescript
public readonly metricAnalysisSettingsInput: CesAppLoggingSettingsMetricAnalysisSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsMetricAnalysisSettings">CesAppLoggingSettingsMetricAnalysisSettings</a>

---

##### `redactionConfigInput`<sup>Optional</sup> <a name="redactionConfigInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.redactionConfigInput"></a>

```typescript
public readonly redactionConfigInput: CesAppLoggingSettingsRedactionConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppLoggingSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a>

---


### CesAppLoggingSettingsRedactionConfigOutputReference <a name="CesAppLoggingSettingsRedactionConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppLoggingSettingsRedactionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetDeidentifyTemplate">resetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetEnableRedaction">resetEnableRedaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetInspectTemplate">resetInspectTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeidentifyTemplate` <a name="resetDeidentifyTemplate" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetDeidentifyTemplate"></a>

```typescript
public resetDeidentifyTemplate(): void
```

##### `resetEnableRedaction` <a name="resetEnableRedaction" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetEnableRedaction"></a>

```typescript
public resetEnableRedaction(): void
```

##### `resetInspectTemplate` <a name="resetInspectTemplate" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetInspectTemplate"></a>

```typescript
public resetInspectTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplateInput">deidentifyTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedactionInput">enableRedactionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplateInput">inspectTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedaction">enableRedaction</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplate">inspectTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deidentifyTemplateInput`<sup>Optional</sup> <a name="deidentifyTemplateInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplateInput"></a>

```typescript
public readonly deidentifyTemplateInput: string;
```

- *Type:* string

---

##### `enableRedactionInput`<sup>Optional</sup> <a name="enableRedactionInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedactionInput"></a>

```typescript
public readonly enableRedactionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inspectTemplateInput`<sup>Optional</sup> <a name="inspectTemplateInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplateInput"></a>

```typescript
public readonly inspectTemplateInput: string;
```

- *Type:* string

---

##### `deidentifyTemplate`<sup>Required</sup> <a name="deidentifyTemplate" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplate"></a>

```typescript
public readonly deidentifyTemplate: string;
```

- *Type:* string

---

##### `enableRedaction`<sup>Required</sup> <a name="enableRedaction" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedaction"></a>

```typescript
public readonly enableRedaction: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inspectTemplate`<sup>Required</sup> <a name="inspectTemplate" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplate"></a>

```typescript
public readonly inspectTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppLoggingSettingsRedactionConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a>

---


### CesAppModelSettingsOutputReference <a name="CesAppModelSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppModelSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resetTemperature"></a>

```typescript
public resetTemperature(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.temperatureInput"></a>

```typescript
public readonly temperatureInput: number;
```

- *Type:* number

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a>

---


### CesAppTimeoutsOutputReference <a name="CesAppTimeoutsOutputReference" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAppTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a>

---


### CesAppTimeZoneSettingsOutputReference <a name="CesAppTimeZoneSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppTimeZoneSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppTimeZoneSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a>

---


### CesAppVariableDeclarationsList <a name="CesAppVariableDeclarationsList" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppVariableDeclarationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.get"></a>

```typescript
public get(index: number): CesAppVariableDeclarationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAppVariableDeclarations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>[]

---


### CesAppVariableDeclarationsOutputReference <a name="CesAppVariableDeclarationsOutputReference" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppVariableDeclarationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema">putSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchema` <a name="putSchema" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema"></a>

```typescript
public putSchema(value: CesAppVariableDeclarationsSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference">CesAppVariableDeclarationsSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.schemaInput">schemaInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.schema"></a>

```typescript
public readonly schema: CesAppVariableDeclarationsSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference">CesAppVariableDeclarationsSchemaOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: CesAppVariableDeclarationsSchema;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CesAppVariableDeclarations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>

---


### CesAppVariableDeclarationsSchemaOutputReference <a name="CesAppVariableDeclarationsSchemaOutputReference" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppVariableDeclarationsSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetAnyOf">resetAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDefs">resetDefs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetEnum">resetEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetItems">resetItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetNullable">resetNullable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetPrefixItems">resetPrefixItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetRef">resetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetUniqueItems">resetUniqueItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetAnyOf` <a name="resetAnyOf" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetAnyOf"></a>

```typescript
public resetAnyOf(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDefs` <a name="resetDefs" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDefs"></a>

```typescript
public resetDefs(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnum` <a name="resetEnum" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetEnum"></a>

```typescript
public resetEnum(): void
```

##### `resetItems` <a name="resetItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetItems"></a>

```typescript
public resetItems(): void
```

##### `resetNullable` <a name="resetNullable" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetNullable"></a>

```typescript
public resetNullable(): void
```

##### `resetPrefixItems` <a name="resetPrefixItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetPrefixItems"></a>

```typescript
public resetPrefixItems(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetRef"></a>

```typescript
public resetRef(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetUniqueItems` <a name="resetUniqueItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetUniqueItems"></a>

```typescript
public resetUniqueItems(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.anyOfInput">anyOfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defsInput">defsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.enumInput">enumInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.itemsInput">itemsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.nullableInput">nullableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.prefixItemsInput">prefixItemsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.refInput">refInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.requiredInput">requiredInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.uniqueItemsInput">uniqueItemsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.additionalProperties">additionalProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.anyOf">anyOf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defs">defs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.enum">enum</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.items">items</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.nullable">nullable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.prefixItems">prefixItems</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.properties">properties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.required">required</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.uniqueItems">uniqueItems</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: string;
```

- *Type:* string

---

##### `anyOfInput`<sup>Optional</sup> <a name="anyOfInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.anyOfInput"></a>

```typescript
public readonly anyOfInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `defsInput`<sup>Optional</sup> <a name="defsInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defsInput"></a>

```typescript
public readonly defsInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enumInput`<sup>Optional</sup> <a name="enumInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.enumInput"></a>

```typescript
public readonly enumInput: string[];
```

- *Type:* string[]

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.itemsInput"></a>

```typescript
public readonly itemsInput: string;
```

- *Type:* string

---

##### `nullableInput`<sup>Optional</sup> <a name="nullableInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.nullableInput"></a>

```typescript
public readonly nullableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefixItemsInput`<sup>Optional</sup> <a name="prefixItemsInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.prefixItemsInput"></a>

```typescript
public readonly prefixItemsInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: string;
```

- *Type:* string

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.refInput"></a>

```typescript
public readonly refInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: string[];
```

- *Type:* string[]

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uniqueItemsInput`<sup>Optional</sup> <a name="uniqueItemsInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.uniqueItemsInput"></a>

```typescript
public readonly uniqueItemsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: string;
```

- *Type:* string

---

##### `anyOf`<sup>Required</sup> <a name="anyOf" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.anyOf"></a>

```typescript
public readonly anyOf: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `defs`<sup>Required</sup> <a name="defs" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defs"></a>

```typescript
public readonly defs: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.enum"></a>

```typescript
public readonly enum: string[];
```

- *Type:* string[]

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.items"></a>

```typescript
public readonly items: string;
```

- *Type:* string

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.nullable"></a>

```typescript
public readonly nullable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefixItems`<sup>Required</sup> <a name="prefixItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.prefixItems"></a>

```typescript
public readonly prefixItems: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.properties"></a>

```typescript
public readonly properties: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.required"></a>

```typescript
public readonly required: string[];
```

- *Type:* string[]

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uniqueItems`<sup>Required</sup> <a name="uniqueItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.uniqueItems"></a>

```typescript
public readonly uniqueItems: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppVariableDeclarationsSchema;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a>

---


### CesAppVpcScSettingsOutputReference <a name="CesAppVpcScSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.Initializer"></a>

```typescript
import { cesApp } from '@cdktn/provider-google'

new cesApp.CesAppVpcScSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.resetAllowedOrigins">resetAllowedOrigins</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedOrigins` <a name="resetAllowedOrigins" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.resetAllowedOrigins"></a>

```typescript
public resetAllowedOrigins(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettings">CesAppVpcScSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppVpcScSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CesAppVpcScSettings;
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVpcScSettings">CesAppVpcScSettings</a>

---



