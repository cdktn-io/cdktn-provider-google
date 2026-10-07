# `cesAgent` Submodule <a name="`cesAgent` Submodule" id="@cdktn/provider-google.cesAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesAgent <a name="CesAgent" id="@cdktn/provider-google.cesAgent.CesAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent google_ces_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgent(scope Construct, id *string, config CesAgentConfig) CesAgent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig">CesAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cesAgent.CesAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentConfig">CesAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putAfterAgentCallbacks">PutAfterAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putAfterModelCallbacks">PutAfterModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putAfterToolCallbacks">PutAfterToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putBeforeAgentCallbacks">PutBeforeAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putBeforeModelCallbacks">PutBeforeModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putBeforeToolCallbacks">PutBeforeToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putLlmAgent">PutLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putModelSettings">PutModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putRemoteA2AAgent">PutRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putRemoteDialogflowAgent">PutRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putToolsets">PutToolsets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.putTransferRules">PutTransferRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetAfterAgentCallbacks">ResetAfterAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetAfterModelCallbacks">ResetAfterModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetAfterToolCallbacks">ResetAfterToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetAgentId">ResetAgentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetBeforeAgentCallbacks">ResetBeforeAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetBeforeModelCallbacks">ResetBeforeModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetBeforeToolCallbacks">ResetBeforeToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetChildAgents">ResetChildAgents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetGuardrails">ResetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetLlmAgent">ResetLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetModelSettings">ResetModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetRemoteA2AAgent">ResetRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetRemoteDialogflowAgent">ResetRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetTools">ResetTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetToolsets">ResetToolsets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.resetTransferRules">ResetTransferRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.cesAgent.CesAgent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesAgent.CesAgent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.cesAgent.CesAgent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesAgent.CesAgent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.cesAgent.CesAgent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cesAgent.CesAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.cesAgent.CesAgent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.cesAgent.CesAgent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.cesAgent.CesAgent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.cesAgent.CesAgent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.cesAgent.CesAgent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesAgent.CesAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.cesAgent.CesAgent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.cesAgent.CesAgent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesAgent.CesAgent.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.cesAgent.CesAgent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.cesAgent.CesAgent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesAgent.CesAgent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.cesAgent.CesAgent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesAgent.CesAgent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAfterAgentCallbacks` <a name="PutAfterAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterAgentCallbacks"></a>

```go
func PutAfterAgentCallbacks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterAgentCallbacks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAfterModelCallbacks` <a name="PutAfterModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterModelCallbacks"></a>

```go
func PutAfterModelCallbacks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterModelCallbacks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAfterToolCallbacks` <a name="PutAfterToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterToolCallbacks"></a>

```go
func PutAfterToolCallbacks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putAfterToolCallbacks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBeforeAgentCallbacks` <a name="PutBeforeAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeAgentCallbacks"></a>

```go
func PutBeforeAgentCallbacks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeAgentCallbacks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBeforeModelCallbacks` <a name="PutBeforeModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeModelCallbacks"></a>

```go
func PutBeforeModelCallbacks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeModelCallbacks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBeforeToolCallbacks` <a name="PutBeforeToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeToolCallbacks"></a>

```go
func PutBeforeToolCallbacks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putBeforeToolCallbacks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLlmAgent` <a name="PutLlmAgent" id="@cdktn/provider-google.cesAgent.CesAgent.putLlmAgent"></a>

```go
func PutLlmAgent(value CesAgentLlmAgent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putLlmAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a>

---

##### `PutModelSettings` <a name="PutModelSettings" id="@cdktn/provider-google.cesAgent.CesAgent.putModelSettings"></a>

```go
func PutModelSettings(value CesAgentModelSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a>

---

##### `PutRemoteA2AAgent` <a name="PutRemoteA2AAgent" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteA2AAgent"></a>

```go
func PutRemoteA2AAgent(value CesAgentRemoteA2AAgent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteA2AAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a>

---

##### `PutRemoteDialogflowAgent` <a name="PutRemoteDialogflowAgent" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteDialogflowAgent"></a>

```go
func PutRemoteDialogflowAgent(value CesAgentRemoteDialogflowAgent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putRemoteDialogflowAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.cesAgent.CesAgent.putTimeouts"></a>

```go
func PutTimeouts(value CesAgentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a>

---

##### `PutToolsets` <a name="PutToolsets" id="@cdktn/provider-google.cesAgent.CesAgent.putToolsets"></a>

```go
func PutToolsets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putToolsets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTransferRules` <a name="PutTransferRules" id="@cdktn/provider-google.cesAgent.CesAgent.putTransferRules"></a>

```go
func PutTransferRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgent.putTransferRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAfterAgentCallbacks` <a name="ResetAfterAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetAfterAgentCallbacks"></a>

```go
func ResetAfterAgentCallbacks()
```

##### `ResetAfterModelCallbacks` <a name="ResetAfterModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetAfterModelCallbacks"></a>

```go
func ResetAfterModelCallbacks()
```

##### `ResetAfterToolCallbacks` <a name="ResetAfterToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetAfterToolCallbacks"></a>

```go
func ResetAfterToolCallbacks()
```

##### `ResetAgentId` <a name="ResetAgentId" id="@cdktn/provider-google.cesAgent.CesAgent.resetAgentId"></a>

```go
func ResetAgentId()
```

##### `ResetBeforeAgentCallbacks` <a name="ResetBeforeAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetBeforeAgentCallbacks"></a>

```go
func ResetBeforeAgentCallbacks()
```

##### `ResetBeforeModelCallbacks` <a name="ResetBeforeModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetBeforeModelCallbacks"></a>

```go
func ResetBeforeModelCallbacks()
```

##### `ResetBeforeToolCallbacks` <a name="ResetBeforeToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.resetBeforeToolCallbacks"></a>

```go
func ResetBeforeToolCallbacks()
```

##### `ResetChildAgents` <a name="ResetChildAgents" id="@cdktn/provider-google.cesAgent.CesAgent.resetChildAgents"></a>

```go
func ResetChildAgents()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.cesAgent.CesAgent.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesAgent.CesAgent.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGuardrails` <a name="ResetGuardrails" id="@cdktn/provider-google.cesAgent.CesAgent.resetGuardrails"></a>

```go
func ResetGuardrails()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.cesAgent.CesAgent.resetId"></a>

```go
func ResetId()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktn/provider-google.cesAgent.CesAgent.resetInstruction"></a>

```go
func ResetInstruction()
```

##### `ResetLlmAgent` <a name="ResetLlmAgent" id="@cdktn/provider-google.cesAgent.CesAgent.resetLlmAgent"></a>

```go
func ResetLlmAgent()
```

##### `ResetModelSettings` <a name="ResetModelSettings" id="@cdktn/provider-google.cesAgent.CesAgent.resetModelSettings"></a>

```go
func ResetModelSettings()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.cesAgent.CesAgent.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRemoteA2AAgent` <a name="ResetRemoteA2AAgent" id="@cdktn/provider-google.cesAgent.CesAgent.resetRemoteA2AAgent"></a>

```go
func ResetRemoteA2AAgent()
```

##### `ResetRemoteDialogflowAgent` <a name="ResetRemoteDialogflowAgent" id="@cdktn/provider-google.cesAgent.CesAgent.resetRemoteDialogflowAgent"></a>

```go
func ResetRemoteDialogflowAgent()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.cesAgent.CesAgent.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTools` <a name="ResetTools" id="@cdktn/provider-google.cesAgent.CesAgent.resetTools"></a>

```go
func ResetTools()
```

##### `ResetToolsets` <a name="ResetToolsets" id="@cdktn/provider-google.cesAgent.CesAgent.resetToolsets"></a>

```go
func ResetToolsets()
```

##### `ResetTransferRules` <a name="ResetTransferRules" id="@cdktn/provider-google.cesAgent.CesAgent.resetTransferRules"></a>

```go
func ResetTransferRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CesAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.cesAgent.CesAgent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.CesAgent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesAgent.CesAgent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.cesAgent.CesAgent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.CesAgent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesAgent.CesAgent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.cesAgent.CesAgent.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.CesAgent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesAgent.CesAgent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.CesAgent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CesAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CesAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CesAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesAgent.CesAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CesAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterAgentCallbacks">AfterAgentCallbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList">CesAgentAfterAgentCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterModelCallbacks">AfterModelCallbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList">CesAgentAfterModelCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterToolCallbacks">AfterToolCallbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList">CesAgentAfterToolCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeAgentCallbacks">BeforeAgentCallbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList">CesAgentBeforeAgentCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeModelCallbacks">BeforeModelCallbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList">CesAgentBeforeModelCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeToolCallbacks">BeforeToolCallbacks</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList">CesAgentBeforeToolCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.generatedSummary">GeneratedSummary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.llmAgent">LlmAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference">CesAgentLlmAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference">CesAgentModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.remoteA2AAgent">RemoteA2AAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference">CesAgentRemoteA2AAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.remoteDialogflowAgent">RemoteDialogflowAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference">CesAgentRemoteDialogflowAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference">CesAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.toolsets">Toolsets</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList">CesAgentToolsetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.transferRules">TransferRules</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList">CesAgentTransferRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterAgentCallbacksInput">AfterAgentCallbacksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterModelCallbacksInput">AfterModelCallbacksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.afterToolCallbacksInput">AfterToolCallbacksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.agentIdInput">AgentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.appInput">AppInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeAgentCallbacksInput">BeforeAgentCallbacksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeModelCallbacksInput">BeforeModelCallbacksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.beforeToolCallbacksInput">BeforeToolCallbacksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.childAgentsInput">ChildAgentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.guardrailsInput">GuardrailsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.instructionInput">InstructionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.llmAgentInput">LlmAgentInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.modelSettingsInput">ModelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.remoteA2AAgentInput">RemoteA2AAgentInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.remoteDialogflowAgentInput">RemoteDialogflowAgentInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.toolsetsInput">ToolsetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.toolsInput">ToolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.transferRulesInput">TransferRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.agentId">AgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.app">App</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.childAgents">ChildAgents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.guardrails">Guardrails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.instruction">Instruction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.tools">Tools</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.cesAgent.CesAgent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.cesAgent.CesAgent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.cesAgent.CesAgent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.cesAgent.CesAgent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.cesAgent.CesAgent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.cesAgent.CesAgent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cesAgent.CesAgent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cesAgent.CesAgent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cesAgent.CesAgent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cesAgent.CesAgent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cesAgent.CesAgent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesAgent.CesAgent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cesAgent.CesAgent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AfterAgentCallbacks`<sup>Required</sup> <a name="AfterAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterAgentCallbacks"></a>

```go
func AfterAgentCallbacks() CesAgentAfterAgentCallbacksList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList">CesAgentAfterAgentCallbacksList</a>

---

##### `AfterModelCallbacks`<sup>Required</sup> <a name="AfterModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterModelCallbacks"></a>

```go
func AfterModelCallbacks() CesAgentAfterModelCallbacksList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList">CesAgentAfterModelCallbacksList</a>

---

##### `AfterToolCallbacks`<sup>Required</sup> <a name="AfterToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterToolCallbacks"></a>

```go
func AfterToolCallbacks() CesAgentAfterToolCallbacksList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList">CesAgentAfterToolCallbacksList</a>

---

##### `BeforeAgentCallbacks`<sup>Required</sup> <a name="BeforeAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeAgentCallbacks"></a>

```go
func BeforeAgentCallbacks() CesAgentBeforeAgentCallbacksList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList">CesAgentBeforeAgentCallbacksList</a>

---

##### `BeforeModelCallbacks`<sup>Required</sup> <a name="BeforeModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeModelCallbacks"></a>

```go
func BeforeModelCallbacks() CesAgentBeforeModelCallbacksList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList">CesAgentBeforeModelCallbacksList</a>

---

##### `BeforeToolCallbacks`<sup>Required</sup> <a name="BeforeToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeToolCallbacks"></a>

```go
func BeforeToolCallbacks() CesAgentBeforeToolCallbacksList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList">CesAgentBeforeToolCallbacksList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.cesAgent.CesAgent.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.cesAgent.CesAgent.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `GeneratedSummary`<sup>Required</sup> <a name="GeneratedSummary" id="@cdktn/provider-google.cesAgent.CesAgent.property.generatedSummary"></a>

```go
func GeneratedSummary() *string
```

- *Type:* *string

---

##### `LlmAgent`<sup>Required</sup> <a name="LlmAgent" id="@cdktn/provider-google.cesAgent.CesAgent.property.llmAgent"></a>

```go
func LlmAgent() CesAgentLlmAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference">CesAgentLlmAgentOutputReference</a>

---

##### `ModelSettings`<sup>Required</sup> <a name="ModelSettings" id="@cdktn/provider-google.cesAgent.CesAgent.property.modelSettings"></a>

```go
func ModelSettings() CesAgentModelSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference">CesAgentModelSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesAgent.CesAgent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RemoteA2AAgent`<sup>Required</sup> <a name="RemoteA2AAgent" id="@cdktn/provider-google.cesAgent.CesAgent.property.remoteA2AAgent"></a>

```go
func RemoteA2AAgent() CesAgentRemoteA2AAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference">CesAgentRemoteA2AAgentOutputReference</a>

---

##### `RemoteDialogflowAgent`<sup>Required</sup> <a name="RemoteDialogflowAgent" id="@cdktn/provider-google.cesAgent.CesAgent.property.remoteDialogflowAgent"></a>

```go
func RemoteDialogflowAgent() CesAgentRemoteDialogflowAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference">CesAgentRemoteDialogflowAgentOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.cesAgent.CesAgent.property.timeouts"></a>

```go
func Timeouts() CesAgentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference">CesAgentTimeoutsOutputReference</a>

---

##### `Toolsets`<sup>Required</sup> <a name="Toolsets" id="@cdktn/provider-google.cesAgent.CesAgent.property.toolsets"></a>

```go
func Toolsets() CesAgentToolsetsList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList">CesAgentToolsetsList</a>

---

##### `TransferRules`<sup>Required</sup> <a name="TransferRules" id="@cdktn/provider-google.cesAgent.CesAgent.property.transferRules"></a>

```go
func TransferRules() CesAgentTransferRulesList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList">CesAgentTransferRulesList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.cesAgent.CesAgent.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AfterAgentCallbacksInput`<sup>Optional</sup> <a name="AfterAgentCallbacksInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterAgentCallbacksInput"></a>

```go
func AfterAgentCallbacksInput() interface{}
```

- *Type:* interface{}

---

##### `AfterModelCallbacksInput`<sup>Optional</sup> <a name="AfterModelCallbacksInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterModelCallbacksInput"></a>

```go
func AfterModelCallbacksInput() interface{}
```

- *Type:* interface{}

---

##### `AfterToolCallbacksInput`<sup>Optional</sup> <a name="AfterToolCallbacksInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.afterToolCallbacksInput"></a>

```go
func AfterToolCallbacksInput() interface{}
```

- *Type:* interface{}

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.agentIdInput"></a>

```go
func AgentIdInput() *string
```

- *Type:* *string

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.appInput"></a>

```go
func AppInput() *string
```

- *Type:* *string

---

##### `BeforeAgentCallbacksInput`<sup>Optional</sup> <a name="BeforeAgentCallbacksInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeAgentCallbacksInput"></a>

```go
func BeforeAgentCallbacksInput() interface{}
```

- *Type:* interface{}

---

##### `BeforeModelCallbacksInput`<sup>Optional</sup> <a name="BeforeModelCallbacksInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeModelCallbacksInput"></a>

```go
func BeforeModelCallbacksInput() interface{}
```

- *Type:* interface{}

---

##### `BeforeToolCallbacksInput`<sup>Optional</sup> <a name="BeforeToolCallbacksInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.beforeToolCallbacksInput"></a>

```go
func BeforeToolCallbacksInput() interface{}
```

- *Type:* interface{}

---

##### `ChildAgentsInput`<sup>Optional</sup> <a name="ChildAgentsInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.childAgentsInput"></a>

```go
func ChildAgentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GuardrailsInput`<sup>Optional</sup> <a name="GuardrailsInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.guardrailsInput"></a>

```go
func GuardrailsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.instructionInput"></a>

```go
func InstructionInput() *string
```

- *Type:* *string

---

##### `LlmAgentInput`<sup>Optional</sup> <a name="LlmAgentInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.llmAgentInput"></a>

```go
func LlmAgentInput() CesAgentLlmAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ModelSettingsInput`<sup>Optional</sup> <a name="ModelSettingsInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.modelSettingsInput"></a>

```go
func ModelSettingsInput() CesAgentModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RemoteA2AAgentInput`<sup>Optional</sup> <a name="RemoteA2AAgentInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.remoteA2AAgentInput"></a>

```go
func RemoteA2AAgentInput() CesAgentRemoteA2AAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a>

---

##### `RemoteDialogflowAgentInput`<sup>Optional</sup> <a name="RemoteDialogflowAgentInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.remoteDialogflowAgentInput"></a>

```go
func RemoteDialogflowAgentInput() CesAgentRemoteDialogflowAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ToolsetsInput`<sup>Optional</sup> <a name="ToolsetsInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.toolsetsInput"></a>

```go
func ToolsetsInput() interface{}
```

- *Type:* interface{}

---

##### `ToolsInput`<sup>Optional</sup> <a name="ToolsInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.toolsInput"></a>

```go
func ToolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TransferRulesInput`<sup>Optional</sup> <a name="TransferRulesInput" id="@cdktn/provider-google.cesAgent.CesAgent.property.transferRulesInput"></a>

```go
func TransferRulesInput() interface{}
```

- *Type:* interface{}

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktn/provider-google.cesAgent.CesAgent.property.agentId"></a>

```go
func AgentId() *string
```

- *Type:* *string

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google.cesAgent.CesAgent.property.app"></a>

```go
func App() *string
```

- *Type:* *string

---

##### `ChildAgents`<sup>Required</sup> <a name="ChildAgents" id="@cdktn/provider-google.cesAgent.CesAgent.property.childAgents"></a>

```go
func ChildAgents() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.cesAgent.CesAgent.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesAgent.CesAgent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesAgent.CesAgent.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Guardrails`<sup>Required</sup> <a name="Guardrails" id="@cdktn/provider-google.cesAgent.CesAgent.property.guardrails"></a>

```go
func Guardrails() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesAgent.CesAgent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktn/provider-google.cesAgent.CesAgent.property.instruction"></a>

```go
func Instruction() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.cesAgent.CesAgent.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.cesAgent.CesAgent.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-google.cesAgent.CesAgent.property.tools"></a>

```go
func Tools() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.cesAgent.CesAgent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CesAgentAfterAgentCallbacks <a name="CesAgentAfterAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentAfterAgentCallbacks {
	PythonCode: *string,
	Description: *string,
	Disabled: interface{},
	ProactiveExecutionEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.pythonCode">PythonCode</a></code> | <code>*string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>interface{}</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.pythonCode"></a>

```go
PythonCode *string
```

- *Type:* *string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `ProactiveExecutionEnabled`<sup>Optional</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacks.property.proactiveExecutionEnabled"></a>

```go
ProactiveExecutionEnabled interface{}
```

- *Type:* interface{}

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}

---

### CesAgentAfterModelCallbacks <a name="CesAgentAfterModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentAfterModelCallbacks {
	PythonCode: *string,
	Description: *string,
	Disabled: interface{},
	ProactiveExecutionEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.pythonCode">PythonCode</a></code> | <code>*string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>interface{}</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.pythonCode"></a>

```go
PythonCode *string
```

- *Type:* *string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `ProactiveExecutionEnabled`<sup>Optional</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacks.property.proactiveExecutionEnabled"></a>

```go
ProactiveExecutionEnabled interface{}
```

- *Type:* interface{}

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}

---

### CesAgentAfterToolCallbacks <a name="CesAgentAfterToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentAfterToolCallbacks {
	PythonCode: *string,
	Description: *string,
	Disabled: interface{},
	ProactiveExecutionEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.pythonCode">PythonCode</a></code> | <code>*string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>interface{}</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.pythonCode"></a>

```go
PythonCode *string
```

- *Type:* *string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `ProactiveExecutionEnabled`<sup>Optional</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacks.property.proactiveExecutionEnabled"></a>

```go
ProactiveExecutionEnabled interface{}
```

- *Type:* interface{}

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}

---

### CesAgentBeforeAgentCallbacks <a name="CesAgentBeforeAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentBeforeAgentCallbacks {
	PythonCode: *string,
	Description: *string,
	Disabled: interface{},
	ProactiveExecutionEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.pythonCode">PythonCode</a></code> | <code>*string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>interface{}</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.pythonCode"></a>

```go
PythonCode *string
```

- *Type:* *string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `ProactiveExecutionEnabled`<sup>Optional</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacks.property.proactiveExecutionEnabled"></a>

```go
ProactiveExecutionEnabled interface{}
```

- *Type:* interface{}

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}

---

### CesAgentBeforeModelCallbacks <a name="CesAgentBeforeModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentBeforeModelCallbacks {
	PythonCode: *string,
	Description: *string,
	Disabled: interface{},
	ProactiveExecutionEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.pythonCode">PythonCode</a></code> | <code>*string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>interface{}</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.pythonCode"></a>

```go
PythonCode *string
```

- *Type:* *string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `ProactiveExecutionEnabled`<sup>Optional</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacks.property.proactiveExecutionEnabled"></a>

```go
ProactiveExecutionEnabled interface{}
```

- *Type:* interface{}

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}

---

### CesAgentBeforeToolCallbacks <a name="CesAgentBeforeToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentBeforeToolCallbacks {
	PythonCode: *string,
	Description: *string,
	Disabled: interface{},
	ProactiveExecutionEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.pythonCode">PythonCode</a></code> | <code>*string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>interface{}</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.pythonCode"></a>

```go
PythonCode *string
```

- *Type:* *string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disabled CesAgent#disabled}

---

##### `ProactiveExecutionEnabled`<sup>Optional</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacks.property.proactiveExecutionEnabled"></a>

```go
ProactiveExecutionEnabled interface{}
```

- *Type:* interface{}

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#proactive_execution_enabled CesAgent#proactive_execution_enabled}

---

### CesAgentConfig <a name="CesAgentConfig" id="@cdktn/provider-google.cesAgent.CesAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	App: *string,
	DisplayName: *string,
	Location: *string,
	AfterAgentCallbacks: interface{},
	AfterModelCallbacks: interface{},
	AfterToolCallbacks: interface{},
	AgentId: *string,
	BeforeAgentCallbacks: interface{},
	BeforeModelCallbacks: interface{},
	BeforeToolCallbacks: interface{},
	ChildAgents: *[]*string,
	DeletionPolicy: *string,
	Description: *string,
	Guardrails: *[]*string,
	Id: *string,
	Instruction: *string,
	LlmAgent: github.com/cdktn-io/cdktn-provider-google-go/google/v21.cesAgent.CesAgentLlmAgent,
	ModelSettings: github.com/cdktn-io/cdktn-provider-google-go/google/v21.cesAgent.CesAgentModelSettings,
	Project: *string,
	RemoteA2AAgent: github.com/cdktn-io/cdktn-provider-google-go/google/v21.cesAgent.CesAgentRemoteA2AAgent,
	RemoteDialogflowAgent: github.com/cdktn-io/cdktn-provider-google-go/google/v21.cesAgent.CesAgentRemoteDialogflowAgent,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v21.cesAgent.CesAgentTimeouts,
	Tools: *[]*string,
	Toolsets: interface{},
	TransferRules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.app">App</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name of the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterAgentCallbacks">AfterAgentCallbacks</a></code> | <code>interface{}</code> | after_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterModelCallbacks">AfterModelCallbacks</a></code> | <code>interface{}</code> | after_model_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterToolCallbacks">AfterToolCallbacks</a></code> | <code>interface{}</code> | after_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.agentId">AgentId</a></code> | <code>*string</code> | The ID to use for the agent, which will become the final component of the agent's resource name. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeAgentCallbacks">BeforeAgentCallbacks</a></code> | <code>interface{}</code> | before_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeModelCallbacks">BeforeModelCallbacks</a></code> | <code>interface{}</code> | before_model_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeToolCallbacks">BeforeToolCallbacks</a></code> | <code>interface{}</code> | before_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.childAgents">ChildAgents</a></code> | <code>*[]*string</code> | List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.description">Description</a></code> | <code>*string</code> | Human-readable description of the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.guardrails">Guardrails</a></code> | <code>*[]*string</code> | List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#id CesAgent#id}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.instruction">Instruction</a></code> | <code>*string</code> | Instructions for the LLM model to guide the agent's behavior. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.llmAgent">LlmAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a></code> | llm_agent block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#project CesAgent#project}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.remoteA2AAgent">RemoteA2AAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a></code> | remote_a2a_agent block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.remoteDialogflowAgent">RemoteDialogflowAgent</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a></code> | remote_dialogflow_agent block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.tools">Tools</a></code> | <code>*[]*string</code> | List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.toolsets">Toolsets</a></code> | <code>interface{}</code> | toolsets block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentConfig.property.transferRules">TransferRules</a></code> | <code>interface{}</code> | transfer_rules block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.app"></a>

```go
App *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#app CesAgent#app}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#display_name CesAgent#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#location CesAgent#location}

---

##### `AfterAgentCallbacks`<sup>Optional</sup> <a name="AfterAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterAgentCallbacks"></a>

```go
AfterAgentCallbacks interface{}
```

- *Type:* interface{}

after_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_agent_callbacks CesAgent#after_agent_callbacks}

---

##### `AfterModelCallbacks`<sup>Optional</sup> <a name="AfterModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterModelCallbacks"></a>

```go
AfterModelCallbacks interface{}
```

- *Type:* interface{}

after_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_model_callbacks CesAgent#after_model_callbacks}

---

##### `AfterToolCallbacks`<sup>Optional</sup> <a name="AfterToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.afterToolCallbacks"></a>

```go
AfterToolCallbacks interface{}
```

- *Type:* interface{}

after_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#after_tool_callbacks CesAgent#after_tool_callbacks}

---

##### `AgentId`<sup>Optional</sup> <a name="AgentId" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.agentId"></a>

```go
AgentId *string
```

- *Type:* *string

The ID to use for the agent, which will become the final component of the agent's resource name.

If not provided, a unique ID will be
automatically assigned for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_id CesAgent#agent_id}

---

##### `BeforeAgentCallbacks`<sup>Optional</sup> <a name="BeforeAgentCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeAgentCallbacks"></a>

```go
BeforeAgentCallbacks interface{}
```

- *Type:* interface{}

before_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_agent_callbacks CesAgent#before_agent_callbacks}

---

##### `BeforeModelCallbacks`<sup>Optional</sup> <a name="BeforeModelCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeModelCallbacks"></a>

```go
BeforeModelCallbacks interface{}
```

- *Type:* interface{}

before_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_model_callbacks CesAgent#before_model_callbacks}

---

##### `BeforeToolCallbacks`<sup>Optional</sup> <a name="BeforeToolCallbacks" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.beforeToolCallbacks"></a>

```go
BeforeToolCallbacks interface{}
```

- *Type:* interface{}

before_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#before_tool_callbacks CesAgent#before_tool_callbacks}

---

##### `ChildAgents`<sup>Optional</sup> <a name="ChildAgents" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.childAgents"></a>

```go
ChildAgents *[]*string
```

- *Type:* *[]*string

List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#child_agents CesAgent#child_agents}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#deletion_policy CesAgent#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Human-readable description of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `Guardrails`<sup>Optional</sup> <a name="Guardrails" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.guardrails"></a>

```go
Guardrails *[]*string
```

- *Type:* *[]*string

List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#guardrails CesAgent#guardrails}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#id CesAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.instruction"></a>

```go
Instruction *string
```

- *Type:* *string

Instructions for the LLM model to guide the agent's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#instruction CesAgent#instruction}

---

##### `LlmAgent`<sup>Optional</sup> <a name="LlmAgent" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.llmAgent"></a>

```go
LlmAgent CesAgentLlmAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a>

llm_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#llm_agent CesAgent#llm_agent}

---

##### `ModelSettings`<sup>Optional</sup> <a name="ModelSettings" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.modelSettings"></a>

```go
ModelSettings CesAgentModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#model_settings CesAgent#model_settings}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#project CesAgent#project}.

---

##### `RemoteA2AAgent`<sup>Optional</sup> <a name="RemoteA2AAgent" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.remoteA2AAgent"></a>

```go
RemoteA2AAgent CesAgentRemoteA2AAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a>

remote_a2a_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#remote_a2a_agent CesAgent#remote_a2a_agent}

---

##### `RemoteDialogflowAgent`<sup>Optional</sup> <a name="RemoteDialogflowAgent" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.remoteDialogflowAgent"></a>

```go
RemoteDialogflowAgent CesAgentRemoteDialogflowAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a>

remote_dialogflow_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#remote_dialogflow_agent CesAgent#remote_dialogflow_agent}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.timeouts"></a>

```go
Timeouts CesAgentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts">CesAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#timeouts CesAgent#timeouts}

---

##### `Tools`<sup>Optional</sup> <a name="Tools" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.tools"></a>

```go
Tools *[]*string
```

- *Type:* *[]*string

List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tools CesAgent#tools}

---

##### `Toolsets`<sup>Optional</sup> <a name="Toolsets" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.toolsets"></a>

```go
Toolsets interface{}
```

- *Type:* interface{}

toolsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#toolsets CesAgent#toolsets}

---

##### `TransferRules`<sup>Optional</sup> <a name="TransferRules" id="@cdktn/provider-google.cesAgent.CesAgentConfig.property.transferRules"></a>

```go
TransferRules interface{}
```

- *Type:* interface{}

transfer_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#transfer_rules CesAgent#transfer_rules}

---

### CesAgentLlmAgent <a name="CesAgentLlmAgent" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentLlmAgent {

}
```


### CesAgentModelSettings <a name="CesAgentModelSettings" id="@cdktn/provider-google.cesAgent.CesAgentModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentModelSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentModelSettings {
	Model: *string,
	Temperature: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings.property.model">Model</a></code> | <code>*string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings.property.temperature">Temperature</a></code> | <code>*f64</code> | If set, this temperature will be used for the LLM model. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-google.cesAgent.CesAgentModelSettings.property.model"></a>

```go
Model *string
```

- *Type:* *string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#model CesAgent#model}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-google.cesAgent.CesAgentModelSettings.property.temperature"></a>

```go
Temperature *f64
```

- *Type:* *f64

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#temperature CesAgent#temperature}

---

### CesAgentRemoteA2AAgent <a name="CesAgentRemoteA2AAgent" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentRemoteA2AAgent {
	A2AConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.cesAgent.CesAgentRemoteA2AAgentA2AConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent.property.a2AConfig">A2AConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a></code> | a2a_config block. |

---

##### `A2AConfig`<sup>Required</sup> <a name="A2AConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent.property.a2AConfig"></a>

```go
A2AConfig CesAgentRemoteA2AAgentA2AConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a>

a2a_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#a2a_config CesAgent#a2a_config}

---

### CesAgentRemoteA2AAgentA2AConfig <a name="CesAgentRemoteA2AAgentA2AConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentRemoteA2AAgentA2AConfig {
	AgentCard: github.com/cdktn-io/cdktn-provider-google-go/google/v21.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard,
	AgentRegistry: *string,
	ApiAuthentication: github.com/cdktn-io/cdktn-provider-google-go/google/v21.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication,
	ContextId: *string,
	InputVariableMapping: *map[string]*string,
	OutputVariableMapping: *map[string]*string,
	StreamingEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.agentCard">AgentCard</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | agent_card block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.agentRegistry">AgentRegistry</a></code> | <code>*string</code> | Reference to the agent in the Agent Registry. Format: 'projects/{project}/locations/{location}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.apiAuthentication">ApiAuthentication</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | api_authentication block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.contextId">ContextId</a></code> | <code>*string</code> | If not empty, interactions with the remote A2A agent will use this context ID. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.inputVariableMapping">InputVariableMapping</a></code> | <code>*map[string]*string</code> | Mapping of input variable names of remote agent to GECX variable names. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.outputVariableMapping">OutputVariableMapping</a></code> | <code>*map[string]*string</code> | Mapping of output variable names of remote agent to GECX variable names. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.streamingEnabled">StreamingEnabled</a></code> | <code>interface{}</code> | Whether streaming is enabled for the remote agent. |

---

##### `AgentCard`<sup>Optional</sup> <a name="AgentCard" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.agentCard"></a>

```go
AgentCard CesAgentRemoteA2AAgentA2AConfigAgentCard
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a>

agent_card block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_card CesAgent#agent_card}

---

##### `AgentRegistry`<sup>Optional</sup> <a name="AgentRegistry" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.agentRegistry"></a>

```go
AgentRegistry *string
```

- *Type:* *string

Reference to the agent in the Agent Registry. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent_registry CesAgent#agent_registry}

---

##### `ApiAuthentication`<sup>Optional</sup> <a name="ApiAuthentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.apiAuthentication"></a>

```go
ApiAuthentication CesAgentRemoteA2AAgentA2AConfigApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#api_authentication CesAgent#api_authentication}

---

##### `ContextId`<sup>Optional</sup> <a name="ContextId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.contextId"></a>

```go
ContextId *string
```

- *Type:* *string

If not empty, interactions with the remote A2A agent will use this context ID.

This context_id field can refer to a session variable like
'$context.variables.order_agent_session_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#context_id CesAgent#context_id}

---

##### `InputVariableMapping`<sup>Optional</sup> <a name="InputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.inputVariableMapping"></a>

```go
InputVariableMapping *map[string]*string
```

- *Type:* *map[string]*string

Mapping of input variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#input_variable_mapping CesAgent#input_variable_mapping}

---

##### `OutputVariableMapping`<sup>Optional</sup> <a name="OutputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.outputVariableMapping"></a>

```go
OutputVariableMapping *map[string]*string
```

- *Type:* *map[string]*string

Mapping of output variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#output_variable_mapping CesAgent#output_variable_mapping}

---

##### `StreamingEnabled`<sup>Optional</sup> <a name="StreamingEnabled" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig.property.streamingEnabled"></a>

```go
StreamingEnabled interface{}
```

- *Type:* interface{}

Whether streaming is enabled for the remote agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#streaming_enabled CesAgent#streaming_enabled}

---

### CesAgentRemoteA2AAgentA2AConfigAgentCard <a name="CesAgentRemoteA2AAgentA2AConfigAgentCard" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentRemoteA2AAgentA2AConfigAgentCard {
	Description: *string,
	Name: *string,
	Skills: interface{},
	SupportedInterfaces: interface{},
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.description">Description</a></code> | <code>*string</code> | A description of the agent's domain of action/solution space. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.name">Name</a></code> | <code>*string</code> | A human-readable name for the agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.skills">Skills</a></code> | <code>interface{}</code> | skills block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.supportedInterfaces">SupportedInterfaces</a></code> | <code>interface{}</code> | supported_interfaces block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.version">Version</a></code> | <code>*string</code> | The version of the agent. |

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the agent's domain of action/solution space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.name"></a>

```go
Name *string
```

- *Type:* *string

A human-readable name for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#name CesAgent#name}

---

##### `Skills`<sup>Required</sup> <a name="Skills" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.skills"></a>

```go
Skills interface{}
```

- *Type:* interface{}

skills block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#skills CesAgent#skills}

---

##### `SupportedInterfaces`<sup>Required</sup> <a name="SupportedInterfaces" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.supportedInterfaces"></a>

```go
SupportedInterfaces interface{}
```

- *Type:* interface{}

supported_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#supported_interfaces CesAgent#supported_interfaces}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard.property.version"></a>

```go
Version *string
```

- *Type:* *string

The version of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#version CesAgent#version}

---

### CesAgentRemoteA2AAgentA2AConfigAgentCardSkills <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSkills" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills {
	Description: *string,
	Id: *string,
	Name: *string,
	Tags: *[]*string,
	Examples: *[]*string,
	InputModes: *[]*string,
	OutputModes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.description">Description</a></code> | <code>*string</code> | A detailed description of the skill. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.id">Id</a></code> | <code>*string</code> | A unique identifier for the agent's skill. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.name">Name</a></code> | <code>*string</code> | A human-readable name for the skill. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.tags">Tags</a></code> | <code>*[]*string</code> | A set of keywords describing the skill's capabilities. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.examples">Examples</a></code> | <code>*[]*string</code> | Example prompts or scenarios that this skill can handle. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.inputModes">InputModes</a></code> | <code>*[]*string</code> | The set of supported input media types for this skill, overriding the agent's defaults. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.outputModes">OutputModes</a></code> | <code>*[]*string</code> | The set of supported output media types for this skill, overriding the agent's defaults. |

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.description"></a>

```go
Description *string
```

- *Type:* *string

A detailed description of the skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#description CesAgent#description}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.id"></a>

```go
Id *string
```

- *Type:* *string

A unique identifier for the agent's skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#id CesAgent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.name"></a>

```go
Name *string
```

- *Type:* *string

A human-readable name for the skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#name CesAgent#name}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A set of keywords describing the skill's capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tags CesAgent#tags}

---

##### `Examples`<sup>Optional</sup> <a name="Examples" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.examples"></a>

```go
Examples *[]*string
```

- *Type:* *[]*string

Example prompts or scenarios that this skill can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#examples CesAgent#examples}

---

##### `InputModes`<sup>Optional</sup> <a name="InputModes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.inputModes"></a>

```go
InputModes *[]*string
```

- *Type:* *[]*string

The set of supported input media types for this skill, overriding the agent's defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#input_modes CesAgent#input_modes}

---

##### `OutputModes`<sup>Optional</sup> <a name="OutputModes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.outputModes"></a>

```go
OutputModes *[]*string
```

- *Type:* *[]*string

The set of supported output media types for this skill, overriding the agent's defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#output_modes CesAgent#output_modes}

---

### CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces {
	ProtocolBinding: *string,
	ProtocolVersion: *string,
	Url: *string,
	Tenant: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolBinding">ProtocolBinding</a></code> | <code>*string</code> | The protocol binding supported at this URL. The core ones officially supported are JSONRPC, GRPC and HTTP+JSON. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolVersion">ProtocolVersion</a></code> | <code>*string</code> | The version of the A2A protocol this interface exposes. Examples: "0.3", "1.0". |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.url">Url</a></code> | <code>*string</code> | The URL where this interface is available. Must be a valid absolute HTTPS URL in production. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.tenant">Tenant</a></code> | <code>*string</code> | Tenant ID to be used in the request when calling the agent. |

---

##### `ProtocolBinding`<sup>Required</sup> <a name="ProtocolBinding" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolBinding"></a>

```go
ProtocolBinding *string
```

- *Type:* *string

The protocol binding supported at this URL. The core ones officially supported are JSONRPC, GRPC and HTTP+JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#protocol_binding CesAgent#protocol_binding}

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolVersion"></a>

```go
ProtocolVersion *string
```

- *Type:* *string

The version of the A2A protocol this interface exposes. Examples: "0.3", "1.0".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#protocol_version CesAgent#protocol_version}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL where this interface is available. Must be a valid absolute HTTPS URL in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#url CesAgent#url}

---

##### `Tenant`<sup>Optional</sup> <a name="Tenant" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.tenant"></a>

```go
Tenant *string
```

- *Type:* *string

Tenant ID to be used in the request when calling the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tenant CesAgent#tenant}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthentication <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication {
	ApiKeyConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig,
	BearerTokenConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig,
	OauthConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig,
	ServiceAccountAuthConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.bearerTokenConfig">BearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.serviceAccountAuthConfig">ServiceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | service_account_auth_config block. |

---

##### `ApiKeyConfig`<sup>Optional</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.apiKeyConfig"></a>

```go
ApiKeyConfig CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#api_key_config CesAgent#api_key_config}

---

##### `BearerTokenConfig`<sup>Optional</sup> <a name="BearerTokenConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.bearerTokenConfig"></a>

```go
BearerTokenConfig CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#bearer_token_config CesAgent#bearer_token_config}

---

##### `OauthConfig`<sup>Optional</sup> <a name="OauthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.oauthConfig"></a>

```go
OauthConfig CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#oauth_config CesAgent#oauth_config}

---

##### `ServiceAccountAuthConfig`<sup>Optional</sup> <a name="ServiceAccountAuthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.serviceAccountAuthConfig"></a>

```go
ServiceAccountAuthConfig CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#service_account_auth_config CesAgent#service_account_auth_config}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig {
	ApiKeySecretVersion: *string,
	KeyName: *string,
	RequestLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.apiKeySecretVersion">ApiKeySecretVersion</a></code> | <code>*string</code> | The name of the SecretManager secret version resource storing the API key. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.keyName">KeyName</a></code> | <code>*string</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.requestLocation">RequestLocation</a></code> | <code>*string</code> | Key location in the request. Possible values: HEADER QUERY_STRING. |

---

##### `ApiKeySecretVersion`<sup>Required</sup> <a name="ApiKeySecretVersion" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.apiKeySecretVersion"></a>

```go
ApiKeySecretVersion *string
```

- *Type:* *string

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#api_key_secret_version CesAgent#api_key_secret_version}

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#key_name CesAgent#key_name}

---

##### `RequestLocation`<sup>Required</sup> <a name="RequestLocation" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.requestLocation"></a>

```go
RequestLocation *string
```

- *Type:* *string

Key location in the request. Possible values: HEADER QUERY_STRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#request_location CesAgent#request_location}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig {
	Token: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.property.token">Token</a></code> | <code>*string</code> | The bearer token. Must be in the format '$context.variables.<name_of_variable>'. |

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

The bearer token. Must be in the format '$context.variables.<name_of_variable>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#token CesAgent#token}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig {
	ClientId: *string,
	ClientSecretVersion: *string,
	OauthGrantType: *string,
	TokenEndpoint: *string,
	Scopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientSecretVersion">ClientSecretVersion</a></code> | <code>*string</code> | The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.oauthGrantType">OauthGrantType</a></code> | <code>*string</code> | OAuth grant types. Possible values: CLIENT_CREDENTIAL. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | The OAuth scopes to grant. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#client_id CesAgent#client_id}

---

##### `ClientSecretVersion`<sup>Required</sup> <a name="ClientSecretVersion" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientSecretVersion"></a>

```go
ClientSecretVersion *string
```

- *Type:* *string

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#client_secret_version CesAgent#client_secret_version}

---

##### `OauthGrantType`<sup>Required</sup> <a name="OauthGrantType" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.oauthGrantType"></a>

```go
OauthGrantType *string
```

- *Type:* *string

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#oauth_grant_type CesAgent#oauth_grant_type}

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#token_endpoint CesAgent#token_endpoint}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#scopes CesAgent#scopes}

---

### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig {
	ServiceAccount: *string,
	Scopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The email address of the service account used for authenticatation. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used. |

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#service_account CesAgent#service_account}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#scopes CesAgent#scopes}

---

### CesAgentRemoteDialogflowAgent <a name="CesAgentRemoteDialogflowAgent" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentRemoteDialogflowAgent {
	Agent: *string,
	FlowId: *string,
	EnvironmentId: *string,
	InputVariableMapping: *map[string]*string,
	LanguageCodeVariable: *string,
	OutputVariableMapping: *map[string]*string,
	RespectResponseInterruptionSettings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.agent">Agent</a></code> | <code>*string</code> | The [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents agent resource name. Format: 'projects/{project}/locations/{location}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.flowId">FlowId</a></code> | <code>*string</code> | The flow ID of the flow in the Dialogflow agent. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | The environment ID of the Dialogflow agent be used for the agent execution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.inputVariableMapping">InputVariableMapping</a></code> | <code>*map[string]*string</code> | The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.languageCodeVariable">LanguageCodeVariable</a></code> | <code>*string</code> | The name of the variable that contains the language code to be used for the Dialogflow session. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.outputVariableMapping">OutputVariableMapping</a></code> | <code>*map[string]*string</code> | The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.respectResponseInterruptionSettings">RespectResponseInterruptionSettings</a></code> | <code>interface{}</code> | Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent. |

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.agent"></a>

```go
Agent *string
```

- *Type:* *string

The [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents agent resource name. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#agent CesAgent#agent}

---

##### `FlowId`<sup>Required</sup> <a name="FlowId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.flowId"></a>

```go
FlowId *string
```

- *Type:* *string

The flow ID of the flow in the Dialogflow agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#flow_id CesAgent#flow_id}

---

##### `EnvironmentId`<sup>Optional</sup> <a name="EnvironmentId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.environmentId"></a>

```go
EnvironmentId *string
```

- *Type:* *string

The environment ID of the Dialogflow agent be used for the agent execution.

If not specified, the draft environment will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#environment_id CesAgent#environment_id}

---

##### `InputVariableMapping`<sup>Optional</sup> <a name="InputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.inputVariableMapping"></a>

```go
InputVariableMapping *map[string]*string
```

- *Type:* *map[string]*string

The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#input_variable_mapping CesAgent#input_variable_mapping}

---

##### `LanguageCodeVariable`<sup>Optional</sup> <a name="LanguageCodeVariable" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.languageCodeVariable"></a>

```go
LanguageCodeVariable *string
```

- *Type:* *string

The name of the variable that contains the language code to be used for the Dialogflow session.

If unspecified, the default language code of the
Dialogflow agent will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#language_code_variable CesAgent#language_code_variable}

---

##### `OutputVariableMapping`<sup>Optional</sup> <a name="OutputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.outputVariableMapping"></a>

```go
OutputVariableMapping *map[string]*string
```

- *Type:* *map[string]*string

The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#output_variable_mapping CesAgent#output_variable_mapping}

---

##### `RespectResponseInterruptionSettings`<sup>Optional</sup> <a name="RespectResponseInterruptionSettings" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent.property.respectResponseInterruptionSettings"></a>

```go
RespectResponseInterruptionSettings interface{}
```

- *Type:* interface{}

Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent.

* If false: all response messages from the Dialogflow agent follow the app-level barge-in settings. * If true: only response messages with ['allow_playback_interruption'](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#text) set to true will be interruptable, all other messages follow the app-level barge-in settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#respect_response_interruption_settings CesAgent#respect_response_interruption_settings}

---

### CesAgentTimeouts <a name="CesAgentTimeouts" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#create CesAgent#create}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#delete CesAgent#delete}. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#update CesAgent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#create CesAgent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#delete CesAgent#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.cesAgent.CesAgentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#update CesAgent#update}.

---

### CesAgentToolsets <a name="CesAgentToolsets" id="@cdktn/provider-google.cesAgent.CesAgentToolsets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentToolsets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentToolsets {
	Toolset: *string,
	ToolIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets.property.toolset">Toolset</a></code> | <code>*string</code> | The resource name of the toolset. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsets.property.toolIds">ToolIds</a></code> | <code>*[]*string</code> | The tools IDs to filter the toolset. |

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google.cesAgent.CesAgentToolsets.property.toolset"></a>

```go
Toolset *string
```

- *Type:* *string

The resource name of the toolset. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#toolset CesAgent#toolset}

---

##### `ToolIds`<sup>Optional</sup> <a name="ToolIds" id="@cdktn/provider-google.cesAgent.CesAgentToolsets.property.toolIds"></a>

```go
ToolIds *[]*string
```

- *Type:* *[]*string

The tools IDs to filter the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#tool_ids CesAgent#tool_ids}

---

### CesAgentTransferRules <a name="CesAgentTransferRules" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentTransferRules {
	ChildAgent: *string,
	Direction: *string,
	DeterministicTransfer: github.com/cdktn-io/cdktn-provider-google-go/google/v21.cesAgent.CesAgentTransferRulesDeterministicTransfer,
	DisablePlannerTransfer: github.com/cdktn-io/cdktn-provider-google-go/google/v21.cesAgent.CesAgentTransferRulesDisablePlannerTransfer,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.childAgent">ChildAgent</a></code> | <code>*string</code> | The resource name of the child agent the rule applies to. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.direction">Direction</a></code> | <code>*string</code> | The direction of the transfer. Possible values: ["PARENT_TO_CHILD", "CHILD_TO_PARENT"]. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.deterministicTransfer">DeterministicTransfer</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a></code> | deterministic_transfer block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.disablePlannerTransfer">DisablePlannerTransfer</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a></code> | disable_planner_transfer block. |

---

##### `ChildAgent`<sup>Required</sup> <a name="ChildAgent" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.childAgent"></a>

```go
ChildAgent *string
```

- *Type:* *string

The resource name of the child agent the rule applies to. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#child_agent CesAgent#child_agent}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

The direction of the transfer. Possible values: ["PARENT_TO_CHILD", "CHILD_TO_PARENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#direction CesAgent#direction}

---

##### `DeterministicTransfer`<sup>Optional</sup> <a name="DeterministicTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.deterministicTransfer"></a>

```go
DeterministicTransfer CesAgentTransferRulesDeterministicTransfer
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a>

deterministic_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#deterministic_transfer CesAgent#deterministic_transfer}

---

##### `DisablePlannerTransfer`<sup>Optional</sup> <a name="DisablePlannerTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRules.property.disablePlannerTransfer"></a>

```go
DisablePlannerTransfer CesAgentTransferRulesDisablePlannerTransfer
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a>

disable_planner_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#disable_planner_transfer CesAgent#disable_planner_transfer}

---

### CesAgentTransferRulesDeterministicTransfer <a name="CesAgentTransferRulesDeterministicTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentTransferRulesDeterministicTransfer {
	ExpressionCondition: github.com/cdktn-io/cdktn-provider-google-go/google/v21.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition,
	PythonCodeCondition: github.com/cdktn-io/cdktn-provider-google-go/google/v21.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.property.expressionCondition">ExpressionCondition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | expression_condition block. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.property.pythonCodeCondition">PythonCodeCondition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | python_code_condition block. |

---

##### `ExpressionCondition`<sup>Optional</sup> <a name="ExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.property.expressionCondition"></a>

```go
ExpressionCondition CesAgentTransferRulesDeterministicTransferExpressionCondition
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression_condition CesAgent#expression_condition}

---

##### `PythonCodeCondition`<sup>Optional</sup> <a name="PythonCodeCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer.property.pythonCodeCondition"></a>

```go
PythonCodeCondition CesAgentTransferRulesDeterministicTransferPythonCodeCondition
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

python_code_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code_condition CesAgent#python_code_condition}

---

### CesAgentTransferRulesDeterministicTransferExpressionCondition <a name="CesAgentTransferRulesDeterministicTransferExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentTransferRulesDeterministicTransferExpressionCondition {
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition.property.expression">Expression</a></code> | <code>*string</code> | The string representation of cloud.api.Expression condition. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression CesAgent#expression}

---

### CesAgentTransferRulesDeterministicTransferPythonCodeCondition <a name="CesAgentTransferRulesDeterministicTransferPythonCodeCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition {
	PythonCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition.property.pythonCode">PythonCode</a></code> | <code>*string</code> | The python code to execute. The function must be named 'should_trigger_transfer_callback'. |

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition.property.pythonCode"></a>

```go
PythonCode *string
```

- *Type:* *string

The python code to execute. The function must be named 'should_trigger_transfer_callback'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#python_code CesAgent#python_code}

---

### CesAgentTransferRulesDisablePlannerTransfer <a name="CesAgentTransferRulesDisablePlannerTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentTransferRulesDisablePlannerTransfer {
	ExpressionCondition: github.com/cdktn-io/cdktn-provider-google-go/google/v21.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer.property.expressionCondition">ExpressionCondition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | expression_condition block. |

---

##### `ExpressionCondition`<sup>Required</sup> <a name="ExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer.property.expressionCondition"></a>

```go
ExpressionCondition CesAgentTransferRulesDisablePlannerTransferExpressionCondition
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression_condition CesAgent#expression_condition}

---

### CesAgentTransferRulesDisablePlannerTransferExpressionCondition <a name="CesAgentTransferRulesDisablePlannerTransferExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

&cesagent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition {
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition.property.expression">Expression</a></code> | <code>*string</code> | The string representation of cloud.api.Expression condition. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/ces_agent#expression CesAgent#expression}

---

## Classes <a name="Classes" id="Classes"></a>

### CesAgentAfterAgentCallbacksList <a name="CesAgentAfterAgentCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentAfterAgentCallbacksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CesAgentAfterAgentCallbacksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.get"></a>

```go
func Get(index *f64) CesAgentAfterAgentCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentAfterAgentCallbacksOutputReference <a name="CesAgentAfterAgentCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentAfterAgentCallbacksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CesAgentAfterAgentCallbacksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetProactiveExecutionEnabled">ResetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetProactiveExecutionEnabled` <a name="ResetProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```go
func ResetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput">ProactiveExecutionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.pythonCode">PythonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProactiveExecutionEnabledInput`<sup>Optional</sup> <a name="ProactiveExecutionEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```go
func ProactiveExecutionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.pythonCodeInput"></a>

```go
func PythonCodeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `ProactiveExecutionEnabled`<sup>Required</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```go
func ProactiveExecutionEnabled() interface{}
```

- *Type:* interface{}

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.pythonCode"></a>

```go
func PythonCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentAfterAgentCallbacksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentAfterModelCallbacksList <a name="CesAgentAfterModelCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentAfterModelCallbacksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CesAgentAfterModelCallbacksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.get"></a>

```go
func Get(index *f64) CesAgentAfterModelCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentAfterModelCallbacksOutputReference <a name="CesAgentAfterModelCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentAfterModelCallbacksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CesAgentAfterModelCallbacksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetProactiveExecutionEnabled">ResetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetProactiveExecutionEnabled` <a name="ResetProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```go
func ResetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabledInput">ProactiveExecutionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.pythonCode">PythonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProactiveExecutionEnabledInput`<sup>Optional</sup> <a name="ProactiveExecutionEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```go
func ProactiveExecutionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.pythonCodeInput"></a>

```go
func PythonCodeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `ProactiveExecutionEnabled`<sup>Required</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```go
func ProactiveExecutionEnabled() interface{}
```

- *Type:* interface{}

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.pythonCode"></a>

```go
func PythonCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentAfterModelCallbacksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentAfterToolCallbacksList <a name="CesAgentAfterToolCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentAfterToolCallbacksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CesAgentAfterToolCallbacksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.get"></a>

```go
func Get(index *f64) CesAgentAfterToolCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentAfterToolCallbacksOutputReference <a name="CesAgentAfterToolCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentAfterToolCallbacksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CesAgentAfterToolCallbacksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetProactiveExecutionEnabled">ResetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetProactiveExecutionEnabled` <a name="ResetProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```go
func ResetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabledInput">ProactiveExecutionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.pythonCode">PythonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProactiveExecutionEnabledInput`<sup>Optional</sup> <a name="ProactiveExecutionEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```go
func ProactiveExecutionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.pythonCodeInput"></a>

```go
func PythonCodeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `ProactiveExecutionEnabled`<sup>Required</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```go
func ProactiveExecutionEnabled() interface{}
```

- *Type:* interface{}

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.pythonCode"></a>

```go
func PythonCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentAfterToolCallbacksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentBeforeAgentCallbacksList <a name="CesAgentBeforeAgentCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentBeforeAgentCallbacksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CesAgentBeforeAgentCallbacksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.get"></a>

```go
func Get(index *f64) CesAgentBeforeAgentCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentBeforeAgentCallbacksOutputReference <a name="CesAgentBeforeAgentCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentBeforeAgentCallbacksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CesAgentBeforeAgentCallbacksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetProactiveExecutionEnabled">ResetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetProactiveExecutionEnabled` <a name="ResetProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```go
func ResetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput">ProactiveExecutionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.pythonCode">PythonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProactiveExecutionEnabledInput`<sup>Optional</sup> <a name="ProactiveExecutionEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```go
func ProactiveExecutionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.pythonCodeInput"></a>

```go
func PythonCodeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `ProactiveExecutionEnabled`<sup>Required</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```go
func ProactiveExecutionEnabled() interface{}
```

- *Type:* interface{}

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.pythonCode"></a>

```go
func PythonCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentBeforeAgentCallbacksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentBeforeModelCallbacksList <a name="CesAgentBeforeModelCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentBeforeModelCallbacksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CesAgentBeforeModelCallbacksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.get"></a>

```go
func Get(index *f64) CesAgentBeforeModelCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentBeforeModelCallbacksOutputReference <a name="CesAgentBeforeModelCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentBeforeModelCallbacksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CesAgentBeforeModelCallbacksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetProactiveExecutionEnabled">ResetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetProactiveExecutionEnabled` <a name="ResetProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```go
func ResetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabledInput">ProactiveExecutionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.pythonCode">PythonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProactiveExecutionEnabledInput`<sup>Optional</sup> <a name="ProactiveExecutionEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```go
func ProactiveExecutionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.pythonCodeInput"></a>

```go
func PythonCodeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `ProactiveExecutionEnabled`<sup>Required</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```go
func ProactiveExecutionEnabled() interface{}
```

- *Type:* interface{}

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.pythonCode"></a>

```go
func PythonCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentBeforeModelCallbacksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentBeforeToolCallbacksList <a name="CesAgentBeforeToolCallbacksList" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentBeforeToolCallbacksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CesAgentBeforeToolCallbacksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.get"></a>

```go
func Get(index *f64) CesAgentBeforeToolCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentBeforeToolCallbacksOutputReference <a name="CesAgentBeforeToolCallbacksOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentBeforeToolCallbacksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CesAgentBeforeToolCallbacksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetProactiveExecutionEnabled">ResetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetProactiveExecutionEnabled` <a name="ResetProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```go
func ResetProactiveExecutionEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabledInput">ProactiveExecutionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabled">ProactiveExecutionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.pythonCode">PythonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProactiveExecutionEnabledInput`<sup>Optional</sup> <a name="ProactiveExecutionEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```go
func ProactiveExecutionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.pythonCodeInput"></a>

```go
func PythonCodeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `ProactiveExecutionEnabled`<sup>Required</sup> <a name="ProactiveExecutionEnabled" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```go
func ProactiveExecutionEnabled() interface{}
```

- *Type:* interface{}

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.pythonCode"></a>

```go
func PythonCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentBeforeToolCallbacksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentLlmAgentOutputReference <a name="CesAgentLlmAgentOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentLlmAgentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAgentLlmAgentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentLlmAgentOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAgentLlmAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentLlmAgent">CesAgentLlmAgent</a>

---


### CesAgentModelSettingsOutputReference <a name="CesAgentModelSettingsOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentModelSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAgentModelSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resetModel"></a>

```go
func ResetModel()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.resetTemperature"></a>

```go
func ResetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.temperature">Temperature</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.modelInput"></a>

```go
func ModelInput() *string
```

- *Type:* *string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.temperatureInput"></a>

```go
func TemperatureInput() *f64
```

- *Type:* *f64

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.temperature"></a>

```go
func Temperature() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentModelSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAgentModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentModelSettings">CesAgentModelSettings</a>

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills">PutSkills</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces">PutSupportedInterfaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSkills` <a name="PutSkills" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills"></a>

```go
func PutSkills(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSupportedInterfaces` <a name="PutSupportedInterfaces" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces"></a>

```go
func PutSupportedInterfaces(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skills">Skills</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList">CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfaces">SupportedInterfaces</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skillsInput">SkillsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfacesInput">SupportedInterfacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Skills`<sup>Required</sup> <a name="Skills" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skills"></a>

```go
func Skills() CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList">CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList</a>

---

##### `SupportedInterfaces`<sup>Required</sup> <a name="SupportedInterfaces" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfaces"></a>

```go
func SupportedInterfaces() CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList">CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SkillsInput`<sup>Optional</sup> <a name="SkillsInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skillsInput"></a>

```go
func SkillsInput() interface{}
```

- *Type:* interface{}

---

##### `SupportedInterfacesInput`<sup>Optional</sup> <a name="SupportedInterfacesInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfacesInput"></a>

```go
func SupportedInterfacesInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAgentRemoteA2AAgentA2AConfigAgentCard
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get"></a>

```go
func Get(index *f64) CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetExamples">ResetExamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetInputModes">ResetInputModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetOutputModes">ResetOutputModes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExamples` <a name="ResetExamples" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetExamples"></a>

```go
func ResetExamples()
```

##### `ResetInputModes` <a name="ResetInputModes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetInputModes"></a>

```go
func ResetInputModes()
```

##### `ResetOutputModes` <a name="ResetOutputModes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetOutputModes"></a>

```go
func ResetOutputModes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examplesInput">ExamplesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModesInput">InputModesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModesInput">OutputModesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examples">Examples</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModes">InputModes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModes">OutputModes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExamplesInput`<sup>Optional</sup> <a name="ExamplesInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examplesInput"></a>

```go
func ExamplesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputModesInput`<sup>Optional</sup> <a name="InputModesInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModesInput"></a>

```go
func InputModesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputModesInput`<sup>Optional</sup> <a name="OutputModesInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModesInput"></a>

```go
func OutputModesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Examples`<sup>Required</sup> <a name="Examples" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examples"></a>

```go
func Examples() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InputModes`<sup>Required</sup> <a name="InputModes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModes"></a>

```go
func InputModes() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutputModes`<sup>Required</sup> <a name="OutputModes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModes"></a>

```go
func OutputModes() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get"></a>

```go
func Get(index *f64) CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resetTenant">ResetTenant</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTenant` <a name="ResetTenant" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resetTenant"></a>

```go
func ResetTenant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBindingInput">ProtocolBindingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersionInput">ProtocolVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenantInput">TenantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBinding">ProtocolBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersion">ProtocolVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenant">Tenant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProtocolBindingInput`<sup>Optional</sup> <a name="ProtocolBindingInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBindingInput"></a>

```go
func ProtocolBindingInput() *string
```

- *Type:* *string

---

##### `ProtocolVersionInput`<sup>Optional</sup> <a name="ProtocolVersionInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersionInput"></a>

```go
func ProtocolVersionInput() *string
```

- *Type:* *string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenantInput"></a>

```go
func TenantInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `ProtocolBinding`<sup>Required</sup> <a name="ProtocolBinding" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBinding"></a>

```go
func ProtocolBinding() *string
```

- *Type:* *string

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersion"></a>

```go
func ProtocolVersion() *string
```

- *Type:* *string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenant"></a>

```go
func Tenant() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput">ApiKeySecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">RequestLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">ApiKeySecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">RequestLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeySecretVersionInput`<sup>Optional</sup> <a name="ApiKeySecretVersionInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```go
func ApiKeySecretVersionInput() *string
```

- *Type:* *string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `RequestLocationInput`<sup>Optional</sup> <a name="RequestLocationInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```go
func RequestLocationInput() *string
```

- *Type:* *string

---

##### `ApiKeySecretVersion`<sup>Required</sup> <a name="ApiKeySecretVersion" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```go
func ApiKeySecretVersion() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `RequestLocation`<sup>Required</sup> <a name="RequestLocation" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```go
func RequestLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resetScopes"></a>

```go
func ResetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput">ClientSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">OauthGrantTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">ClientSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">OauthGrantType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretVersionInput`<sup>Optional</sup> <a name="ClientSecretVersionInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput"></a>

```go
func ClientSecretVersionInput() *string
```

- *Type:* *string

---

##### `OauthGrantTypeInput`<sup>Optional</sup> <a name="OauthGrantTypeInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```go
func OauthGrantTypeInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```go
func TokenEndpointInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecretVersion`<sup>Required</sup> <a name="ClientSecretVersion" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```go
func ClientSecretVersion() *string
```

- *Type:* *string

---

##### `OauthGrantType`<sup>Required</sup> <a name="OauthGrantType" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```go
func OauthGrantType() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig">PutApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig">PutBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig">PutOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig">PutServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetApiKeyConfig">ResetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetBearerTokenConfig">ResetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetOauthConfig">ResetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetServiceAccountAuthConfig">ResetServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyConfig` <a name="PutApiKeyConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig"></a>

```go
func PutApiKeyConfig(value CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---

##### `PutBearerTokenConfig` <a name="PutBearerTokenConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig"></a>

```go
func PutBearerTokenConfig(value CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---

##### `PutOauthConfig` <a name="PutOauthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig"></a>

```go
func PutOauthConfig(value CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---

##### `PutServiceAccountAuthConfig` <a name="PutServiceAccountAuthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig"></a>

```go
func PutServiceAccountAuthConfig(value CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---

##### `ResetApiKeyConfig` <a name="ResetApiKeyConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetApiKeyConfig"></a>

```go
func ResetApiKeyConfig()
```

##### `ResetBearerTokenConfig` <a name="ResetBearerTokenConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetBearerTokenConfig"></a>

```go
func ResetBearerTokenConfig()
```

##### `ResetOauthConfig` <a name="ResetOauthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetOauthConfig"></a>

```go
func ResetOauthConfig()
```

##### `ResetServiceAccountAuthConfig` <a name="ResetServiceAccountAuthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetServiceAccountAuthConfig"></a>

```go
func ResetServiceAccountAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfig">BearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfig">ServiceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfigInput">ApiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfigInput">BearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfigInput">OauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput">ServiceAccountAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyConfig`<sup>Required</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```go
func ApiKeyConfig() CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference</a>

---

##### `BearerTokenConfig`<sup>Required</sup> <a name="BearerTokenConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```go
func BearerTokenConfig() CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference</a>

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfig"></a>

```go
func OauthConfig() CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference</a>

---

##### `ServiceAccountAuthConfig`<sup>Required</sup> <a name="ServiceAccountAuthConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```go
func ServiceAccountAuthConfig() CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference</a>

---

##### `ApiKeyConfigInput`<sup>Optional</sup> <a name="ApiKeyConfigInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```go
func ApiKeyConfigInput() CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---

##### `BearerTokenConfigInput`<sup>Optional</sup> <a name="BearerTokenConfigInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```go
func BearerTokenConfigInput() CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---

##### `OauthConfigInput`<sup>Optional</sup> <a name="OauthConfigInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfigInput"></a>

```go
func OauthConfigInput() CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---

##### `ServiceAccountAuthConfigInput`<sup>Optional</sup> <a name="ServiceAccountAuthConfigInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput"></a>

```go
func ServiceAccountAuthConfigInput() CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAgentRemoteA2AAgentA2AConfigApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---


### CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes"></a>

```go
func ResetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---


### CesAgentRemoteA2AAgentA2AConfigOutputReference <a name="CesAgentRemoteA2AAgentA2AConfigOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentRemoteA2AAgentA2AConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAgentRemoteA2AAgentA2AConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard">PutAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication">PutApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentCard">ResetAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentRegistry">ResetAgentRegistry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetApiAuthentication">ResetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetContextId">ResetContextId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetInputVariableMapping">ResetInputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetOutputVariableMapping">ResetOutputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetStreamingEnabled">ResetStreamingEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentCard` <a name="PutAgentCard" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard"></a>

```go
func PutAgentCard(value CesAgentRemoteA2AAgentA2AConfigAgentCard)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---

##### `PutApiAuthentication` <a name="PutApiAuthentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication"></a>

```go
func PutApiAuthentication(value CesAgentRemoteA2AAgentA2AConfigApiAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---

##### `ResetAgentCard` <a name="ResetAgentCard" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentCard"></a>

```go
func ResetAgentCard()
```

##### `ResetAgentRegistry` <a name="ResetAgentRegistry" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentRegistry"></a>

```go
func ResetAgentRegistry()
```

##### `ResetApiAuthentication` <a name="ResetApiAuthentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetApiAuthentication"></a>

```go
func ResetApiAuthentication()
```

##### `ResetContextId` <a name="ResetContextId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetContextId"></a>

```go
func ResetContextId()
```

##### `ResetInputVariableMapping` <a name="ResetInputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetInputVariableMapping"></a>

```go
func ResetInputVariableMapping()
```

##### `ResetOutputVariableMapping` <a name="ResetOutputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetOutputVariableMapping"></a>

```go
func ResetOutputVariableMapping()
```

##### `ResetStreamingEnabled` <a name="ResetStreamingEnabled" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.resetStreamingEnabled"></a>

```go
func ResetStreamingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCard">AgentCard</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference">CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthentication">ApiAuthentication</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCardInput">AgentCardInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistryInput">AgentRegistryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthenticationInput">ApiAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextIdInput">ContextIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMappingInput">InputVariableMappingInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMappingInput">OutputVariableMappingInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabledInput">StreamingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistry">AgentRegistry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextId">ContextId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMapping">InputVariableMapping</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMapping">OutputVariableMapping</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabled">StreamingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentCard`<sup>Required</sup> <a name="AgentCard" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCard"></a>

```go
func AgentCard() CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference">CesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference</a>

---

##### `ApiAuthentication`<sup>Required</sup> <a name="ApiAuthentication" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthentication"></a>

```go
func ApiAuthentication() CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference">CesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference</a>

---

##### `AgentCardInput`<sup>Optional</sup> <a name="AgentCardInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCardInput"></a>

```go
func AgentCardInput() CesAgentRemoteA2AAgentA2AConfigAgentCard
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigAgentCard">CesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---

##### `AgentRegistryInput`<sup>Optional</sup> <a name="AgentRegistryInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistryInput"></a>

```go
func AgentRegistryInput() *string
```

- *Type:* *string

---

##### `ApiAuthenticationInput`<sup>Optional</sup> <a name="ApiAuthenticationInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthenticationInput"></a>

```go
func ApiAuthenticationInput() CesAgentRemoteA2AAgentA2AConfigApiAuthentication
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigApiAuthentication">CesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---

##### `ContextIdInput`<sup>Optional</sup> <a name="ContextIdInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextIdInput"></a>

```go
func ContextIdInput() *string
```

- *Type:* *string

---

##### `InputVariableMappingInput`<sup>Optional</sup> <a name="InputVariableMappingInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMappingInput"></a>

```go
func InputVariableMappingInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OutputVariableMappingInput`<sup>Optional</sup> <a name="OutputVariableMappingInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMappingInput"></a>

```go
func OutputVariableMappingInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StreamingEnabledInput`<sup>Optional</sup> <a name="StreamingEnabledInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabledInput"></a>

```go
func StreamingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AgentRegistry`<sup>Required</sup> <a name="AgentRegistry" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistry"></a>

```go
func AgentRegistry() *string
```

- *Type:* *string

---

##### `ContextId`<sup>Required</sup> <a name="ContextId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextId"></a>

```go
func ContextId() *string
```

- *Type:* *string

---

##### `InputVariableMapping`<sup>Required</sup> <a name="InputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMapping"></a>

```go
func InputVariableMapping() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OutputVariableMapping`<sup>Required</sup> <a name="OutputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMapping"></a>

```go
func OutputVariableMapping() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StreamingEnabled`<sup>Required</sup> <a name="StreamingEnabled" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabled"></a>

```go
func StreamingEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAgentRemoteA2AAgentA2AConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a>

---


### CesAgentRemoteA2AAgentOutputReference <a name="CesAgentRemoteA2AAgentOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentRemoteA2AAgentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAgentRemoteA2AAgentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.putA2AConfig">PutA2AConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutA2AConfig` <a name="PutA2AConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.putA2AConfig"></a>

```go
func PutA2AConfig(value CesAgentRemoteA2AAgentA2AConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.a2AConfig">A2AConfig</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.a2AConfigInput">A2AConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `A2AConfig`<sup>Required</sup> <a name="A2AConfig" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.a2AConfig"></a>

```go
func A2AConfig() CesAgentRemoteA2AAgentA2AConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfigOutputReference">CesAgentRemoteA2AAgentA2AConfigOutputReference</a>

---

##### `A2AConfigInput`<sup>Optional</sup> <a name="A2AConfigInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.a2AConfigInput"></a>

```go
func A2AConfigInput() CesAgentRemoteA2AAgentA2AConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentA2AConfig">CesAgentRemoteA2AAgentA2AConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgentOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAgentRemoteA2AAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteA2AAgent">CesAgentRemoteA2AAgent</a>

---


### CesAgentRemoteDialogflowAgentOutputReference <a name="CesAgentRemoteDialogflowAgentOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentRemoteDialogflowAgentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAgentRemoteDialogflowAgentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetEnvironmentId">ResetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetInputVariableMapping">ResetInputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetLanguageCodeVariable">ResetLanguageCodeVariable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetOutputVariableMapping">ResetOutputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetRespectResponseInterruptionSettings">ResetRespectResponseInterruptionSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironmentId` <a name="ResetEnvironmentId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetEnvironmentId"></a>

```go
func ResetEnvironmentId()
```

##### `ResetInputVariableMapping` <a name="ResetInputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetInputVariableMapping"></a>

```go
func ResetInputVariableMapping()
```

##### `ResetLanguageCodeVariable` <a name="ResetLanguageCodeVariable" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetLanguageCodeVariable"></a>

```go
func ResetLanguageCodeVariable()
```

##### `ResetOutputVariableMapping` <a name="ResetOutputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetOutputVariableMapping"></a>

```go
func ResetOutputVariableMapping()
```

##### `ResetRespectResponseInterruptionSettings` <a name="ResetRespectResponseInterruptionSettings" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.resetRespectResponseInterruptionSettings"></a>

```go
func ResetRespectResponseInterruptionSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.agentInput">AgentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.environmentIdInput">EnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.flowIdInput">FlowIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMappingInput">InputVariableMappingInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariableInput">LanguageCodeVariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMappingInput">OutputVariableMappingInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettingsInput">RespectResponseInterruptionSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.agent">Agent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.flowId">FlowId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMapping">InputVariableMapping</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariable">LanguageCodeVariable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMapping">OutputVariableMapping</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettings">RespectResponseInterruptionSettings</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentInput`<sup>Optional</sup> <a name="AgentInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.agentInput"></a>

```go
func AgentInput() *string
```

- *Type:* *string

---

##### `EnvironmentIdInput`<sup>Optional</sup> <a name="EnvironmentIdInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.environmentIdInput"></a>

```go
func EnvironmentIdInput() *string
```

- *Type:* *string

---

##### `FlowIdInput`<sup>Optional</sup> <a name="FlowIdInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.flowIdInput"></a>

```go
func FlowIdInput() *string
```

- *Type:* *string

---

##### `InputVariableMappingInput`<sup>Optional</sup> <a name="InputVariableMappingInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMappingInput"></a>

```go
func InputVariableMappingInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LanguageCodeVariableInput`<sup>Optional</sup> <a name="LanguageCodeVariableInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariableInput"></a>

```go
func LanguageCodeVariableInput() *string
```

- *Type:* *string

---

##### `OutputVariableMappingInput`<sup>Optional</sup> <a name="OutputVariableMappingInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMappingInput"></a>

```go
func OutputVariableMappingInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RespectResponseInterruptionSettingsInput`<sup>Optional</sup> <a name="RespectResponseInterruptionSettingsInput" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettingsInput"></a>

```go
func RespectResponseInterruptionSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.agent"></a>

```go
func Agent() *string
```

- *Type:* *string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.environmentId"></a>

```go
func EnvironmentId() *string
```

- *Type:* *string

---

##### `FlowId`<sup>Required</sup> <a name="FlowId" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.flowId"></a>

```go
func FlowId() *string
```

- *Type:* *string

---

##### `InputVariableMapping`<sup>Required</sup> <a name="InputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMapping"></a>

```go
func InputVariableMapping() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LanguageCodeVariable`<sup>Required</sup> <a name="LanguageCodeVariable" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariable"></a>

```go
func LanguageCodeVariable() *string
```

- *Type:* *string

---

##### `OutputVariableMapping`<sup>Required</sup> <a name="OutputVariableMapping" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMapping"></a>

```go
func OutputVariableMapping() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RespectResponseInterruptionSettings`<sup>Required</sup> <a name="RespectResponseInterruptionSettings" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettings"></a>

```go
func RespectResponseInterruptionSettings() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgentOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAgentRemoteDialogflowAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentRemoteDialogflowAgent">CesAgentRemoteDialogflowAgent</a>

---


### CesAgentTimeoutsOutputReference <a name="CesAgentTimeoutsOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAgentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentToolsetsList <a name="CesAgentToolsetsList" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentToolsetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CesAgentToolsetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.get"></a>

```go
func Get(index *f64) CesAgentToolsetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentToolsetsOutputReference <a name="CesAgentToolsetsOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentToolsetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CesAgentToolsetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resetToolIds">ResetToolIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToolIds` <a name="ResetToolIds" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.resetToolIds"></a>

```go
func ResetToolIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolIdsInput">ToolIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolsetInput">ToolsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolIds">ToolIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolset">Toolset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ToolIdsInput`<sup>Optional</sup> <a name="ToolIdsInput" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolIdsInput"></a>

```go
func ToolIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ToolsetInput`<sup>Optional</sup> <a name="ToolsetInput" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolsetInput"></a>

```go
func ToolsetInput() *string
```

- *Type:* *string

---

##### `ToolIds`<sup>Required</sup> <a name="ToolIds" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolIds"></a>

```go
func ToolIds() *[]*string
```

- *Type:* *[]*string

---

##### `Toolset`<sup>Required</sup> <a name="Toolset" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.toolset"></a>

```go
func Toolset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentToolsetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference <a name="CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAgentTransferRulesDeterministicTransferExpressionCondition
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---


### CesAgentTransferRulesDeterministicTransferOutputReference <a name="CesAgentTransferRulesDeterministicTransferOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentTransferRulesDeterministicTransferOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAgentTransferRulesDeterministicTransferOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition">PutExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition">PutPythonCodeCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resetExpressionCondition">ResetExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resetPythonCodeCondition">ResetPythonCodeCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpressionCondition` <a name="PutExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition"></a>

```go
func PutExpressionCondition(value CesAgentTransferRulesDeterministicTransferExpressionCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---

##### `PutPythonCodeCondition` <a name="PutPythonCodeCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition"></a>

```go
func PutPythonCodeCondition(value CesAgentTransferRulesDeterministicTransferPythonCodeCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---

##### `ResetExpressionCondition` <a name="ResetExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resetExpressionCondition"></a>

```go
func ResetExpressionCondition()
```

##### `ResetPythonCodeCondition` <a name="ResetPythonCodeCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.resetPythonCodeCondition"></a>

```go
func ResetPythonCodeCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.expressionCondition">ExpressionCondition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference">CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeCondition">PythonCodeCondition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference">CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.expressionConditionInput">ExpressionConditionInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeConditionInput">PythonCodeConditionInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionCondition`<sup>Required</sup> <a name="ExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.expressionCondition"></a>

```go
func ExpressionCondition() CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference">CesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference</a>

---

##### `PythonCodeCondition`<sup>Required</sup> <a name="PythonCodeCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeCondition"></a>

```go
func PythonCodeCondition() CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference">CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference</a>

---

##### `ExpressionConditionInput`<sup>Optional</sup> <a name="ExpressionConditionInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.expressionConditionInput"></a>

```go
func ExpressionConditionInput() CesAgentTransferRulesDeterministicTransferExpressionCondition
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferExpressionCondition">CesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---

##### `PythonCodeConditionInput`<sup>Optional</sup> <a name="PythonCodeConditionInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeConditionInput"></a>

```go
func PythonCodeConditionInput() CesAgentTransferRulesDeterministicTransferPythonCodeCondition
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAgentTransferRulesDeterministicTransfer
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a>

---


### CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference <a name="CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCodeInput">PythonCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCode">PythonCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PythonCodeInput`<sup>Optional</sup> <a name="PythonCodeInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCodeInput"></a>

```go
func PythonCodeInput() *string
```

- *Type:* *string

---

##### `PythonCode`<sup>Required</sup> <a name="PythonCode" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCode"></a>

```go
func PythonCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAgentTransferRulesDeterministicTransferPythonCodeCondition
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferPythonCodeCondition">CesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---


### CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference <a name="CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAgentTransferRulesDisablePlannerTransferExpressionCondition
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---


### CesAgentTransferRulesDisablePlannerTransferOutputReference <a name="CesAgentTransferRulesDisablePlannerTransferOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentTransferRulesDisablePlannerTransferOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CesAgentTransferRulesDisablePlannerTransferOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition">PutExpressionCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpressionCondition` <a name="PutExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition"></a>

```go
func PutExpressionCondition(value CesAgentTransferRulesDisablePlannerTransferExpressionCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionCondition">ExpressionCondition</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference">CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionConditionInput">ExpressionConditionInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionCondition`<sup>Required</sup> <a name="ExpressionCondition" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionCondition"></a>

```go
func ExpressionCondition() CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference">CesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference</a>

---

##### `ExpressionConditionInput`<sup>Optional</sup> <a name="ExpressionConditionInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionConditionInput"></a>

```go
func ExpressionConditionInput() CesAgentTransferRulesDisablePlannerTransferExpressionCondition
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferExpressionCondition">CesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference.property.internalValue"></a>

```go
func InternalValue() CesAgentTransferRulesDisablePlannerTransfer
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a>

---


### CesAgentTransferRulesList <a name="CesAgentTransferRulesList" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentTransferRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CesAgentTransferRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.get"></a>

```go
func Get(index *f64) CesAgentTransferRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CesAgentTransferRulesOutputReference <a name="CesAgentTransferRulesOutputReference" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/cesagent"

cesagent.NewCesAgentTransferRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CesAgentTransferRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDeterministicTransfer">PutDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDisablePlannerTransfer">PutDisablePlannerTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resetDeterministicTransfer">ResetDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resetDisablePlannerTransfer">ResetDisablePlannerTransfer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeterministicTransfer` <a name="PutDeterministicTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDeterministicTransfer"></a>

```go
func PutDeterministicTransfer(value CesAgentTransferRulesDeterministicTransfer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDeterministicTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a>

---

##### `PutDisablePlannerTransfer` <a name="PutDisablePlannerTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDisablePlannerTransfer"></a>

```go
func PutDisablePlannerTransfer(value CesAgentTransferRulesDisablePlannerTransfer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.putDisablePlannerTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a>

---

##### `ResetDeterministicTransfer` <a name="ResetDeterministicTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resetDeterministicTransfer"></a>

```go
func ResetDeterministicTransfer()
```

##### `ResetDisablePlannerTransfer` <a name="ResetDisablePlannerTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.resetDisablePlannerTransfer"></a>

```go
func ResetDisablePlannerTransfer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.deterministicTransfer">DeterministicTransfer</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference">CesAgentTransferRulesDeterministicTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.disablePlannerTransfer">DisablePlannerTransfer</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference">CesAgentTransferRulesDisablePlannerTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.childAgentInput">ChildAgentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.deterministicTransferInput">DeterministicTransferInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.disablePlannerTransferInput">DisablePlannerTransferInput</a></code> | <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.childAgent">ChildAgent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeterministicTransfer`<sup>Required</sup> <a name="DeterministicTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.deterministicTransfer"></a>

```go
func DeterministicTransfer() CesAgentTransferRulesDeterministicTransferOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransferOutputReference">CesAgentTransferRulesDeterministicTransferOutputReference</a>

---

##### `DisablePlannerTransfer`<sup>Required</sup> <a name="DisablePlannerTransfer" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.disablePlannerTransfer"></a>

```go
func DisablePlannerTransfer() CesAgentTransferRulesDisablePlannerTransferOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransferOutputReference">CesAgentTransferRulesDisablePlannerTransferOutputReference</a>

---

##### `ChildAgentInput`<sup>Optional</sup> <a name="ChildAgentInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.childAgentInput"></a>

```go
func ChildAgentInput() *string
```

- *Type:* *string

---

##### `DeterministicTransferInput`<sup>Optional</sup> <a name="DeterministicTransferInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.deterministicTransferInput"></a>

```go
func DeterministicTransferInput() CesAgentTransferRulesDeterministicTransfer
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDeterministicTransfer">CesAgentTransferRulesDeterministicTransfer</a>

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `DisablePlannerTransferInput`<sup>Optional</sup> <a name="DisablePlannerTransferInput" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.disablePlannerTransferInput"></a>

```go
func DisablePlannerTransferInput() CesAgentTransferRulesDisablePlannerTransfer
```

- *Type:* <a href="#@cdktn/provider-google.cesAgent.CesAgentTransferRulesDisablePlannerTransfer">CesAgentTransferRulesDisablePlannerTransfer</a>

---

##### `ChildAgent`<sup>Required</sup> <a name="ChildAgent" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.childAgent"></a>

```go
func ChildAgent() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cesAgent.CesAgentTransferRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



