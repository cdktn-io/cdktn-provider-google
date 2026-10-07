# `vertexAiSemanticGovernancePolicyEngine` Submodule <a name="`vertexAiSemanticGovernancePolicyEngine` Submodule" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiSemanticGovernancePolicyEngine <a name="VertexAiSemanticGovernancePolicyEngine" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine google_vertex_ai_semantic_governance_policy_engine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicyengine"

vertexaisemanticgovernancepolicyengine.NewVertexAiSemanticGovernancePolicyEngine(scope Construct, id *string, config VertexAiSemanticGovernancePolicyEngineConfig) VertexAiSemanticGovernancePolicyEngine
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig">VertexAiSemanticGovernancePolicyEngineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig">VertexAiSemanticGovernancePolicyEngineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.putGatewayConfigs">PutGatewayConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.resetGatewayConfigs">ResetGatewayConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGatewayConfigs` <a name="PutGatewayConfigs" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.putGatewayConfigs"></a>

```go
func PutGatewayConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.putGatewayConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.putTimeouts"></a>

```go
func PutTimeouts(value VertexAiSemanticGovernancePolicyEngineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeouts">VertexAiSemanticGovernancePolicyEngineTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetGatewayConfigs` <a name="ResetGatewayConfigs" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.resetGatewayConfigs"></a>

```go
func ResetGatewayConfigs()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiSemanticGovernancePolicyEngine resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicyengine"

vertexaisemanticgovernancepolicyengine.VertexAiSemanticGovernancePolicyEngine_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicyengine"

vertexaisemanticgovernancepolicyengine.VertexAiSemanticGovernancePolicyEngine_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicyengine"

vertexaisemanticgovernancepolicyengine.VertexAiSemanticGovernancePolicyEngine_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicyengine"

vertexaisemanticgovernancepolicyengine.VertexAiSemanticGovernancePolicyEngine_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a VertexAiSemanticGovernancePolicyEngine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VertexAiSemanticGovernancePolicyEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VertexAiSemanticGovernancePolicyEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiSemanticGovernancePolicyEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.gatewayConfigs">GatewayConfigs</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList">VertexAiSemanticGovernancePolicyEngineGatewayConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.pscForwardingRule">PscForwardingRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.pscServiceAttachment">PscServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference">VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.gatewayConfigsInput">GatewayConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `GatewayConfigs`<sup>Required</sup> <a name="GatewayConfigs" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.gatewayConfigs"></a>

```go
func GatewayConfigs() VertexAiSemanticGovernancePolicyEngineGatewayConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList">VertexAiSemanticGovernancePolicyEngineGatewayConfigsList</a>

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PscForwardingRule`<sup>Required</sup> <a name="PscForwardingRule" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.pscForwardingRule"></a>

```go
func PscForwardingRule() *string
```

- *Type:* *string

---

##### `PscServiceAttachment`<sup>Required</sup> <a name="PscServiceAttachment" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.pscServiceAttachment"></a>

```go
func PscServiceAttachment() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.timeouts"></a>

```go
func Timeouts() VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference">VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `GatewayConfigsInput`<sup>Optional</sup> <a name="GatewayConfigsInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.gatewayConfigsInput"></a>

```go
func GatewayConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngine.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiSemanticGovernancePolicyEngineConfig <a name="VertexAiSemanticGovernancePolicyEngineConfig" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicyengine"

&vertexaisemanticgovernancepolicyengine.VertexAiSemanticGovernancePolicyEngineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DeletionPolicy: *string,
	GatewayConfigs: interface{},
	Id: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v21.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.gatewayConfigs">GatewayConfigs</a></code> | <code>interface{}</code> | gateway_configs block. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#id VertexAiSemanticGovernancePolicyEngine#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#project VertexAiSemanticGovernancePolicyEngine#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.region">Region</a></code> | <code>*string</code> | The region of the SemanticGovernancePolicyEngine, e.g. 'us-central1'. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeouts">VertexAiSemanticGovernancePolicyEngineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#deletion_policy VertexAiSemanticGovernancePolicyEngine#deletion_policy}

---

##### `GatewayConfigs`<sup>Optional</sup> <a name="GatewayConfigs" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.gatewayConfigs"></a>

```go
GatewayConfigs interface{}
```

- *Type:* interface{}

gateway_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#gateway_configs VertexAiSemanticGovernancePolicyEngine#gateway_configs}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#id VertexAiSemanticGovernancePolicyEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#project VertexAiSemanticGovernancePolicyEngine#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the SemanticGovernancePolicyEngine, e.g. 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#region VertexAiSemanticGovernancePolicyEngine#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineConfig.property.timeouts"></a>

```go
Timeouts VertexAiSemanticGovernancePolicyEngineTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeouts">VertexAiSemanticGovernancePolicyEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#timeouts VertexAiSemanticGovernancePolicyEngine#timeouts}

---

### VertexAiSemanticGovernancePolicyEngineGatewayConfigs <a name="VertexAiSemanticGovernancePolicyEngineGatewayConfigs" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicyengine"

&vertexaisemanticgovernancepolicyengine.VertexAiSemanticGovernancePolicyEngineGatewayConfigs {
	Name: *string,
	AllowedProjects: *[]*string,
	DnsZoneName: *string,
	Network: *string,
	Subnetwork: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#name VertexAiSemanticGovernancePolicyEngine#name}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.allowedProjects">AllowedProjects</a></code> | <code>*[]*string</code> | Additional consumer projects permitted to attach their own PSC endpoint to this gateway's ServiceAttachment. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.dnsZoneName">DnsZoneName</a></code> | <code>*string</code> | The name of the private Cloud DNS managed zone in which the backend creates the DNS record set for this gateway's PSC endpoint. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.network">Network</a></code> | <code>*string</code> | The URI of the network resource where the gateway's PSC endpoint is provisioned. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The URI of the subnetwork resource where the gateway's PSC endpoint is provisioned. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#name VertexAiSemanticGovernancePolicyEngine#name}.

---

##### `AllowedProjects`<sup>Optional</sup> <a name="AllowedProjects" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.allowedProjects"></a>

```go
AllowedProjects *[]*string
```

- *Type:* *[]*string

Additional consumer projects permitted to attach their own PSC endpoint to this gateway's ServiceAttachment.

This is the "decoupled" mode, where
the customer creates the PSC endpoint in a project other than this
gateway's network project. Each listed project is VPC-SC enforced: it
must be within the caller's service perimeter. The owning
SemanticGovernancePolicyEngine's own project is always permitted
implicitly and need not be listed. Format: projects/{project} (ID or number).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#allowed_projects VertexAiSemanticGovernancePolicyEngine#allowed_projects}

---

##### `DnsZoneName`<sup>Optional</sup> <a name="DnsZoneName" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.dnsZoneName"></a>

```go
DnsZoneName *string
```

- *Type:* *string

The name of the private Cloud DNS managed zone in which the backend creates the DNS record set for this gateway's PSC endpoint.

This is the
managed-zone resource name, not a fully-qualified domain name. The zone
must already exist and be attached to the gateway's VPC at provision
time. The name must match '^[a-z0-9.-]{1,63}$'. Must be set together
with 'network' and 'subnetwork' (all three or none).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#dns_zone_name VertexAiSemanticGovernancePolicyEngine#dns_zone_name}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.network"></a>

```go
Network *string
```

- *Type:* *string

The URI of the network resource where the gateway's PSC endpoint is provisioned.

Format: projects/{project}/global/networks/{network}.
'network', 'subnetwork', and 'dns_zone_name' must all be set together
or all omitted; setting only some is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#network VertexAiSemanticGovernancePolicyEngine#network}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigs.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The URI of the subnetwork resource where the gateway's PSC endpoint is provisioned.

Format:
projects/{project}/regions/{region}/subnetworks/{subnetwork}. Must be
set together with 'network' and 'dns_zone_name' (all three or none).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#subnetwork VertexAiSemanticGovernancePolicyEngine#subnetwork}

---

### VertexAiSemanticGovernancePolicyEngineTimeouts <a name="VertexAiSemanticGovernancePolicyEngineTimeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicyengine"

&vertexaisemanticgovernancepolicyengine.VertexAiSemanticGovernancePolicyEngineTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#create VertexAiSemanticGovernancePolicyEngine#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#delete VertexAiSemanticGovernancePolicyEngine#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#update VertexAiSemanticGovernancePolicyEngine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#create VertexAiSemanticGovernancePolicyEngine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#delete VertexAiSemanticGovernancePolicyEngine#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy_engine#update VertexAiSemanticGovernancePolicyEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiSemanticGovernancePolicyEngineGatewayConfigsList <a name="VertexAiSemanticGovernancePolicyEngineGatewayConfigsList" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicyengine"

vertexaisemanticgovernancepolicyengine.NewVertexAiSemanticGovernancePolicyEngineGatewayConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiSemanticGovernancePolicyEngineGatewayConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.get"></a>

```go
func Get(index *f64) VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference <a name="VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicyengine"

vertexaisemanticgovernancepolicyengine.NewVertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resetAllowedProjects">ResetAllowedProjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resetDnsZoneName">ResetDnsZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedProjects` <a name="ResetAllowedProjects" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resetAllowedProjects"></a>

```go
func ResetAllowedProjects()
```

##### `ResetDnsZoneName` <a name="ResetDnsZoneName" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resetDnsZoneName"></a>

```go
func ResetDnsZoneName()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.dnsRecord">DnsRecord</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.pscEndpoint">PscEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.allowedProjectsInput">AllowedProjectsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.dnsZoneNameInput">DnsZoneNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.allowedProjects">AllowedProjects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.dnsZoneName">DnsZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsRecord`<sup>Required</sup> <a name="DnsRecord" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.dnsRecord"></a>

```go
func DnsRecord() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `PscEndpoint`<sup>Required</sup> <a name="PscEndpoint" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.pscEndpoint"></a>

```go
func PscEndpoint() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `AllowedProjectsInput`<sup>Optional</sup> <a name="AllowedProjectsInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.allowedProjectsInput"></a>

```go
func AllowedProjectsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DnsZoneNameInput`<sup>Optional</sup> <a name="DnsZoneNameInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.dnsZoneNameInput"></a>

```go
func DnsZoneNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `AllowedProjects`<sup>Required</sup> <a name="AllowedProjects" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.allowedProjects"></a>

```go
func AllowedProjects() *[]*string
```

- *Type:* *[]*string

---

##### `DnsZoneName`<sup>Required</sup> <a name="DnsZoneName" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.dnsZoneName"></a>

```go
func DnsZoneName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference <a name="VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexaisemanticgovernancepolicyengine"

vertexaisemanticgovernancepolicyengine.NewVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicyEngine.VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



