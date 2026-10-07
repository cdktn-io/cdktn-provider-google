# `geminiGibqObservabilitySetting` Submodule <a name="`geminiGibqObservabilitySetting` Submodule" id="@cdktn/provider-google.geminiGibqObservabilitySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiGibqObservabilitySetting <a name="GeminiGibqObservabilitySetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting google_gemini_gibq_observability_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminigibqobservabilitysetting"

geminigibqobservabilitysetting.NewGeminiGibqObservabilitySetting(scope Construct, id *string, config GeminiGibqObservabilitySettingConfig) GeminiGibqObservabilitySetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig">GeminiGibqObservabilitySettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig">GeminiGibqObservabilitySettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putConversationalAnalyticsSetting">PutConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetConversationalAnalyticsSetting">ResetConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConversationalAnalyticsSetting` <a name="PutConversationalAnalyticsSetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putConversationalAnalyticsSetting"></a>

```go
func PutConversationalAnalyticsSetting(value GeminiGibqObservabilitySettingConversationalAnalyticsSetting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putConversationalAnalyticsSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putTimeouts"></a>

```go
func PutTimeouts(value GeminiGibqObservabilitySettingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a>

---

##### `ResetConversationalAnalyticsSetting` <a name="ResetConversationalAnalyticsSetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetConversationalAnalyticsSetting"></a>

```go
func ResetConversationalAnalyticsSetting()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GeminiGibqObservabilitySetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminigibqobservabilitysetting"

geminigibqobservabilitysetting.GeminiGibqObservabilitySetting_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminigibqobservabilitysetting"

geminigibqobservabilitysetting.GeminiGibqObservabilitySetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminigibqobservabilitysetting"

geminigibqobservabilitysetting.GeminiGibqObservabilitySetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminigibqobservabilitysetting"

geminigibqobservabilitysetting.GeminiGibqObservabilitySetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GeminiGibqObservabilitySetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GeminiGibqObservabilitySetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GeminiGibqObservabilitySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GeminiGibqObservabilitySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.conversationalAnalyticsSetting">ConversationalAnalyticsSetting</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference">GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference">GeminiGibqObservabilitySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.conversationalAnalyticsSettingInput">ConversationalAnalyticsSettingInput</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.gibqObservabilitySettingIdInput">GibqObservabilitySettingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.gibqObservabilitySettingId">GibqObservabilitySettingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConversationalAnalyticsSetting`<sup>Required</sup> <a name="ConversationalAnalyticsSetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.conversationalAnalyticsSetting"></a>

```go
func ConversationalAnalyticsSetting() GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference">GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.timeouts"></a>

```go
func Timeouts() GeminiGibqObservabilitySettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference">GeminiGibqObservabilitySettingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ConversationalAnalyticsSettingInput`<sup>Optional</sup> <a name="ConversationalAnalyticsSettingInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.conversationalAnalyticsSettingInput"></a>

```go
func ConversationalAnalyticsSettingInput() GeminiGibqObservabilitySettingConversationalAnalyticsSetting
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `GibqObservabilitySettingIdInput`<sup>Optional</sup> <a name="GibqObservabilitySettingIdInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.gibqObservabilitySettingIdInput"></a>

```go
func GibqObservabilitySettingIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `GibqObservabilitySettingId`<sup>Required</sup> <a name="GibqObservabilitySettingId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.gibqObservabilitySettingId"></a>

```go
func GibqObservabilitySettingId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiGibqObservabilitySettingConfig <a name="GeminiGibqObservabilitySettingConfig" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminigibqobservabilitysetting"

&geminigibqobservabilitysetting.GeminiGibqObservabilitySettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GibqObservabilitySettingId: *string,
	ConversationalAnalyticsSetting: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting,
	DeletionPolicy: *string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.gibqObservabilitySettingId">GibqObservabilitySettingId</a></code> | <code>*string</code> | Id of the requesting object. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.conversationalAnalyticsSetting">ConversationalAnalyticsSetting</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | conversational_analytics_setting block. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#id GeminiGibqObservabilitySetting#id}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#project GeminiGibqObservabilitySetting#project}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GibqObservabilitySettingId`<sup>Required</sup> <a name="GibqObservabilitySettingId" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.gibqObservabilitySettingId"></a>

```go
GibqObservabilitySettingId *string
```

- *Type:* *string

Id of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#gibq_observability_setting_id GeminiGibqObservabilitySetting#gibq_observability_setting_id}

---

##### `ConversationalAnalyticsSetting`<sup>Optional</sup> <a name="ConversationalAnalyticsSetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.conversationalAnalyticsSetting"></a>

```go
ConversationalAnalyticsSetting GeminiGibqObservabilitySettingConversationalAnalyticsSetting
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

conversational_analytics_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#conversational_analytics_setting GeminiGibqObservabilitySetting#conversational_analytics_setting}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#deletion_policy GeminiGibqObservabilitySetting#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#id GeminiGibqObservabilitySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#labels GeminiGibqObservabilitySetting#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#location GeminiGibqObservabilitySetting#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#project GeminiGibqObservabilitySetting#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.timeouts"></a>

```go
Timeouts GeminiGibqObservabilitySettingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#timeouts GeminiGibqObservabilitySetting#timeouts}

---

### GeminiGibqObservabilitySettingConversationalAnalyticsSetting <a name="GeminiGibqObservabilitySettingConversationalAnalyticsSetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminigibqobservabilitysetting"

&geminigibqobservabilitysetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting {
	FeedbackEnabled: interface{},
	LoggingEnabled: interface{},
	MetricsEnabled: interface{},
	TracesEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.feedbackEnabled">FeedbackEnabled</a></code> | <code>interface{}</code> | Whether to enable feedback. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.loggingEnabled">LoggingEnabled</a></code> | <code>interface{}</code> | Whether to enable logging. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.metricsEnabled">MetricsEnabled</a></code> | <code>interface{}</code> | Whether to enable metrics. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.tracesEnabled">TracesEnabled</a></code> | <code>interface{}</code> | Whether to enable traces. |

---

##### `FeedbackEnabled`<sup>Optional</sup> <a name="FeedbackEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.feedbackEnabled"></a>

```go
FeedbackEnabled interface{}
```

- *Type:* interface{}

Whether to enable feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#feedback_enabled GeminiGibqObservabilitySetting#feedback_enabled}

---

##### `LoggingEnabled`<sup>Optional</sup> <a name="LoggingEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.loggingEnabled"></a>

```go
LoggingEnabled interface{}
```

- *Type:* interface{}

Whether to enable logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#logging_enabled GeminiGibqObservabilitySetting#logging_enabled}

---

##### `MetricsEnabled`<sup>Optional</sup> <a name="MetricsEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.metricsEnabled"></a>

```go
MetricsEnabled interface{}
```

- *Type:* interface{}

Whether to enable metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#metrics_enabled GeminiGibqObservabilitySetting#metrics_enabled}

---

##### `TracesEnabled`<sup>Optional</sup> <a name="TracesEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.tracesEnabled"></a>

```go
TracesEnabled interface{}
```

- *Type:* interface{}

Whether to enable traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#traces_enabled GeminiGibqObservabilitySetting#traces_enabled}

---

### GeminiGibqObservabilitySettingTimeouts <a name="GeminiGibqObservabilitySettingTimeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminigibqobservabilitysetting"

&geminigibqobservabilitysetting.GeminiGibqObservabilitySettingTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#create GeminiGibqObservabilitySetting#create}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#delete GeminiGibqObservabilitySetting#delete}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#update GeminiGibqObservabilitySetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#create GeminiGibqObservabilitySetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#delete GeminiGibqObservabilitySetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#update GeminiGibqObservabilitySetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference <a name="GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminigibqobservabilitysetting"

geminigibqobservabilitysetting.NewGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetFeedbackEnabled">ResetFeedbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetLoggingEnabled">ResetLoggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetMetricsEnabled">ResetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetTracesEnabled">ResetTracesEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFeedbackEnabled` <a name="ResetFeedbackEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetFeedbackEnabled"></a>

```go
func ResetFeedbackEnabled()
```

##### `ResetLoggingEnabled` <a name="ResetLoggingEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetLoggingEnabled"></a>

```go
func ResetLoggingEnabled()
```

##### `ResetMetricsEnabled` <a name="ResetMetricsEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetMetricsEnabled"></a>

```go
func ResetMetricsEnabled()
```

##### `ResetTracesEnabled` <a name="ResetTracesEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetTracesEnabled"></a>

```go
func ResetTracesEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabledInput">FeedbackEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabledInput">LoggingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabledInput">MetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabledInput">TracesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabled">FeedbackEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabled">LoggingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabled">MetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabled">TracesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FeedbackEnabledInput`<sup>Optional</sup> <a name="FeedbackEnabledInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabledInput"></a>

```go
func FeedbackEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LoggingEnabledInput`<sup>Optional</sup> <a name="LoggingEnabledInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabledInput"></a>

```go
func LoggingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MetricsEnabledInput`<sup>Optional</sup> <a name="MetricsEnabledInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabledInput"></a>

```go
func MetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TracesEnabledInput`<sup>Optional</sup> <a name="TracesEnabledInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabledInput"></a>

```go
func TracesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FeedbackEnabled`<sup>Required</sup> <a name="FeedbackEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabled"></a>

```go
func FeedbackEnabled() interface{}
```

- *Type:* interface{}

---

##### `LoggingEnabled`<sup>Required</sup> <a name="LoggingEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabled"></a>

```go
func LoggingEnabled() interface{}
```

- *Type:* interface{}

---

##### `MetricsEnabled`<sup>Required</sup> <a name="MetricsEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabled"></a>

```go
func MetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `TracesEnabled`<sup>Required</sup> <a name="TracesEnabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabled"></a>

```go
func TracesEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiGibqObservabilitySettingConversationalAnalyticsSetting
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---


### GeminiGibqObservabilitySettingTimeoutsOutputReference <a name="GeminiGibqObservabilitySettingTimeoutsOutputReference" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminigibqobservabilitysetting"

geminigibqobservabilitysetting.NewGeminiGibqObservabilitySettingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiGibqObservabilitySettingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



