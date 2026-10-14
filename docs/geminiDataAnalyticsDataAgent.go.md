# `geminiDataAnalyticsDataAgent` Submodule <a name="`geminiDataAnalyticsDataAgent` Submodule" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiDataAnalyticsDataAgent <a name="GeminiDataAnalyticsDataAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent google_gemini_data_analytics_data_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgent(scope Construct, id *string, config GeminiDataAnalyticsDataAgentConfig) GeminiDataAnalyticsDataAgent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig">GeminiDataAnalyticsDataAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig">GeminiDataAnalyticsDataAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putDataAnalyticsAgent">PutDataAnalyticsAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDataAnalyticsAgent">ResetDataAnalyticsAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataAnalyticsAgent` <a name="PutDataAnalyticsAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putDataAnalyticsAgent"></a>

```go
func PutDataAnalyticsAgent(value GeminiDataAnalyticsDataAgentDataAnalyticsAgent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putDataAnalyticsAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putTimeouts"></a>

```go
func PutTimeouts(value GeminiDataAnalyticsDataAgentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a>

---

##### `ResetDataAnalyticsAgent` <a name="ResetDataAnalyticsAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDataAnalyticsAgent"></a>

```go
func ResetDataAnalyticsAgent()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GeminiDataAnalyticsDataAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GeminiDataAnalyticsDataAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GeminiDataAnalyticsDataAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GeminiDataAnalyticsDataAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GeminiDataAnalyticsDataAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAnalyticsAgent">DataAnalyticsAgent</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.purgeTime">PurgeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference">GeminiDataAnalyticsDataAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAgentIdInput">DataAgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAnalyticsAgentInput">DataAnalyticsAgentInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAgentId">DataAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DataAnalyticsAgent`<sup>Required</sup> <a name="DataAnalyticsAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAnalyticsAgent"></a>

```go
func DataAnalyticsAgent() GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference</a>

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PurgeTime`<sup>Required</sup> <a name="PurgeTime" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.purgeTime"></a>

```go
func PurgeTime() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.timeouts"></a>

```go
func Timeouts() GeminiDataAnalyticsDataAgentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference">GeminiDataAnalyticsDataAgentTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DataAgentIdInput`<sup>Optional</sup> <a name="DataAgentIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAgentIdInput"></a>

```go
func DataAgentIdInput() *string
```

- *Type:* *string

---

##### `DataAnalyticsAgentInput`<sup>Optional</sup> <a name="DataAnalyticsAgentInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAnalyticsAgentInput"></a>

```go
func DataAnalyticsAgentInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgent
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataAgentId`<sup>Required</sup> <a name="DataAgentId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAgentId"></a>

```go
func DataAgentId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiDataAnalyticsDataAgentConfig <a name="GeminiDataAnalyticsDataAgentConfig" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataAgentId: *string,
	Location: *string,
	DataAnalyticsAgent: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent,
	DeletionPolicy: *string,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	KmsKey: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dataAgentId">DataAgentId</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.location">Location</a></code> | <code>*string</code> | The location of the DataAgent. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dataAnalyticsAgent">DataAnalyticsAgent</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a></code> | data_analytics_agent block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.description">Description</a></code> | <code>*string</code> | Optional. Description of the agent. Must be between 1 and 1024 characters. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Optional. User friendly display name. Must be between 1 and 256 characters. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#id GeminiDataAnalyticsDataAgent#id}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. Labels to help users filter related agents. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#project GeminiDataAnalyticsDataAgent#project}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataAgentId`<sup>Required</sup> <a name="DataAgentId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dataAgentId"></a>

```go
DataAgentId *string
```

- *Type:* *string

Required.

The ID to use for the DataAgent, which becomes the final component
of the resource name. The ID must start with a lowercase letter and may
contain lowercase letters, digits, underscores, and hyphens, up to 63
characters in total.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#data_agent_id GeminiDataAnalyticsDataAgent#data_agent_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the DataAgent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#location GeminiDataAnalyticsDataAgent#location}

---

##### `DataAnalyticsAgent`<sup>Optional</sup> <a name="DataAnalyticsAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dataAnalyticsAgent"></a>

```go
DataAnalyticsAgent GeminiDataAnalyticsDataAgentDataAnalyticsAgent
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a>

data_analytics_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#data_analytics_agent GeminiDataAnalyticsDataAgent#data_analytics_agent}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#deletion_policy GeminiDataAnalyticsDataAgent#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. Description of the agent. Must be between 1 and 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Optional. User friendly display name. Must be between 1 and 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#id GeminiDataAnalyticsDataAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

Optional.

Customer managed encryption key (CMEK) to use for encrypting the
DataAgent resources. Cloud KMS CryptoKeys must reside in the same location
as the DataAgent. The expected format is
projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#kms_key GeminiDataAnalyticsDataAgent#kms_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. Labels to help users filter related agents.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#project GeminiDataAnalyticsDataAgent#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.timeouts"></a>

```go
Timeouts GeminiDataAnalyticsDataAgentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#timeouts GeminiDataAnalyticsDataAgent#timeouts}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgent <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent {
	PublishedContext: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext,
	StagingContext: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.property.publishedContext">PublishedContext</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a></code> | published_context block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.property.stagingContext">StagingContext</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a></code> | staging_context block. |

---

##### `PublishedContext`<sup>Optional</sup> <a name="PublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.property.publishedContext"></a>

```go
PublishedContext GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a>

published_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#published_context GeminiDataAnalyticsDataAgent#published_context}

---

##### `StagingContext`<sup>Optional</sup> <a name="StagingContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.property.stagingContext"></a>

```go
StagingContext GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a>

staging_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#staging_context GeminiDataAnalyticsDataAgent#staging_context}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext {

}
```


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences {

}
```


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq {

}
```


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences {

}
```


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext {
	DatasourceReferences: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences,
	ExampleQueries: interface{},
	GlossaryTerms: interface{},
	Options: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions,
	SchemaRelationships: interface{},
	SystemInstruction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.datasourceReferences">DatasourceReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a></code> | datasource_references block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.exampleQueries">ExampleQueries</a></code> | <code>interface{}</code> | example_queries block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.glossaryTerms">GlossaryTerms</a></code> | <code>interface{}</code> | glossary_terms block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.options">Options</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a></code> | options block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.schemaRelationships">SchemaRelationships</a></code> | <code>interface{}</code> | schema_relationships block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.systemInstruction">SystemInstruction</a></code> | <code>*string</code> | Optional. The basic entry point for data owners creating domain knowledge for the agent. |

---

##### `DatasourceReferences`<sup>Required</sup> <a name="DatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.datasourceReferences"></a>

```go
DatasourceReferences GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a>

datasource_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource_references GeminiDataAnalyticsDataAgent#datasource_references}

---

##### `ExampleQueries`<sup>Optional</sup> <a name="ExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.exampleQueries"></a>

```go
ExampleQueries interface{}
```

- *Type:* interface{}

example_queries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#example_queries GeminiDataAnalyticsDataAgent#example_queries}

---

##### `GlossaryTerms`<sup>Optional</sup> <a name="GlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.glossaryTerms"></a>

```go
GlossaryTerms interface{}
```

- *Type:* interface{}

glossary_terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#glossary_terms GeminiDataAnalyticsDataAgent#glossary_terms}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.options"></a>

```go
Options GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#options GeminiDataAnalyticsDataAgent#options}

---

##### `SchemaRelationships`<sup>Optional</sup> <a name="SchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.schemaRelationships"></a>

```go
SchemaRelationships interface{}
```

- *Type:* interface{}

schema_relationships block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#schema_relationships GeminiDataAnalyticsDataAgent#schema_relationships}

---

##### `SystemInstruction`<sup>Optional</sup> <a name="SystemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.systemInstruction"></a>

```go
SystemInstruction *string
```

- *Type:* *string

Optional. The basic entry point for data owners creating domain knowledge for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#system_instruction GeminiDataAnalyticsDataAgent#system_instruction}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences {
	Bq: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences.property.bq">Bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a></code> | bq block. |

---

##### `Bq`<sup>Required</sup> <a name="Bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences.property.bq"></a>

```go
Bq GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a>

bq block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#bq GeminiDataAnalyticsDataAgent#bq}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq {
	TableReferences: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq.property.tableReferences">TableReferences</a></code> | <code>interface{}</code> | table_references block. |

---

##### `TableReferences`<sup>Optional</sup> <a name="TableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq.property.tableReferences"></a>

```go
TableReferences interface{}
```

- *Type:* interface{}

table_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_references GeminiDataAnalyticsDataAgent#table_references}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences {
	DatasetId: *string,
	ProjectId: *string,
	TableId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.datasetId">DatasetId</a></code> | <code>*string</code> | Required. The dataset that the table belongs to. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.projectId">ProjectId</a></code> | <code>*string</code> | Required. The project that the table belongs to. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.tableId">TableId</a></code> | <code>*string</code> | Required. The table ID. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

Required. The dataset that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#dataset_id GeminiDataAnalyticsDataAgent#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Required. The project that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#project_id GeminiDataAnalyticsDataAgent#project_id}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.tableId"></a>

```go
TableId *string
```

- *Type:* *string

Required. The table ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_id GeminiDataAnalyticsDataAgent#table_id}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries {
	NaturalLanguageQuestion: *string,
	SqlQuery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.property.naturalLanguageQuestion">NaturalLanguageQuestion</a></code> | <code>*string</code> | Optional. A natural language question that a user might ask. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.property.sqlQuery">SqlQuery</a></code> | <code>*string</code> | Optional. The SQL query that should be generated to answer the natural language question. |

---

##### `NaturalLanguageQuestion`<sup>Optional</sup> <a name="NaturalLanguageQuestion" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.property.naturalLanguageQuestion"></a>

```go
NaturalLanguageQuestion *string
```

- *Type:* *string

Optional. A natural language question that a user might ask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#natural_language_question GeminiDataAnalyticsDataAgent#natural_language_question}

---

##### `SqlQuery`<sup>Optional</sup> <a name="SqlQuery" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.property.sqlQuery"></a>

```go
SqlQuery *string
```

- *Type:* *string

Optional. The SQL query that should be generated to answer the natural language question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#sql_query GeminiDataAnalyticsDataAgent#sql_query}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms {
	Description: *string,
	DisplayName: *string,
	Labels: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.description">Description</a></code> | <code>*string</code> | Required. The description or meaning of the term. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. User friendly display name of the glossary term. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.labels">Labels</a></code> | <code>*[]*string</code> | Optional. A list of general purpose labels associated with this term. |

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.description"></a>

```go
Description *string
```

- *Type:* *string

Required. The description or meaning of the term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required. User friendly display name of the glossary term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.labels"></a>

```go
Labels *[]*string
```

- *Type:* *[]*string

Optional. A list of general purpose labels associated with this term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions {
	Analysis: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis,
	Datasource: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a></code> | analysis block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.property.datasource">Datasource</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a></code> | datasource block. |

---

##### `Analysis`<sup>Optional</sup> <a name="Analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.property.analysis"></a>

```go
Analysis GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a>

analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#analysis GeminiDataAnalyticsDataAgent#analysis}

---

##### `Datasource`<sup>Optional</sup> <a name="Datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.property.datasource"></a>

```go
Datasource GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a>

datasource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource GeminiDataAnalyticsDataAgent#datasource}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis {
	Python: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis.property.python">Python</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a></code> | python block. |

---

##### `Python`<sup>Optional</sup> <a name="Python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis.property.python"></a>

```go
Python GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a>

python block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#python GeminiDataAnalyticsDataAgent#python}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython.property.enabled">Enabled</a></code> | <code>interface{}</code> | Optional. Whether to enable Python analysis. Defaults to false. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Optional. Whether to enable Python analysis. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#enabled GeminiDataAnalyticsDataAgent#enabled}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource {
	BigQueryMaxBilledBytes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource.property.bigQueryMaxBilledBytes">BigQueryMaxBilledBytes</a></code> | <code>*f64</code> | Optional. Limits the bytes billed for each BigQuery query job. |

---

##### `BigQueryMaxBilledBytes`<sup>Optional</sup> <a name="BigQueryMaxBilledBytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource.property.bigQueryMaxBilledBytes"></a>

```go
BigQueryMaxBilledBytes *f64
```

- *Type:* *f64

Optional. Limits the bytes billed for each BigQuery query job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#big_query_max_billed_bytes GeminiDataAnalyticsDataAgent#big_query_max_billed_bytes}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships {
	LeftSchemaPaths: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths,
	RightSchemaPaths: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths,
	ConfidenceScore: *f64,
	Sources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.leftSchemaPaths">LeftSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a></code> | left_schema_paths block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.rightSchemaPaths">RightSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a></code> | right_schema_paths block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.confidenceScore">ConfidenceScore</a></code> | <code>*f64</code> | Optional. A confidence score for the suggested relationship. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.sources">Sources</a></code> | <code>*[]*string</code> | Optional. Sources which generated the schema relation edge. Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS. |

---

##### `LeftSchemaPaths`<sup>Required</sup> <a name="LeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.leftSchemaPaths"></a>

```go
LeftSchemaPaths GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a>

left_schema_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#left_schema_paths GeminiDataAnalyticsDataAgent#left_schema_paths}

---

##### `RightSchemaPaths`<sup>Required</sup> <a name="RightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.rightSchemaPaths"></a>

```go
RightSchemaPaths GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a>

right_schema_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#right_schema_paths GeminiDataAnalyticsDataAgent#right_schema_paths}

---

##### `ConfidenceScore`<sup>Optional</sup> <a name="ConfidenceScore" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.confidenceScore"></a>

```go
ConfidenceScore *f64
```

- *Type:* *f64

Optional. A confidence score for the suggested relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#confidence_score GeminiDataAnalyticsDataAgent#confidence_score}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.sources"></a>

```go
Sources *[]*string
```

- *Type:* *[]*string

Optional. Sources which generated the schema relation edge. Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#sources GeminiDataAnalyticsDataAgent#sources}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths {
	Paths: *[]*string,
	TableFqn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.property.paths">Paths</a></code> | <code>*[]*string</code> | Required. The ordered list of paths within the table schema. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.property.tableFqn">TableFqn</a></code> | <code>*string</code> | Required. The service-qualified full resource name of the table. |

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.property.paths"></a>

```go
Paths *[]*string
```

- *Type:* *[]*string

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

##### `TableFqn`<sup>Required</sup> <a name="TableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.property.tableFqn"></a>

```go
TableFqn *string
```

- *Type:* *string

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths {
	Paths: *[]*string,
	TableFqn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.property.paths">Paths</a></code> | <code>*[]*string</code> | Required. The ordered list of paths within the table schema. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.property.tableFqn">TableFqn</a></code> | <code>*string</code> | Required. The service-qualified full resource name of the table. |

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.property.paths"></a>

```go
Paths *[]*string
```

- *Type:* *[]*string

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

##### `TableFqn`<sup>Required</sup> <a name="TableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.property.tableFqn"></a>

```go
TableFqn *string
```

- *Type:* *string

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext {
	DatasourceReferences: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences,
	ExampleQueries: interface{},
	GlossaryTerms: interface{},
	Options: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions,
	SchemaRelationships: interface{},
	SystemInstruction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.datasourceReferences">DatasourceReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a></code> | datasource_references block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.exampleQueries">ExampleQueries</a></code> | <code>interface{}</code> | example_queries block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.glossaryTerms">GlossaryTerms</a></code> | <code>interface{}</code> | glossary_terms block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.options">Options</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a></code> | options block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.schemaRelationships">SchemaRelationships</a></code> | <code>interface{}</code> | schema_relationships block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.systemInstruction">SystemInstruction</a></code> | <code>*string</code> | Optional. The basic entry point for data owners creating domain knowledge for the agent. |

---

##### `DatasourceReferences`<sup>Required</sup> <a name="DatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.datasourceReferences"></a>

```go
DatasourceReferences GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a>

datasource_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource_references GeminiDataAnalyticsDataAgent#datasource_references}

---

##### `ExampleQueries`<sup>Optional</sup> <a name="ExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.exampleQueries"></a>

```go
ExampleQueries interface{}
```

- *Type:* interface{}

example_queries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#example_queries GeminiDataAnalyticsDataAgent#example_queries}

---

##### `GlossaryTerms`<sup>Optional</sup> <a name="GlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.glossaryTerms"></a>

```go
GlossaryTerms interface{}
```

- *Type:* interface{}

glossary_terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#glossary_terms GeminiDataAnalyticsDataAgent#glossary_terms}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.options"></a>

```go
Options GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#options GeminiDataAnalyticsDataAgent#options}

---

##### `SchemaRelationships`<sup>Optional</sup> <a name="SchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.schemaRelationships"></a>

```go
SchemaRelationships interface{}
```

- *Type:* interface{}

schema_relationships block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#schema_relationships GeminiDataAnalyticsDataAgent#schema_relationships}

---

##### `SystemInstruction`<sup>Optional</sup> <a name="SystemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.systemInstruction"></a>

```go
SystemInstruction *string
```

- *Type:* *string

Optional. The basic entry point for data owners creating domain knowledge for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#system_instruction GeminiDataAnalyticsDataAgent#system_instruction}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences {
	Bq: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences.property.bq">Bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a></code> | bq block. |

---

##### `Bq`<sup>Required</sup> <a name="Bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences.property.bq"></a>

```go
Bq GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a>

bq block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#bq GeminiDataAnalyticsDataAgent#bq}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq {
	TableReferences: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq.property.tableReferences">TableReferences</a></code> | <code>interface{}</code> | table_references block. |

---

##### `TableReferences`<sup>Optional</sup> <a name="TableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq.property.tableReferences"></a>

```go
TableReferences interface{}
```

- *Type:* interface{}

table_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_references GeminiDataAnalyticsDataAgent#table_references}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences {
	DatasetId: *string,
	ProjectId: *string,
	TableId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.datasetId">DatasetId</a></code> | <code>*string</code> | Required. The dataset that the table belongs to. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.projectId">ProjectId</a></code> | <code>*string</code> | Required. The project that the table belongs to. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.tableId">TableId</a></code> | <code>*string</code> | Required. The table ID. |

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

Required. The dataset that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#dataset_id GeminiDataAnalyticsDataAgent#dataset_id}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Required. The project that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#project_id GeminiDataAnalyticsDataAgent#project_id}

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.tableId"></a>

```go
TableId *string
```

- *Type:* *string

Required. The table ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_id GeminiDataAnalyticsDataAgent#table_id}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries {
	NaturalLanguageQuestion: *string,
	SqlQuery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.property.naturalLanguageQuestion">NaturalLanguageQuestion</a></code> | <code>*string</code> | Optional. A natural language question that a user might ask. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.property.sqlQuery">SqlQuery</a></code> | <code>*string</code> | Optional. The SQL query that should be generated to answer the natural language question. |

---

##### `NaturalLanguageQuestion`<sup>Optional</sup> <a name="NaturalLanguageQuestion" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.property.naturalLanguageQuestion"></a>

```go
NaturalLanguageQuestion *string
```

- *Type:* *string

Optional. A natural language question that a user might ask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#natural_language_question GeminiDataAnalyticsDataAgent#natural_language_question}

---

##### `SqlQuery`<sup>Optional</sup> <a name="SqlQuery" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.property.sqlQuery"></a>

```go
SqlQuery *string
```

- *Type:* *string

Optional. The SQL query that should be generated to answer the natural language question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#sql_query GeminiDataAnalyticsDataAgent#sql_query}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms {
	Description: *string,
	DisplayName: *string,
	Labels: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.description">Description</a></code> | <code>*string</code> | Required. The description or meaning of the term. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. User friendly display name of the glossary term. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.labels">Labels</a></code> | <code>*[]*string</code> | Optional. A list of general purpose labels associated with this term. |

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.description"></a>

```go
Description *string
```

- *Type:* *string

Required. The description or meaning of the term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required. User friendly display name of the glossary term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.labels"></a>

```go
Labels *[]*string
```

- *Type:* *[]*string

Optional. A list of general purpose labels associated with this term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions {
	Analysis: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis,
	Datasource: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a></code> | analysis block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.property.datasource">Datasource</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a></code> | datasource block. |

---

##### `Analysis`<sup>Optional</sup> <a name="Analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.property.analysis"></a>

```go
Analysis GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a>

analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#analysis GeminiDataAnalyticsDataAgent#analysis}

---

##### `Datasource`<sup>Optional</sup> <a name="Datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.property.datasource"></a>

```go
Datasource GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a>

datasource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource GeminiDataAnalyticsDataAgent#datasource}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis {
	Python: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis.property.python">Python</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a></code> | python block. |

---

##### `Python`<sup>Optional</sup> <a name="Python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis.property.python"></a>

```go
Python GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a>

python block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#python GeminiDataAnalyticsDataAgent#python}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython.property.enabled">Enabled</a></code> | <code>interface{}</code> | Optional. Whether to enable Python analysis. Defaults to false. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Optional. Whether to enable Python analysis. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#enabled GeminiDataAnalyticsDataAgent#enabled}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource {
	BigQueryMaxBilledBytes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource.property.bigQueryMaxBilledBytes">BigQueryMaxBilledBytes</a></code> | <code>*f64</code> | Optional. Limits the bytes billed for each BigQuery query job. |

---

##### `BigQueryMaxBilledBytes`<sup>Optional</sup> <a name="BigQueryMaxBilledBytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource.property.bigQueryMaxBilledBytes"></a>

```go
BigQueryMaxBilledBytes *f64
```

- *Type:* *f64

Optional. Limits the bytes billed for each BigQuery query job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#big_query_max_billed_bytes GeminiDataAnalyticsDataAgent#big_query_max_billed_bytes}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships {
	LeftSchemaPaths: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths,
	RightSchemaPaths: github.com/cdktn-io/cdktn-provider-google-go/google/v21.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths,
	ConfidenceScore: *f64,
	Sources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.leftSchemaPaths">LeftSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a></code> | left_schema_paths block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.rightSchemaPaths">RightSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a></code> | right_schema_paths block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.confidenceScore">ConfidenceScore</a></code> | <code>*f64</code> | Optional. A confidence score for the suggested relationship. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.sources">Sources</a></code> | <code>*[]*string</code> | Optional. Sources which generated the schema relation edge. Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS. |

---

##### `LeftSchemaPaths`<sup>Required</sup> <a name="LeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.leftSchemaPaths"></a>

```go
LeftSchemaPaths GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a>

left_schema_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#left_schema_paths GeminiDataAnalyticsDataAgent#left_schema_paths}

---

##### `RightSchemaPaths`<sup>Required</sup> <a name="RightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.rightSchemaPaths"></a>

```go
RightSchemaPaths GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a>

right_schema_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#right_schema_paths GeminiDataAnalyticsDataAgent#right_schema_paths}

---

##### `ConfidenceScore`<sup>Optional</sup> <a name="ConfidenceScore" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.confidenceScore"></a>

```go
ConfidenceScore *f64
```

- *Type:* *f64

Optional. A confidence score for the suggested relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#confidence_score GeminiDataAnalyticsDataAgent#confidence_score}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.sources"></a>

```go
Sources *[]*string
```

- *Type:* *[]*string

Optional. Sources which generated the schema relation edge. Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#sources GeminiDataAnalyticsDataAgent#sources}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths {
	Paths: *[]*string,
	TableFqn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.property.paths">Paths</a></code> | <code>*[]*string</code> | Required. The ordered list of paths within the table schema. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.property.tableFqn">TableFqn</a></code> | <code>*string</code> | Required. The service-qualified full resource name of the table. |

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.property.paths"></a>

```go
Paths *[]*string
```

- *Type:* *[]*string

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

##### `TableFqn`<sup>Required</sup> <a name="TableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.property.tableFqn"></a>

```go
TableFqn *string
```

- *Type:* *string

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths {
	Paths: *[]*string,
	TableFqn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.property.paths">Paths</a></code> | <code>*[]*string</code> | Required. The ordered list of paths within the table schema. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.property.tableFqn">TableFqn</a></code> | <code>*string</code> | Required. The service-qualified full resource name of the table. |

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.property.paths"></a>

```go
Paths *[]*string
```

- *Type:* *[]*string

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

##### `TableFqn`<sup>Required</sup> <a name="TableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.property.tableFqn"></a>

```go
TableFqn *string
```

- *Type:* *string

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

### GeminiDataAnalyticsDataAgentTimeouts <a name="GeminiDataAnalyticsDataAgentTimeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

&geminidataanalyticsdataagent.GeminiDataAnalyticsDataAgentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#create GeminiDataAnalyticsDataAgent#create}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#delete GeminiDataAnalyticsDataAgent#delete}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#update GeminiDataAnalyticsDataAgent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#create GeminiDataAnalyticsDataAgent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#delete GeminiDataAnalyticsDataAgent#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#update GeminiDataAnalyticsDataAgent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.get"></a>

```go
func Get(index *f64) GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.tableReferences">TableReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TableReferences`<sup>Required</sup> <a name="TableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.tableReferences"></a>

```go
func TableReferences() GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.get"></a>

```go
func Get(index *f64) GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.get"></a>

```go
func Get(index *f64) GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.bq">Bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bq`<sup>Required</sup> <a name="Bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.bq"></a>

```go
func Bq() GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.get"></a>

```go
func Get(index *f64) GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.datasourceReferences">DatasourceReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.systemInstruction">SystemInstruction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasourceReferences`<sup>Required</sup> <a name="DatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.datasourceReferences"></a>

```go
func DatasourceReferences() GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList</a>

---

##### `SystemInstruction`<sup>Required</sup> <a name="SystemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.systemInstruction"></a>

```go
func SystemInstruction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putPublishedContext">PutPublishedContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putStagingContext">PutStagingContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resetPublishedContext">ResetPublishedContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resetStagingContext">ResetStagingContext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublishedContext` <a name="PutPublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putPublishedContext"></a>

```go
func PutPublishedContext(value GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putPublishedContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a>

---

##### `PutStagingContext` <a name="PutStagingContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putStagingContext"></a>

```go
func PutStagingContext(value GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putStagingContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a>

---

##### `ResetPublishedContext` <a name="ResetPublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resetPublishedContext"></a>

```go
func ResetPublishedContext()
```

##### `ResetStagingContext` <a name="ResetStagingContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resetStagingContext"></a>

```go
func ResetStagingContext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.lastPublishedContext">LastPublishedContext</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.publishedContext">PublishedContext</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.stagingContext">StagingContext</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.publishedContextInput">PublishedContextInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.stagingContextInput">StagingContextInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastPublishedContext`<sup>Required</sup> <a name="LastPublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.lastPublishedContext"></a>

```go
func LastPublishedContext() GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList</a>

---

##### `PublishedContext`<sup>Required</sup> <a name="PublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.publishedContext"></a>

```go
func PublishedContext() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference</a>

---

##### `StagingContext`<sup>Required</sup> <a name="StagingContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.stagingContext"></a>

```go
func StagingContext() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference</a>

---

##### `PublishedContextInput`<sup>Optional</sup> <a name="PublishedContextInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.publishedContextInput"></a>

```go
func PublishedContextInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a>

---

##### `StagingContextInput`<sup>Optional</sup> <a name="StagingContextInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.stagingContextInput"></a>

```go
func StagingContextInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgent
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.putTableReferences">PutTableReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resetTableReferences">ResetTableReferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTableReferences` <a name="PutTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.putTableReferences"></a>

```go
func PutTableReferences(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.putTableReferences.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTableReferences` <a name="ResetTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resetTableReferences"></a>

```go
func ResetTableReferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.tableReferences">TableReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.tableReferencesInput">TableReferencesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TableReferences`<sup>Required</sup> <a name="TableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.tableReferences"></a>

```go
func TableReferences() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList</a>

---

##### `TableReferencesInput`<sup>Optional</sup> <a name="TableReferencesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.tableReferencesInput"></a>

```go
func TableReferencesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.get"></a>

```go
func Get(index *f64) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableIdInput"></a>

```go
func TableIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.putBq">PutBq</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBq` <a name="PutBq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.putBq"></a>

```go
func PutBq(value GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.putBq.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.bq">Bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.bqInput">BqInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bq`<sup>Required</sup> <a name="Bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.bq"></a>

```go
func Bq() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference</a>

---

##### `BqInput`<sup>Optional</sup> <a name="BqInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.bqInput"></a>

```go
func BqInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.get"></a>

```go
func Get(index *f64) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resetNaturalLanguageQuestion">ResetNaturalLanguageQuestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resetSqlQuery">ResetSqlQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNaturalLanguageQuestion` <a name="ResetNaturalLanguageQuestion" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resetNaturalLanguageQuestion"></a>

```go
func ResetNaturalLanguageQuestion()
```

##### `ResetSqlQuery` <a name="ResetSqlQuery" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resetSqlQuery"></a>

```go
func ResetSqlQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.naturalLanguageQuestionInput">NaturalLanguageQuestionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.sqlQueryInput">SqlQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.naturalLanguageQuestion">NaturalLanguageQuestion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.sqlQuery">SqlQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NaturalLanguageQuestionInput`<sup>Optional</sup> <a name="NaturalLanguageQuestionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.naturalLanguageQuestionInput"></a>

```go
func NaturalLanguageQuestionInput() *string
```

- *Type:* *string

---

##### `SqlQueryInput`<sup>Optional</sup> <a name="SqlQueryInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.sqlQueryInput"></a>

```go
func SqlQueryInput() *string
```

- *Type:* *string

---

##### `NaturalLanguageQuestion`<sup>Required</sup> <a name="NaturalLanguageQuestion" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.naturalLanguageQuestion"></a>

```go
func NaturalLanguageQuestion() *string
```

- *Type:* *string

---

##### `SqlQuery`<sup>Required</sup> <a name="SqlQuery" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.sqlQuery"></a>

```go
func SqlQuery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.get"></a>

```go
func Get(index *f64) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resetLabels"></a>

```go
func ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.putPython">PutPython</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resetPython">ResetPython</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPython` <a name="PutPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.putPython"></a>

```go
func PutPython(value GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.putPython.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a>

---

##### `ResetPython` <a name="ResetPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resetPython"></a>

```go
func ResetPython()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.python">Python</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.pythonInput">PythonInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Python`<sup>Required</sup> <a name="Python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.python"></a>

```go
func Python() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference</a>

---

##### `PythonInput`<sup>Optional</sup> <a name="PythonInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.pythonInput"></a>

```go
func PythonInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resetBigQueryMaxBilledBytes">ResetBigQueryMaxBilledBytes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBigQueryMaxBilledBytes` <a name="ResetBigQueryMaxBilledBytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resetBigQueryMaxBilledBytes"></a>

```go
func ResetBigQueryMaxBilledBytes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytesInput">BigQueryMaxBilledBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytes">BigQueryMaxBilledBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BigQueryMaxBilledBytesInput`<sup>Optional</sup> <a name="BigQueryMaxBilledBytesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytesInput"></a>

```go
func BigQueryMaxBilledBytesInput() *f64
```

- *Type:* *f64

---

##### `BigQueryMaxBilledBytes`<sup>Required</sup> <a name="BigQueryMaxBilledBytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytes"></a>

```go
func BigQueryMaxBilledBytes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putAnalysis">PutAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putDatasource">PutDatasource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resetAnalysis">ResetAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resetDatasource">ResetDatasource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnalysis` <a name="PutAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putAnalysis"></a>

```go
func PutAnalysis(value GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a>

---

##### `PutDatasource` <a name="PutDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putDatasource"></a>

```go
func PutDatasource(value GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putDatasource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a>

---

##### `ResetAnalysis` <a name="ResetAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resetAnalysis"></a>

```go
func ResetAnalysis()
```

##### `ResetDatasource` <a name="ResetDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resetDatasource"></a>

```go
func ResetDatasource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.datasource">Datasource</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.analysisInput">AnalysisInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.datasourceInput">DatasourceInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.analysis"></a>

```go
func Analysis() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference</a>

---

##### `Datasource`<sup>Required</sup> <a name="Datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.datasource"></a>

```go
func Datasource() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference</a>

---

##### `AnalysisInput`<sup>Optional</sup> <a name="AnalysisInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.analysisInput"></a>

```go
func AnalysisInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a>

---

##### `DatasourceInput`<sup>Optional</sup> <a name="DatasourceInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.datasourceInput"></a>

```go
func DatasourceInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putDatasourceReferences">PutDatasourceReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putExampleQueries">PutExampleQueries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putGlossaryTerms">PutGlossaryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putSchemaRelationships">PutSchemaRelationships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetExampleQueries">ResetExampleQueries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetGlossaryTerms">ResetGlossaryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetSchemaRelationships">ResetSchemaRelationships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetSystemInstruction">ResetSystemInstruction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasourceReferences` <a name="PutDatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putDatasourceReferences"></a>

```go
func PutDatasourceReferences(value GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putDatasourceReferences.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a>

---

##### `PutExampleQueries` <a name="PutExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putExampleQueries"></a>

```go
func PutExampleQueries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putExampleQueries.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGlossaryTerms` <a name="PutGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putGlossaryTerms"></a>

```go
func PutGlossaryTerms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putGlossaryTerms.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putOptions"></a>

```go
func PutOptions(value GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a>

---

##### `PutSchemaRelationships` <a name="PutSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putSchemaRelationships"></a>

```go
func PutSchemaRelationships(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putSchemaRelationships.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExampleQueries` <a name="ResetExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetExampleQueries"></a>

```go
func ResetExampleQueries()
```

##### `ResetGlossaryTerms` <a name="ResetGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetGlossaryTerms"></a>

```go
func ResetGlossaryTerms()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetSchemaRelationships` <a name="ResetSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetSchemaRelationships"></a>

```go
func ResetSchemaRelationships()
```

##### `ResetSystemInstruction` <a name="ResetSystemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetSystemInstruction"></a>

```go
func ResetSystemInstruction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.datasourceReferences">DatasourceReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.exampleQueries">ExampleQueries</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.glossaryTerms">GlossaryTerms</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.options">Options</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.schemaRelationships">SchemaRelationships</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.datasourceReferencesInput">DatasourceReferencesInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.exampleQueriesInput">ExampleQueriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.glossaryTermsInput">GlossaryTermsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.schemaRelationshipsInput">SchemaRelationshipsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.systemInstructionInput">SystemInstructionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.systemInstruction">SystemInstruction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasourceReferences`<sup>Required</sup> <a name="DatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.datasourceReferences"></a>

```go
func DatasourceReferences() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference</a>

---

##### `ExampleQueries`<sup>Required</sup> <a name="ExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.exampleQueries"></a>

```go
func ExampleQueries() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList</a>

---

##### `GlossaryTerms`<sup>Required</sup> <a name="GlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.glossaryTerms"></a>

```go
func GlossaryTerms() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList</a>

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.options"></a>

```go
func Options() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference</a>

---

##### `SchemaRelationships`<sup>Required</sup> <a name="SchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.schemaRelationships"></a>

```go
func SchemaRelationships() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList</a>

---

##### `DatasourceReferencesInput`<sup>Optional</sup> <a name="DatasourceReferencesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.datasourceReferencesInput"></a>

```go
func DatasourceReferencesInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a>

---

##### `ExampleQueriesInput`<sup>Optional</sup> <a name="ExampleQueriesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.exampleQueriesInput"></a>

```go
func ExampleQueriesInput() interface{}
```

- *Type:* interface{}

---

##### `GlossaryTermsInput`<sup>Optional</sup> <a name="GlossaryTermsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.glossaryTermsInput"></a>

```go
func GlossaryTermsInput() interface{}
```

- *Type:* interface{}

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.optionsInput"></a>

```go
func OptionsInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a>

---

##### `SchemaRelationshipsInput`<sup>Optional</sup> <a name="SchemaRelationshipsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.schemaRelationshipsInput"></a>

```go
func SchemaRelationshipsInput() interface{}
```

- *Type:* interface{}

---

##### `SystemInstructionInput`<sup>Optional</sup> <a name="SystemInstructionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.systemInstructionInput"></a>

```go
func SystemInstructionInput() *string
```

- *Type:* *string

---

##### `SystemInstruction`<sup>Required</sup> <a name="SystemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.systemInstruction"></a>

```go
func SystemInstruction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.pathsInput">PathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqnInput">TableFqnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.paths">Paths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqn">TableFqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.pathsInput"></a>

```go
func PathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TableFqnInput`<sup>Optional</sup> <a name="TableFqnInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqnInput"></a>

```go
func TableFqnInput() *string
```

- *Type:* *string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.paths"></a>

```go
func Paths() *[]*string
```

- *Type:* *[]*string

---

##### `TableFqn`<sup>Required</sup> <a name="TableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqn"></a>

```go
func TableFqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.get"></a>

```go
func Get(index *f64) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putLeftSchemaPaths">PutLeftSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putRightSchemaPaths">PutRightSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resetConfidenceScore">ResetConfidenceScore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLeftSchemaPaths` <a name="PutLeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putLeftSchemaPaths"></a>

```go
func PutLeftSchemaPaths(value GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putLeftSchemaPaths.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a>

---

##### `PutRightSchemaPaths` <a name="PutRightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putRightSchemaPaths"></a>

```go
func PutRightSchemaPaths(value GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putRightSchemaPaths.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a>

---

##### `ResetConfidenceScore` <a name="ResetConfidenceScore" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resetConfidenceScore"></a>

```go
func ResetConfidenceScore()
```

##### `ResetSources` <a name="ResetSources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resetSources"></a>

```go
func ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.leftSchemaPaths">LeftSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.rightSchemaPaths">RightSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.confidenceScoreInput">ConfidenceScoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.leftSchemaPathsInput">LeftSchemaPathsInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.rightSchemaPathsInput">RightSchemaPathsInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.confidenceScore">ConfidenceScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.sources">Sources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LeftSchemaPaths`<sup>Required</sup> <a name="LeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.leftSchemaPaths"></a>

```go
func LeftSchemaPaths() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference</a>

---

##### `RightSchemaPaths`<sup>Required</sup> <a name="RightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.rightSchemaPaths"></a>

```go
func RightSchemaPaths() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference</a>

---

##### `ConfidenceScoreInput`<sup>Optional</sup> <a name="ConfidenceScoreInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.confidenceScoreInput"></a>

```go
func ConfidenceScoreInput() *f64
```

- *Type:* *f64

---

##### `LeftSchemaPathsInput`<sup>Optional</sup> <a name="LeftSchemaPathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.leftSchemaPathsInput"></a>

```go
func LeftSchemaPathsInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a>

---

##### `RightSchemaPathsInput`<sup>Optional</sup> <a name="RightSchemaPathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.rightSchemaPathsInput"></a>

```go
func RightSchemaPathsInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a>

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.sourcesInput"></a>

```go
func SourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConfidenceScore`<sup>Required</sup> <a name="ConfidenceScore" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.confidenceScore"></a>

```go
func ConfidenceScore() *f64
```

- *Type:* *f64

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.sources"></a>

```go
func Sources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.pathsInput">PathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqnInput">TableFqnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.paths">Paths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqn">TableFqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.pathsInput"></a>

```go
func PathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TableFqnInput`<sup>Optional</sup> <a name="TableFqnInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqnInput"></a>

```go
func TableFqnInput() *string
```

- *Type:* *string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.paths"></a>

```go
func Paths() *[]*string
```

- *Type:* *[]*string

---

##### `TableFqn`<sup>Required</sup> <a name="TableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqn"></a>

```go
func TableFqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.putTableReferences">PutTableReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resetTableReferences">ResetTableReferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTableReferences` <a name="PutTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.putTableReferences"></a>

```go
func PutTableReferences(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.putTableReferences.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTableReferences` <a name="ResetTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resetTableReferences"></a>

```go
func ResetTableReferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.tableReferences">TableReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.tableReferencesInput">TableReferencesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TableReferences`<sup>Required</sup> <a name="TableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.tableReferences"></a>

```go
func TableReferences() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList</a>

---

##### `TableReferencesInput`<sup>Optional</sup> <a name="TableReferencesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.tableReferencesInput"></a>

```go
func TableReferencesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.get"></a>

```go
func Get(index *f64) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.tableIdInput"></a>

```go
func TableIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.putBq">PutBq</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBq` <a name="PutBq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.putBq"></a>

```go
func PutBq(value GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.putBq.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.bq">Bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.bqInput">BqInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bq`<sup>Required</sup> <a name="Bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.bq"></a>

```go
func Bq() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference</a>

---

##### `BqInput`<sup>Optional</sup> <a name="BqInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.bqInput"></a>

```go
func BqInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.get"></a>

```go
func Get(index *f64) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resetNaturalLanguageQuestion">ResetNaturalLanguageQuestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resetSqlQuery">ResetSqlQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNaturalLanguageQuestion` <a name="ResetNaturalLanguageQuestion" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resetNaturalLanguageQuestion"></a>

```go
func ResetNaturalLanguageQuestion()
```

##### `ResetSqlQuery` <a name="ResetSqlQuery" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resetSqlQuery"></a>

```go
func ResetSqlQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.naturalLanguageQuestionInput">NaturalLanguageQuestionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.sqlQueryInput">SqlQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.naturalLanguageQuestion">NaturalLanguageQuestion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.sqlQuery">SqlQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NaturalLanguageQuestionInput`<sup>Optional</sup> <a name="NaturalLanguageQuestionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.naturalLanguageQuestionInput"></a>

```go
func NaturalLanguageQuestionInput() *string
```

- *Type:* *string

---

##### `SqlQueryInput`<sup>Optional</sup> <a name="SqlQueryInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.sqlQueryInput"></a>

```go
func SqlQueryInput() *string
```

- *Type:* *string

---

##### `NaturalLanguageQuestion`<sup>Required</sup> <a name="NaturalLanguageQuestion" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.naturalLanguageQuestion"></a>

```go
func NaturalLanguageQuestion() *string
```

- *Type:* *string

---

##### `SqlQuery`<sup>Required</sup> <a name="SqlQuery" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.sqlQuery"></a>

```go
func SqlQuery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.get"></a>

```go
func Get(index *f64) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resetLabels"></a>

```go
func ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.putPython">PutPython</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resetPython">ResetPython</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPython` <a name="PutPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.putPython"></a>

```go
func PutPython(value GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.putPython.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a>

---

##### `ResetPython` <a name="ResetPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resetPython"></a>

```go
func ResetPython()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.python">Python</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.pythonInput">PythonInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Python`<sup>Required</sup> <a name="Python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.python"></a>

```go
func Python() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference</a>

---

##### `PythonInput`<sup>Optional</sup> <a name="PythonInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.pythonInput"></a>

```go
func PythonInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resetBigQueryMaxBilledBytes">ResetBigQueryMaxBilledBytes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBigQueryMaxBilledBytes` <a name="ResetBigQueryMaxBilledBytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resetBigQueryMaxBilledBytes"></a>

```go
func ResetBigQueryMaxBilledBytes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytesInput">BigQueryMaxBilledBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytes">BigQueryMaxBilledBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BigQueryMaxBilledBytesInput`<sup>Optional</sup> <a name="BigQueryMaxBilledBytesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytesInput"></a>

```go
func BigQueryMaxBilledBytesInput() *f64
```

- *Type:* *f64

---

##### `BigQueryMaxBilledBytes`<sup>Required</sup> <a name="BigQueryMaxBilledBytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytes"></a>

```go
func BigQueryMaxBilledBytes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putAnalysis">PutAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putDatasource">PutDatasource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resetAnalysis">ResetAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resetDatasource">ResetDatasource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnalysis` <a name="PutAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putAnalysis"></a>

```go
func PutAnalysis(value GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a>

---

##### `PutDatasource` <a name="PutDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putDatasource"></a>

```go
func PutDatasource(value GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putDatasource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a>

---

##### `ResetAnalysis` <a name="ResetAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resetAnalysis"></a>

```go
func ResetAnalysis()
```

##### `ResetDatasource` <a name="ResetDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resetDatasource"></a>

```go
func ResetDatasource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.analysis">Analysis</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.datasource">Datasource</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.analysisInput">AnalysisInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.datasourceInput">DatasourceInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Analysis`<sup>Required</sup> <a name="Analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.analysis"></a>

```go
func Analysis() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference</a>

---

##### `Datasource`<sup>Required</sup> <a name="Datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.datasource"></a>

```go
func Datasource() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference</a>

---

##### `AnalysisInput`<sup>Optional</sup> <a name="AnalysisInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.analysisInput"></a>

```go
func AnalysisInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a>

---

##### `DatasourceInput`<sup>Optional</sup> <a name="DatasourceInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.datasourceInput"></a>

```go
func DatasourceInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putDatasourceReferences">PutDatasourceReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putExampleQueries">PutExampleQueries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putGlossaryTerms">PutGlossaryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putSchemaRelationships">PutSchemaRelationships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetExampleQueries">ResetExampleQueries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetGlossaryTerms">ResetGlossaryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetSchemaRelationships">ResetSchemaRelationships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetSystemInstruction">ResetSystemInstruction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasourceReferences` <a name="PutDatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putDatasourceReferences"></a>

```go
func PutDatasourceReferences(value GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putDatasourceReferences.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a>

---

##### `PutExampleQueries` <a name="PutExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putExampleQueries"></a>

```go
func PutExampleQueries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putExampleQueries.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGlossaryTerms` <a name="PutGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putGlossaryTerms"></a>

```go
func PutGlossaryTerms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putGlossaryTerms.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putOptions"></a>

```go
func PutOptions(value GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a>

---

##### `PutSchemaRelationships` <a name="PutSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putSchemaRelationships"></a>

```go
func PutSchemaRelationships(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putSchemaRelationships.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExampleQueries` <a name="ResetExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetExampleQueries"></a>

```go
func ResetExampleQueries()
```

##### `ResetGlossaryTerms` <a name="ResetGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetGlossaryTerms"></a>

```go
func ResetGlossaryTerms()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetSchemaRelationships` <a name="ResetSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetSchemaRelationships"></a>

```go
func ResetSchemaRelationships()
```

##### `ResetSystemInstruction` <a name="ResetSystemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetSystemInstruction"></a>

```go
func ResetSystemInstruction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.datasourceReferences">DatasourceReferences</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.exampleQueries">ExampleQueries</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.glossaryTerms">GlossaryTerms</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.options">Options</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.schemaRelationships">SchemaRelationships</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.datasourceReferencesInput">DatasourceReferencesInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.exampleQueriesInput">ExampleQueriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.glossaryTermsInput">GlossaryTermsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.schemaRelationshipsInput">SchemaRelationshipsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.systemInstructionInput">SystemInstructionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.systemInstruction">SystemInstruction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasourceReferences`<sup>Required</sup> <a name="DatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.datasourceReferences"></a>

```go
func DatasourceReferences() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference</a>

---

##### `ExampleQueries`<sup>Required</sup> <a name="ExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.exampleQueries"></a>

```go
func ExampleQueries() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList</a>

---

##### `GlossaryTerms`<sup>Required</sup> <a name="GlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.glossaryTerms"></a>

```go
func GlossaryTerms() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList</a>

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.options"></a>

```go
func Options() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference</a>

---

##### `SchemaRelationships`<sup>Required</sup> <a name="SchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.schemaRelationships"></a>

```go
func SchemaRelationships() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList</a>

---

##### `DatasourceReferencesInput`<sup>Optional</sup> <a name="DatasourceReferencesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.datasourceReferencesInput"></a>

```go
func DatasourceReferencesInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a>

---

##### `ExampleQueriesInput`<sup>Optional</sup> <a name="ExampleQueriesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.exampleQueriesInput"></a>

```go
func ExampleQueriesInput() interface{}
```

- *Type:* interface{}

---

##### `GlossaryTermsInput`<sup>Optional</sup> <a name="GlossaryTermsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.glossaryTermsInput"></a>

```go
func GlossaryTermsInput() interface{}
```

- *Type:* interface{}

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.optionsInput"></a>

```go
func OptionsInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a>

---

##### `SchemaRelationshipsInput`<sup>Optional</sup> <a name="SchemaRelationshipsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.schemaRelationshipsInput"></a>

```go
func SchemaRelationshipsInput() interface{}
```

- *Type:* interface{}

---

##### `SystemInstructionInput`<sup>Optional</sup> <a name="SystemInstructionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.systemInstructionInput"></a>

```go
func SystemInstructionInput() *string
```

- *Type:* *string

---

##### `SystemInstruction`<sup>Required</sup> <a name="SystemInstruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.systemInstruction"></a>

```go
func SystemInstruction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.pathsInput">PathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqnInput">TableFqnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.paths">Paths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqn">TableFqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.pathsInput"></a>

```go
func PathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TableFqnInput`<sup>Optional</sup> <a name="TableFqnInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqnInput"></a>

```go
func TableFqnInput() *string
```

- *Type:* *string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.paths"></a>

```go
func Paths() *[]*string
```

- *Type:* *[]*string

---

##### `TableFqn`<sup>Required</sup> <a name="TableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqn"></a>

```go
func TableFqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.get"></a>

```go
func Get(index *f64) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putLeftSchemaPaths">PutLeftSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putRightSchemaPaths">PutRightSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resetConfidenceScore">ResetConfidenceScore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLeftSchemaPaths` <a name="PutLeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putLeftSchemaPaths"></a>

```go
func PutLeftSchemaPaths(value GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putLeftSchemaPaths.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a>

---

##### `PutRightSchemaPaths` <a name="PutRightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putRightSchemaPaths"></a>

```go
func PutRightSchemaPaths(value GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putRightSchemaPaths.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a>

---

##### `ResetConfidenceScore` <a name="ResetConfidenceScore" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resetConfidenceScore"></a>

```go
func ResetConfidenceScore()
```

##### `ResetSources` <a name="ResetSources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resetSources"></a>

```go
func ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.leftSchemaPaths">LeftSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.rightSchemaPaths">RightSchemaPaths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.confidenceScoreInput">ConfidenceScoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.leftSchemaPathsInput">LeftSchemaPathsInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.rightSchemaPathsInput">RightSchemaPathsInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.confidenceScore">ConfidenceScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.sources">Sources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LeftSchemaPaths`<sup>Required</sup> <a name="LeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.leftSchemaPaths"></a>

```go
func LeftSchemaPaths() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference</a>

---

##### `RightSchemaPaths`<sup>Required</sup> <a name="RightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.rightSchemaPaths"></a>

```go
func RightSchemaPaths() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference</a>

---

##### `ConfidenceScoreInput`<sup>Optional</sup> <a name="ConfidenceScoreInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.confidenceScoreInput"></a>

```go
func ConfidenceScoreInput() *f64
```

- *Type:* *f64

---

##### `LeftSchemaPathsInput`<sup>Optional</sup> <a name="LeftSchemaPathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.leftSchemaPathsInput"></a>

```go
func LeftSchemaPathsInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a>

---

##### `RightSchemaPathsInput`<sup>Optional</sup> <a name="RightSchemaPathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.rightSchemaPathsInput"></a>

```go
func RightSchemaPathsInput() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a>

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.sourcesInput"></a>

```go
func SourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConfidenceScore`<sup>Required</sup> <a name="ConfidenceScore" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.confidenceScore"></a>

```go
func ConfidenceScore() *f64
```

- *Type:* *f64

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.sources"></a>

```go
func Sources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.pathsInput">PathsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqnInput">TableFqnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.paths">Paths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqn">TableFqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.pathsInput"></a>

```go
func PathsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TableFqnInput`<sup>Optional</sup> <a name="TableFqnInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqnInput"></a>

```go
func TableFqnInput() *string
```

- *Type:* *string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.paths"></a>

```go
func Paths() *[]*string
```

- *Type:* *[]*string

---

##### `TableFqn`<sup>Required</sup> <a name="TableFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqn"></a>

```go
func TableFqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.internalValue"></a>

```go
func InternalValue() GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a>

---


### GeminiDataAnalyticsDataAgentTimeoutsOutputReference <a name="GeminiDataAnalyticsDataAgentTimeoutsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/geminidataanalyticsdataagent"

geminidataanalyticsdataagent.NewGeminiDataAnalyticsDataAgentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiDataAnalyticsDataAgentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



