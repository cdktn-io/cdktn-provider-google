# `vertexAiSemanticGovernancePolicy` Submodule <a name="`vertexAiSemanticGovernancePolicy` Submodule" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiSemanticGovernancePolicy <a name="VertexAiSemanticGovernancePolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy google_vertex_ai_semantic_governance_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicy"

vertexaisemanticgovernancepolicy.NewVertexAiSemanticGovernancePolicy(scope Construct, id *string, config VertexAiSemanticGovernancePolicyConfig) VertexAiSemanticGovernancePolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig">VertexAiSemanticGovernancePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig">VertexAiSemanticGovernancePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putAgentResponseCustomization">PutAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putMcpTools">PutMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetAgentResponseCustomization">ResetAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetMcpTools">ResetMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAgentResponseCustomization` <a name="PutAgentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putAgentResponseCustomization"></a>

```go
func PutAgentResponseCustomization(value VertexAiSemanticGovernancePolicyAgentResponseCustomization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putAgentResponseCustomization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---

##### `PutMcpTools` <a name="PutMcpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putMcpTools"></a>

```go
func PutMcpTools(value VertexAiSemanticGovernancePolicyMcpTools)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putMcpTools.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putTimeouts"></a>

```go
func PutTimeouts(value VertexAiSemanticGovernancePolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a>

---

##### `ResetAgentResponseCustomization` <a name="ResetAgentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetAgentResponseCustomization"></a>

```go
func ResetAgentResponseCustomization()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetMcpTools` <a name="ResetMcpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetMcpTools"></a>

```go
func ResetMcpTools()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiSemanticGovernancePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicy"

vertexaisemanticgovernancepolicy.VertexAiSemanticGovernancePolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicy"

vertexaisemanticgovernancepolicy.VertexAiSemanticGovernancePolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicy"

vertexaisemanticgovernancepolicy.VertexAiSemanticGovernancePolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicy"

vertexaisemanticgovernancepolicy.VertexAiSemanticGovernancePolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a VertexAiSemanticGovernancePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VertexAiSemanticGovernancePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VertexAiSemanticGovernancePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiSemanticGovernancePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentIdentity">AgentIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentResponseCustomization">AgentResponseCustomization</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference">VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.mcpTools">McpTools</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference">VertexAiSemanticGovernancePolicyMcpToolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference">VertexAiSemanticGovernancePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentInput">AgentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentResponseCustomizationInput">AgentResponseCustomizationInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.mcpToolsInput">McpToolsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.naturalLanguageConstraintInput">NaturalLanguageConstraintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyIdInput">SemanticGovernancePolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agent">Agent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.naturalLanguageConstraint">NaturalLanguageConstraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyId">SemanticGovernancePolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentIdentity`<sup>Required</sup> <a name="AgentIdentity" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentIdentity"></a>

```go
func AgentIdentity() *string
```

- *Type:* *string

---

##### `AgentResponseCustomization`<sup>Required</sup> <a name="AgentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentResponseCustomization"></a>

```go
func AgentResponseCustomization() VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference">VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `McpTools`<sup>Required</sup> <a name="McpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.mcpTools"></a>

```go
func McpTools() VertexAiSemanticGovernancePolicyMcpToolsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference">VertexAiSemanticGovernancePolicyMcpToolsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.timeouts"></a>

```go
func Timeouts() VertexAiSemanticGovernancePolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference">VertexAiSemanticGovernancePolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AgentInput`<sup>Optional</sup> <a name="AgentInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentInput"></a>

```go
func AgentInput() *string
```

- *Type:* *string

---

##### `AgentResponseCustomizationInput`<sup>Optional</sup> <a name="AgentResponseCustomizationInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentResponseCustomizationInput"></a>

```go
func AgentResponseCustomizationInput() VertexAiSemanticGovernancePolicyAgentResponseCustomization
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `McpToolsInput`<sup>Optional</sup> <a name="McpToolsInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.mcpToolsInput"></a>

```go
func McpToolsInput() VertexAiSemanticGovernancePolicyMcpTools
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a>

---

##### `NaturalLanguageConstraintInput`<sup>Optional</sup> <a name="NaturalLanguageConstraintInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.naturalLanguageConstraintInput"></a>

```go
func NaturalLanguageConstraintInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SemanticGovernancePolicyIdInput`<sup>Optional</sup> <a name="SemanticGovernancePolicyIdInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyIdInput"></a>

```go
func SemanticGovernancePolicyIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agent"></a>

```go
func Agent() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NaturalLanguageConstraint`<sup>Required</sup> <a name="NaturalLanguageConstraint" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.naturalLanguageConstraint"></a>

```go
func NaturalLanguageConstraint() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SemanticGovernancePolicyId`<sup>Required</sup> <a name="SemanticGovernancePolicyId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyId"></a>

```go
func SemanticGovernancePolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiSemanticGovernancePolicyAgentResponseCustomization <a name="VertexAiSemanticGovernancePolicyAgentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicy"

&vertexaisemanticgovernancepolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization {
	DenialMessage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization.property.denialMessage">DenialMessage</a></code> | <code>*string</code> | Custom message shown to the end user when the policy check results in a denial. |

---

##### `DenialMessage`<sup>Optional</sup> <a name="DenialMessage" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization.property.denialMessage"></a>

```go
DenialMessage *string
```

- *Type:* *string

Custom message shown to the end user when the policy check results in a denial.

Use this
to explain the rationale to the user. Max 1000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#denial_message VertexAiSemanticGovernancePolicy#denial_message}

---

### VertexAiSemanticGovernancePolicyConfig <a name="VertexAiSemanticGovernancePolicyConfig" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicy"

&vertexaisemanticgovernancepolicy.VertexAiSemanticGovernancePolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Agent: *string,
	NaturalLanguageConstraint: *string,
	SemanticGovernancePolicyId: *string,
	AgentResponseCustomization: github.com/cdktn-io/cdktn-provider-google-go/google/v21.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization,
	DeletionPolicy: *string,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	McpTools: github.com/cdktn-io/cdktn-provider-google-go/google/v21.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v21.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.agent">Agent</a></code> | <code>*string</code> | The name of the agent in Agent Registry that is affected by this policy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.naturalLanguageConstraint">NaturalLanguageConstraint</a></code> | <code>*string</code> | The natural language constraint of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.semanticGovernancePolicyId">SemanticGovernancePolicyId</a></code> | <code>*string</code> | The ID of the SemanticGovernancePolicy, which will become the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.agentResponseCustomization">AgentResponseCustomization</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | agent_response_customization block. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.description">Description</a></code> | <code>*string</code> | The description of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The user-defined name of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#id VertexAiSemanticGovernancePolicy#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.mcpTools">McpTools</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a></code> | mcp_tools block. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#project VertexAiSemanticGovernancePolicy#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.region">Region</a></code> | <code>*string</code> | The region of the SemanticGovernancePolicy, e.g. 'us-central1'. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Agent`<sup>Required</sup> <a name="Agent" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.agent"></a>

```go
Agent *string
```

- *Type:* *string

The name of the agent in Agent Registry that is affected by this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#agent VertexAiSemanticGovernancePolicy#agent}

---

##### `NaturalLanguageConstraint`<sup>Required</sup> <a name="NaturalLanguageConstraint" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.naturalLanguageConstraint"></a>

```go
NaturalLanguageConstraint *string
```

- *Type:* *string

The natural language constraint of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#natural_language_constraint VertexAiSemanticGovernancePolicy#natural_language_constraint}

---

##### `SemanticGovernancePolicyId`<sup>Required</sup> <a name="SemanticGovernancePolicyId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.semanticGovernancePolicyId"></a>

```go
SemanticGovernancePolicyId *string
```

- *Type:* *string

The ID of the SemanticGovernancePolicy, which will become the final component of the resource name.

This value may be up to 63 characters, and valid characters are [a-z0-9-]. The first character cannot be a number or hyphen. The last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#semantic_governance_policy_id VertexAiSemanticGovernancePolicy#semantic_governance_policy_id}

---

##### `AgentResponseCustomization`<sup>Optional</sup> <a name="AgentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.agentResponseCustomization"></a>

```go
AgentResponseCustomization VertexAiSemanticGovernancePolicyAgentResponseCustomization
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

agent_response_customization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#agent_response_customization VertexAiSemanticGovernancePolicy#agent_response_customization}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#deletion_policy VertexAiSemanticGovernancePolicy#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#description VertexAiSemanticGovernancePolicy#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The user-defined name of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#display_name VertexAiSemanticGovernancePolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#id VertexAiSemanticGovernancePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `McpTools`<sup>Optional</sup> <a name="McpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.mcpTools"></a>

```go
McpTools VertexAiSemanticGovernancePolicyMcpTools
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a>

mcp_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#mcp_tools VertexAiSemanticGovernancePolicy#mcp_tools}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#project VertexAiSemanticGovernancePolicy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the SemanticGovernancePolicy, e.g. 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#region VertexAiSemanticGovernancePolicy#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.timeouts"></a>

```go
Timeouts VertexAiSemanticGovernancePolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#timeouts VertexAiSemanticGovernancePolicy#timeouts}

---

### VertexAiSemanticGovernancePolicyMcpTools <a name="VertexAiSemanticGovernancePolicyMcpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicy"

&vertexaisemanticgovernancepolicy.VertexAiSemanticGovernancePolicyMcpTools {
	McpServer: *string,
	Tools: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.property.mcpServer">McpServer</a></code> | <code>*string</code> | The resource name of the McpServer in Agent Registry that is affected by this policy. Format: 'projects/{project}/locations/{location}/mcpServers/{mcpServer}'. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.property.tools">Tools</a></code> | <code>*[]*string</code> | The resource names of the McpTools used by the Agent that is affected by this policy. |

---

##### `McpServer`<sup>Required</sup> <a name="McpServer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.property.mcpServer"></a>

```go
McpServer *string
```

- *Type:* *string

The resource name of the McpServer in Agent Registry that is affected by this policy. Format: 'projects/{project}/locations/{location}/mcpServers/{mcpServer}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#mcp_server VertexAiSemanticGovernancePolicy#mcp_server}

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.property.tools"></a>

```go
Tools *[]*string
```

- *Type:* *[]*string

The resource names of the McpTools used by the Agent that is affected by this policy.

At least one tool must be listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#tools VertexAiSemanticGovernancePolicy#tools}

---

### VertexAiSemanticGovernancePolicyTimeouts <a name="VertexAiSemanticGovernancePolicyTimeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicy"

&vertexaisemanticgovernancepolicy.VertexAiSemanticGovernancePolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#create VertexAiSemanticGovernancePolicy#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#delete VertexAiSemanticGovernancePolicy#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#update VertexAiSemanticGovernancePolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#create VertexAiSemanticGovernancePolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#delete VertexAiSemanticGovernancePolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#update VertexAiSemanticGovernancePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference <a name="VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicy"

vertexaisemanticgovernancepolicy.NewVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resetDenialMessage">ResetDenialMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDenialMessage` <a name="ResetDenialMessage" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resetDenialMessage"></a>

```go
func ResetDenialMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessageInput">DenialMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessage">DenialMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DenialMessageInput`<sup>Optional</sup> <a name="DenialMessageInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessageInput"></a>

```go
func DenialMessageInput() *string
```

- *Type:* *string

---

##### `DenialMessage`<sup>Required</sup> <a name="DenialMessage" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessage"></a>

```go
func DenialMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiSemanticGovernancePolicyAgentResponseCustomization
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---


### VertexAiSemanticGovernancePolicyMcpToolsOutputReference <a name="VertexAiSemanticGovernancePolicyMcpToolsOutputReference" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicy"

vertexaisemanticgovernancepolicy.NewVertexAiSemanticGovernancePolicyMcpToolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiSemanticGovernancePolicyMcpToolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServerInput">McpServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.toolsInput">ToolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServer">McpServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.tools">Tools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `McpServerInput`<sup>Optional</sup> <a name="McpServerInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServerInput"></a>

```go
func McpServerInput() *string
```

- *Type:* *string

---

##### `ToolsInput`<sup>Optional</sup> <a name="ToolsInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.toolsInput"></a>

```go
func ToolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `McpServer`<sup>Required</sup> <a name="McpServer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServer"></a>

```go
func McpServer() *string
```

- *Type:* *string

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.tools"></a>

```go
func Tools() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiSemanticGovernancePolicyMcpTools
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a>

---


### VertexAiSemanticGovernancePolicyTimeoutsOutputReference <a name="VertexAiSemanticGovernancePolicyTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicy"

vertexaisemanticgovernancepolicy.NewVertexAiSemanticGovernancePolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiSemanticGovernancePolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



