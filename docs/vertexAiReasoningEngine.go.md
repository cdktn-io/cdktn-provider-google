# `vertexAiReasoningEngine` Submodule <a name="`vertexAiReasoningEngine` Submodule" id="@cdktn/provider-google.vertexAiReasoningEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiReasoningEngine <a name="VertexAiReasoningEngine" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine google_vertex_ai_reasoning_engine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngine(scope Construct, id *string, config VertexAiReasoningEngineConfig) VertexAiReasoningEngine
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig">VertexAiReasoningEngineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig">VertexAiReasoningEngineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetSpec">ResetSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.putEncryptionSpec"></a>

```go
func PutEncryptionSpec(value VertexAiReasoningEngineEncryptionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec">VertexAiReasoningEngineEncryptionSpec</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.putSpec"></a>

```go
func PutSpec(value VertexAiReasoningEngineSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec">VertexAiReasoningEngineSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.putTimeouts"></a>

```go
func PutTimeouts(value VertexAiReasoningEngineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts">VertexAiReasoningEngineTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetEncryptionSpec"></a>

```go
func ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetSpec"></a>

```go
func ResetSpec()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiReasoningEngine resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.VertexAiReasoningEngine_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.VertexAiReasoningEngine_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.VertexAiReasoningEngine_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.VertexAiReasoningEngine_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a VertexAiReasoningEngine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VertexAiReasoningEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VertexAiReasoningEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiReasoningEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference">VertexAiReasoningEngineEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference">VertexAiReasoningEngineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference">VertexAiReasoningEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec">VertexAiReasoningEngineEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.specInput">SpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec">VertexAiReasoningEngineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.encryptionSpec"></a>

```go
func EncryptionSpec() VertexAiReasoningEngineEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference">VertexAiReasoningEngineEncryptionSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.spec"></a>

```go
func Spec() VertexAiReasoningEngineSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference">VertexAiReasoningEngineSpecOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.timeouts"></a>

```go
func Timeouts() VertexAiReasoningEngineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference">VertexAiReasoningEngineTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.encryptionSpecInput"></a>

```go
func EncryptionSpecInput() VertexAiReasoningEngineEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec">VertexAiReasoningEngineEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.specInput"></a>

```go
func SpecInput() VertexAiReasoningEngineSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec">VertexAiReasoningEngineSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngine.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiReasoningEngineConfig <a name="VertexAiReasoningEngineConfig" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

&vertexaireasoningengine.VertexAiReasoningEngineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	DeletionPolicy: *string,
	Description: *string,
	EncryptionSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Region: *string,
	Spec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vertexAiReasoningEngine.VertexAiReasoningEngineSpec,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the ReasoningEngine. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_reasoning_engine.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.description">Description</a></code> | <code>*string</code> | The description of the ReasoningEngine. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec">VertexAiReasoningEngineEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#id VertexAiReasoningEngine#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels associated with this ReasoningEngine. You can use these to organize and group your ReasoningEngines. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#project VertexAiReasoningEngine#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.region">Region</a></code> | <code>*string</code> | The region of the reasoning engine. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec">VertexAiReasoningEngineSpec</a></code> | spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts">VertexAiReasoningEngineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the ReasoningEngine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#display_name VertexAiReasoningEngine#display_name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_reasoning_engine.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#deletion_policy VertexAiReasoningEngine#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the ReasoningEngine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#description VertexAiReasoningEngine#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.encryptionSpec"></a>

```go
EncryptionSpec VertexAiReasoningEngineEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec">VertexAiReasoningEngineEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#encryption_spec VertexAiReasoningEngine#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#id VertexAiReasoningEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels associated with this ReasoningEngine. You can use these to organize and group your ReasoningEngines.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#labels VertexAiReasoningEngine#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#project VertexAiReasoningEngine#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the reasoning engine. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#region VertexAiReasoningEngine#region}

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.spec"></a>

```go
Spec VertexAiReasoningEngineSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec">VertexAiReasoningEngineSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#spec VertexAiReasoningEngine#spec}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineConfig.property.timeouts"></a>

```go
Timeouts VertexAiReasoningEngineTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts">VertexAiReasoningEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#timeouts VertexAiReasoningEngine#timeouts}

---

### VertexAiReasoningEngineEncryptionSpec <a name="VertexAiReasoningEngineEncryptionSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

&vertexaireasoningengine.VertexAiReasoningEngineEncryptionSpec {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Required. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Required.

The Cloud KMS resource identifier of the customer managed
encryption key used to protect a resource. Has the form:
projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
The key needs to be in the same region as where the compute resource
is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#kms_key_name VertexAiReasoningEngine#kms_key_name}

---

### VertexAiReasoningEngineSpec <a name="VertexAiReasoningEngineSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

&vertexaireasoningengine.VertexAiReasoningEngineSpec {
	AgentFramework: *string,
	ClassMethods: *string,
	ContainerSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec,
	DeploymentSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec,
	IdentityType: *string,
	PackageSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec,
	ServiceAccount: *string,
	SourceCodeSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.agentFramework">AgentFramework</a></code> | <code>*string</code> | Optional. The OSS agent framework used to develop the agent. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.classMethods">ClassMethods</a></code> | <code>*string</code> | Optional. Declarations for object class methods in OpenAPI specification format. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.containerSpec">ContainerSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec">VertexAiReasoningEngineSpecContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.deploymentSpec">DeploymentSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec">VertexAiReasoningEngineSpecDeploymentSpec</a></code> | deployment_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.identityType">IdentityType</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.packageSpec">PackageSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec">VertexAiReasoningEngineSpecPackageSpec</a></code> | package_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.sourceCodeSpec">SourceCodeSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec">VertexAiReasoningEngineSpecSourceCodeSpec</a></code> | source_code_spec block. |

---

##### `AgentFramework`<sup>Optional</sup> <a name="AgentFramework" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.agentFramework"></a>

```go
AgentFramework *string
```

- *Type:* *string

Optional. The OSS agent framework used to develop the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#agent_framework VertexAiReasoningEngine#agent_framework}

---

##### `ClassMethods`<sup>Optional</sup> <a name="ClassMethods" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.classMethods"></a>

```go
ClassMethods *string
```

- *Type:* *string

Optional. Declarations for object class methods in OpenAPI specification format.

**Note**: When deploying via Terraform, this field must be populated manually.
Otherwise, client SDKs (like 'agent_engines.get()') will not be able to discover the methods, and calls to the engine (or A2A integrations) will fail.

Depending on the template/framework used ('agent_framework'), the required class methods and their parameters differ:

**Warning**: The configuration snippets below are illustrative, may not be exhaustive, and could stop working over time. For the most up-to-date method lists and schemas, please consult the respective SDK source code:

* For Google ADK: See [ADK Python SDK cli_deploy.py](https://github.com/google/adk-python/blob/68a780306e3bdd648a882ef34c0abf8e5148353e/src/google/adk/cli/cli_deploy.py#L109).
* For Langchain: See [Vertex AI Python SDK langchain.py](https://github.com/googleapis/python-aiplatform/blob/c8a38a085931b01f4d6071f0ab7a64cb42851829/agentplatform/agent_engines/templates/langchain.py#L642-L717).

### 1. Langchain Template

* 'query' (api_mode = "sync" or empty)
* 'stream_query' (api_mode = "stream")

Example for Langchain:

```hcl
class_methods = jsonencode([
  {
    name        = "query"
    api_mode    = "sync"
    description = "Queries the reasoning engine"
    parameters  = {
      type       = "object"
      required   = ["input"]
      properties = {
        input = {
          type        = "string"
          description = "The input prompt"
        }
      }
    }
  },
  {
    name        = "stream_query"
    api_mode    = "stream"
    description = "Streams queries from the reasoning engine"
    parameters  = {
      type       = "object"
      required   = ["input"]
      properties = {
        input = {
          type        = "string"
          description = "The input prompt"
        }
      }
    }
  }
])
```

### 2. Google ADK Template (Standard - No A2A)

For standard Google ADK (Agent Development Kit) deployments, you must define the following 11 methods:

Example for Standard ADK:

```hcl
class_methods = jsonencode([
  {
    name        = "get_session"
    api_mode    = ""
    description = "Retrieve session by ID"
    parameters  = {
      type     = "object"
      required = ["user_id", "session_id"]
      properties = {
        user_id    = { type = "string" }
        session_id = { type = "string" }
      }
    }
  },
  {
    name        = "async_get_session"
    api_mode    = "async"
    description = "Retrieve session asynchronously by ID"
    parameters  = {
      type     = "object"
      required = ["user_id", "session_id"]
      properties = {
        user_id    = { type = "string" }
        session_id = { type = "string" }
      }
    }
  },
  {
    name        = "list_sessions"
    api_mode    = ""
    description = "List all sessions for a user"
    parameters  = {
      type     = "object"
      required = ["user_id"]
      properties = {
        user_id = { type = "string" }
      }
    }
  },
  {
    name        = "async_list_sessions"
    api_mode    = "async"
    description = "List all sessions for a user asynchronously"
    parameters  = {
      type     = "object"
      required = ["user_id"]
      properties = {
        user_id = { type = "string" }
      }
    }
  },
  {
    name        = "create_session"
    api_mode    = ""
    description = "Create a new session"
    parameters  = {
      type     = "object"
      required = ["user_id"]
      properties = {
        user_id    = { type = "string" }
        session_id = { type = "string" }
        state      = { type = "object" }
      }
    }
  },
  {
    name        = "async_create_session"
    api_mode    = "async"
    description = "Create a new session asynchronously"
    parameters  = {
      type     = "object"
      required = ["user_id"]
      properties = {
        user_id    = { type = "string" }
        session_id = { type = "string" }
        state      = { type = "object" }
      }
    }
  },
  {
    name        = "delete_session"
    api_mode    = ""
    description = "Delete session by ID"
    parameters  = {
      type     = "object"
      required = ["user_id", "session_id"]
      properties = {
        user_id    = { type = "string" }
        session_id = { type = "string" }
      }
    }
  },
  {
    name        = "async_delete_session"
    api_mode    = "async"
    description = "Delete session asynchronously by ID"
    parameters  = {
      type     = "object"
      required = ["user_id", "session_id"]
      properties = {
        user_id    = { type = "string" }
        session_id = { type = "string" }
      }
    }
  },
  {
    name        = "stream_query"
    api_mode    = "stream"
    description = "Stream queries from the agent"
    parameters  = {
      type     = "object"
      required = ["message", "user_id"]
      properties = {
        message    = { description = "Message string or object" }
        user_id    = { type = "string" }
        session_id = { type = "string" }
        run_config = { type = "object" }
      }
    }
  },
  {
    name        = "async_stream_query"
    api_mode    = "async_stream"
    description = "Stream queries asynchronously from the agent"
    parameters  = {
      type     = "object"
      required = ["message", "user_id"]
      properties = {
        message        = { description = "Message string or object" }
        user_id        = { type = "string" }
        session_id     = { type = "string" }
        session_events = { type = "array", items = { type = "object" } }
        run_config     = { type = "object" }
      }
    }
  },
  {
    name        = "streaming_agent_run_with_events"
    api_mode    = "async_stream"
    description = "Stream agent run with events asynchronously"
    parameters  = {
      type     = "object"
      required = ["request_json"]
      properties = {
        request_json = { type = "string" }
      }
    }
  }
])
```

### 3. Google ADK Template (A2A-Enabled)

If the agent integrates with the Gemini Enterprise Agent Registry (A2A), you must inject the 'a2a_agent_card' JSON metadata as a string **specifically inside the 'async_create_session' method definition**:

Example for A2A-Enabled ADK:

```hcl
locals {
  # Construct the A2A endpoint URL
  a2a_url = "https://us-central1-aiplatform.googleapis.com/v1/projects/my-project/locations/us-central1/reasoningEngines/my-agent/a2a"

  agent_card = {
    name                 = "my-agent"
    description          = "A2A Agent"
    version              = "1.0.0"
    preferred_transport  = "HTTP_JSON"
    supported_interfaces = [{ url = local.a2a_url, protocol_binding = "HTTP_JSON" }]
    capabilities         = { streaming = true }
  }
}

# In class_methods, append "a2a_agent_card" key ONLY to the "async_create_session" method:
class_methods = jsonencode([
  # ... other 10 standard methods (same as Standard ADK) ...
  {
    name        = "async_create_session"
    api_mode    = "async"
    description = "Create a new session asynchronously"
    parameters  = {
      type     = "object"
      required = ["user_id"]
      properties = {
        user_id    = { type = "string" }
        session_id = { type = "string" }
        state      = { type = "object" }
      }
    }
    # Inject the serialized Agent Card here
    a2a_agent_card = jsonencode(local.agent_card)
  }
])
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#class_methods VertexAiReasoningEngine#class_methods}

---

##### `ContainerSpec`<sup>Optional</sup> <a name="ContainerSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.containerSpec"></a>

```go
ContainerSpec VertexAiReasoningEngineSpecContainerSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec">VertexAiReasoningEngineSpecContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#container_spec VertexAiReasoningEngine#container_spec}

---

##### `DeploymentSpec`<sup>Optional</sup> <a name="DeploymentSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.deploymentSpec"></a>

```go
DeploymentSpec VertexAiReasoningEngineSpecDeploymentSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec">VertexAiReasoningEngineSpecDeploymentSpec</a>

deployment_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#deployment_spec VertexAiReasoningEngine#deployment_spec}

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.identityType"></a>

```go
IdentityType *string
```

- *Type:* *string

Optional.

The identity type to use for the Reasoning Engine.
If not specified, the 'service_account' field will be used if set,
otherwise the default Vertex AI Reasoning Engine Service Agent in the project will be used.
Possible values:

* 'SERVICE_ACCOUNT': Use a custom service account if the 'service_account' field is set, otherwise use the default Vertex AI Reasoning Engine Service Agent in the project.
* 'AGENT_IDENTITY': Use Agent Identity. The 'service_account' field must not be set. Possible values: ["SERVICE_ACCOUNT", "AGENT_IDENTITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#identity_type VertexAiReasoningEngine#identity_type}

---

##### `PackageSpec`<sup>Optional</sup> <a name="PackageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.packageSpec"></a>

```go
PackageSpec VertexAiReasoningEngineSpecPackageSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec">VertexAiReasoningEngineSpecPackageSpec</a>

package_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#package_spec VertexAiReasoningEngine#package_spec}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Optional.

The service account that the Reasoning Engine artifact runs
as. It should have "roles/storage.objectViewer" for reading the user
project's Cloud Storage and "roles/aiplatform.user" for using Vertex
extensions. If not specified, the Vertex AI Reasoning Engine service
Agent in the project will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#service_account VertexAiReasoningEngine#service_account}

---

##### `SourceCodeSpec`<sup>Optional</sup> <a name="SourceCodeSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec.property.sourceCodeSpec"></a>

```go
SourceCodeSpec VertexAiReasoningEngineSpecSourceCodeSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec">VertexAiReasoningEngineSpecSourceCodeSpec</a>

source_code_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#source_code_spec VertexAiReasoningEngine#source_code_spec}

---

### VertexAiReasoningEngineSpecContainerSpec <a name="VertexAiReasoningEngineSpecContainerSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

&vertexaireasoningengine.VertexAiReasoningEngineSpecContainerSpec {
	ImageUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec.property.imageUri">ImageUri</a></code> | <code>*string</code> | The Artifact Registry Docker image URI (e.g., 'us-central1-docker.pkg.dev/my-project/my-repo/my-image:tag') of the container image that is to be run on each worker replica. |

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec.property.imageUri"></a>

```go
ImageUri *string
```

- *Type:* *string

The Artifact Registry Docker image URI (e.g., 'us-central1-docker.pkg.dev/my-project/my-repo/my-image:tag') of the container image that is to be run on each worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#image_uri VertexAiReasoningEngine#image_uri}

---

### VertexAiReasoningEngineSpecDeploymentSpec <a name="VertexAiReasoningEngineSpecDeploymentSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

&vertexaireasoningengine.VertexAiReasoningEngineSpecDeploymentSpec {
	ContainerConcurrency: *f64,
	Env: interface{},
	MaxInstances: *f64,
	MinInstances: *f64,
	PscInterfaceConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig,
	ResourceLimits: *map[string]*string,
	SecretEnv: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.containerConcurrency">ContainerConcurrency</a></code> | <code>*f64</code> | Optional. Concurrency for each container and agent server. Recommended value: 2 * cpu + 1. Defaults to 9. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.env">Env</a></code> | <code>interface{}</code> | env block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.minInstances">MinInstances</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.resourceLimits">ResourceLimits</a></code> | <code>*map[string]*string</code> | Optional. Resource limits for each container. Only 'cpu' and 'memory' keys are supported. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.secretEnv">SecretEnv</a></code> | <code>interface{}</code> | secret_env block. |

---

##### `ContainerConcurrency`<sup>Optional</sup> <a name="ContainerConcurrency" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.containerConcurrency"></a>

```go
ContainerConcurrency *f64
```

- *Type:* *f64

Optional. Concurrency for each container and agent server. Recommended value: 2 * cpu + 1. Defaults to 9.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#container_concurrency VertexAiReasoningEngine#container_concurrency}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.env"></a>

```go
Env interface{}
```

- *Type:* interface{}

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#env VertexAiReasoningEngine#env}

---

##### `MaxInstances`<sup>Optional</sup> <a name="MaxInstances" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.maxInstances"></a>

```go
MaxInstances *f64
```

- *Type:* *f64

Optional.

The maximum number of application instances that can be
launched to handle increased traffic. Defaults to 100.
Range: [1, 1000]. If VPC-SC or PSC-I is enabled, the acceptable
range is [1, 100].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#max_instances VertexAiReasoningEngine#max_instances}

---

##### `MinInstances`<sup>Optional</sup> <a name="MinInstances" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.minInstances"></a>

```go
MinInstances *f64
```

- *Type:* *f64

Optional.

The minimum number of application instances that will be
kept running at all times. Defaults to 1. Range: [0, 10].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#min_instances VertexAiReasoningEngine#min_instances}

---

##### `PscInterfaceConfig`<sup>Optional</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.pscInterfaceConfig"></a>

```go
PscInterfaceConfig VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#psc_interface_config VertexAiReasoningEngine#psc_interface_config}

---

##### `ResourceLimits`<sup>Optional</sup> <a name="ResourceLimits" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.resourceLimits"></a>

```go
ResourceLimits *map[string]*string
```

- *Type:* *map[string]*string

Optional. Resource limits for each container. Only 'cpu' and 'memory' keys are supported.

Defaults to {"cpu": "4", "memory": "4Gi"}.

The only supported values for CPU are '1', '2', '4', '6' and '8'.
For more information, go to
https://cloud.google.com/run/docs/configuring/cpu.

The only supported values for memory are '1Gi', '2Gi', ... '32 Gi'.
For more information, go to
https://cloud.google.com/run/docs/configuring/memory-limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#resource_limits VertexAiReasoningEngine#resource_limits}

---

##### `SecretEnv`<sup>Optional</sup> <a name="SecretEnv" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec.property.secretEnv"></a>

```go
SecretEnv interface{}
```

- *Type:* interface{}

secret_env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#secret_env VertexAiReasoningEngine#secret_env}

---

### VertexAiReasoningEngineSpecDeploymentSpecEnv <a name="VertexAiReasoningEngineSpecDeploymentSpecEnv" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

&vertexaireasoningengine.VertexAiReasoningEngineSpecDeploymentSpecEnv {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv.property.name">Name</a></code> | <code>*string</code> | The name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv.property.value">Value</a></code> | <code>*string</code> | Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#name VertexAiReasoningEngine#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnv.property.value"></a>

```go
Value *string
```

- *Type:* *string

Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables.

If a variable cannot
be resolved, the reference in the input string will be
unchanged. The $(VAR_NAME) syntax can be escaped with a
double $$, ie: $$(VAR_NAME). Escaped references will never
be expanded, regardless of whether the variable exists
or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#value VertexAiReasoningEngine#value}

---

### VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig <a name="VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

&vertexaireasoningengine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig {
	DnsPeeringConfigs: interface{},
	NetworkAttachment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code>interface{}</code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | Optional. |

---

##### `DnsPeeringConfigs`<sup>Optional</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.property.dnsPeeringConfigs"></a>

```go
DnsPeeringConfigs interface{}
```

- *Type:* interface{}

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#dns_peering_configs VertexAiReasoningEngine#dns_peering_configs}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.property.networkAttachment"></a>

```go
NetworkAttachment *string
```

- *Type:* *string

Optional.

The name of the Compute Engine network attachment
to attach to the resource within the region and user project.
To specify this field, you must have already created a network attachment.
This field is only used for resources using PSC-Interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#network_attachment VertexAiReasoningEngine#network_attachment}

---

### VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs <a name="VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

&vertexaireasoningengine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs {
	Domain: *string,
	TargetNetwork: *string,
	TargetProject: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.domain">Domain</a></code> | <code>*string</code> | Required. The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">TargetNetwork</a></code> | <code>*string</code> | Required. The VPC network name in the targetProject where the DNS zone specified by 'domain' is visible. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.targetProject">TargetProject</a></code> | <code>*string</code> | Required. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Required. The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#domain VertexAiReasoningEngine#domain}

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```go
TargetNetwork *string
```

- *Type:* *string

Required. The VPC network name in the targetProject where the DNS zone specified by 'domain' is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#target_network VertexAiReasoningEngine#target_network}

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```go
TargetProject *string
```

- *Type:* *string

Required.

The project id hosting the Cloud DNS managed
zone that contains the 'domain'.
The Vertex AI service Agent requires the dns.peer role
on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#target_project VertexAiReasoningEngine#target_project}

---

### VertexAiReasoningEngineSpecDeploymentSpecSecretEnv <a name="VertexAiReasoningEngineSpecDeploymentSpecSecretEnv" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

&vertexaireasoningengine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv {
	Name: *string,
	SecretRef: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv.property.name">Name</a></code> | <code>*string</code> | The name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv.property.secretRef">SecretRef</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a></code> | secret_ref block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#name VertexAiReasoningEngine#name}

---

##### `SecretRef`<sup>Required</sup> <a name="SecretRef" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnv.property.secretRef"></a>

```go
SecretRef VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#secret_ref VertexAiReasoningEngine#secret_ref}

---

### VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef <a name="VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

&vertexaireasoningengine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef {
	Secret: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.property.secret">Secret</a></code> | <code>*string</code> | The name of the secret in Cloud Secret Manager. Format: {secret_name}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.property.version">Version</a></code> | <code>*string</code> | The Cloud Secret Manager secret version. |

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

The name of the secret in Cloud Secret Manager. Format: {secret_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#secret VertexAiReasoningEngine#secret}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.property.version"></a>

```go
Version *string
```

- *Type:* *string

The Cloud Secret Manager secret version.

Can be 'latest'
for the latest version, an integer for a specific
version, or a version alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#version VertexAiReasoningEngine#version}

---

### VertexAiReasoningEngineSpecPackageSpec <a name="VertexAiReasoningEngineSpecPackageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

&vertexaireasoningengine.VertexAiReasoningEngineSpecPackageSpec {
	DependencyFilesGcsUri: *string,
	PickleObjectGcsUri: *string,
	PythonVersion: *string,
	RequirementsGcsUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec.property.dependencyFilesGcsUri">DependencyFilesGcsUri</a></code> | <code>*string</code> | Optional. The Cloud Storage URI of the dependency files in tar.gz format. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec.property.pickleObjectGcsUri">PickleObjectGcsUri</a></code> | <code>*string</code> | Optional. The Cloud Storage URI of the pickled python object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec.property.pythonVersion">PythonVersion</a></code> | <code>*string</code> | Optional. The Python version. Currently support 3.8, 3.9, 3.10, 3.11, 3.12, 3.13. If not specified, default value is 3.10. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec.property.requirementsGcsUri">RequirementsGcsUri</a></code> | <code>*string</code> | Optional. The Cloud Storage URI of the requirements.txtfile. |

---

##### `DependencyFilesGcsUri`<sup>Optional</sup> <a name="DependencyFilesGcsUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec.property.dependencyFilesGcsUri"></a>

```go
DependencyFilesGcsUri *string
```

- *Type:* *string

Optional. The Cloud Storage URI of the dependency files in tar.gz format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#dependency_files_gcs_uri VertexAiReasoningEngine#dependency_files_gcs_uri}

---

##### `PickleObjectGcsUri`<sup>Optional</sup> <a name="PickleObjectGcsUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec.property.pickleObjectGcsUri"></a>

```go
PickleObjectGcsUri *string
```

- *Type:* *string

Optional. The Cloud Storage URI of the pickled python object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#pickle_object_gcs_uri VertexAiReasoningEngine#pickle_object_gcs_uri}

---

##### `PythonVersion`<sup>Optional</sup> <a name="PythonVersion" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec.property.pythonVersion"></a>

```go
PythonVersion *string
```

- *Type:* *string

Optional. The Python version. Currently support 3.8, 3.9, 3.10, 3.11, 3.12, 3.13. If not specified, default value is 3.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#python_version VertexAiReasoningEngine#python_version}

---

##### `RequirementsGcsUri`<sup>Optional</sup> <a name="RequirementsGcsUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec.property.requirementsGcsUri"></a>

```go
RequirementsGcsUri *string
```

- *Type:* *string

Optional. The Cloud Storage URI of the requirements.txtfile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#requirements_gcs_uri VertexAiReasoningEngine#requirements_gcs_uri}

---

### VertexAiReasoningEngineSpecSourceCodeSpec <a name="VertexAiReasoningEngineSpecSourceCodeSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

&vertexaireasoningengine.VertexAiReasoningEngineSpecSourceCodeSpec {
	DeveloperConnectSource: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource,
	ImageSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec,
	InlineSource: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource,
	PythonSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec.property.developerConnectSource">DeveloperConnectSource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a></code> | developer_connect_source block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec.property.imageSpec">ImageSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec">VertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a></code> | image_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec.property.inlineSource">InlineSource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource">VertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a></code> | inline_source block. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec.property.pythonSpec">PythonSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a></code> | python_spec block. |

---

##### `DeveloperConnectSource`<sup>Optional</sup> <a name="DeveloperConnectSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec.property.developerConnectSource"></a>

```go
DeveloperConnectSource VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a>

developer_connect_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#developer_connect_source VertexAiReasoningEngine#developer_connect_source}

---

##### `ImageSpec`<sup>Optional</sup> <a name="ImageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec.property.imageSpec"></a>

```go
ImageSpec VertexAiReasoningEngineSpecSourceCodeSpecImageSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec">VertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a>

image_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#image_spec VertexAiReasoningEngine#image_spec}

---

##### `InlineSource`<sup>Optional</sup> <a name="InlineSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec.property.inlineSource"></a>

```go
InlineSource VertexAiReasoningEngineSpecSourceCodeSpecInlineSource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource">VertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a>

inline_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#inline_source VertexAiReasoningEngine#inline_source}

---

##### `PythonSpec`<sup>Optional</sup> <a name="PythonSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec.property.pythonSpec"></a>

```go
PythonSpec VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a>

python_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#python_spec VertexAiReasoningEngine#python_spec}

---

### VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource <a name="VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

&vertexaireasoningengine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource {
	Config: github.com/cdktn-io/cdktn-provider-google-go/google/v19.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource.property.config">Config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a></code> | config block. |

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource.property.config"></a>

```go
Config VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#config VertexAiReasoningEngine#config}

---

### VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig <a name="VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

&vertexaireasoningengine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig {
	Dir: *string,
	GitRepositoryLink: *string,
	Revision: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.dir">Dir</a></code> | <code>*string</code> | Directory, relative to the source root, in which to run the build. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.gitRepositoryLink">GitRepositoryLink</a></code> | <code>*string</code> | The Developer Connect Git repository link, formatted as projects/* /locations/* /connections/* /gitRepositoryLink/*. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.revision">Revision</a></code> | <code>*string</code> | The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. |

---

##### `Dir`<sup>Required</sup> <a name="Dir" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.dir"></a>

```go
Dir *string
```

- *Type:* *string

Directory, relative to the source root, in which to run the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#dir VertexAiReasoningEngine#dir}

---

##### `GitRepositoryLink`<sup>Required</sup> <a name="GitRepositoryLink" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.gitRepositoryLink"></a>

```go
GitRepositoryLink *string
```

- *Type:* *string

The Developer Connect Git repository link, formatted as projects/* /locations/* /connections/* /gitRepositoryLink/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#git_repository_link VertexAiReasoningEngine#git_repository_link}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.revision"></a>

```go
Revision *string
```

- *Type:* *string

The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#revision VertexAiReasoningEngine#revision}

---

### VertexAiReasoningEngineSpecSourceCodeSpecImageSpec <a name="VertexAiReasoningEngineSpecSourceCodeSpecImageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

&vertexaireasoningengine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec {
	BuildArgs: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec.property.buildArgs">BuildArgs</a></code> | <code>*map[string]*string</code> | Build arguments to be used. They will be passed through --build-arg flags. |

---

##### `BuildArgs`<sup>Optional</sup> <a name="BuildArgs" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec.property.buildArgs"></a>

```go
BuildArgs *map[string]*string
```

- *Type:* *map[string]*string

Build arguments to be used. They will be passed through --build-arg flags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#build_args VertexAiReasoningEngine#build_args}

---

### VertexAiReasoningEngineSpecSourceCodeSpecInlineSource <a name="VertexAiReasoningEngineSpecSourceCodeSpecInlineSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

&vertexaireasoningengine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource {
	SourceArchive: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource.property.sourceArchive">SourceArchive</a></code> | <code>*string</code> | Required. Input only. The application source code archive, provided as a compressed tarball (.tar.gz) file. A base64-encoded string. |

---

##### `SourceArchive`<sup>Optional</sup> <a name="SourceArchive" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource.property.sourceArchive"></a>

```go
SourceArchive *string
```

- *Type:* *string

Required. Input only. The application source code archive, provided as a compressed tarball (.tar.gz) file. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#source_archive VertexAiReasoningEngine#source_archive}

---

### VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec <a name="VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

&vertexaireasoningengine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec {
	EntrypointModule: *string,
	EntrypointObject: *string,
	RequirementsFile: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.entrypointModule">EntrypointModule</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.entrypointObject">EntrypointObject</a></code> | <code>*string</code> | Optional. The name of the callable object within the entrypointModule to use as the application If not specified, defaults to "root_agent". |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.requirementsFile">RequirementsFile</a></code> | <code>*string</code> | Optional. The path to the requirements file, relative to the source root. If not specified, defaults to "requirements.txt". |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.version">Version</a></code> | <code>*string</code> | Optional. |

---

##### `EntrypointModule`<sup>Optional</sup> <a name="EntrypointModule" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.entrypointModule"></a>

```go
EntrypointModule *string
```

- *Type:* *string

Optional.

The Python module to load as the entrypoint,
specified as a fully qualified module name. For example:
path.to.agent. If not specified, defaults to "agent".
The project root will be added to Python sys.path, allowing
imports to be specified relative to the root.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#entrypoint_module VertexAiReasoningEngine#entrypoint_module}

---

##### `EntrypointObject`<sup>Optional</sup> <a name="EntrypointObject" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.entrypointObject"></a>

```go
EntrypointObject *string
```

- *Type:* *string

Optional. The name of the callable object within the entrypointModule to use as the application If not specified, defaults to "root_agent".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#entrypoint_object VertexAiReasoningEngine#entrypoint_object}

---

##### `RequirementsFile`<sup>Optional</sup> <a name="RequirementsFile" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.requirementsFile"></a>

```go
RequirementsFile *string
```

- *Type:* *string

Optional. The path to the requirements file, relative to the source root. If not specified, defaults to "requirements.txt".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#requirements_file VertexAiReasoningEngine#requirements_file}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.version"></a>

```go
Version *string
```

- *Type:* *string

Optional.

The version of Python to use. Support version
includes 3.9, 3.10, 3.11, 3.12, 3.13. If not specified,
default value is 3.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#version VertexAiReasoningEngine#version}

---

### VertexAiReasoningEngineTimeouts <a name="VertexAiReasoningEngineTimeouts" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

&vertexaireasoningengine.VertexAiReasoningEngineTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#create VertexAiReasoningEngine#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#delete VertexAiReasoningEngine#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#update VertexAiReasoningEngine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#create VertexAiReasoningEngine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#delete VertexAiReasoningEngine#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vertex_ai_reasoning_engine#update VertexAiReasoningEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiReasoningEngineEncryptionSpecOutputReference <a name="VertexAiReasoningEngineEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineEncryptionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiReasoningEngineEncryptionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec">VertexAiReasoningEngineEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiReasoningEngineEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineEncryptionSpec">VertexAiReasoningEngineEncryptionSpec</a>

---


### VertexAiReasoningEngineSpecContainerSpecOutputReference <a name="VertexAiReasoningEngineSpecContainerSpecOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineSpecContainerSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiReasoningEngineSpecContainerSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec">VertexAiReasoningEngineSpecContainerSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.imageUriInput"></a>

```go
func ImageUriInput() *string
```

- *Type:* *string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiReasoningEngineSpecContainerSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec">VertexAiReasoningEngineSpecContainerSpec</a>

---


### VertexAiReasoningEngineSpecDeploymentSpecEnvList <a name="VertexAiReasoningEngineSpecDeploymentSpecEnvList" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineSpecDeploymentSpecEnvList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiReasoningEngineSpecDeploymentSpecEnvList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.get"></a>

```go
func Get(index *f64) VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference <a name="VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VertexAiReasoningEngineSpecDeploymentSpecOutputReference <a name="VertexAiReasoningEngineSpecDeploymentSpecOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineSpecDeploymentSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiReasoningEngineSpecDeploymentSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.putPscInterfaceConfig">PutPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.putSecretEnv">PutSecretEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetContainerConcurrency">ResetContainerConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetMaxInstances">ResetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetMinInstances">ResetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetPscInterfaceConfig">ResetPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetResourceLimits">ResetResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetSecretEnv">ResetSecretEnv</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.putEnv"></a>

```go
func PutEnv(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPscInterfaceConfig` <a name="PutPscInterfaceConfig" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.putPscInterfaceConfig"></a>

```go
func PutPscInterfaceConfig(value VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.putPscInterfaceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a>

---

##### `PutSecretEnv` <a name="PutSecretEnv" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.putSecretEnv"></a>

```go
func PutSecretEnv(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.putSecretEnv.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContainerConcurrency` <a name="ResetContainerConcurrency" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetContainerConcurrency"></a>

```go
func ResetContainerConcurrency()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetMaxInstances` <a name="ResetMaxInstances" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetMaxInstances"></a>

```go
func ResetMaxInstances()
```

##### `ResetMinInstances` <a name="ResetMinInstances" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetMinInstances"></a>

```go
func ResetMinInstances()
```

##### `ResetPscInterfaceConfig` <a name="ResetPscInterfaceConfig" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetPscInterfaceConfig"></a>

```go
func ResetPscInterfaceConfig()
```

##### `ResetResourceLimits` <a name="ResetResourceLimits" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetResourceLimits"></a>

```go
func ResetResourceLimits()
```

##### `ResetSecretEnv` <a name="ResetSecretEnv" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetSecretEnv"></a>

```go
func ResetSecretEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.env">Env</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList">VertexAiReasoningEngineSpecDeploymentSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.secretEnv">SecretEnv</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.containerConcurrencyInput">ContainerConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.envInput">EnvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.minInstancesInput">MinInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.pscInterfaceConfigInput">PscInterfaceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.resourceLimitsInput">ResourceLimitsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.secretEnvInput">SecretEnvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.containerConcurrency">ContainerConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.minInstances">MinInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.resourceLimits">ResourceLimits</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec">VertexAiReasoningEngineSpecDeploymentSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.env"></a>

```go
func Env() VertexAiReasoningEngineSpecDeploymentSpecEnvList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecEnvList">VertexAiReasoningEngineSpecDeploymentSpecEnvList</a>

---

##### `PscInterfaceConfig`<sup>Required</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.pscInterfaceConfig"></a>

```go
func PscInterfaceConfig() VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference</a>

---

##### `SecretEnv`<sup>Required</sup> <a name="SecretEnv" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.secretEnv"></a>

```go
func SecretEnv() VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList</a>

---

##### `ContainerConcurrencyInput`<sup>Optional</sup> <a name="ContainerConcurrencyInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.containerConcurrencyInput"></a>

```go
func ContainerConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.envInput"></a>

```go
func EnvInput() interface{}
```

- *Type:* interface{}

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.maxInstancesInput"></a>

```go
func MaxInstancesInput() *f64
```

- *Type:* *f64

---

##### `MinInstancesInput`<sup>Optional</sup> <a name="MinInstancesInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.minInstancesInput"></a>

```go
func MinInstancesInput() *f64
```

- *Type:* *f64

---

##### `PscInterfaceConfigInput`<sup>Optional</sup> <a name="PscInterfaceConfigInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.pscInterfaceConfigInput"></a>

```go
func PscInterfaceConfigInput() VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a>

---

##### `ResourceLimitsInput`<sup>Optional</sup> <a name="ResourceLimitsInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.resourceLimitsInput"></a>

```go
func ResourceLimitsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecretEnvInput`<sup>Optional</sup> <a name="SecretEnvInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.secretEnvInput"></a>

```go
func SecretEnvInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerConcurrency`<sup>Required</sup> <a name="ContainerConcurrency" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.containerConcurrency"></a>

```go
func ContainerConcurrency() *f64
```

- *Type:* *f64

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.maxInstances"></a>

```go
func MaxInstances() *f64
```

- *Type:* *f64

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.minInstances"></a>

```go
func MinInstances() *f64
```

- *Type:* *f64

---

##### `ResourceLimits`<sup>Required</sup> <a name="ResourceLimits" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.resourceLimits"></a>

```go
func ResourceLimits() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiReasoningEngineSpecDeploymentSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec">VertexAiReasoningEngineSpecDeploymentSpec</a>

---


### VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList <a name="VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.get"></a>

```go
func Get(index *f64) VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference <a name="VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">TargetNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">TargetProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">TargetNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">TargetProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```go
func TargetNetworkInput() *string
```

- *Type:* *string

---

##### `TargetProjectInput`<sup>Optional</sup> <a name="TargetProjectInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```go
func TargetProjectInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```go
func TargetNetwork() *string
```

- *Type:* *string

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```go
func TargetProject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference <a name="VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs">PutDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resetDnsPeeringConfigs">ResetDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsPeeringConfigs` <a name="PutDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```go
func PutDnsPeeringConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDnsPeeringConfigs` <a name="ResetDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```go
func ResetDnsPeeringConfigs()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```go
func ResetNetworkAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">DnsPeeringConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsPeeringConfigs`<sup>Required</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```go
func DnsPeeringConfigs() VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `DnsPeeringConfigsInput`<sup>Optional</sup> <a name="DnsPeeringConfigsInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```go
func DnsPeeringConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```go
func NetworkAttachmentInput() *string
```

- *Type:* *string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.networkAttachment"></a>

```go
func NetworkAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">VertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a>

---


### VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList <a name="VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.get"></a>

```go
func Get(index *f64) VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference <a name="VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.putSecretRef">PutSecretRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretRef` <a name="PutSecretRef" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.putSecretRef"></a>

```go
func PutSecretRef(value VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.secretRef">SecretRef</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.secretRefInput">SecretRefInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretRef`<sup>Required</sup> <a name="SecretRef" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.secretRef"></a>

```go
func SecretRef() VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecretRefInput`<sup>Optional</sup> <a name="SecretRefInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.secretRefInput"></a>

```go
func SecretRefInput() VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference <a name="VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">VertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a>

---


### VertexAiReasoningEngineSpecOutputReference <a name="VertexAiReasoningEngineSpecOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiReasoningEngineSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putContainerSpec">PutContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putDeploymentSpec">PutDeploymentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putPackageSpec">PutPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putSourceCodeSpec">PutSourceCodeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetAgentFramework">ResetAgentFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetClassMethods">ResetClassMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetContainerSpec">ResetContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetDeploymentSpec">ResetDeploymentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetIdentityType">ResetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetPackageSpec">ResetPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetSourceCodeSpec">ResetSourceCodeSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerSpec` <a name="PutContainerSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putContainerSpec"></a>

```go
func PutContainerSpec(value VertexAiReasoningEngineSpecContainerSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putContainerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec">VertexAiReasoningEngineSpecContainerSpec</a>

---

##### `PutDeploymentSpec` <a name="PutDeploymentSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putDeploymentSpec"></a>

```go
func PutDeploymentSpec(value VertexAiReasoningEngineSpecDeploymentSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putDeploymentSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec">VertexAiReasoningEngineSpecDeploymentSpec</a>

---

##### `PutPackageSpec` <a name="PutPackageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putPackageSpec"></a>

```go
func PutPackageSpec(value VertexAiReasoningEngineSpecPackageSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putPackageSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec">VertexAiReasoningEngineSpecPackageSpec</a>

---

##### `PutSourceCodeSpec` <a name="PutSourceCodeSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putSourceCodeSpec"></a>

```go
func PutSourceCodeSpec(value VertexAiReasoningEngineSpecSourceCodeSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.putSourceCodeSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec">VertexAiReasoningEngineSpecSourceCodeSpec</a>

---

##### `ResetAgentFramework` <a name="ResetAgentFramework" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetAgentFramework"></a>

```go
func ResetAgentFramework()
```

##### `ResetClassMethods` <a name="ResetClassMethods" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetClassMethods"></a>

```go
func ResetClassMethods()
```

##### `ResetContainerSpec` <a name="ResetContainerSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetContainerSpec"></a>

```go
func ResetContainerSpec()
```

##### `ResetDeploymentSpec` <a name="ResetDeploymentSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetDeploymentSpec"></a>

```go
func ResetDeploymentSpec()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetIdentityType"></a>

```go
func ResetIdentityType()
```

##### `ResetPackageSpec` <a name="ResetPackageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetPackageSpec"></a>

```go
func ResetPackageSpec()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetSourceCodeSpec` <a name="ResetSourceCodeSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.resetSourceCodeSpec"></a>

```go
func ResetSourceCodeSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.containerSpec">ContainerSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference">VertexAiReasoningEngineSpecContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.deploymentSpec">DeploymentSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference">VertexAiReasoningEngineSpecDeploymentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.effectiveIdentity">EffectiveIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.packageSpec">PackageSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference">VertexAiReasoningEngineSpecPackageSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.sourceCodeSpec">SourceCodeSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.agentFrameworkInput">AgentFrameworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.classMethodsInput">ClassMethodsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.containerSpecInput">ContainerSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec">VertexAiReasoningEngineSpecContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.deploymentSpecInput">DeploymentSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec">VertexAiReasoningEngineSpecDeploymentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.identityTypeInput">IdentityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.packageSpecInput">PackageSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec">VertexAiReasoningEngineSpecPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.sourceCodeSpecInput">SourceCodeSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec">VertexAiReasoningEngineSpecSourceCodeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.agentFramework">AgentFramework</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.classMethods">ClassMethods</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.identityType">IdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec">VertexAiReasoningEngineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerSpec`<sup>Required</sup> <a name="ContainerSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.containerSpec"></a>

```go
func ContainerSpec() VertexAiReasoningEngineSpecContainerSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpecOutputReference">VertexAiReasoningEngineSpecContainerSpecOutputReference</a>

---

##### `DeploymentSpec`<sup>Required</sup> <a name="DeploymentSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.deploymentSpec"></a>

```go
func DeploymentSpec() VertexAiReasoningEngineSpecDeploymentSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpecOutputReference">VertexAiReasoningEngineSpecDeploymentSpecOutputReference</a>

---

##### `EffectiveIdentity`<sup>Required</sup> <a name="EffectiveIdentity" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.effectiveIdentity"></a>

```go
func EffectiveIdentity() *string
```

- *Type:* *string

---

##### `PackageSpec`<sup>Required</sup> <a name="PackageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.packageSpec"></a>

```go
func PackageSpec() VertexAiReasoningEngineSpecPackageSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference">VertexAiReasoningEngineSpecPackageSpecOutputReference</a>

---

##### `SourceCodeSpec`<sup>Required</sup> <a name="SourceCodeSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.sourceCodeSpec"></a>

```go
func SourceCodeSpec() VertexAiReasoningEngineSpecSourceCodeSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecOutputReference</a>

---

##### `AgentFrameworkInput`<sup>Optional</sup> <a name="AgentFrameworkInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.agentFrameworkInput"></a>

```go
func AgentFrameworkInput() *string
```

- *Type:* *string

---

##### `ClassMethodsInput`<sup>Optional</sup> <a name="ClassMethodsInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.classMethodsInput"></a>

```go
func ClassMethodsInput() *string
```

- *Type:* *string

---

##### `ContainerSpecInput`<sup>Optional</sup> <a name="ContainerSpecInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.containerSpecInput"></a>

```go
func ContainerSpecInput() VertexAiReasoningEngineSpecContainerSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecContainerSpec">VertexAiReasoningEngineSpecContainerSpec</a>

---

##### `DeploymentSpecInput`<sup>Optional</sup> <a name="DeploymentSpecInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.deploymentSpecInput"></a>

```go
func DeploymentSpecInput() VertexAiReasoningEngineSpecDeploymentSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecDeploymentSpec">VertexAiReasoningEngineSpecDeploymentSpec</a>

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.identityTypeInput"></a>

```go
func IdentityTypeInput() *string
```

- *Type:* *string

---

##### `PackageSpecInput`<sup>Optional</sup> <a name="PackageSpecInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.packageSpecInput"></a>

```go
func PackageSpecInput() VertexAiReasoningEngineSpecPackageSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec">VertexAiReasoningEngineSpecPackageSpec</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `SourceCodeSpecInput`<sup>Optional</sup> <a name="SourceCodeSpecInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.sourceCodeSpecInput"></a>

```go
func SourceCodeSpecInput() VertexAiReasoningEngineSpecSourceCodeSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec">VertexAiReasoningEngineSpecSourceCodeSpec</a>

---

##### `AgentFramework`<sup>Required</sup> <a name="AgentFramework" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.agentFramework"></a>

```go
func AgentFramework() *string
```

- *Type:* *string

---

##### `ClassMethods`<sup>Required</sup> <a name="ClassMethods" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.classMethods"></a>

```go
func ClassMethods() *string
```

- *Type:* *string

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.identityType"></a>

```go
func IdentityType() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiReasoningEngineSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpec">VertexAiReasoningEngineSpec</a>

---


### VertexAiReasoningEngineSpecPackageSpecOutputReference <a name="VertexAiReasoningEngineSpecPackageSpecOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineSpecPackageSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiReasoningEngineSpecPackageSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resetDependencyFilesGcsUri">ResetDependencyFilesGcsUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resetPickleObjectGcsUri">ResetPickleObjectGcsUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resetPythonVersion">ResetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resetRequirementsGcsUri">ResetRequirementsGcsUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDependencyFilesGcsUri` <a name="ResetDependencyFilesGcsUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resetDependencyFilesGcsUri"></a>

```go
func ResetDependencyFilesGcsUri()
```

##### `ResetPickleObjectGcsUri` <a name="ResetPickleObjectGcsUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resetPickleObjectGcsUri"></a>

```go
func ResetPickleObjectGcsUri()
```

##### `ResetPythonVersion` <a name="ResetPythonVersion" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resetPythonVersion"></a>

```go
func ResetPythonVersion()
```

##### `ResetRequirementsGcsUri` <a name="ResetRequirementsGcsUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.resetRequirementsGcsUri"></a>

```go
func ResetRequirementsGcsUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.dependencyFilesGcsUriInput">DependencyFilesGcsUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.pickleObjectGcsUriInput">PickleObjectGcsUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.pythonVersionInput">PythonVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.requirementsGcsUriInput">RequirementsGcsUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.dependencyFilesGcsUri">DependencyFilesGcsUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.pickleObjectGcsUri">PickleObjectGcsUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.pythonVersion">PythonVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.requirementsGcsUri">RequirementsGcsUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec">VertexAiReasoningEngineSpecPackageSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DependencyFilesGcsUriInput`<sup>Optional</sup> <a name="DependencyFilesGcsUriInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.dependencyFilesGcsUriInput"></a>

```go
func DependencyFilesGcsUriInput() *string
```

- *Type:* *string

---

##### `PickleObjectGcsUriInput`<sup>Optional</sup> <a name="PickleObjectGcsUriInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.pickleObjectGcsUriInput"></a>

```go
func PickleObjectGcsUriInput() *string
```

- *Type:* *string

---

##### `PythonVersionInput`<sup>Optional</sup> <a name="PythonVersionInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.pythonVersionInput"></a>

```go
func PythonVersionInput() *string
```

- *Type:* *string

---

##### `RequirementsGcsUriInput`<sup>Optional</sup> <a name="RequirementsGcsUriInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.requirementsGcsUriInput"></a>

```go
func RequirementsGcsUriInput() *string
```

- *Type:* *string

---

##### `DependencyFilesGcsUri`<sup>Required</sup> <a name="DependencyFilesGcsUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.dependencyFilesGcsUri"></a>

```go
func DependencyFilesGcsUri() *string
```

- *Type:* *string

---

##### `PickleObjectGcsUri`<sup>Required</sup> <a name="PickleObjectGcsUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.pickleObjectGcsUri"></a>

```go
func PickleObjectGcsUri() *string
```

- *Type:* *string

---

##### `PythonVersion`<sup>Required</sup> <a name="PythonVersion" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.pythonVersion"></a>

```go
func PythonVersion() *string
```

- *Type:* *string

---

##### `RequirementsGcsUri`<sup>Required</sup> <a name="RequirementsGcsUri" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.requirementsGcsUri"></a>

```go
func RequirementsGcsUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiReasoningEngineSpecPackageSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecPackageSpec">VertexAiReasoningEngineSpecPackageSpec</a>

---


### VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference <a name="VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.dirInput">DirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.gitRepositoryLinkInput">GitRepositoryLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.revisionInput">RevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.dir">Dir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.gitRepositoryLink">GitRepositoryLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.revision">Revision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirInput`<sup>Optional</sup> <a name="DirInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.dirInput"></a>

```go
func DirInput() *string
```

- *Type:* *string

---

##### `GitRepositoryLinkInput`<sup>Optional</sup> <a name="GitRepositoryLinkInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.gitRepositoryLinkInput"></a>

```go
func GitRepositoryLinkInput() *string
```

- *Type:* *string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.revisionInput"></a>

```go
func RevisionInput() *string
```

- *Type:* *string

---

##### `Dir`<sup>Required</sup> <a name="Dir" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.dir"></a>

```go
func Dir() *string
```

- *Type:* *string

---

##### `GitRepositoryLink`<sup>Required</sup> <a name="GitRepositoryLink" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.gitRepositoryLink"></a>

```go
func GitRepositoryLink() *string
```

- *Type:* *string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.revision"></a>

```go
func Revision() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a>

---


### VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference <a name="VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.putConfig">PutConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.putConfig"></a>

```go
func PutConfig(value VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.config"></a>

```go
func Config() VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.configInput"></a>

```go
func ConfigInput() VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a>

---


### VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference <a name="VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resetBuildArgs">ResetBuildArgs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBuildArgs` <a name="ResetBuildArgs" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resetBuildArgs"></a>

```go
func ResetBuildArgs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.buildArgsInput">BuildArgsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.buildArgs">BuildArgs</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec">VertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BuildArgsInput`<sup>Optional</sup> <a name="BuildArgsInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.buildArgsInput"></a>

```go
func BuildArgsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BuildArgs`<sup>Required</sup> <a name="BuildArgs" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.buildArgs"></a>

```go
func BuildArgs() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiReasoningEngineSpecSourceCodeSpecImageSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec">VertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a>

---


### VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference <a name="VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resetSourceArchive">ResetSourceArchive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceArchive` <a name="ResetSourceArchive" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resetSourceArchive"></a>

```go
func ResetSourceArchive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.sourceArchiveInput">SourceArchiveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.sourceArchive">SourceArchive</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource">VertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceArchiveInput`<sup>Optional</sup> <a name="SourceArchiveInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.sourceArchiveInput"></a>

```go
func SourceArchiveInput() *string
```

- *Type:* *string

---

##### `SourceArchive`<sup>Required</sup> <a name="SourceArchive" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.sourceArchive"></a>

```go
func SourceArchive() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiReasoningEngineSpecSourceCodeSpecInlineSource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource">VertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a>

---


### VertexAiReasoningEngineSpecSourceCodeSpecOutputReference <a name="VertexAiReasoningEngineSpecSourceCodeSpecOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineSpecSourceCodeSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiReasoningEngineSpecSourceCodeSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putDeveloperConnectSource">PutDeveloperConnectSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putImageSpec">PutImageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putInlineSource">PutInlineSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putPythonSpec">PutPythonSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetDeveloperConnectSource">ResetDeveloperConnectSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetImageSpec">ResetImageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetInlineSource">ResetInlineSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetPythonSpec">ResetPythonSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeveloperConnectSource` <a name="PutDeveloperConnectSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putDeveloperConnectSource"></a>

```go
func PutDeveloperConnectSource(value VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putDeveloperConnectSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a>

---

##### `PutImageSpec` <a name="PutImageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putImageSpec"></a>

```go
func PutImageSpec(value VertexAiReasoningEngineSpecSourceCodeSpecImageSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putImageSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec">VertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a>

---

##### `PutInlineSource` <a name="PutInlineSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putInlineSource"></a>

```go
func PutInlineSource(value VertexAiReasoningEngineSpecSourceCodeSpecInlineSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putInlineSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource">VertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a>

---

##### `PutPythonSpec` <a name="PutPythonSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putPythonSpec"></a>

```go
func PutPythonSpec(value VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putPythonSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a>

---

##### `ResetDeveloperConnectSource` <a name="ResetDeveloperConnectSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetDeveloperConnectSource"></a>

```go
func ResetDeveloperConnectSource()
```

##### `ResetImageSpec` <a name="ResetImageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetImageSpec"></a>

```go
func ResetImageSpec()
```

##### `ResetInlineSource` <a name="ResetInlineSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetInlineSource"></a>

```go
func ResetInlineSource()
```

##### `ResetPythonSpec` <a name="ResetPythonSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetPythonSpec"></a>

```go
func ResetPythonSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.developerConnectSource">DeveloperConnectSource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.imageSpec">ImageSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.inlineSource">InlineSource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.pythonSpec">PythonSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.developerConnectSourceInput">DeveloperConnectSourceInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.imageSpecInput">ImageSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec">VertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.inlineSourceInput">InlineSourceInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource">VertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.pythonSpecInput">PythonSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec">VertexAiReasoningEngineSpecSourceCodeSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeveloperConnectSource`<sup>Required</sup> <a name="DeveloperConnectSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.developerConnectSource"></a>

```go
func DeveloperConnectSource() VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference</a>

---

##### `ImageSpec`<sup>Required</sup> <a name="ImageSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.imageSpec"></a>

```go
func ImageSpec() VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference</a>

---

##### `InlineSource`<sup>Required</sup> <a name="InlineSource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.inlineSource"></a>

```go
func InlineSource() VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference</a>

---

##### `PythonSpec`<sup>Required</sup> <a name="PythonSpec" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.pythonSpec"></a>

```go
func PythonSpec() VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference">VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference</a>

---

##### `DeveloperConnectSourceInput`<sup>Optional</sup> <a name="DeveloperConnectSourceInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.developerConnectSourceInput"></a>

```go
func DeveloperConnectSourceInput() VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">VertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a>

---

##### `ImageSpecInput`<sup>Optional</sup> <a name="ImageSpecInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.imageSpecInput"></a>

```go
func ImageSpecInput() VertexAiReasoningEngineSpecSourceCodeSpecImageSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecImageSpec">VertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a>

---

##### `InlineSourceInput`<sup>Optional</sup> <a name="InlineSourceInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.inlineSourceInput"></a>

```go
func InlineSourceInput() VertexAiReasoningEngineSpecSourceCodeSpecInlineSource
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecInlineSource">VertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a>

---

##### `PythonSpecInput`<sup>Optional</sup> <a name="PythonSpecInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.pythonSpecInput"></a>

```go
func PythonSpecInput() VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiReasoningEngineSpecSourceCodeSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpec">VertexAiReasoningEngineSpecSourceCodeSpec</a>

---


### VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference <a name="VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetEntrypointModule">ResetEntrypointModule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetEntrypointObject">ResetEntrypointObject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetRequirementsFile">ResetRequirementsFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntrypointModule` <a name="ResetEntrypointModule" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetEntrypointModule"></a>

```go
func ResetEntrypointModule()
```

##### `ResetEntrypointObject` <a name="ResetEntrypointObject" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetEntrypointObject"></a>

```go
func ResetEntrypointObject()
```

##### `ResetRequirementsFile` <a name="ResetRequirementsFile" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetRequirementsFile"></a>

```go
func ResetRequirementsFile()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointModuleInput">EntrypointModuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointObjectInput">EntrypointObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.requirementsFileInput">RequirementsFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointModule">EntrypointModule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointObject">EntrypointObject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.requirementsFile">RequirementsFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntrypointModuleInput`<sup>Optional</sup> <a name="EntrypointModuleInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointModuleInput"></a>

```go
func EntrypointModuleInput() *string
```

- *Type:* *string

---

##### `EntrypointObjectInput`<sup>Optional</sup> <a name="EntrypointObjectInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointObjectInput"></a>

```go
func EntrypointObjectInput() *string
```

- *Type:* *string

---

##### `RequirementsFileInput`<sup>Optional</sup> <a name="RequirementsFileInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.requirementsFileInput"></a>

```go
func RequirementsFileInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `EntrypointModule`<sup>Required</sup> <a name="EntrypointModule" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointModule"></a>

```go
func EntrypointModule() *string
```

- *Type:* *string

---

##### `EntrypointObject`<sup>Required</sup> <a name="EntrypointObject" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointObject"></a>

```go
func EntrypointObject() *string
```

- *Type:* *string

---

##### `RequirementsFile`<sup>Required</sup> <a name="RequirementsFile" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.requirementsFile"></a>

```go
func RequirementsFile() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">VertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a>

---


### VertexAiReasoningEngineTimeoutsOutputReference <a name="VertexAiReasoningEngineTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/vertexaireasoningengine"

vertexaireasoningengine.NewVertexAiReasoningEngineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiReasoningEngineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiReasoningEngine.VertexAiReasoningEngineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



