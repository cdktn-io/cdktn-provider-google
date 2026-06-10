# `cesApp` Submodule <a name="`cesApp` Submodule" id="@cdktn/provider-google.cesApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesApp <a name="CesApp" id="@cdktn/provider-google.cesApp.CesApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app google_ces_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesApp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesApp(scope Construct, id *string, config CesAppConfig) CesApp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig">CesAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppConfig">CesAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putAudioProcessingConfig">PutAudioProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putClientCertificateSettings">PutClientCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putDataStoreSettings">PutDataStoreSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putDefaultChannelProfile">PutDefaultChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putEvaluationMetricsThresholds">PutEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putLanguageSettings">PutLanguageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putLoggingSettings">PutLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putModelSettings">PutModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putTimeZoneSettings">PutTimeZoneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putVariableDeclarations">PutVariableDeclarations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetAudioProcessingConfig">ResetAudioProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetClientCertificateSettings">ResetClientCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetDataStoreSettings">ResetDataStoreSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetDefaultChannelProfile">ResetDefaultChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetEvaluationMetricsThresholds">ResetEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetGlobalInstruction">ResetGlobalInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetGuardrails">ResetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetLanguageSettings">ResetLanguageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetLoggingSettings">ResetLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetModelSettings">ResetModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetPinned">ResetPinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetRootAgent">ResetRootAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetTimeZoneSettings">ResetTimeZoneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetToolExecutionMode">ResetToolExecutionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetVariableDeclarations">ResetVariableDeclarations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesApp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.cesApp.CesApp.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesApp.CesApp.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.cesApp.CesApp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesApp.CesApp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.cesApp.CesApp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cesApp.CesApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.cesApp.CesApp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.cesApp.CesApp.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.cesApp.CesApp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.cesApp.CesApp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.cesApp.CesApp.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesApp.CesApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesApp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesApp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesApp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesApp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesApp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesApp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.cesApp.CesApp.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.cesApp.CesApp.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesApp.CesApp.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesApp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.cesApp.CesApp.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.cesApp.CesApp.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesApp.CesApp.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesApp.CesApp.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.cesApp.CesApp.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAudioProcessingConfig` <a name="PutAudioProcessingConfig" id="@cdktn/provider-google.cesApp.CesApp.putAudioProcessingConfig"></a>

```go
func PutAudioProcessingConfig(value CesAppAudioProcessingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putAudioProcessingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a>

---

##### `PutClientCertificateSettings` <a name="PutClientCertificateSettings" id="@cdktn/provider-google.cesApp.CesApp.putClientCertificateSettings"></a>

```go
func PutClientCertificateSettings(value CesAppClientCertificateSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putClientCertificateSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a>

---

##### `PutDataStoreSettings` <a name="PutDataStoreSettings" id="@cdktn/provider-google.cesApp.CesApp.putDataStoreSettings"></a>

```go
func PutDataStoreSettings(value CesAppDataStoreSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putDataStoreSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a>

---

##### `PutDefaultChannelProfile` <a name="PutDefaultChannelProfile" id="@cdktn/provider-google.cesApp.CesApp.putDefaultChannelProfile"></a>

```go
func PutDefaultChannelProfile(value CesAppDefaultChannelProfile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putDefaultChannelProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a>

---

##### `PutEvaluationMetricsThresholds` <a name="PutEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesApp.putEvaluationMetricsThresholds"></a>

```go
func PutEvaluationMetricsThresholds(value CesAppEvaluationMetricsThresholds)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putEvaluationMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a>

---

##### `PutLanguageSettings` <a name="PutLanguageSettings" id="@cdktn/provider-google.cesApp.CesApp.putLanguageSettings"></a>

```go
func PutLanguageSettings(value CesAppLanguageSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putLanguageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a>

---

##### `PutLoggingSettings` <a name="PutLoggingSettings" id="@cdktn/provider-google.cesApp.CesApp.putLoggingSettings"></a>

```go
func PutLoggingSettings(value CesAppLoggingSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putLoggingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a>

---

##### `PutModelSettings` <a name="PutModelSettings" id="@cdktn/provider-google.cesApp.CesApp.putModelSettings"></a>

```go
func PutModelSettings(value CesAppModelSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.cesApp.CesApp.putTimeouts"></a>

```go
func PutTimeouts(value CesAppTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a>

---

##### `PutTimeZoneSettings` <a name="PutTimeZoneSettings" id="@cdktn/provider-google.cesApp.CesApp.putTimeZoneSettings"></a>

```go
func PutTimeZoneSettings(value CesAppTimeZoneSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putTimeZoneSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a>

---

##### `PutVariableDeclarations` <a name="PutVariableDeclarations" id="@cdktn/provider-google.cesApp.CesApp.putVariableDeclarations"></a>

```go
func PutVariableDeclarations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putVariableDeclarations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAudioProcessingConfig` <a name="ResetAudioProcessingConfig" id="@cdktn/provider-google.cesApp.CesApp.resetAudioProcessingConfig"></a>

```go
func ResetAudioProcessingConfig()
```

##### `ResetClientCertificateSettings` <a name="ResetClientCertificateSettings" id="@cdktn/provider-google.cesApp.CesApp.resetClientCertificateSettings"></a>

```go
func ResetClientCertificateSettings()
```

##### `ResetDataStoreSettings` <a name="ResetDataStoreSettings" id="@cdktn/provider-google.cesApp.CesApp.resetDataStoreSettings"></a>

```go
func ResetDataStoreSettings()
```

##### `ResetDefaultChannelProfile` <a name="ResetDefaultChannelProfile" id="@cdktn/provider-google.cesApp.CesApp.resetDefaultChannelProfile"></a>

```go
func ResetDefaultChannelProfile()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.cesApp.CesApp.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesApp.CesApp.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEvaluationMetricsThresholds` <a name="ResetEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesApp.resetEvaluationMetricsThresholds"></a>

```go
func ResetEvaluationMetricsThresholds()
```

##### `ResetGlobalInstruction` <a name="ResetGlobalInstruction" id="@cdktn/provider-google.cesApp.CesApp.resetGlobalInstruction"></a>

```go
func ResetGlobalInstruction()
```

##### `ResetGuardrails` <a name="ResetGuardrails" id="@cdktn/provider-google.cesApp.CesApp.resetGuardrails"></a>

```go
func ResetGuardrails()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.cesApp.CesApp.resetId"></a>

```go
func ResetId()
```

##### `ResetLanguageSettings` <a name="ResetLanguageSettings" id="@cdktn/provider-google.cesApp.CesApp.resetLanguageSettings"></a>

```go
func ResetLanguageSettings()
```

##### `ResetLoggingSettings` <a name="ResetLoggingSettings" id="@cdktn/provider-google.cesApp.CesApp.resetLoggingSettings"></a>

```go
func ResetLoggingSettings()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-google.cesApp.CesApp.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetModelSettings` <a name="ResetModelSettings" id="@cdktn/provider-google.cesApp.CesApp.resetModelSettings"></a>

```go
func ResetModelSettings()
```

##### `ResetPinned` <a name="ResetPinned" id="@cdktn/provider-google.cesApp.CesApp.resetPinned"></a>

```go
func ResetPinned()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.cesApp.CesApp.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRootAgent` <a name="ResetRootAgent" id="@cdktn/provider-google.cesApp.CesApp.resetRootAgent"></a>

```go
func ResetRootAgent()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.cesApp.CesApp.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeZoneSettings` <a name="ResetTimeZoneSettings" id="@cdktn/provider-google.cesApp.CesApp.resetTimeZoneSettings"></a>

```go
func ResetTimeZoneSettings()
```

##### `ResetToolExecutionMode` <a name="ResetToolExecutionMode" id="@cdktn/provider-google.cesApp.CesApp.resetToolExecutionMode"></a>

```go
func ResetToolExecutionMode()
```

##### `ResetVariableDeclarations` <a name="ResetVariableDeclarations" id="@cdktn/provider-google.cesApp.CesApp.resetVariableDeclarations"></a>

```go
func ResetVariableDeclarations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CesApp resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.cesApp.CesApp.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.CesApp_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.cesApp.CesApp.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.CesApp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesApp.CesApp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.cesApp.CesApp.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.CesApp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesApp.CesApp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.CesApp_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CesApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CesApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CesApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CesApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.audioProcessingConfig">AudioProcessingConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference">CesAppAudioProcessingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.clientCertificateSettings">ClientCertificateSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference">CesAppClientCertificateSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.dataStoreSettings">DataStoreSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference">CesAppDataStoreSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.defaultChannelProfile">DefaultChannelProfile</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference">CesAppDefaultChannelProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.deploymentCount">DeploymentCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.evaluationMetricsThresholds">EvaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.languageSettings">LanguageSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference">CesAppLanguageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.loggingSettings">LoggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference">CesAppLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference">CesAppModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference">CesAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.timeZoneSettings">TimeZoneSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference">CesAppTimeZoneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.variableDeclarations">VariableDeclarations</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList">CesAppVariableDeclarationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.audioProcessingConfigInput">AudioProcessingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.clientCertificateSettingsInput">ClientCertificateSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.dataStoreSettingsInput">DataStoreSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.defaultChannelProfileInput">DefaultChannelProfileInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.evaluationMetricsThresholdsInput">EvaluationMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.globalInstructionInput">GlobalInstructionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.guardrailsInput">GuardrailsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.languageSettingsInput">LanguageSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.loggingSettingsInput">LoggingSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.modelSettingsInput">ModelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.pinnedInput">PinnedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.rootAgentInput">RootAgentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.timeZoneSettingsInput">TimeZoneSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.toolExecutionModeInput">ToolExecutionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.variableDeclarationsInput">VariableDeclarationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.globalInstruction">GlobalInstruction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.guardrails">Guardrails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.pinned">Pinned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.rootAgent">RootAgent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.toolExecutionMode">ToolExecutionMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.cesApp.CesApp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.cesApp.CesApp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesApp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.cesApp.CesApp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.cesApp.CesApp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.cesApp.CesApp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.cesApp.CesApp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cesApp.CesApp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cesApp.CesApp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cesApp.CesApp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cesApp.CesApp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cesApp.CesApp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesApp.CesApp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cesApp.CesApp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AudioProcessingConfig`<sup>Required</sup> <a name="AudioProcessingConfig" id="@cdktn/provider-google.cesApp.CesApp.property.audioProcessingConfig"></a>

```go
func AudioProcessingConfig() CesAppAudioProcessingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference">CesAppAudioProcessingConfigOutputReference</a>

---

##### `ClientCertificateSettings`<sup>Required</sup> <a name="ClientCertificateSettings" id="@cdktn/provider-google.cesApp.CesApp.property.clientCertificateSettings"></a>

```go
func ClientCertificateSettings() CesAppClientCertificateSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference">CesAppClientCertificateSettingsOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.cesApp.CesApp.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DataStoreSettings`<sup>Required</sup> <a name="DataStoreSettings" id="@cdktn/provider-google.cesApp.CesApp.property.dataStoreSettings"></a>

```go
func DataStoreSettings() CesAppDataStoreSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference">CesAppDataStoreSettingsOutputReference</a>

---

##### `DefaultChannelProfile`<sup>Required</sup> <a name="DefaultChannelProfile" id="@cdktn/provider-google.cesApp.CesApp.property.defaultChannelProfile"></a>

```go
func DefaultChannelProfile() CesAppDefaultChannelProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference">CesAppDefaultChannelProfileOutputReference</a>

---

##### `DeploymentCount`<sup>Required</sup> <a name="DeploymentCount" id="@cdktn/provider-google.cesApp.CesApp.property.deploymentCount"></a>

```go
func DeploymentCount() *f64
```

- *Type:* *f64

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.cesApp.CesApp.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `EvaluationMetricsThresholds`<sup>Required</sup> <a name="EvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesApp.property.evaluationMetricsThresholds"></a>

```go
func EvaluationMetricsThresholds() CesAppEvaluationMetricsThresholdsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsOutputReference</a>

---

##### `LanguageSettings`<sup>Required</sup> <a name="LanguageSettings" id="@cdktn/provider-google.cesApp.CesApp.property.languageSettings"></a>

```go
func LanguageSettings() CesAppLanguageSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference">CesAppLanguageSettingsOutputReference</a>

---

##### `LoggingSettings`<sup>Required</sup> <a name="LoggingSettings" id="@cdktn/provider-google.cesApp.CesApp.property.loggingSettings"></a>

```go
func LoggingSettings() CesAppLoggingSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference">CesAppLoggingSettingsOutputReference</a>

---

##### `ModelSettings`<sup>Required</sup> <a name="ModelSettings" id="@cdktn/provider-google.cesApp.CesApp.property.modelSettings"></a>

```go
func ModelSettings() CesAppModelSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference">CesAppModelSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesApp.CesApp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.cesApp.CesApp.property.timeouts"></a>

```go
func Timeouts() CesAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference">CesAppTimeoutsOutputReference</a>

---

##### `TimeZoneSettings`<sup>Required</sup> <a name="TimeZoneSettings" id="@cdktn/provider-google.cesApp.CesApp.property.timeZoneSettings"></a>

```go
func TimeZoneSettings() CesAppTimeZoneSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference">CesAppTimeZoneSettingsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.cesApp.CesApp.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `VariableDeclarations`<sup>Required</sup> <a name="VariableDeclarations" id="@cdktn/provider-google.cesApp.CesApp.property.variableDeclarations"></a>

```go
func VariableDeclarations() CesAppVariableDeclarationsList
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList">CesAppVariableDeclarationsList</a>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktn/provider-google.cesApp.CesApp.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `AudioProcessingConfigInput`<sup>Optional</sup> <a name="AudioProcessingConfigInput" id="@cdktn/provider-google.cesApp.CesApp.property.audioProcessingConfigInput"></a>

```go
func AudioProcessingConfigInput() CesAppAudioProcessingConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a>

---

##### `ClientCertificateSettingsInput`<sup>Optional</sup> <a name="ClientCertificateSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.clientCertificateSettingsInput"></a>

```go
func ClientCertificateSettingsInput() CesAppClientCertificateSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a>

---

##### `DataStoreSettingsInput`<sup>Optional</sup> <a name="DataStoreSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.dataStoreSettingsInput"></a>

```go
func DataStoreSettingsInput() CesAppDataStoreSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a>

---

##### `DefaultChannelProfileInput`<sup>Optional</sup> <a name="DefaultChannelProfileInput" id="@cdktn/provider-google.cesApp.CesApp.property.defaultChannelProfileInput"></a>

```go
func DefaultChannelProfileInput() CesAppDefaultChannelProfile
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.cesApp.CesApp.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesApp.CesApp.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.cesApp.CesApp.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EvaluationMetricsThresholdsInput`<sup>Optional</sup> <a name="EvaluationMetricsThresholdsInput" id="@cdktn/provider-google.cesApp.CesApp.property.evaluationMetricsThresholdsInput"></a>

```go
func EvaluationMetricsThresholdsInput() CesAppEvaluationMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a>

---

##### `GlobalInstructionInput`<sup>Optional</sup> <a name="GlobalInstructionInput" id="@cdktn/provider-google.cesApp.CesApp.property.globalInstructionInput"></a>

```go
func GlobalInstructionInput() *string
```

- *Type:* *string

---

##### `GuardrailsInput`<sup>Optional</sup> <a name="GuardrailsInput" id="@cdktn/provider-google.cesApp.CesApp.property.guardrailsInput"></a>

```go
func GuardrailsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.cesApp.CesApp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LanguageSettingsInput`<sup>Optional</sup> <a name="LanguageSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.languageSettingsInput"></a>

```go
func LanguageSettingsInput() CesAppLanguageSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.cesApp.CesApp.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LoggingSettingsInput`<sup>Optional</sup> <a name="LoggingSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.loggingSettingsInput"></a>

```go
func LoggingSettingsInput() CesAppLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a>

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-google.cesApp.CesApp.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ModelSettingsInput`<sup>Optional</sup> <a name="ModelSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.modelSettingsInput"></a>

```go
func ModelSettingsInput() CesAppModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a>

---

##### `PinnedInput`<sup>Optional</sup> <a name="PinnedInput" id="@cdktn/provider-google.cesApp.CesApp.property.pinnedInput"></a>

```go
func PinnedInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.cesApp.CesApp.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RootAgentInput`<sup>Optional</sup> <a name="RootAgentInput" id="@cdktn/provider-google.cesApp.CesApp.property.rootAgentInput"></a>

```go
func RootAgentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.cesApp.CesApp.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneSettingsInput`<sup>Optional</sup> <a name="TimeZoneSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.timeZoneSettingsInput"></a>

```go
func TimeZoneSettingsInput() CesAppTimeZoneSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a>

---

##### `ToolExecutionModeInput`<sup>Optional</sup> <a name="ToolExecutionModeInput" id="@cdktn/provider-google.cesApp.CesApp.property.toolExecutionModeInput"></a>

```go
func ToolExecutionModeInput() *string
```

- *Type:* *string

---

##### `VariableDeclarationsInput`<sup>Optional</sup> <a name="VariableDeclarationsInput" id="@cdktn/provider-google.cesApp.CesApp.property.variableDeclarationsInput"></a>

```go
func VariableDeclarationsInput() interface{}
```

- *Type:* interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-google.cesApp.CesApp.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.cesApp.CesApp.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesApp.CesApp.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesApp.CesApp.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `GlobalInstruction`<sup>Required</sup> <a name="GlobalInstruction" id="@cdktn/provider-google.cesApp.CesApp.property.globalInstruction"></a>

```go
func GlobalInstruction() *string
```

- *Type:* *string

---

##### `Guardrails`<sup>Required</sup> <a name="Guardrails" id="@cdktn/provider-google.cesApp.CesApp.property.guardrails"></a>

```go
func Guardrails() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesApp.CesApp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.cesApp.CesApp.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google.cesApp.CesApp.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Pinned`<sup>Required</sup> <a name="Pinned" id="@cdktn/provider-google.cesApp.CesApp.property.pinned"></a>

```go
func Pinned() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.cesApp.CesApp.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RootAgent`<sup>Required</sup> <a name="RootAgent" id="@cdktn/provider-google.cesApp.CesApp.property.rootAgent"></a>

```go
func RootAgent() *string
```

- *Type:* *string

---

##### `ToolExecutionMode`<sup>Required</sup> <a name="ToolExecutionMode" id="@cdktn/provider-google.cesApp.CesApp.property.toolExecutionMode"></a>

```go
func ToolExecutionMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.cesApp.CesApp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CesAppAudioProcessingConfig <a name="CesAppAudioProcessingConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppAudioProcessingConfig {
	AmbientSoundConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig,
	BargeInConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppAudioProcessingConfigBargeInConfig,
	InactivityTimeout: *string,
	SynthesizeSpeechConfigs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.ambientSoundConfig">AmbientSoundConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a></code> | ambient_sound_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.bargeInConfig">BargeInConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a></code> | barge_in_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.inactivityTimeout">InactivityTimeout</a></code> | <code>*string</code> | The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.synthesizeSpeechConfigs">SynthesizeSpeechConfigs</a></code> | <code>interface{}</code> | synthesize_speech_configs block. |

---

##### `AmbientSoundConfig`<sup>Optional</sup> <a name="AmbientSoundConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.ambientSoundConfig"></a>

```go
AmbientSoundConfig CesAppAudioProcessingConfigAmbientSoundConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a>

ambient_sound_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#ambient_sound_config CesApp#ambient_sound_config}

---

##### `BargeInConfig`<sup>Optional</sup> <a name="BargeInConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.bargeInConfig"></a>

```go
BargeInConfig CesAppAudioProcessingConfigBargeInConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a>

barge_in_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#barge_in_config CesApp#barge_in_config}

---

##### `InactivityTimeout`<sup>Optional</sup> <a name="InactivityTimeout" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.inactivityTimeout"></a>

```go
InactivityTimeout *string
```

- *Type:* *string

The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement.

If not set, the agent will not prompt
the user for reengagement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#inactivity_timeout CesApp#inactivity_timeout}

---

##### `SynthesizeSpeechConfigs`<sup>Optional</sup> <a name="SynthesizeSpeechConfigs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.synthesizeSpeechConfigs"></a>

```go
SynthesizeSpeechConfigs interface{}
```

- *Type:* interface{}

synthesize_speech_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#synthesize_speech_configs CesApp#synthesize_speech_configs}

---

### CesAppAudioProcessingConfigAmbientSoundConfig <a name="CesAppAudioProcessingConfigAmbientSoundConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppAudioProcessingConfigAmbientSoundConfig {
	GcsUri: *string,
	PrebuiltAmbientSound: *string,
	VolumeGainDb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.gcsUri">GcsUri</a></code> | <code>*string</code> | Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud Storage](https://cloud.google.com/storage). Note: Please make sure the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com' has 'storage.objects.get' permission to the Cloud Storage object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.prebuiltAmbientSound">PrebuiltAmbientSound</a></code> | <code>*string</code> | Name of the prebuilt ambient sound. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.volumeGainDb">VolumeGainDb</a></code> | <code>*f64</code> | Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that. |

---

##### `GcsUri`<sup>Optional</sup> <a name="GcsUri" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.gcsUri"></a>

```go
GcsUri *string
```

- *Type:* *string

Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud Storage](https://cloud.google.com/storage). Note: Please make sure the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com' has 'storage.objects.get' permission to the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#gcs_uri CesApp#gcs_uri}

---

##### `PrebuiltAmbientSound`<sup>Optional</sup> <a name="PrebuiltAmbientSound" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.prebuiltAmbientSound"></a>

```go
PrebuiltAmbientSound *string
```

- *Type:* *string

Name of the prebuilt ambient sound.

Valid values are: - "coffee_shop" - "keyboard" - "keypad" - "hum"
-"office_1" - "office_2" - "office_3"
-"room_1" - "room_2" - "room_3"
-"room_4" - "room_5" - "air_conditioner"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#prebuilt_ambient_sound CesApp#prebuilt_ambient_sound}

---

##### `VolumeGainDb`<sup>Optional</sup> <a name="VolumeGainDb" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.volumeGainDb"></a>

```go
VolumeGainDb *f64
```

- *Type:* *f64

Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#volume_gain_db CesApp#volume_gain_db}

---

### CesAppAudioProcessingConfigBargeInConfig <a name="CesAppAudioProcessingConfigBargeInConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppAudioProcessingConfigBargeInConfig {
	BargeInAwareness: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig.property.bargeInAwareness">BargeInAwareness</a></code> | <code>interface{}</code> | If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message. |

---

##### `BargeInAwareness`<sup>Optional</sup> <a name="BargeInAwareness" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig.property.bargeInAwareness"></a>

```go
BargeInAwareness interface{}
```

- *Type:* interface{}

If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message.

This should not be used in scenarios where agent responses are displayed
visually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#barge_in_awareness CesApp#barge_in_awareness}

---

### CesAppAudioProcessingConfigSynthesizeSpeechConfigs <a name="CesAppAudioProcessingConfigSynthesizeSpeechConfigs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs {
	LanguageCode: *string,
	SpeakingRate: *f64,
	Voice: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.languageCode">LanguageCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#language_code CesApp#language_code}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.speakingRate">SpeakingRate</a></code> | <code>*f64</code> | The speaking rate/speed in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. Values outside of the range [0.25, 2.0] will return an error. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.voice">Voice</a></code> | <code>*string</code> | The name of the voice. |

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#language_code CesApp#language_code}.

---

##### `SpeakingRate`<sup>Optional</sup> <a name="SpeakingRate" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.speakingRate"></a>

```go
SpeakingRate *f64
```

- *Type:* *f64

The speaking rate/speed in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. Values outside of the range [0.25, 2.0] will return an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#speaking_rate CesApp#speaking_rate}

---

##### `Voice`<sup>Optional</sup> <a name="Voice" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.voice"></a>

```go
Voice *string
```

- *Type:* *string

The name of the voice.

If not set, the service will choose a
voice based on the other parameters such as language_code.
For the list of available voices, please refer to Supported voices and
languages from Cloud Text-to-Speech.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#voice CesApp#voice}

---

### CesAppClientCertificateSettings <a name="CesAppClientCertificateSettings" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppClientCertificateSettings {
	PrivateKey: *string,
	TlsCertificate: *string,
	Passphrase: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.privateKey">PrivateKey</a></code> | <code>*string</code> | The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: projects/{project}/secrets/{secret}/versions/{version}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.tlsCertificate">TlsCertificate</a></code> | <code>*string</code> | The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.passphrase">Passphrase</a></code> | <code>*string</code> | The passphrase to decrypt the private key. Should be left unset if the private key is not encrypted. |

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#private_key CesApp#private_key}

---

##### `TlsCertificate`<sup>Required</sup> <a name="TlsCertificate" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.tlsCertificate"></a>

```go
TlsCertificate *string
```

- *Type:* *string

The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#tls_certificate CesApp#tls_certificate}

---

##### `Passphrase`<sup>Optional</sup> <a name="Passphrase" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.passphrase"></a>

```go
Passphrase *string
```

- *Type:* *string

The passphrase to decrypt the private key. Should be left unset if the private key is not encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#passphrase CesApp#passphrase}

---

### CesAppConfig <a name="CesAppConfig" id="@cdktn/provider-google.cesApp.CesAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AppId: *string,
	DisplayName: *string,
	Location: *string,
	AudioProcessingConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppAudioProcessingConfig,
	ClientCertificateSettings: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppClientCertificateSettings,
	DataStoreSettings: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppDataStoreSettings,
	DefaultChannelProfile: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppDefaultChannelProfile,
	DeletionPolicy: *string,
	Description: *string,
	EvaluationMetricsThresholds: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppEvaluationMetricsThresholds,
	GlobalInstruction: *string,
	Guardrails: *[]*string,
	Id: *string,
	LanguageSettings: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppLanguageSettings,
	LoggingSettings: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppLoggingSettings,
	Metadata: *map[string]*string,
	ModelSettings: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppModelSettings,
	Pinned: interface{},
	Project: *string,
	RootAgent: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppTimeouts,
	TimeZoneSettings: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppTimeZoneSettings,
	ToolExecutionMode: *string,
	VariableDeclarations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.appId">AppId</a></code> | <code>*string</code> | The ID to use for the app, which will become the final component of the app's resource name. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name of the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.audioProcessingConfig">AudioProcessingConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a></code> | audio_processing_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.clientCertificateSettings">ClientCertificateSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a></code> | client_certificate_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.dataStoreSettings">DataStoreSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a></code> | data_store_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.defaultChannelProfile">DefaultChannelProfile</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a></code> | default_channel_profile block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.evaluationMetricsThresholds">EvaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a></code> | evaluation_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.globalInstruction">GlobalInstruction</a></code> | <code>*string</code> | Instructions for all the agents in the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.guardrails">Guardrails</a></code> | <code>*[]*string</code> | List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#id CesApp#id}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.languageSettings">LanguageSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a></code> | language_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.loggingSettings">LoggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a></code> | logging_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Metadata about the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.pinned">Pinned</a></code> | <code>interface{}</code> | Whether the app is pinned in the app list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#project CesApp#project}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.rootAgent">RootAgent</a></code> | <code>*string</code> | The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.timeZoneSettings">TimeZoneSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a></code> | time_zone_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.toolExecutionMode">ToolExecutionMode</a></code> | <code>*string</code> | The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.variableDeclarations">VariableDeclarations</a></code> | <code>interface{}</code> | variable_declarations block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cesApp.CesAppConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cesApp.CesAppConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cesApp.CesAppConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cesApp.CesAppConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cesApp.CesAppConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesApp.CesAppConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cesApp.CesAppConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-google.cesApp.CesAppConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

The ID to use for the app, which will become the final component of the app's resource name.

If not provided, a unique ID will be
automatically assigned for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#app_id CesApp#app_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesApp.CesAppConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#display_name CesApp#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.cesApp.CesAppConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#location CesApp#location}

---

##### `AudioProcessingConfig`<sup>Optional</sup> <a name="AudioProcessingConfig" id="@cdktn/provider-google.cesApp.CesAppConfig.property.audioProcessingConfig"></a>

```go
AudioProcessingConfig CesAppAudioProcessingConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a>

audio_processing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#audio_processing_config CesApp#audio_processing_config}

---

##### `ClientCertificateSettings`<sup>Optional</sup> <a name="ClientCertificateSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.clientCertificateSettings"></a>

```go
ClientCertificateSettings CesAppClientCertificateSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a>

client_certificate_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#client_certificate_settings CesApp#client_certificate_settings}

---

##### `DataStoreSettings`<sup>Optional</sup> <a name="DataStoreSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.dataStoreSettings"></a>

```go
DataStoreSettings CesAppDataStoreSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a>

data_store_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#data_store_settings CesApp#data_store_settings}

---

##### `DefaultChannelProfile`<sup>Optional</sup> <a name="DefaultChannelProfile" id="@cdktn/provider-google.cesApp.CesAppConfig.property.defaultChannelProfile"></a>

```go
DefaultChannelProfile CesAppDefaultChannelProfile
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a>

default_channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#default_channel_profile CesApp#default_channel_profile}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.cesApp.CesAppConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#deletion_policy CesApp#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesApp.CesAppConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#description CesApp#description}

---

##### `EvaluationMetricsThresholds`<sup>Optional</sup> <a name="EvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppConfig.property.evaluationMetricsThresholds"></a>

```go
EvaluationMetricsThresholds CesAppEvaluationMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a>

evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#evaluation_metrics_thresholds CesApp#evaluation_metrics_thresholds}

---

##### `GlobalInstruction`<sup>Optional</sup> <a name="GlobalInstruction" id="@cdktn/provider-google.cesApp.CesAppConfig.property.globalInstruction"></a>

```go
GlobalInstruction *string
```

- *Type:* *string

Instructions for all the agents in the app.

You can use this instruction to set up a stable identity or personality
across all the agents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#global_instruction CesApp#global_instruction}

---

##### `Guardrails`<sup>Optional</sup> <a name="Guardrails" id="@cdktn/provider-google.cesApp.CesAppConfig.property.guardrails"></a>

```go
Guardrails *[]*string
```

- *Type:* *[]*string

List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#guardrails CesApp#guardrails}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.cesApp.CesAppConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#id CesApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LanguageSettings`<sup>Optional</sup> <a name="LanguageSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.languageSettings"></a>

```go
LanguageSettings CesAppLanguageSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a>

language_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#language_settings CesApp#language_settings}

---

##### `LoggingSettings`<sup>Optional</sup> <a name="LoggingSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.loggingSettings"></a>

```go
LoggingSettings CesAppLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a>

logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#logging_settings CesApp#logging_settings}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-google.cesApp.CesAppConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Metadata about the app.

This field can be used to store additional
information relevant to the app's details or intended usages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#metadata CesApp#metadata}

---

##### `ModelSettings`<sup>Optional</sup> <a name="ModelSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.modelSettings"></a>

```go
ModelSettings CesAppModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#model_settings CesApp#model_settings}

---

##### `Pinned`<sup>Optional</sup> <a name="Pinned" id="@cdktn/provider-google.cesApp.CesAppConfig.property.pinned"></a>

```go
Pinned interface{}
```

- *Type:* interface{}

Whether the app is pinned in the app list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#pinned CesApp#pinned}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.cesApp.CesAppConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#project CesApp#project}.

---

##### `RootAgent`<sup>Optional</sup> <a name="RootAgent" id="@cdktn/provider-google.cesApp.CesAppConfig.property.rootAgent"></a>

```go
RootAgent *string
```

- *Type:* *string

The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#root_agent CesApp#root_agent}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.cesApp.CesAppConfig.property.timeouts"></a>

```go
Timeouts CesAppTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#timeouts CesApp#timeouts}

---

##### `TimeZoneSettings`<sup>Optional</sup> <a name="TimeZoneSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.timeZoneSettings"></a>

```go
TimeZoneSettings CesAppTimeZoneSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a>

time_zone_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#time_zone_settings CesApp#time_zone_settings}

---

##### `ToolExecutionMode`<sup>Optional</sup> <a name="ToolExecutionMode" id="@cdktn/provider-google.cesApp.CesAppConfig.property.toolExecutionMode"></a>

```go
ToolExecutionMode *string
```

- *Type:* *string

The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#tool_execution_mode CesApp#tool_execution_mode}

---

##### `VariableDeclarations`<sup>Optional</sup> <a name="VariableDeclarations" id="@cdktn/provider-google.cesApp.CesAppConfig.property.variableDeclarations"></a>

```go
VariableDeclarations interface{}
```

- *Type:* interface{}

variable_declarations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#variable_declarations CesApp#variable_declarations}

---

### CesAppDataStoreSettings <a name="CesAppDataStoreSettings" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppDataStoreSettings {

}
```


### CesAppDataStoreSettingsEngines <a name="CesAppDataStoreSettingsEngines" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEngines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEngines.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppDataStoreSettingsEngines {

}
```


### CesAppDefaultChannelProfile <a name="CesAppDefaultChannelProfile" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppDefaultChannelProfile {
	ChannelType: *string,
	DisableBargeInControl: interface{},
	DisableDtmf: interface{},
	PersonaProperty: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppDefaultChannelProfilePersonaProperty,
	ProfileId: *string,
	WebWidgetConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppDefaultChannelProfileWebWidgetConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.channelType">ChannelType</a></code> | <code>*string</code> | The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.disableBargeInControl">DisableBargeInControl</a></code> | <code>interface{}</code> | Whether to disable user barge-in in the conversation. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.disableDtmf">DisableDtmf</a></code> | <code>interface{}</code> | Whether to disable DTMF (dual-tone multi-frequency). |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.personaProperty">PersonaProperty</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a></code> | persona_property block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.profileId">ProfileId</a></code> | <code>*string</code> | The unique identifier of the channel profile. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.webWidgetConfig">WebWidgetConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a></code> | web_widget_config block. |

---

##### `ChannelType`<sup>Optional</sup> <a name="ChannelType" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.channelType"></a>

```go
ChannelType *string
```

- *Type:* *string

The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#channel_type CesApp#channel_type}

---

##### `DisableBargeInControl`<sup>Optional</sup> <a name="DisableBargeInControl" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.disableBargeInControl"></a>

```go
DisableBargeInControl interface{}
```

- *Type:* interface{}

Whether to disable user barge-in in the conversation.

* true: User interruptions are disabled while the agent is speaking.
* false: The agent retains automatic control over when the user can interrupt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#disable_barge_in_control CesApp#disable_barge_in_control}

---

##### `DisableDtmf`<sup>Optional</sup> <a name="DisableDtmf" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.disableDtmf"></a>

```go
DisableDtmf interface{}
```

- *Type:* interface{}

Whether to disable DTMF (dual-tone multi-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#disable_dtmf CesApp#disable_dtmf}

---

##### `PersonaProperty`<sup>Optional</sup> <a name="PersonaProperty" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.personaProperty"></a>

```go
PersonaProperty CesAppDefaultChannelProfilePersonaProperty
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a>

persona_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#persona_property CesApp#persona_property}

---

##### `ProfileId`<sup>Optional</sup> <a name="ProfileId" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.profileId"></a>

```go
ProfileId *string
```

- *Type:* *string

The unique identifier of the channel profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#profile_id CesApp#profile_id}

---

##### `WebWidgetConfig`<sup>Optional</sup> <a name="WebWidgetConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.webWidgetConfig"></a>

```go
WebWidgetConfig CesAppDefaultChannelProfileWebWidgetConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a>

web_widget_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#web_widget_config CesApp#web_widget_config}

---

### CesAppDefaultChannelProfilePersonaProperty <a name="CesAppDefaultChannelProfilePersonaProperty" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppDefaultChannelProfilePersonaProperty {
	Persona: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty.property.persona">Persona</a></code> | <code>*string</code> | The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY. |

---

##### `Persona`<sup>Optional</sup> <a name="Persona" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty.property.persona"></a>

```go
Persona *string
```

- *Type:* *string

The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#persona CesApp#persona}

---

### CesAppDefaultChannelProfileWebWidgetConfig <a name="CesAppDefaultChannelProfileWebWidgetConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppDefaultChannelProfileWebWidgetConfig {
	Modality: *string,
	Theme: *string,
	WebWidgetTitle: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.modality">Modality</a></code> | <code>*string</code> | The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.theme">Theme</a></code> | <code>*string</code> | The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.webWidgetTitle">WebWidgetTitle</a></code> | <code>*string</code> | The title of the web widget. |

---

##### `Modality`<sup>Optional</sup> <a name="Modality" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.modality"></a>

```go
Modality *string
```

- *Type:* *string

The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#modality CesApp#modality}

---

##### `Theme`<sup>Optional</sup> <a name="Theme" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.theme"></a>

```go
Theme *string
```

- *Type:* *string

The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#theme CesApp#theme}

---

##### `WebWidgetTitle`<sup>Optional</sup> <a name="WebWidgetTitle" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.webWidgetTitle"></a>

```go
WebWidgetTitle *string
```

- *Type:* *string

The title of the web widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#web_widget_title CesApp#web_widget_title}

---

### CesAppEvaluationMetricsThresholds <a name="CesAppEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppEvaluationMetricsThresholds {
	GoldenEvaluationMetricsThresholds: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds.property.goldenEvaluationMetricsThresholds">GoldenEvaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | golden_evaluation_metrics_thresholds block. |

---

##### `GoldenEvaluationMetricsThresholds`<sup>Optional</sup> <a name="GoldenEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds.property.goldenEvaluationMetricsThresholds"></a>

```go
GoldenEvaluationMetricsThresholds CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

golden_evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#golden_evaluation_metrics_thresholds CesApp#golden_evaluation_metrics_thresholds}

---

### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds {
	ExpectationLevelMetricsThresholds: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds,
	TurnLevelMetricsThresholds: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.expectationLevelMetricsThresholds">ExpectationLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | expectation_level_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.turnLevelMetricsThresholds">TurnLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | turn_level_metrics_thresholds block. |

---

##### `ExpectationLevelMetricsThresholds`<sup>Optional</sup> <a name="ExpectationLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.expectationLevelMetricsThresholds"></a>

```go
ExpectationLevelMetricsThresholds CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

expectation_level_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#expectation_level_metrics_thresholds CesApp#expectation_level_metrics_thresholds}

---

##### `TurnLevelMetricsThresholds`<sup>Optional</sup> <a name="TurnLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.turnLevelMetricsThresholds"></a>

```go
TurnLevelMetricsThresholds CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

turn_level_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#turn_level_metrics_thresholds CesApp#turn_level_metrics_thresholds}

---

### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds {
	ToolInvocationParameterCorrectnessThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.property.toolInvocationParameterCorrectnessThreshold">ToolInvocationParameterCorrectnessThreshold</a></code> | <code>*f64</code> | The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0. |

---

##### `ToolInvocationParameterCorrectnessThreshold`<sup>Optional</sup> <a name="ToolInvocationParameterCorrectnessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.property.toolInvocationParameterCorrectnessThreshold"></a>

```go
ToolInvocationParameterCorrectnessThreshold *f64
```

- *Type:* *f64

The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#tool_invocation_parameter_correctness_threshold CesApp#tool_invocation_parameter_correctness_threshold}

---

### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds {
	OverallToolInvocationCorrectnessThreshold: *f64,
	SemanticSimilaritySuccessThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.overallToolInvocationCorrectnessThreshold">OverallToolInvocationCorrectnessThreshold</a></code> | <code>*f64</code> | The success threshold for overall tool invocation correctness. Must be a float between 0 and 1. Default is 1.0. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.semanticSimilaritySuccessThreshold">SemanticSimilaritySuccessThreshold</a></code> | <code>*f64</code> | The success threshold for semantic similarity. Must be an integer between 0 and 4. Default is >= 3. |

---

##### `OverallToolInvocationCorrectnessThreshold`<sup>Optional</sup> <a name="OverallToolInvocationCorrectnessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.overallToolInvocationCorrectnessThreshold"></a>

```go
OverallToolInvocationCorrectnessThreshold *f64
```

- *Type:* *f64

The success threshold for overall tool invocation correctness. Must be a float between 0 and 1. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#overall_tool_invocation_correctness_threshold CesApp#overall_tool_invocation_correctness_threshold}

---

##### `SemanticSimilaritySuccessThreshold`<sup>Optional</sup> <a name="SemanticSimilaritySuccessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.semanticSimilaritySuccessThreshold"></a>

```go
SemanticSimilaritySuccessThreshold *f64
```

- *Type:* *f64

The success threshold for semantic similarity. Must be an integer between 0 and 4. Default is >= 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#semantic_similarity_success_threshold CesApp#semantic_similarity_success_threshold}

---

### CesAppLanguageSettings <a name="CesAppLanguageSettings" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppLanguageSettings {
	DefaultLanguageCode: *string,
	EnableMultilingualSupport: interface{},
	FallbackAction: *string,
	SupportedLanguageCodes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.defaultLanguageCode">DefaultLanguageCode</a></code> | <code>*string</code> | The default language code of the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.enableMultilingualSupport">EnableMultilingualSupport</a></code> | <code>interface{}</code> | Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.fallbackAction">FallbackAction</a></code> | <code>*string</code> | The action to perform when an agent receives input in an unsupported language. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.supportedLanguageCodes">SupportedLanguageCodes</a></code> | <code>*[]*string</code> | List of languages codes supported by the app, in addition to the 'default_language_code'. |

---

##### `DefaultLanguageCode`<sup>Optional</sup> <a name="DefaultLanguageCode" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.defaultLanguageCode"></a>

```go
DefaultLanguageCode *string
```

- *Type:* *string

The default language code of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#default_language_code CesApp#default_language_code}

---

##### `EnableMultilingualSupport`<sup>Optional</sup> <a name="EnableMultilingualSupport" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.enableMultilingualSupport"></a>

```go
EnableMultilingualSupport interface{}
```

- *Type:* interface{}

Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#enable_multilingual_support CesApp#enable_multilingual_support}

---

##### `FallbackAction`<sup>Optional</sup> <a name="FallbackAction" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.fallbackAction"></a>

```go
FallbackAction *string
```

- *Type:* *string

The action to perform when an agent receives input in an unsupported language.

This can be a predefined action or a custom tool call.
Valid values are:

* A tool's full resource name, which triggers a specific tool execution.
* A predefined system action, such as "escalate" or "exit", which triggers
  an EndSession signal with corresponding metadata
  to terminate the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#fallback_action CesApp#fallback_action}

---

##### `SupportedLanguageCodes`<sup>Optional</sup> <a name="SupportedLanguageCodes" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.supportedLanguageCodes"></a>

```go
SupportedLanguageCodes *[]*string
```

- *Type:* *[]*string

List of languages codes supported by the app, in addition to the 'default_language_code'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#supported_language_codes CesApp#supported_language_codes}

---

### CesAppLoggingSettings <a name="CesAppLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppLoggingSettings {
	AudioRecordingConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppLoggingSettingsAudioRecordingConfig,
	BigqueryExportSettings: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppLoggingSettingsBigqueryExportSettings,
	CloudLoggingSettings: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppLoggingSettingsCloudLoggingSettings,
	ConversationLoggingSettings: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppLoggingSettingsConversationLoggingSettings,
	RedactionConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppLoggingSettingsRedactionConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.audioRecordingConfig">AudioRecordingConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a></code> | audio_recording_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.bigqueryExportSettings">BigqueryExportSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a></code> | bigquery_export_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.cloudLoggingSettings">CloudLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a></code> | cloud_logging_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.conversationLoggingSettings">ConversationLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a></code> | conversation_logging_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.redactionConfig">RedactionConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a></code> | redaction_config block. |

---

##### `AudioRecordingConfig`<sup>Optional</sup> <a name="AudioRecordingConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.audioRecordingConfig"></a>

```go
AudioRecordingConfig CesAppLoggingSettingsAudioRecordingConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a>

audio_recording_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#audio_recording_config CesApp#audio_recording_config}

---

##### `BigqueryExportSettings`<sup>Optional</sup> <a name="BigqueryExportSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.bigqueryExportSettings"></a>

```go
BigqueryExportSettings CesAppLoggingSettingsBigqueryExportSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a>

bigquery_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#bigquery_export_settings CesApp#bigquery_export_settings}

---

##### `CloudLoggingSettings`<sup>Optional</sup> <a name="CloudLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.cloudLoggingSettings"></a>

```go
CloudLoggingSettings CesAppLoggingSettingsCloudLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a>

cloud_logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#cloud_logging_settings CesApp#cloud_logging_settings}

---

##### `ConversationLoggingSettings`<sup>Optional</sup> <a name="ConversationLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.conversationLoggingSettings"></a>

```go
ConversationLoggingSettings CesAppLoggingSettingsConversationLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a>

conversation_logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#conversation_logging_settings CesApp#conversation_logging_settings}

---

##### `RedactionConfig`<sup>Optional</sup> <a name="RedactionConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.redactionConfig"></a>

```go
RedactionConfig CesAppLoggingSettingsRedactionConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a>

redaction_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#redaction_config CesApp#redaction_config}

---

### CesAppLoggingSettingsAudioRecordingConfig <a name="CesAppLoggingSettingsAudioRecordingConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppLoggingSettingsAudioRecordingConfig {
	GcsBucket: *string,
	GcsPathPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.property.gcsBucket">GcsBucket</a></code> | <code>*string</code> | The [Cloud Storage](https://cloud.google.com/storage) bucket to store the session audio recordings. The URI must start with "gs://". Note: If the Cloud Storage bucket is in a different project from the app, you should grant 'storage.objects.create' permission to the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.property.gcsPathPrefix">GcsPathPrefix</a></code> | <code>*string</code> | The Cloud Storage path prefix for audio recordings. |

---

##### `GcsBucket`<sup>Optional</sup> <a name="GcsBucket" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.property.gcsBucket"></a>

```go
GcsBucket *string
```

- *Type:* *string

The [Cloud Storage](https://cloud.google.com/storage) bucket to store the session audio recordings. The URI must start with "gs://". Note: If the Cloud Storage bucket is in a different project from the app, you should grant 'storage.objects.create' permission to the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#gcs_bucket CesApp#gcs_bucket}

---

##### `GcsPathPrefix`<sup>Optional</sup> <a name="GcsPathPrefix" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.property.gcsPathPrefix"></a>

```go
GcsPathPrefix *string
```

- *Type:* *string

The Cloud Storage path prefix for audio recordings.

This prefix can include the following placeholders, which will be
dynamically substituted at serving time:

* $project:   project ID
* $location:  app location
* $app:       app ID
* $date:      session date in YYYY-MM-DD format
* $session:   session ID
  If the path prefix is not specified, the default prefix
  '$project/$location/$app/$date/$session/' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#gcs_path_prefix CesApp#gcs_path_prefix}

---

### CesAppLoggingSettingsBigqueryExportSettings <a name="CesAppLoggingSettingsBigqueryExportSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppLoggingSettingsBigqueryExportSettings {
	Dataset: *string,
	Enabled: interface{},
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.dataset">Dataset</a></code> | <code>*string</code> | The BigQuery dataset to export the data to. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicates whether the BigQuery export is enabled. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.project">Project</a></code> | <code>*string</code> | The project ID of the BigQuery dataset to export the data to. |

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.dataset"></a>

```go
Dataset *string
```

- *Type:* *string

The BigQuery dataset to export the data to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#dataset CesApp#dataset}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicates whether the BigQuery export is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#enabled CesApp#enabled}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project ID of the BigQuery dataset to export the data to.

Note: If the BigQuery dataset is in a different project from the app, you should grant
roles/bigquery.admin role to the CES service agent service-<PROJECT-
NUMBER>@gcp-sa-ces.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#project CesApp#project}

---

### CesAppLoggingSettingsCloudLoggingSettings <a name="CesAppLoggingSettingsCloudLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppLoggingSettingsCloudLoggingSettings {
	EnableCloudLogging: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings.property.enableCloudLogging">EnableCloudLogging</a></code> | <code>interface{}</code> | Whether to enable Cloud Logging for the sessions. |

---

##### `EnableCloudLogging`<sup>Optional</sup> <a name="EnableCloudLogging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings.property.enableCloudLogging"></a>

```go
EnableCloudLogging interface{}
```

- *Type:* interface{}

Whether to enable Cloud Logging for the sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#enable_cloud_logging CesApp#enable_cloud_logging}

---

### CesAppLoggingSettingsConversationLoggingSettings <a name="CesAppLoggingSettingsConversationLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppLoggingSettingsConversationLoggingSettings {
	DisableConversationLogging: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings.property.disableConversationLogging">DisableConversationLogging</a></code> | <code>interface{}</code> | Whether to disable conversation logging for the sessions. |

---

##### `DisableConversationLogging`<sup>Optional</sup> <a name="DisableConversationLogging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings.property.disableConversationLogging"></a>

```go
DisableConversationLogging interface{}
```

- *Type:* interface{}

Whether to disable conversation logging for the sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#disable_conversation_logging CesApp#disable_conversation_logging}

---

### CesAppLoggingSettingsRedactionConfig <a name="CesAppLoggingSettingsRedactionConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppLoggingSettingsRedactionConfig {
	DeidentifyTemplate: *string,
	EnableRedaction: interface{},
	InspectTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.deidentifyTemplate">DeidentifyTemplate</a></code> | <code>*string</code> | [DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.enableRedaction">EnableRedaction</a></code> | <code>interface{}</code> | If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.inspectTemplate">InspectTemplate</a></code> | <code>*string</code> | [DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'. |

---

##### `DeidentifyTemplate`<sup>Optional</sup> <a name="DeidentifyTemplate" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.deidentifyTemplate"></a>

```go
DeidentifyTemplate *string
```

- *Type:* *string

[DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#deidentify_template CesApp#deidentify_template}

---

##### `EnableRedaction`<sup>Optional</sup> <a name="EnableRedaction" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.enableRedaction"></a>

```go
EnableRedaction interface{}
```

- *Type:* interface{}

If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#enable_redaction CesApp#enable_redaction}

---

##### `InspectTemplate`<sup>Optional</sup> <a name="InspectTemplate" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.inspectTemplate"></a>

```go
InspectTemplate *string
```

- *Type:* *string

[DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#inspect_template CesApp#inspect_template}

---

### CesAppModelSettings <a name="CesAppModelSettings" id="@cdktn/provider-google.cesApp.CesAppModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppModelSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppModelSettings {
	Model: *string,
	Temperature: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings.property.model">Model</a></code> | <code>*string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings.property.temperature">Temperature</a></code> | <code>*f64</code> | If set, this temperature will be used for the LLM model. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-google.cesApp.CesAppModelSettings.property.model"></a>

```go
Model *string
```

- *Type:* *string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#model CesApp#model}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-google.cesApp.CesAppModelSettings.property.temperature"></a>

```go
Temperature *f64
```

- *Type:* *f64

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#temperature CesApp#temperature}

---

### CesAppTimeouts <a name="CesAppTimeouts" id="@cdktn/provider-google.cesApp.CesAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#create CesApp#create}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#delete CesApp#delete}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#update CesApp#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.cesApp.CesAppTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#create CesApp#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.cesApp.CesAppTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#delete CesApp#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.cesApp.CesAppTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#update CesApp#update}.

---

### CesAppTimeZoneSettings <a name="CesAppTimeZoneSettings" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppTimeZoneSettings {
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings.property.timeZone">TimeZone</a></code> | <code>*string</code> | The time zone of the app from the time zone database, e.g., America/Los_Angeles, Europe/Paris. |

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettings.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

The time zone of the app from the time zone database, e.g., America/Los_Angeles, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#time_zone CesApp#time_zone}

---

### CesAppVariableDeclarations <a name="CesAppVariableDeclarations" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppVariableDeclarations {
	Description: *string,
	Name: *string,
	Schema: github.com/cdktn-io/cdktn-provider-google-go/google/v19.cesApp.CesAppVariableDeclarationsSchema,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.description">Description</a></code> | <code>*string</code> | The description of the variable. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.name">Name</a></code> | <code>*string</code> | The name of the variable. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a></code> | schema block. |

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#description CesApp#description}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the variable.

The name must start with a letter or underscore
and contain only letters, numbers, or underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#name CesApp#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.schema"></a>

```go
Schema CesAppVariableDeclarationsSchema
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#schema CesApp#schema}

---

### CesAppVariableDeclarationsSchema <a name="CesAppVariableDeclarationsSchema" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

&cesapp.CesAppVariableDeclarationsSchema {
	Type: *string,
	AdditionalProperties: *string,
	AnyOf: *string,
	Default: *string,
	Defs: *string,
	Description: *string,
	Enum: *[]*string,
	Items: *string,
	Nullable: interface{},
	PrefixItems: *string,
	Properties: *string,
	Ref: *string,
	Required: *[]*string,
	Title: *string,
	UniqueItems: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.type">Type</a></code> | <code>*string</code> | The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.additionalProperties">AdditionalProperties</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.anyOf">AnyOf</a></code> | <code>*string</code> | Optional. The instance value should be valid against at least one of the schemas in this list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.default">Default</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.defs">Defs</a></code> | <code>*string</code> | A map of definitions for use by ref. Only allowed at the root of the schema. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.description">Description</a></code> | <code>*string</code> | The description of the data. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.enum">Enum</a></code> | <code>*[]*string</code> | Possible values of the element of primitive type with enum format. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.items">Items</a></code> | <code>*string</code> | Schema of the elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.nullable">Nullable</a></code> | <code>interface{}</code> | Indicates if the value may be null. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.prefixItems">PrefixItems</a></code> | <code>*string</code> | Optional. Schemas of initial elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.properties">Properties</a></code> | <code>*string</code> | Properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.ref">Ref</a></code> | <code>*string</code> | Allows indirect references between schema nodes. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.required">Required</a></code> | <code>*[]*string</code> | Required properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.title">Title</a></code> | <code>*string</code> | The title of the schema. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.uniqueItems">UniqueItems</a></code> | <code>interface{}</code> | Indicate the items in the array must be unique. Only applies to TYPE.ARRAY. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#type CesApp#type}

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.additionalProperties"></a>

```go
AdditionalProperties *string
```

- *Type:* *string

Optional.

Defines the schema for additional properties allowed in an object.
The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#additional_properties CesApp#additional_properties}

---

##### `AnyOf`<sup>Optional</sup> <a name="AnyOf" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.anyOf"></a>

```go
AnyOf *string
```

- *Type:* *string

Optional. The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#any_of CesApp#any_of}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.default"></a>

```go
Default *string
```

- *Type:* *string

Optional.

Default value of the data. Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be encoded as a JSON string.
Use 'jsonencode' in Terraform HCL to encode the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#default CesApp#default}

---

##### `Defs`<sup>Optional</sup> <a name="Defs" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.defs"></a>

```go
Defs *string
```

- *Type:* *string

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#defs CesApp#defs}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#description CesApp#description}

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.enum"></a>

```go
Enum *[]*string
```

- *Type:* *[]*string

Possible values of the element of primitive type with enum format.

Examples:

1. We can define direction as :
   {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
   {type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#enum CesApp#enum}

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.items"></a>

```go
Items *string
```

- *Type:* *string

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#items CesApp#items}

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.nullable"></a>

```go
Nullable interface{}
```

- *Type:* interface{}

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#nullable CesApp#nullable}

---

##### `PrefixItems`<sup>Optional</sup> <a name="PrefixItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.prefixItems"></a>

```go
PrefixItems *string
```

- *Type:* *string

Optional. Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#prefix_items CesApp#prefix_items}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.properties"></a>

```go
Properties *string
```

- *Type:* *string

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#properties CesApp#properties}

---

##### `Ref`<sup>Optional</sup> <a name="Ref" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.ref"></a>

```go
Ref *string
```

- *Type:* *string

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#ref CesApp#ref}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.required"></a>

```go
Required *[]*string
```

- *Type:* *[]*string

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#required CesApp#required}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.title"></a>

```go
Title *string
```

- *Type:* *string

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#title CesApp#title}

---

##### `UniqueItems`<sup>Optional</sup> <a name="UniqueItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.uniqueItems"></a>

```go
UniqueItems interface{}
```

- *Type:* interface{}

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/resources/ces_app#unique_items CesApp#unique_items}

---

## Classes <a name="Classes" id="Classes"></a>

### CesAppAudioProcessingConfigAmbientSoundConfigOutputReference <a name="CesAppAudioProcessingConfigAmbientSoundConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppAudioProcessingConfigAmbientSoundConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppAudioProcessingConfigAmbientSoundConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetGcsUri">ResetGcsUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetPrebuiltAmbientSound">ResetPrebuiltAmbientSound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetVolumeGainDb">ResetVolumeGainDb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGcsUri` <a name="ResetGcsUri" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetGcsUri"></a>

```go
func ResetGcsUri()
```

##### `ResetPrebuiltAmbientSound` <a name="ResetPrebuiltAmbientSound" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetPrebuiltAmbientSound"></a>

```go
func ResetPrebuiltAmbientSound()
```

##### `ResetVolumeGainDb` <a name="ResetVolumeGainDb" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetVolumeGainDb"></a>

```go
func ResetVolumeGainDb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUriInput">GcsUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSoundInput">PrebuiltAmbientSoundInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDbInput">VolumeGainDbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUri">GcsUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSound">PrebuiltAmbientSound</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDb">VolumeGainDb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcsUriInput`<sup>Optional</sup> <a name="GcsUriInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUriInput"></a>

```go
func GcsUriInput() *string
```

- *Type:* *string

---

##### `PrebuiltAmbientSoundInput`<sup>Optional</sup> <a name="PrebuiltAmbientSoundInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSoundInput"></a>

```go
func PrebuiltAmbientSoundInput() *string
```

- *Type:* *string

---

##### `VolumeGainDbInput`<sup>Optional</sup> <a name="VolumeGainDbInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDbInput"></a>

```go
func VolumeGainDbInput() *f64
```

- *Type:* *f64

---

##### `GcsUri`<sup>Required</sup> <a name="GcsUri" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUri"></a>

```go
func GcsUri() *string
```

- *Type:* *string

---

##### `PrebuiltAmbientSound`<sup>Required</sup> <a name="PrebuiltAmbientSound" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSound"></a>

```go
func PrebuiltAmbientSound() *string
```

- *Type:* *string

---

##### `VolumeGainDb`<sup>Required</sup> <a name="VolumeGainDb" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDb"></a>

```go
func VolumeGainDb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppAudioProcessingConfigAmbientSoundConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a>

---


### CesAppAudioProcessingConfigBargeInConfigOutputReference <a name="CesAppAudioProcessingConfigBargeInConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppAudioProcessingConfigBargeInConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppAudioProcessingConfigBargeInConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resetBargeInAwareness">ResetBargeInAwareness</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBargeInAwareness` <a name="ResetBargeInAwareness" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resetBargeInAwareness"></a>

```go
func ResetBargeInAwareness()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwarenessInput">BargeInAwarenessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwareness">BargeInAwareness</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BargeInAwarenessInput`<sup>Optional</sup> <a name="BargeInAwarenessInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwarenessInput"></a>

```go
func BargeInAwarenessInput() interface{}
```

- *Type:* interface{}

---

##### `BargeInAwareness`<sup>Required</sup> <a name="BargeInAwareness" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwareness"></a>

```go
func BargeInAwareness() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppAudioProcessingConfigBargeInConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a>

---


### CesAppAudioProcessingConfigOutputReference <a name="CesAppAudioProcessingConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppAudioProcessingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppAudioProcessingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig">PutAmbientSoundConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putBargeInConfig">PutBargeInConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs">PutSynthesizeSpeechConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetAmbientSoundConfig">ResetAmbientSoundConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetBargeInConfig">ResetBargeInConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetInactivityTimeout">ResetInactivityTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetSynthesizeSpeechConfigs">ResetSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmbientSoundConfig` <a name="PutAmbientSoundConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig"></a>

```go
func PutAmbientSoundConfig(value CesAppAudioProcessingConfigAmbientSoundConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a>

---

##### `PutBargeInConfig` <a name="PutBargeInConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putBargeInConfig"></a>

```go
func PutBargeInConfig(value CesAppAudioProcessingConfigBargeInConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putBargeInConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a>

---

##### `PutSynthesizeSpeechConfigs` <a name="PutSynthesizeSpeechConfigs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs"></a>

```go
func PutSynthesizeSpeechConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAmbientSoundConfig` <a name="ResetAmbientSoundConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetAmbientSoundConfig"></a>

```go
func ResetAmbientSoundConfig()
```

##### `ResetBargeInConfig` <a name="ResetBargeInConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetBargeInConfig"></a>

```go
func ResetBargeInConfig()
```

##### `ResetInactivityTimeout` <a name="ResetInactivityTimeout" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetInactivityTimeout"></a>

```go
func ResetInactivityTimeout()
```

##### `ResetSynthesizeSpeechConfigs` <a name="ResetSynthesizeSpeechConfigs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetSynthesizeSpeechConfigs"></a>

```go
func ResetSynthesizeSpeechConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.ambientSoundConfig">AmbientSoundConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference">CesAppAudioProcessingConfigAmbientSoundConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.bargeInConfig">BargeInConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference">CesAppAudioProcessingConfigBargeInConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigs">SynthesizeSpeechConfigs</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList">CesAppAudioProcessingConfigSynthesizeSpeechConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.ambientSoundConfigInput">AmbientSoundConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.bargeInConfigInput">BargeInConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.inactivityTimeoutInput">InactivityTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigsInput">SynthesizeSpeechConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.inactivityTimeout">InactivityTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmbientSoundConfig`<sup>Required</sup> <a name="AmbientSoundConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.ambientSoundConfig"></a>

```go
func AmbientSoundConfig() CesAppAudioProcessingConfigAmbientSoundConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference">CesAppAudioProcessingConfigAmbientSoundConfigOutputReference</a>

---

##### `BargeInConfig`<sup>Required</sup> <a name="BargeInConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.bargeInConfig"></a>

```go
func BargeInConfig() CesAppAudioProcessingConfigBargeInConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference">CesAppAudioProcessingConfigBargeInConfigOutputReference</a>

---

##### `SynthesizeSpeechConfigs`<sup>Required</sup> <a name="SynthesizeSpeechConfigs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigs"></a>

```go
func SynthesizeSpeechConfigs() CesAppAudioProcessingConfigSynthesizeSpeechConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList">CesAppAudioProcessingConfigSynthesizeSpeechConfigsList</a>

---

##### `AmbientSoundConfigInput`<sup>Optional</sup> <a name="AmbientSoundConfigInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.ambientSoundConfigInput"></a>

```go
func AmbientSoundConfigInput() CesAppAudioProcessingConfigAmbientSoundConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a>

---

##### `BargeInConfigInput`<sup>Optional</sup> <a name="BargeInConfigInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.bargeInConfigInput"></a>

```go
func BargeInConfigInput() CesAppAudioProcessingConfigBargeInConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a>

---

##### `InactivityTimeoutInput`<sup>Optional</sup> <a name="InactivityTimeoutInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.inactivityTimeoutInput"></a>

```go
func InactivityTimeoutInput() *string
```

- *Type:* *string

---

##### `SynthesizeSpeechConfigsInput`<sup>Optional</sup> <a name="SynthesizeSpeechConfigsInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigsInput"></a>

```go
func SynthesizeSpeechConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `InactivityTimeout`<sup>Required</sup> <a name="InactivityTimeout" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.inactivityTimeout"></a>

```go
func InactivityTimeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppAudioProcessingConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a>

---


### CesAppAudioProcessingConfigSynthesizeSpeechConfigsList <a name="CesAppAudioProcessingConfigSynthesizeSpeechConfigsList" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppAudioProcessingConfigSynthesizeSpeechConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CesAppAudioProcessingConfigSynthesizeSpeechConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get"></a>

```go
func Get(index *f64) CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference <a name="CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetSpeakingRate">ResetSpeakingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetVoice">ResetVoice</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSpeakingRate` <a name="ResetSpeakingRate" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetSpeakingRate"></a>

```go
func ResetSpeakingRate()
```

##### `ResetVoice` <a name="ResetVoice" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetVoice"></a>

```go
func ResetVoice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRateInput">SpeakingRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voiceInput">VoiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRate">SpeakingRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voice">Voice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `SpeakingRateInput`<sup>Optional</sup> <a name="SpeakingRateInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRateInput"></a>

```go
func SpeakingRateInput() *f64
```

- *Type:* *f64

---

##### `VoiceInput`<sup>Optional</sup> <a name="VoiceInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voiceInput"></a>

```go
func VoiceInput() *string
```

- *Type:* *string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `SpeakingRate`<sup>Required</sup> <a name="SpeakingRate" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRate"></a>

```go
func SpeakingRate() *f64
```

- *Type:* *f64

---

##### `Voice`<sup>Required</sup> <a name="Voice" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voice"></a>

```go
func Voice() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAppClientCertificateSettingsOutputReference <a name="CesAppClientCertificateSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppClientCertificateSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppClientCertificateSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resetPassphrase">ResetPassphrase</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassphrase` <a name="ResetPassphrase" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resetPassphrase"></a>

```go
func ResetPassphrase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.passphraseInput">PassphraseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.tlsCertificateInput">TlsCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.passphrase">Passphrase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.tlsCertificate">TlsCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PassphraseInput`<sup>Optional</sup> <a name="PassphraseInput" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.passphraseInput"></a>

```go
func PassphraseInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `TlsCertificateInput`<sup>Optional</sup> <a name="TlsCertificateInput" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.tlsCertificateInput"></a>

```go
func TlsCertificateInput() *string
```

- *Type:* *string

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.passphrase"></a>

```go
func Passphrase() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `TlsCertificate`<sup>Required</sup> <a name="TlsCertificate" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.tlsCertificate"></a>

```go
func TlsCertificate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppClientCertificateSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a>

---


### CesAppDataStoreSettingsEnginesList <a name="CesAppDataStoreSettingsEnginesList" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppDataStoreSettingsEnginesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CesAppDataStoreSettingsEnginesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.get"></a>

```go
func Get(index *f64) CesAppDataStoreSettingsEnginesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CesAppDataStoreSettingsEnginesOutputReference <a name="CesAppDataStoreSettingsEnginesOutputReference" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppDataStoreSettingsEnginesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CesAppDataStoreSettingsEnginesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEngines">CesAppDataStoreSettingsEngines</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppDataStoreSettingsEngines
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEngines">CesAppDataStoreSettingsEngines</a>

---


### CesAppDataStoreSettingsOutputReference <a name="CesAppDataStoreSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppDataStoreSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppDataStoreSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.engines">Engines</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList">CesAppDataStoreSettingsEnginesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Engines`<sup>Required</sup> <a name="Engines" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.engines"></a>

```go
func Engines() CesAppDataStoreSettingsEnginesList
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList">CesAppDataStoreSettingsEnginesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppDataStoreSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a>

---


### CesAppDefaultChannelProfileOutputReference <a name="CesAppDefaultChannelProfileOutputReference" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppDefaultChannelProfileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppDefaultChannelProfileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putPersonaProperty">PutPersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putWebWidgetConfig">PutWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetChannelType">ResetChannelType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetDisableBargeInControl">ResetDisableBargeInControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetDisableDtmf">ResetDisableDtmf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetPersonaProperty">ResetPersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetProfileId">ResetProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetWebWidgetConfig">ResetWebWidgetConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPersonaProperty` <a name="PutPersonaProperty" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putPersonaProperty"></a>

```go
func PutPersonaProperty(value CesAppDefaultChannelProfilePersonaProperty)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putPersonaProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a>

---

##### `PutWebWidgetConfig` <a name="PutWebWidgetConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putWebWidgetConfig"></a>

```go
func PutWebWidgetConfig(value CesAppDefaultChannelProfileWebWidgetConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putWebWidgetConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a>

---

##### `ResetChannelType` <a name="ResetChannelType" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetChannelType"></a>

```go
func ResetChannelType()
```

##### `ResetDisableBargeInControl` <a name="ResetDisableBargeInControl" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetDisableBargeInControl"></a>

```go
func ResetDisableBargeInControl()
```

##### `ResetDisableDtmf` <a name="ResetDisableDtmf" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetDisableDtmf"></a>

```go
func ResetDisableDtmf()
```

##### `ResetPersonaProperty` <a name="ResetPersonaProperty" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetPersonaProperty"></a>

```go
func ResetPersonaProperty()
```

##### `ResetProfileId` <a name="ResetProfileId" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetProfileId"></a>

```go
func ResetProfileId()
```

##### `ResetWebWidgetConfig` <a name="ResetWebWidgetConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetWebWidgetConfig"></a>

```go
func ResetWebWidgetConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.personaProperty">PersonaProperty</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference">CesAppDefaultChannelProfilePersonaPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.webWidgetConfig">WebWidgetConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference">CesAppDefaultChannelProfileWebWidgetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.channelTypeInput">ChannelTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableBargeInControlInput">DisableBargeInControlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableDtmfInput">DisableDtmfInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.personaPropertyInput">PersonaPropertyInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.profileIdInput">ProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.webWidgetConfigInput">WebWidgetConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.channelType">ChannelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableBargeInControl">DisableBargeInControl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableDtmf">DisableDtmf</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PersonaProperty`<sup>Required</sup> <a name="PersonaProperty" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.personaProperty"></a>

```go
func PersonaProperty() CesAppDefaultChannelProfilePersonaPropertyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference">CesAppDefaultChannelProfilePersonaPropertyOutputReference</a>

---

##### `WebWidgetConfig`<sup>Required</sup> <a name="WebWidgetConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.webWidgetConfig"></a>

```go
func WebWidgetConfig() CesAppDefaultChannelProfileWebWidgetConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference">CesAppDefaultChannelProfileWebWidgetConfigOutputReference</a>

---

##### `ChannelTypeInput`<sup>Optional</sup> <a name="ChannelTypeInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.channelTypeInput"></a>

```go
func ChannelTypeInput() *string
```

- *Type:* *string

---

##### `DisableBargeInControlInput`<sup>Optional</sup> <a name="DisableBargeInControlInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableBargeInControlInput"></a>

```go
func DisableBargeInControlInput() interface{}
```

- *Type:* interface{}

---

##### `DisableDtmfInput`<sup>Optional</sup> <a name="DisableDtmfInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableDtmfInput"></a>

```go
func DisableDtmfInput() interface{}
```

- *Type:* interface{}

---

##### `PersonaPropertyInput`<sup>Optional</sup> <a name="PersonaPropertyInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.personaPropertyInput"></a>

```go
func PersonaPropertyInput() CesAppDefaultChannelProfilePersonaProperty
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a>

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.profileIdInput"></a>

```go
func ProfileIdInput() *string
```

- *Type:* *string

---

##### `WebWidgetConfigInput`<sup>Optional</sup> <a name="WebWidgetConfigInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.webWidgetConfigInput"></a>

```go
func WebWidgetConfigInput() CesAppDefaultChannelProfileWebWidgetConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a>

---

##### `ChannelType`<sup>Required</sup> <a name="ChannelType" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.channelType"></a>

```go
func ChannelType() *string
```

- *Type:* *string

---

##### `DisableBargeInControl`<sup>Required</sup> <a name="DisableBargeInControl" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableBargeInControl"></a>

```go
func DisableBargeInControl() interface{}
```

- *Type:* interface{}

---

##### `DisableDtmf`<sup>Required</sup> <a name="DisableDtmf" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableDtmf"></a>

```go
func DisableDtmf() interface{}
```

- *Type:* interface{}

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppDefaultChannelProfile
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a>

---


### CesAppDefaultChannelProfilePersonaPropertyOutputReference <a name="CesAppDefaultChannelProfilePersonaPropertyOutputReference" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppDefaultChannelProfilePersonaPropertyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppDefaultChannelProfilePersonaPropertyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resetPersona">ResetPersona</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPersona` <a name="ResetPersona" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resetPersona"></a>

```go
func ResetPersona()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.personaInput">PersonaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.persona">Persona</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PersonaInput`<sup>Optional</sup> <a name="PersonaInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.personaInput"></a>

```go
func PersonaInput() *string
```

- *Type:* *string

---

##### `Persona`<sup>Required</sup> <a name="Persona" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.persona"></a>

```go
func Persona() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppDefaultChannelProfilePersonaProperty
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a>

---


### CesAppDefaultChannelProfileWebWidgetConfigOutputReference <a name="CesAppDefaultChannelProfileWebWidgetConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppDefaultChannelProfileWebWidgetConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppDefaultChannelProfileWebWidgetConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetModality">ResetModality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetTheme">ResetTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle">ResetWebWidgetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModality` <a name="ResetModality" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetModality"></a>

```go
func ResetModality()
```

##### `ResetTheme` <a name="ResetTheme" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetTheme"></a>

```go
func ResetTheme()
```

##### `ResetWebWidgetTitle` <a name="ResetWebWidgetTitle" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle"></a>

```go
func ResetWebWidgetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modalityInput">ModalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.themeInput">ThemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput">WebWidgetTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modality">Modality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.theme">Theme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle">WebWidgetTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModalityInput`<sup>Optional</sup> <a name="ModalityInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modalityInput"></a>

```go
func ModalityInput() *string
```

- *Type:* *string

---

##### `ThemeInput`<sup>Optional</sup> <a name="ThemeInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.themeInput"></a>

```go
func ThemeInput() *string
```

- *Type:* *string

---

##### `WebWidgetTitleInput`<sup>Optional</sup> <a name="WebWidgetTitleInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput"></a>

```go
func WebWidgetTitleInput() *string
```

- *Type:* *string

---

##### `Modality`<sup>Required</sup> <a name="Modality" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modality"></a>

```go
func Modality() *string
```

- *Type:* *string

---

##### `Theme`<sup>Required</sup> <a name="Theme" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.theme"></a>

```go
func Theme() *string
```

- *Type:* *string

---

##### `WebWidgetTitle`<sup>Required</sup> <a name="WebWidgetTitle" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle"></a>

```go
func WebWidgetTitle() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppDefaultChannelProfileWebWidgetConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a>

---


### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resetToolInvocationParameterCorrectnessThreshold">ResetToolInvocationParameterCorrectnessThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToolInvocationParameterCorrectnessThreshold` <a name="ResetToolInvocationParameterCorrectnessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resetToolInvocationParameterCorrectnessThreshold"></a>

```go
func ResetToolInvocationParameterCorrectnessThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThresholdInput">ToolInvocationParameterCorrectnessThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThreshold">ToolInvocationParameterCorrectnessThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ToolInvocationParameterCorrectnessThresholdInput`<sup>Optional</sup> <a name="ToolInvocationParameterCorrectnessThresholdInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThresholdInput"></a>

```go
func ToolInvocationParameterCorrectnessThresholdInput() *f64
```

- *Type:* *f64

---

##### `ToolInvocationParameterCorrectnessThreshold`<sup>Required</sup> <a name="ToolInvocationParameterCorrectnessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThreshold"></a>

```go
func ToolInvocationParameterCorrectnessThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---


### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds">PutExpectationLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds">PutTurnLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetExpectationLevelMetricsThresholds">ResetExpectationLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetTurnLevelMetricsThresholds">ResetTurnLevelMetricsThresholds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpectationLevelMetricsThresholds` <a name="PutExpectationLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds"></a>

```go
func PutExpectationLevelMetricsThresholds(value CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---

##### `PutTurnLevelMetricsThresholds` <a name="PutTurnLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds"></a>

```go
func PutTurnLevelMetricsThresholds(value CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---

##### `ResetExpectationLevelMetricsThresholds` <a name="ResetExpectationLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetExpectationLevelMetricsThresholds"></a>

```go
func ResetExpectationLevelMetricsThresholds()
```

##### `ResetTurnLevelMetricsThresholds` <a name="ResetTurnLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetTurnLevelMetricsThresholds"></a>

```go
func ResetTurnLevelMetricsThresholds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholds">ExpectationLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholds">TurnLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholdsInput">ExpectationLevelMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholdsInput">TurnLevelMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpectationLevelMetricsThresholds`<sup>Required</sup> <a name="ExpectationLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholds"></a>

```go
func ExpectationLevelMetricsThresholds() CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference</a>

---

##### `TurnLevelMetricsThresholds`<sup>Required</sup> <a name="TurnLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholds"></a>

```go
func TurnLevelMetricsThresholds() CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference</a>

---

##### `ExpectationLevelMetricsThresholdsInput`<sup>Optional</sup> <a name="ExpectationLevelMetricsThresholdsInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholdsInput"></a>

```go
func ExpectationLevelMetricsThresholdsInput() CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---

##### `TurnLevelMetricsThresholdsInput`<sup>Optional</sup> <a name="TurnLevelMetricsThresholdsInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholdsInput"></a>

```go
func TurnLevelMetricsThresholdsInput() CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---


### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetOverallToolInvocationCorrectnessThreshold">ResetOverallToolInvocationCorrectnessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetSemanticSimilaritySuccessThreshold">ResetSemanticSimilaritySuccessThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOverallToolInvocationCorrectnessThreshold` <a name="ResetOverallToolInvocationCorrectnessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetOverallToolInvocationCorrectnessThreshold"></a>

```go
func ResetOverallToolInvocationCorrectnessThreshold()
```

##### `ResetSemanticSimilaritySuccessThreshold` <a name="ResetSemanticSimilaritySuccessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetSemanticSimilaritySuccessThreshold"></a>

```go
func ResetSemanticSimilaritySuccessThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThresholdInput">OverallToolInvocationCorrectnessThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThresholdInput">SemanticSimilaritySuccessThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThreshold">OverallToolInvocationCorrectnessThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThreshold">SemanticSimilaritySuccessThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OverallToolInvocationCorrectnessThresholdInput`<sup>Optional</sup> <a name="OverallToolInvocationCorrectnessThresholdInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThresholdInput"></a>

```go
func OverallToolInvocationCorrectnessThresholdInput() *f64
```

- *Type:* *f64

---

##### `SemanticSimilaritySuccessThresholdInput`<sup>Optional</sup> <a name="SemanticSimilaritySuccessThresholdInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThresholdInput"></a>

```go
func SemanticSimilaritySuccessThresholdInput() *f64
```

- *Type:* *f64

---

##### `OverallToolInvocationCorrectnessThreshold`<sup>Required</sup> <a name="OverallToolInvocationCorrectnessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThreshold"></a>

```go
func OverallToolInvocationCorrectnessThreshold() *f64
```

- *Type:* *f64

---

##### `SemanticSimilaritySuccessThreshold`<sup>Required</sup> <a name="SemanticSimilaritySuccessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThreshold"></a>

```go
func SemanticSimilaritySuccessThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---


### CesAppEvaluationMetricsThresholdsOutputReference <a name="CesAppEvaluationMetricsThresholdsOutputReference" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppEvaluationMetricsThresholdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppEvaluationMetricsThresholdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds">PutGoldenEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resetGoldenEvaluationMetricsThresholds">ResetGoldenEvaluationMetricsThresholds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGoldenEvaluationMetricsThresholds` <a name="PutGoldenEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds"></a>

```go
func PutGoldenEvaluationMetricsThresholds(value CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---

##### `ResetGoldenEvaluationMetricsThresholds` <a name="ResetGoldenEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resetGoldenEvaluationMetricsThresholds"></a>

```go
func ResetGoldenEvaluationMetricsThresholds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholds">GoldenEvaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholdsInput">GoldenEvaluationMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GoldenEvaluationMetricsThresholds`<sup>Required</sup> <a name="GoldenEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholds"></a>

```go
func GoldenEvaluationMetricsThresholds() CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference</a>

---

##### `GoldenEvaluationMetricsThresholdsInput`<sup>Optional</sup> <a name="GoldenEvaluationMetricsThresholdsInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholdsInput"></a>

```go
func GoldenEvaluationMetricsThresholdsInput() CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppEvaluationMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a>

---


### CesAppLanguageSettingsOutputReference <a name="CesAppLanguageSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppLanguageSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppLanguageSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetDefaultLanguageCode">ResetDefaultLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetEnableMultilingualSupport">ResetEnableMultilingualSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetFallbackAction">ResetFallbackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetSupportedLanguageCodes">ResetSupportedLanguageCodes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultLanguageCode` <a name="ResetDefaultLanguageCode" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetDefaultLanguageCode"></a>

```go
func ResetDefaultLanguageCode()
```

##### `ResetEnableMultilingualSupport` <a name="ResetEnableMultilingualSupport" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetEnableMultilingualSupport"></a>

```go
func ResetEnableMultilingualSupport()
```

##### `ResetFallbackAction` <a name="ResetFallbackAction" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetFallbackAction"></a>

```go
func ResetFallbackAction()
```

##### `ResetSupportedLanguageCodes` <a name="ResetSupportedLanguageCodes" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetSupportedLanguageCodes"></a>

```go
func ResetSupportedLanguageCodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.defaultLanguageCodeInput">DefaultLanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.enableMultilingualSupportInput">EnableMultilingualSupportInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fallbackActionInput">FallbackActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.supportedLanguageCodesInput">SupportedLanguageCodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.defaultLanguageCode">DefaultLanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.enableMultilingualSupport">EnableMultilingualSupport</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fallbackAction">FallbackAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.supportedLanguageCodes">SupportedLanguageCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultLanguageCodeInput`<sup>Optional</sup> <a name="DefaultLanguageCodeInput" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.defaultLanguageCodeInput"></a>

```go
func DefaultLanguageCodeInput() *string
```

- *Type:* *string

---

##### `EnableMultilingualSupportInput`<sup>Optional</sup> <a name="EnableMultilingualSupportInput" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.enableMultilingualSupportInput"></a>

```go
func EnableMultilingualSupportInput() interface{}
```

- *Type:* interface{}

---

##### `FallbackActionInput`<sup>Optional</sup> <a name="FallbackActionInput" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fallbackActionInput"></a>

```go
func FallbackActionInput() *string
```

- *Type:* *string

---

##### `SupportedLanguageCodesInput`<sup>Optional</sup> <a name="SupportedLanguageCodesInput" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.supportedLanguageCodesInput"></a>

```go
func SupportedLanguageCodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultLanguageCode`<sup>Required</sup> <a name="DefaultLanguageCode" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.defaultLanguageCode"></a>

```go
func DefaultLanguageCode() *string
```

- *Type:* *string

---

##### `EnableMultilingualSupport`<sup>Required</sup> <a name="EnableMultilingualSupport" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.enableMultilingualSupport"></a>

```go
func EnableMultilingualSupport() interface{}
```

- *Type:* interface{}

---

##### `FallbackAction`<sup>Required</sup> <a name="FallbackAction" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fallbackAction"></a>

```go
func FallbackAction() *string
```

- *Type:* *string

---

##### `SupportedLanguageCodes`<sup>Required</sup> <a name="SupportedLanguageCodes" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.supportedLanguageCodes"></a>

```go
func SupportedLanguageCodes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppLanguageSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a>

---


### CesAppLoggingSettingsAudioRecordingConfigOutputReference <a name="CesAppLoggingSettingsAudioRecordingConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppLoggingSettingsAudioRecordingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppLoggingSettingsAudioRecordingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsBucket">ResetGcsBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsPathPrefix">ResetGcsPathPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGcsBucket` <a name="ResetGcsBucket" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsBucket"></a>

```go
func ResetGcsBucket()
```

##### `ResetGcsPathPrefix` <a name="ResetGcsPathPrefix" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsPathPrefix"></a>

```go
func ResetGcsPathPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucketInput">GcsBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefixInput">GcsPathPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucket">GcsBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefix">GcsPathPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcsBucketInput`<sup>Optional</sup> <a name="GcsBucketInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucketInput"></a>

```go
func GcsBucketInput() *string
```

- *Type:* *string

---

##### `GcsPathPrefixInput`<sup>Optional</sup> <a name="GcsPathPrefixInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefixInput"></a>

```go
func GcsPathPrefixInput() *string
```

- *Type:* *string

---

##### `GcsBucket`<sup>Required</sup> <a name="GcsBucket" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucket"></a>

```go
func GcsBucket() *string
```

- *Type:* *string

---

##### `GcsPathPrefix`<sup>Required</sup> <a name="GcsPathPrefix" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefix"></a>

```go
func GcsPathPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppLoggingSettingsAudioRecordingConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a>

---


### CesAppLoggingSettingsBigqueryExportSettingsOutputReference <a name="CesAppLoggingSettingsBigqueryExportSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppLoggingSettingsBigqueryExportSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppLoggingSettingsBigqueryExportSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataset` <a name="ResetDataset" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetDataset"></a>

```go
func ResetDataset()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetProject"></a>

```go
func ResetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.datasetInput">DatasetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.datasetInput"></a>

```go
func DatasetInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppLoggingSettingsBigqueryExportSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a>

---


### CesAppLoggingSettingsCloudLoggingSettingsOutputReference <a name="CesAppLoggingSettingsCloudLoggingSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppLoggingSettingsCloudLoggingSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppLoggingSettingsCloudLoggingSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resetEnableCloudLogging">ResetEnableCloudLogging</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableCloudLogging` <a name="ResetEnableCloudLogging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resetEnableCloudLogging"></a>

```go
func ResetEnableCloudLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLoggingInput">EnableCloudLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLogging">EnableCloudLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableCloudLoggingInput`<sup>Optional</sup> <a name="EnableCloudLoggingInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLoggingInput"></a>

```go
func EnableCloudLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableCloudLogging`<sup>Required</sup> <a name="EnableCloudLogging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLogging"></a>

```go
func EnableCloudLogging() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppLoggingSettingsCloudLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a>

---


### CesAppLoggingSettingsConversationLoggingSettingsOutputReference <a name="CesAppLoggingSettingsConversationLoggingSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppLoggingSettingsConversationLoggingSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppLoggingSettingsConversationLoggingSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resetDisableConversationLogging">ResetDisableConversationLogging</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableConversationLogging` <a name="ResetDisableConversationLogging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resetDisableConversationLogging"></a>

```go
func ResetDisableConversationLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLoggingInput">DisableConversationLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLogging">DisableConversationLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableConversationLoggingInput`<sup>Optional</sup> <a name="DisableConversationLoggingInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLoggingInput"></a>

```go
func DisableConversationLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `DisableConversationLogging`<sup>Required</sup> <a name="DisableConversationLogging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLogging"></a>

```go
func DisableConversationLogging() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppLoggingSettingsConversationLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a>

---


### CesAppLoggingSettingsOutputReference <a name="CesAppLoggingSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppLoggingSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppLoggingSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putAudioRecordingConfig">PutAudioRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putBigqueryExportSettings">PutBigqueryExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putCloudLoggingSettings">PutCloudLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putConversationLoggingSettings">PutConversationLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putRedactionConfig">PutRedactionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetAudioRecordingConfig">ResetAudioRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetBigqueryExportSettings">ResetBigqueryExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetCloudLoggingSettings">ResetCloudLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetConversationLoggingSettings">ResetConversationLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetRedactionConfig">ResetRedactionConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAudioRecordingConfig` <a name="PutAudioRecordingConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putAudioRecordingConfig"></a>

```go
func PutAudioRecordingConfig(value CesAppLoggingSettingsAudioRecordingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putAudioRecordingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a>

---

##### `PutBigqueryExportSettings` <a name="PutBigqueryExportSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putBigqueryExportSettings"></a>

```go
func PutBigqueryExportSettings(value CesAppLoggingSettingsBigqueryExportSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putBigqueryExportSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a>

---

##### `PutCloudLoggingSettings` <a name="PutCloudLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putCloudLoggingSettings"></a>

```go
func PutCloudLoggingSettings(value CesAppLoggingSettingsCloudLoggingSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putCloudLoggingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a>

---

##### `PutConversationLoggingSettings` <a name="PutConversationLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putConversationLoggingSettings"></a>

```go
func PutConversationLoggingSettings(value CesAppLoggingSettingsConversationLoggingSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putConversationLoggingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a>

---

##### `PutRedactionConfig` <a name="PutRedactionConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putRedactionConfig"></a>

```go
func PutRedactionConfig(value CesAppLoggingSettingsRedactionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putRedactionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a>

---

##### `ResetAudioRecordingConfig` <a name="ResetAudioRecordingConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetAudioRecordingConfig"></a>

```go
func ResetAudioRecordingConfig()
```

##### `ResetBigqueryExportSettings` <a name="ResetBigqueryExportSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetBigqueryExportSettings"></a>

```go
func ResetBigqueryExportSettings()
```

##### `ResetCloudLoggingSettings` <a name="ResetCloudLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetCloudLoggingSettings"></a>

```go
func ResetCloudLoggingSettings()
```

##### `ResetConversationLoggingSettings` <a name="ResetConversationLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetConversationLoggingSettings"></a>

```go
func ResetConversationLoggingSettings()
```

##### `ResetRedactionConfig` <a name="ResetRedactionConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetRedactionConfig"></a>

```go
func ResetRedactionConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.audioRecordingConfig">AudioRecordingConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference">CesAppLoggingSettingsAudioRecordingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.bigqueryExportSettings">BigqueryExportSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference">CesAppLoggingSettingsBigqueryExportSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.cloudLoggingSettings">CloudLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference">CesAppLoggingSettingsCloudLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.conversationLoggingSettings">ConversationLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference">CesAppLoggingSettingsConversationLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.redactionConfig">RedactionConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference">CesAppLoggingSettingsRedactionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.audioRecordingConfigInput">AudioRecordingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.bigqueryExportSettingsInput">BigqueryExportSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.cloudLoggingSettingsInput">CloudLoggingSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.conversationLoggingSettingsInput">ConversationLoggingSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.redactionConfigInput">RedactionConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioRecordingConfig`<sup>Required</sup> <a name="AudioRecordingConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.audioRecordingConfig"></a>

```go
func AudioRecordingConfig() CesAppLoggingSettingsAudioRecordingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference">CesAppLoggingSettingsAudioRecordingConfigOutputReference</a>

---

##### `BigqueryExportSettings`<sup>Required</sup> <a name="BigqueryExportSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.bigqueryExportSettings"></a>

```go
func BigqueryExportSettings() CesAppLoggingSettingsBigqueryExportSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference">CesAppLoggingSettingsBigqueryExportSettingsOutputReference</a>

---

##### `CloudLoggingSettings`<sup>Required</sup> <a name="CloudLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.cloudLoggingSettings"></a>

```go
func CloudLoggingSettings() CesAppLoggingSettingsCloudLoggingSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference">CesAppLoggingSettingsCloudLoggingSettingsOutputReference</a>

---

##### `ConversationLoggingSettings`<sup>Required</sup> <a name="ConversationLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.conversationLoggingSettings"></a>

```go
func ConversationLoggingSettings() CesAppLoggingSettingsConversationLoggingSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference">CesAppLoggingSettingsConversationLoggingSettingsOutputReference</a>

---

##### `RedactionConfig`<sup>Required</sup> <a name="RedactionConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.redactionConfig"></a>

```go
func RedactionConfig() CesAppLoggingSettingsRedactionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference">CesAppLoggingSettingsRedactionConfigOutputReference</a>

---

##### `AudioRecordingConfigInput`<sup>Optional</sup> <a name="AudioRecordingConfigInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.audioRecordingConfigInput"></a>

```go
func AudioRecordingConfigInput() CesAppLoggingSettingsAudioRecordingConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a>

---

##### `BigqueryExportSettingsInput`<sup>Optional</sup> <a name="BigqueryExportSettingsInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.bigqueryExportSettingsInput"></a>

```go
func BigqueryExportSettingsInput() CesAppLoggingSettingsBigqueryExportSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a>

---

##### `CloudLoggingSettingsInput`<sup>Optional</sup> <a name="CloudLoggingSettingsInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.cloudLoggingSettingsInput"></a>

```go
func CloudLoggingSettingsInput() CesAppLoggingSettingsCloudLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a>

---

##### `ConversationLoggingSettingsInput`<sup>Optional</sup> <a name="ConversationLoggingSettingsInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.conversationLoggingSettingsInput"></a>

```go
func ConversationLoggingSettingsInput() CesAppLoggingSettingsConversationLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a>

---

##### `RedactionConfigInput`<sup>Optional</sup> <a name="RedactionConfigInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.redactionConfigInput"></a>

```go
func RedactionConfigInput() CesAppLoggingSettingsRedactionConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a>

---


### CesAppLoggingSettingsRedactionConfigOutputReference <a name="CesAppLoggingSettingsRedactionConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppLoggingSettingsRedactionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppLoggingSettingsRedactionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetDeidentifyTemplate">ResetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetEnableRedaction">ResetEnableRedaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetInspectTemplate">ResetInspectTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeidentifyTemplate` <a name="ResetDeidentifyTemplate" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetDeidentifyTemplate"></a>

```go
func ResetDeidentifyTemplate()
```

##### `ResetEnableRedaction` <a name="ResetEnableRedaction" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetEnableRedaction"></a>

```go
func ResetEnableRedaction()
```

##### `ResetInspectTemplate` <a name="ResetInspectTemplate" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetInspectTemplate"></a>

```go
func ResetInspectTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplateInput">DeidentifyTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedactionInput">EnableRedactionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplateInput">InspectTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplate">DeidentifyTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedaction">EnableRedaction</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplate">InspectTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeidentifyTemplateInput`<sup>Optional</sup> <a name="DeidentifyTemplateInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplateInput"></a>

```go
func DeidentifyTemplateInput() *string
```

- *Type:* *string

---

##### `EnableRedactionInput`<sup>Optional</sup> <a name="EnableRedactionInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedactionInput"></a>

```go
func EnableRedactionInput() interface{}
```

- *Type:* interface{}

---

##### `InspectTemplateInput`<sup>Optional</sup> <a name="InspectTemplateInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplateInput"></a>

```go
func InspectTemplateInput() *string
```

- *Type:* *string

---

##### `DeidentifyTemplate`<sup>Required</sup> <a name="DeidentifyTemplate" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplate"></a>

```go
func DeidentifyTemplate() *string
```

- *Type:* *string

---

##### `EnableRedaction`<sup>Required</sup> <a name="EnableRedaction" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedaction"></a>

```go
func EnableRedaction() interface{}
```

- *Type:* interface{}

---

##### `InspectTemplate`<sup>Required</sup> <a name="InspectTemplate" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplate"></a>

```go
func InspectTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppLoggingSettingsRedactionConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a>

---


### CesAppModelSettingsOutputReference <a name="CesAppModelSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppModelSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppModelSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resetModel"></a>

```go
func ResetModel()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resetTemperature"></a>

```go
func ResetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.temperature">Temperature</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.modelInput"></a>

```go
func ModelInput() *string
```

- *Type:* *string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.temperatureInput"></a>

```go
func TemperatureInput() *f64
```

- *Type:* *f64

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.temperature"></a>

```go
func Temperature() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a>

---


### CesAppTimeoutsOutputReference <a name="CesAppTimeoutsOutputReference" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAppTimeZoneSettingsOutputReference <a name="CesAppTimeZoneSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppTimeZoneSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppTimeZoneSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppTimeZoneSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a>

---


### CesAppVariableDeclarationsList <a name="CesAppVariableDeclarationsList" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppVariableDeclarationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CesAppVariableDeclarationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.get"></a>

```go
func Get(index *f64) CesAppVariableDeclarationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAppVariableDeclarationsOutputReference <a name="CesAppVariableDeclarationsOutputReference" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppVariableDeclarationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CesAppVariableDeclarationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema">PutSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchema` <a name="PutSchema" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema"></a>

```go
func PutSchema(value CesAppVariableDeclarationsSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference">CesAppVariableDeclarationsSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.schemaInput">SchemaInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.schema"></a>

```go
func Schema() CesAppVariableDeclarationsSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference">CesAppVariableDeclarationsSchemaOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.schemaInput"></a>

```go
func SchemaInput() CesAppVariableDeclarationsSchema
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAppVariableDeclarationsSchemaOutputReference <a name="CesAppVariableDeclarationsSchemaOutputReference" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/cesapp"

cesapp.NewCesAppVariableDeclarationsSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAppVariableDeclarationsSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetAnyOf">ResetAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDefs">ResetDefs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetItems">ResetItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetNullable">ResetNullable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetPrefixItems">ResetPrefixItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetRef">ResetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetUniqueItems">ResetUniqueItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetAdditionalProperties"></a>

```go
func ResetAdditionalProperties()
```

##### `ResetAnyOf` <a name="ResetAnyOf" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetAnyOf"></a>

```go
func ResetAnyOf()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDefs` <a name="ResetDefs" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDefs"></a>

```go
func ResetDefs()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnum` <a name="ResetEnum" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetEnum"></a>

```go
func ResetEnum()
```

##### `ResetItems` <a name="ResetItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetItems"></a>

```go
func ResetItems()
```

##### `ResetNullable` <a name="ResetNullable" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetNullable"></a>

```go
func ResetNullable()
```

##### `ResetPrefixItems` <a name="ResetPrefixItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetPrefixItems"></a>

```go
func ResetPrefixItems()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetRef` <a name="ResetRef" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetRef"></a>

```go
func ResetRef()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetTitle"></a>

```go
func ResetTitle()
```

##### `ResetUniqueItems` <a name="ResetUniqueItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetUniqueItems"></a>

```go
func ResetUniqueItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.anyOfInput">AnyOfInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defsInput">DefsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.enumInput">EnumInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.itemsInput">ItemsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.nullableInput">NullableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.prefixItemsInput">PrefixItemsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.refInput">RefInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.requiredInput">RequiredInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.uniqueItemsInput">UniqueItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.additionalProperties">AdditionalProperties</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.anyOf">AnyOf</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defs">Defs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.enum">Enum</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.items">Items</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.nullable">Nullable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.prefixItems">PrefixItems</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.properties">Properties</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.required">Required</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.uniqueItems">UniqueItems</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.additionalPropertiesInput"></a>

```go
func AdditionalPropertiesInput() *string
```

- *Type:* *string

---

##### `AnyOfInput`<sup>Optional</sup> <a name="AnyOfInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.anyOfInput"></a>

```go
func AnyOfInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DefsInput`<sup>Optional</sup> <a name="DefsInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defsInput"></a>

```go
func DefsInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.enumInput"></a>

```go
func EnumInput() *[]*string
```

- *Type:* *[]*string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.itemsInput"></a>

```go
func ItemsInput() *string
```

- *Type:* *string

---

##### `NullableInput`<sup>Optional</sup> <a name="NullableInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.nullableInput"></a>

```go
func NullableInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixItemsInput`<sup>Optional</sup> <a name="PrefixItemsInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.prefixItemsInput"></a>

```go
func PrefixItemsInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *string
```

- *Type:* *string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.refInput"></a>

```go
func RefInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.requiredInput"></a>

```go
func RequiredInput() *[]*string
```

- *Type:* *[]*string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UniqueItemsInput`<sup>Optional</sup> <a name="UniqueItemsInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.uniqueItemsInput"></a>

```go
func UniqueItemsInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.additionalProperties"></a>

```go
func AdditionalProperties() *string
```

- *Type:* *string

---

##### `AnyOf`<sup>Required</sup> <a name="AnyOf" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.anyOf"></a>

```go
func AnyOf() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Defs`<sup>Required</sup> <a name="Defs" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defs"></a>

```go
func Defs() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.enum"></a>

```go
func Enum() *[]*string
```

- *Type:* *[]*string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.items"></a>

```go
func Items() *string
```

- *Type:* *string

---

##### `Nullable`<sup>Required</sup> <a name="Nullable" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.nullable"></a>

```go
func Nullable() interface{}
```

- *Type:* interface{}

---

##### `PrefixItems`<sup>Required</sup> <a name="PrefixItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.prefixItems"></a>

```go
func PrefixItems() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.properties"></a>

```go
func Properties() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.required"></a>

```go
func Required() *[]*string
```

- *Type:* *[]*string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UniqueItems`<sup>Required</sup> <a name="UniqueItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.uniqueItems"></a>

```go
func UniqueItems() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAppVariableDeclarationsSchema
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a>

---



