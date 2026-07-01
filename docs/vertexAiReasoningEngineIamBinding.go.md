# `vertexAiReasoningEngineIamBinding` Submodule <a name="`vertexAiReasoningEngineIamBinding` Submodule" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiReasoningEngineIamBinding <a name="VertexAiReasoningEngineIamBinding" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding google_vertex_ai_reasoning_engine_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengineiambinding"

vertexaireasoningengineiambinding.NewVertexAiReasoningEngineIamBinding(scope Construct, id *string, config VertexAiReasoningEngineIamBindingConfig) VertexAiReasoningEngineIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig">VertexAiReasoningEngineIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig">VertexAiReasoningEngineIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.putCondition"></a>

```go
func PutCondition(value VertexAiReasoningEngineIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiReasoningEngineIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengineiambinding"

vertexaireasoningengineiambinding.VertexAiReasoningEngineIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengineiambinding"

vertexaireasoningengineiambinding.VertexAiReasoningEngineIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengineiambinding"

vertexaireasoningengineiambinding.VertexAiReasoningEngineIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengineiambinding"

vertexaireasoningengineiambinding.VertexAiReasoningEngineIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a VertexAiReasoningEngineIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VertexAiReasoningEngineIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VertexAiReasoningEngineIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiReasoningEngineIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference">VertexAiReasoningEngineIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.reasoningEngineInput">ReasoningEngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.reasoningEngine">ReasoningEngine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.condition"></a>

```go
func Condition() VertexAiReasoningEngineIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference">VertexAiReasoningEngineIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.conditionInput"></a>

```go
func ConditionInput() VertexAiReasoningEngineIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReasoningEngineInput`<sup>Optional</sup> <a name="ReasoningEngineInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.reasoningEngineInput"></a>

```go
func ReasoningEngineInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReasoningEngine`<sup>Required</sup> <a name="ReasoningEngine" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.reasoningEngine"></a>

```go
func ReasoningEngine() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiReasoningEngineIamBindingCondition <a name="VertexAiReasoningEngineIamBindingCondition" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengineiambinding"

&vertexaireasoningengineiambinding.VertexAiReasoningEngineIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#expression VertexAiReasoningEngineIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#title VertexAiReasoningEngineIamBinding#title}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#description VertexAiReasoningEngineIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#expression VertexAiReasoningEngineIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#title VertexAiReasoningEngineIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#description VertexAiReasoningEngineIamBinding#description}.

---

### VertexAiReasoningEngineIamBindingConfig <a name="VertexAiReasoningEngineIamBindingConfig" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengineiambinding"

&vertexaireasoningengineiambinding.VertexAiReasoningEngineIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Members: *[]*string,
	ReasoningEngine: *string,
	Role: *string,
	Condition: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#members VertexAiReasoningEngineIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.reasoningEngine">ReasoningEngine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#reasoning_engine VertexAiReasoningEngineIamBinding#reasoning_engine}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#role VertexAiReasoningEngineIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#id VertexAiReasoningEngineIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#project VertexAiReasoningEngineIamBinding#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#region VertexAiReasoningEngineIamBinding#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#members VertexAiReasoningEngineIamBinding#members}.

---

##### `ReasoningEngine`<sup>Required</sup> <a name="ReasoningEngine" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.reasoningEngine"></a>

```go
ReasoningEngine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#reasoning_engine VertexAiReasoningEngineIamBinding#reasoning_engine}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#role VertexAiReasoningEngineIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.condition"></a>

```go
Condition VertexAiReasoningEngineIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#condition VertexAiReasoningEngineIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#id VertexAiReasoningEngineIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#project VertexAiReasoningEngineIamBinding#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/vertex_ai_reasoning_engine_iam_binding#region VertexAiReasoningEngineIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiReasoningEngineIamBindingConditionOutputReference <a name="VertexAiReasoningEngineIamBindingConditionOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengineiambinding"

vertexaireasoningengineiambinding.NewVertexAiReasoningEngineIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiReasoningEngineIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiReasoningEngineIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngineIamBinding.VertexAiReasoningEngineIamBindingCondition">VertexAiReasoningEngineIamBindingCondition</a>

---



