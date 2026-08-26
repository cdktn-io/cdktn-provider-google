# `vertexAiPersistentResource` Submodule <a name="`vertexAiPersistentResource` Submodule" id="@cdktn/provider-google.vertexAiPersistentResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiPersistentResource <a name="VertexAiPersistentResource" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource google_vertex_ai_persistent_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.NewVertexAiPersistentResource(scope Construct, id *string, config VertexAiPersistentResourceConfig) VertexAiPersistentResource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig">VertexAiPersistentResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig">VertexAiPersistentResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.putPscInterfaceConfig">PutPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.putResourcePools">PutResourcePools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.putResourceRuntimeSpec">PutResourceRuntimeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetPscInterfaceConfig">ResetPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetReservedIpRanges">ResetReservedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetResourceRuntimeSpec">ResetResourceRuntimeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.putEncryptionSpec"></a>

```go
func PutEncryptionSpec(value VertexAiPersistentResourceEncryptionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpec">VertexAiPersistentResourceEncryptionSpec</a>

---

##### `PutPscInterfaceConfig` <a name="PutPscInterfaceConfig" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.putPscInterfaceConfig"></a>

```go
func PutPscInterfaceConfig(value VertexAiPersistentResourcePscInterfaceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.putPscInterfaceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfig">VertexAiPersistentResourcePscInterfaceConfig</a>

---

##### `PutResourcePools` <a name="PutResourcePools" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.putResourcePools"></a>

```go
func PutResourcePools(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.putResourcePools.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResourceRuntimeSpec` <a name="PutResourceRuntimeSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.putResourceRuntimeSpec"></a>

```go
func PutResourceRuntimeSpec(value VertexAiPersistentResourceResourceRuntimeSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.putResourceRuntimeSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpec">VertexAiPersistentResourceResourceRuntimeSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.putTimeouts"></a>

```go
func PutTimeouts(value VertexAiPersistentResourceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeouts">VertexAiPersistentResourceTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetEncryptionSpec"></a>

```go
func ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPscInterfaceConfig` <a name="ResetPscInterfaceConfig" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetPscInterfaceConfig"></a>

```go
func ResetPscInterfaceConfig()
```

##### `ResetReservedIpRanges` <a name="ResetReservedIpRanges" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetReservedIpRanges"></a>

```go
func ResetReservedIpRanges()
```

##### `ResetResourceRuntimeSpec` <a name="ResetResourceRuntimeSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetResourceRuntimeSpec"></a>

```go
func ResetResourceRuntimeSpec()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiPersistentResource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.VertexAiPersistentResource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.VertexAiPersistentResource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.VertexAiPersistentResource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.VertexAiPersistentResource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a VertexAiPersistentResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VertexAiPersistentResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VertexAiPersistentResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiPersistentResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference">VertexAiPersistentResourceEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList">VertexAiPersistentResourceErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference">VertexAiPersistentResourcePscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.resourcePools">ResourcePools</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList">VertexAiPersistentResourceResourcePoolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.resourceRuntime">ResourceRuntime</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList">VertexAiPersistentResourceResourceRuntimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.resourceRuntimeSpec">ResourceRuntimeSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference">VertexAiPersistentResourceResourceRuntimeSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.satisfiesPzi">SatisfiesPzi</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.satisfiesPzs">SatisfiesPzs</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference">VertexAiPersistentResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpec">VertexAiPersistentResourceEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.pscInterfaceConfigInput">PscInterfaceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfig">VertexAiPersistentResourcePscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.reservedIpRangesInput">ReservedIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.resourcePoolsInput">ResourcePoolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.resourceRuntimeSpecInput">ResourceRuntimeSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpec">VertexAiPersistentResourceResourceRuntimeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.encryptionSpec"></a>

```go
func EncryptionSpec() VertexAiPersistentResourceEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference">VertexAiPersistentResourceEncryptionSpecOutputReference</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.error"></a>

```go
func Error() VertexAiPersistentResourceErrorList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList">VertexAiPersistentResourceErrorList</a>

---

##### `PscInterfaceConfig`<sup>Required</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.pscInterfaceConfig"></a>

```go
func PscInterfaceConfig() VertexAiPersistentResourcePscInterfaceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference">VertexAiPersistentResourcePscInterfaceConfigOutputReference</a>

---

##### `ResourcePools`<sup>Required</sup> <a name="ResourcePools" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.resourcePools"></a>

```go
func ResourcePools() VertexAiPersistentResourceResourcePoolsList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList">VertexAiPersistentResourceResourcePoolsList</a>

---

##### `ResourceRuntime`<sup>Required</sup> <a name="ResourceRuntime" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.resourceRuntime"></a>

```go
func ResourceRuntime() VertexAiPersistentResourceResourceRuntimeList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList">VertexAiPersistentResourceResourceRuntimeList</a>

---

##### `ResourceRuntimeSpec`<sup>Required</sup> <a name="ResourceRuntimeSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.resourceRuntimeSpec"></a>

```go
func ResourceRuntimeSpec() VertexAiPersistentResourceResourceRuntimeSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference">VertexAiPersistentResourceResourceRuntimeSpecOutputReference</a>

---

##### `SatisfiesPzi`<sup>Required</sup> <a name="SatisfiesPzi" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.satisfiesPzi"></a>

```go
func SatisfiesPzi() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SatisfiesPzs`<sup>Required</sup> <a name="SatisfiesPzs" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.satisfiesPzs"></a>

```go
func SatisfiesPzs() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.timeouts"></a>

```go
func Timeouts() VertexAiPersistentResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference">VertexAiPersistentResourceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.encryptionSpecInput"></a>

```go
func EncryptionSpecInput() VertexAiPersistentResourceEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpec">VertexAiPersistentResourceEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PscInterfaceConfigInput`<sup>Optional</sup> <a name="PscInterfaceConfigInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.pscInterfaceConfigInput"></a>

```go
func PscInterfaceConfigInput() VertexAiPersistentResourcePscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfig">VertexAiPersistentResourcePscInterfaceConfig</a>

---

##### `ReservedIpRangesInput`<sup>Optional</sup> <a name="ReservedIpRangesInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.reservedIpRangesInput"></a>

```go
func ReservedIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourcePoolsInput`<sup>Optional</sup> <a name="ResourcePoolsInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.resourcePoolsInput"></a>

```go
func ResourcePoolsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceRuntimeSpecInput`<sup>Optional</sup> <a name="ResourceRuntimeSpecInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.resourceRuntimeSpecInput"></a>

```go
func ResourceRuntimeSpecInput() VertexAiPersistentResourceResourceRuntimeSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpec">VertexAiPersistentResourceResourceRuntimeSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReservedIpRanges`<sup>Required</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.reservedIpRanges"></a>

```go
func ReservedIpRanges() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiPersistentResourceConfig <a name="VertexAiPersistentResourceConfig" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

&vertexaipersistentresource.VertexAiPersistentResourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourcePools: interface{},
	DeletionPolicy: *string,
	DisplayName: *string,
	EncryptionSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpec,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Network: *string,
	Project: *string,
	PscInterfaceConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfig,
	ReservedIpRanges: *[]*string,
	ResourceRuntimeSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpec,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiPersistentResource.VertexAiPersistentResourceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.name">Name</a></code> | <code>*string</code> | The ID to use for the PersistentResource, which become the final component of the PersistentResource's resource name. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.resourcePools">ResourcePools</a></code> | <code>interface{}</code> | resource_pools block. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the PersistentResource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpec">VertexAiPersistentResourceEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#id VertexAiPersistentResource#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels with user-defined metadata to organize PersistentResource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.location">Location</a></code> | <code>*string</code> | The location of the PersistentResource. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.network">Network</a></code> | <code>*string</code> | The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to peered with Vertex AI to host the persistent resources. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#project VertexAiPersistentResource#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfig">VertexAiPersistentResourcePscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>*[]*string</code> | A list of names for the reserved IP ranges under the VPC network that can be used for this persistent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.resourceRuntimeSpec">ResourceRuntimeSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpec">VertexAiPersistentResourceResourceRuntimeSpec</a></code> | resource_runtime_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeouts">VertexAiPersistentResourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The ID to use for the PersistentResource, which become the final component of the PersistentResource's resource name.

The maximum length is 63 characters, and valid characters
are '/^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#name VertexAiPersistentResource#name}

---

##### `ResourcePools`<sup>Required</sup> <a name="ResourcePools" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.resourcePools"></a>

```go
ResourcePools interface{}
```

- *Type:* interface{}

resource_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#resource_pools VertexAiPersistentResource#resource_pools}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#deletion_policy VertexAiPersistentResource#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the PersistentResource.

The name can be up to 128 characters long and can consist of any UTF-8
characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#display_name VertexAiPersistentResource#display_name}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.encryptionSpec"></a>

```go
EncryptionSpec VertexAiPersistentResourceEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpec">VertexAiPersistentResourceEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#encryption_spec VertexAiPersistentResource#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#id VertexAiPersistentResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels with user-defined metadata to organize PersistentResource.

Label keys and values can be no longer than 64 characters
(Unicode codepoints), can only contain lowercase letters, numeric
characters, underscores and dashes. International characters are allowed.

See https://goo.gl/xmQnxf for more information and examples of labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#labels VertexAiPersistentResource#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the PersistentResource. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#location VertexAiPersistentResource#location}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to peered with Vertex AI to host the persistent resources.

For example, 'projects/12345/global/networks/myVPC'.
[Format](/compute/docs/reference/rest/v1/networks/insert)
is of the form 'projects/{project}/global/networks/{network}'.
Where {project} is a project number, as in '12345', and {network} is a
network name.

To specify this field, you must have already [configured VPC Network
Peering for Vertex
AI](https://cloud.google.com/vertex-ai/docs/general/vpc-peering).

If this field is left unspecified, the resources aren't peered with any
network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#network VertexAiPersistentResource#network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#project VertexAiPersistentResource#project}.

---

##### `PscInterfaceConfig`<sup>Optional</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.pscInterfaceConfig"></a>

```go
PscInterfaceConfig VertexAiPersistentResourcePscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfig">VertexAiPersistentResourcePscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#psc_interface_config VertexAiPersistentResource#psc_interface_config}

---

##### `ReservedIpRanges`<sup>Optional</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.reservedIpRanges"></a>

```go
ReservedIpRanges *[]*string
```

- *Type:* *[]*string

A list of names for the reserved IP ranges under the VPC network that can be used for this persistent resource.

If set, we will deploy the persistent resource within the provided IP
ranges. Otherwise, the persistent resource is deployed to any IP
ranges under the provided VPC network.

Example: ['vertex-ai-ip-range'].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#reserved_ip_ranges VertexAiPersistentResource#reserved_ip_ranges}

---

##### `ResourceRuntimeSpec`<sup>Optional</sup> <a name="ResourceRuntimeSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.resourceRuntimeSpec"></a>

```go
ResourceRuntimeSpec VertexAiPersistentResourceResourceRuntimeSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpec">VertexAiPersistentResourceResourceRuntimeSpec</a>

resource_runtime_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#resource_runtime_spec VertexAiPersistentResource#resource_runtime_spec}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceConfig.property.timeouts"></a>

```go
Timeouts VertexAiPersistentResourceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeouts">VertexAiPersistentResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#timeouts VertexAiPersistentResource#timeouts}

---

### VertexAiPersistentResourceEncryptionSpec <a name="VertexAiPersistentResourceEncryptionSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

&vertexaipersistentresource.VertexAiPersistentResourceEncryptionSpec {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Resource name of the Cloud KMS key used to protect the resource. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpec.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have
the format
'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#kms_key_name VertexAiPersistentResource#kms_key_name}

---

### VertexAiPersistentResourceError <a name="VertexAiPersistentResourceError" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

&vertexaipersistentresource.VertexAiPersistentResourceError {

}
```


### VertexAiPersistentResourcePscInterfaceConfig <a name="VertexAiPersistentResourcePscInterfaceConfig" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

&vertexaipersistentresource.VertexAiPersistentResourcePscInterfaceConfig {
	DnsPeeringConfigs: interface{},
	NetworkAttachment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfig.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code>interface{}</code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | The name of the Compute Engine [network attachment](https://cloud.google.com/vpc/docs/about-network-attachments) to attach to the resource within the region and user project. To specify this field, you must have already [created a network attachment] (https://cloud.google.com/vpc/docs/create-manage-network-attachments#create-network-attachments). This field is only used for resources using PSC-I. |

---

##### `DnsPeeringConfigs`<sup>Optional</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfig.property.dnsPeeringConfigs"></a>

```go
DnsPeeringConfigs interface{}
```

- *Type:* interface{}

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#dns_peering_configs VertexAiPersistentResource#dns_peering_configs}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfig.property.networkAttachment"></a>

```go
NetworkAttachment *string
```

- *Type:* *string

The name of the Compute Engine [network attachment](https://cloud.google.com/vpc/docs/about-network-attachments) to attach to the resource within the region and user project. To specify this field, you must have already [created a network attachment] (https://cloud.google.com/vpc/docs/create-manage-network-attachments#create-network-attachments). This field is only used for resources using PSC-I.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#network_attachment VertexAiPersistentResource#network_attachment}

---

### VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs <a name="VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

&vertexaipersistentresource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs {
	Domain: *string,
	TargetNetwork: *string,
	TargetProject: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.domain">Domain</a></code> | <code>*string</code> | The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">TargetNetwork</a></code> | <code>*string</code> | The VPC network name in the target_project where the DNS zone specified by 'domain' is visible. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.targetProject">TargetProject</a></code> | <code>*string</code> | The project ID hosting the Cloud DNS managed zone that contains the 'domain'. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#domain VertexAiPersistentResource#domain}

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```go
TargetNetwork *string
```

- *Type:* *string

The VPC network name in the target_project where the DNS zone specified by 'domain' is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#target_network VertexAiPersistentResource#target_network}

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```go
TargetProject *string
```

- *Type:* *string

The project ID hosting the Cloud DNS managed zone that contains the 'domain'.

The Vertex AI Service Agent requires the
dns.peer role on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#target_project VertexAiPersistentResource#target_project}

---

### VertexAiPersistentResourceResourcePools <a name="VertexAiPersistentResourceResourcePools" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePools.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

&vertexaipersistentresource.VertexAiPersistentResourceResourcePools {
	MachineSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpec,
	AutoscalingSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpec,
	DiskSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpec,
	Id: *string,
	ReplicaCount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePools.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpec">VertexAiPersistentResourceResourcePoolsMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePools.property.autoscalingSpec">AutoscalingSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpec">VertexAiPersistentResourceResourcePoolsAutoscalingSpec</a></code> | autoscaling_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePools.property.diskSpec">DiskSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpec">VertexAiPersistentResourceResourcePoolsDiskSpec</a></code> | disk_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePools.property.id">Id</a></code> | <code>*string</code> | The unique ID in a PersistentResource for referring to this resource pool. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePools.property.replicaCount">ReplicaCount</a></code> | <code>*string</code> | The total number of machines to use for this resource pool. |

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePools.property.machineSpec"></a>

```go
MachineSpec VertexAiPersistentResourceResourcePoolsMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpec">VertexAiPersistentResourceResourcePoolsMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#machine_spec VertexAiPersistentResource#machine_spec}

---

##### `AutoscalingSpec`<sup>Optional</sup> <a name="AutoscalingSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePools.property.autoscalingSpec"></a>

```go
AutoscalingSpec VertexAiPersistentResourceResourcePoolsAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpec">VertexAiPersistentResourceResourcePoolsAutoscalingSpec</a>

autoscaling_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#autoscaling_spec VertexAiPersistentResource#autoscaling_spec}

---

##### `DiskSpec`<sup>Optional</sup> <a name="DiskSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePools.property.diskSpec"></a>

```go
DiskSpec VertexAiPersistentResourceResourcePoolsDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpec">VertexAiPersistentResourceResourcePoolsDiskSpec</a>

disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#disk_spec VertexAiPersistentResource#disk_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePools.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique ID in a PersistentResource for referring to this resource pool.

User can specify it if necessary. Otherwise, it's generated
automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#id VertexAiPersistentResource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReplicaCount`<sup>Optional</sup> <a name="ReplicaCount" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePools.property.replicaCount"></a>

```go
ReplicaCount *string
```

- *Type:* *string

The total number of machines to use for this resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#replica_count VertexAiPersistentResource#replica_count}

---

### VertexAiPersistentResourceResourcePoolsAutoscalingSpec <a name="VertexAiPersistentResourceResourcePoolsAutoscalingSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

&vertexaipersistentresource.VertexAiPersistentResourceResourcePoolsAutoscalingSpec {
	MaxReplicaCount: *string,
	MinReplicaCount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpec.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*string</code> | max replicas in the node pool, must be ≥ replica_count and > min_replica_count or will throw error. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpec.property.minReplicaCount">MinReplicaCount</a></code> | <code>*string</code> | min replicas in the node pool, must be ≤ replica_count and < max_replica_count or will throw error. |

---

##### `MaxReplicaCount`<sup>Optional</sup> <a name="MaxReplicaCount" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpec.property.maxReplicaCount"></a>

```go
MaxReplicaCount *string
```

- *Type:* *string

max replicas in the node pool, must be ≥ replica_count and > min_replica_count or will throw error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#max_replica_count VertexAiPersistentResource#max_replica_count}

---

##### `MinReplicaCount`<sup>Optional</sup> <a name="MinReplicaCount" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpec.property.minReplicaCount"></a>

```go
MinReplicaCount *string
```

- *Type:* *string

min replicas in the node pool, must be ≤ replica_count and < max_replica_count or will throw error.

For autoscaling enabled Ray-on-Vertex, we allow min_replica_count of a
resource_pool to be 0 to match the OSS Ray
behavior(https://docs.ray.io/en/latest/cluster/vms/user-guides/configuring-autoscaling.html#cluster-config-parameters).
As for Persistent Resource, the min_replica_count must be > 0, we added
a corresponding validation inside
CreatePersistentResourceRequestValidator.java.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#min_replica_count VertexAiPersistentResource#min_replica_count}

---

### VertexAiPersistentResourceResourcePoolsDiskSpec <a name="VertexAiPersistentResourceResourcePoolsDiskSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

&vertexaipersistentresource.VertexAiPersistentResourceResourcePoolsDiskSpec {
	BootDiskSizeGb: *f64,
	BootDiskType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpec.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>*f64</code> | Size in GB of the boot disk (default is 100GB). |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpec.property.bootDiskType">BootDiskType</a></code> | <code>*string</code> | Type of the boot disk. |

---

##### `BootDiskSizeGb`<sup>Optional</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpec.property.bootDiskSizeGb"></a>

```go
BootDiskSizeGb *f64
```

- *Type:* *f64

Size in GB of the boot disk (default is 100GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#boot_disk_size_gb VertexAiPersistentResource#boot_disk_size_gb}

---

##### `BootDiskType`<sup>Optional</sup> <a name="BootDiskType" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpec.property.bootDiskType"></a>

```go
BootDiskType *string
```

- *Type:* *string

Type of the boot disk.

For non-A3U machines, the default value is
"pd-ssd", for A3U machines, the default value is "hyperdisk-balanced".
Valid values: "pd-ssd" (Persistent Disk Solid State Drive),
"pd-standard" (Persistent Disk Hard Disk Drive) or "hyperdisk-balanced".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#boot_disk_type VertexAiPersistentResource#boot_disk_type}

---

### VertexAiPersistentResourceResourcePoolsMachineSpec <a name="VertexAiPersistentResourceResourcePoolsMachineSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

&vertexaipersistentresource.VertexAiPersistentResourceResourcePoolsMachineSpec {
	AcceleratorCount: *f64,
	AcceleratorType: *string,
	MachineType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpec.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | The number of accelerators to attach to the machine. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpec.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | The type of accelerator(s) that may be attached to the machine. Possible values: NVIDIA_TESLA_K80 NVIDIA_TESLA_P100 NVIDIA_TESLA_V100 NVIDIA_TESLA_P4 NVIDIA_TESLA_T4 NVIDIA_TESLA_A100 NVIDIA_A100_80GB NVIDIA_L4 NVIDIA_H100_80GB NVIDIA_H100_MEGA_80GB NVIDIA_H200_141GB NVIDIA_B200 NVIDIA_GB200 NVIDIA_RTX_PRO_6000 TPU_V2 TPU_V3 TPU_V4_POD TPU_V5_LITEPOD. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpec.property.machineType">MachineType</a></code> | <code>*string</code> | The type of the machine. |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpec.property.acceleratorCount"></a>

```go
AcceleratorCount *f64
```

- *Type:* *f64

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#accelerator_count VertexAiPersistentResource#accelerator_count}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpec.property.acceleratorType"></a>

```go
AcceleratorType *string
```

- *Type:* *string

The type of accelerator(s) that may be attached to the machine. Possible values: NVIDIA_TESLA_K80 NVIDIA_TESLA_P100 NVIDIA_TESLA_V100 NVIDIA_TESLA_P4 NVIDIA_TESLA_T4 NVIDIA_TESLA_A100 NVIDIA_A100_80GB NVIDIA_L4 NVIDIA_H100_80GB NVIDIA_H100_MEGA_80GB NVIDIA_H200_141GB NVIDIA_B200 NVIDIA_GB200 NVIDIA_RTX_PRO_6000 TPU_V2 TPU_V3 TPU_V4_POD TPU_V5_LITEPOD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#accelerator_type VertexAiPersistentResource#accelerator_type}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpec.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The type of the machine.

See the [list of machine types supported for
prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)

See the [list of machine types supported for custom
training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#machine_type VertexAiPersistentResource#machine_type}

---

### VertexAiPersistentResourceResourceRuntime <a name="VertexAiPersistentResourceResourceRuntime" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

&vertexaipersistentresource.VertexAiPersistentResourceResourceRuntime {

}
```


### VertexAiPersistentResourceResourceRuntimeSpec <a name="VertexAiPersistentResourceResourceRuntimeSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

&vertexaipersistentresource.VertexAiPersistentResourceResourceRuntimeSpec {
	ServiceAccountSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpec.property.serviceAccountSpec">ServiceAccountSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a></code> | service_account_spec block. |

---

##### `ServiceAccountSpec`<sup>Optional</sup> <a name="ServiceAccountSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpec.property.serviceAccountSpec"></a>

```go
ServiceAccountSpec VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a>

service_account_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#service_account_spec VertexAiPersistentResource#service_account_spec}

---

### VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec <a name="VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

&vertexaipersistentresource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec {
	EnableCustomServiceAccount: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec.property.enableCustomServiceAccount">EnableCustomServiceAccount</a></code> | <code>interface{}</code> | If true, custom user-managed service account is enforced to run any workloads (for example, Vertex Jobs) on the resource. |

---

##### `EnableCustomServiceAccount`<sup>Required</sup> <a name="EnableCustomServiceAccount" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec.property.enableCustomServiceAccount"></a>

```go
EnableCustomServiceAccount interface{}
```

- *Type:* interface{}

If true, custom user-managed service account is enforced to run any workloads (for example, Vertex Jobs) on the resource.

Otherwise, uses the [Vertex AI Custom Code Service
Agent](https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#enable_custom_service_account VertexAiPersistentResource#enable_custom_service_account}

---

### VertexAiPersistentResourceTimeouts <a name="VertexAiPersistentResourceTimeouts" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

&vertexaipersistentresource.VertexAiPersistentResourceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#create VertexAiPersistentResource#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#delete VertexAiPersistentResource#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#update VertexAiPersistentResource#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#create VertexAiPersistentResource#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#delete VertexAiPersistentResource#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/vertex_ai_persistent_resource#update VertexAiPersistentResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiPersistentResourceEncryptionSpecOutputReference <a name="VertexAiPersistentResourceEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.NewVertexAiPersistentResourceEncryptionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiPersistentResourceEncryptionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpec">VertexAiPersistentResourceEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiPersistentResourceEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceEncryptionSpec">VertexAiPersistentResourceEncryptionSpec</a>

---


### VertexAiPersistentResourceErrorList <a name="VertexAiPersistentResourceErrorList" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.NewVertexAiPersistentResourceErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiPersistentResourceErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.get"></a>

```go
func Get(index *f64) VertexAiPersistentResourceErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VertexAiPersistentResourceErrorOutputReference <a name="VertexAiPersistentResourceErrorOutputReference" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.NewVertexAiPersistentResourceErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiPersistentResourceErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceError">VertexAiPersistentResourceError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiPersistentResourceError
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceError">VertexAiPersistentResourceError</a>

---


### VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList <a name="VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.NewVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.get"></a>

```go
func Get(index *f64) VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference <a name="VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.NewVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">TargetNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">TargetProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">TargetNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">TargetProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```go
func TargetNetworkInput() *string
```

- *Type:* *string

---

##### `TargetProjectInput`<sup>Optional</sup> <a name="TargetProjectInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```go
func TargetProjectInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```go
func TargetNetwork() *string
```

- *Type:* *string

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```go
func TargetProject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VertexAiPersistentResourcePscInterfaceConfigOutputReference <a name="VertexAiPersistentResourcePscInterfaceConfigOutputReference" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.NewVertexAiPersistentResourcePscInterfaceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiPersistentResourcePscInterfaceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.putDnsPeeringConfigs">PutDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.resetDnsPeeringConfigs">ResetDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsPeeringConfigs` <a name="PutDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```go
func PutDnsPeeringConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDnsPeeringConfigs` <a name="ResetDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```go
func ResetDnsPeeringConfigs()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```go
func ResetNetworkAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList">VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">DnsPeeringConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfig">VertexAiPersistentResourcePscInterfaceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsPeeringConfigs`<sup>Required</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```go
func DnsPeeringConfigs() VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList">VertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `DnsPeeringConfigsInput`<sup>Optional</sup> <a name="DnsPeeringConfigsInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```go
func DnsPeeringConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```go
func NetworkAttachmentInput() *string
```

- *Type:* *string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.property.networkAttachment"></a>

```go
func NetworkAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiPersistentResourcePscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourcePscInterfaceConfig">VertexAiPersistentResourcePscInterfaceConfig</a>

---


### VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference <a name="VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.NewVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resetMaxReplicaCount">ResetMaxReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resetMinReplicaCount">ResetMinReplicaCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxReplicaCount` <a name="ResetMaxReplicaCount" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resetMaxReplicaCount"></a>

```go
func ResetMaxReplicaCount()
```

##### `ResetMinReplicaCount` <a name="ResetMinReplicaCount" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resetMinReplicaCount"></a>

```go
func ResetMinReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.maxReplicaCountInput">MaxReplicaCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.minReplicaCountInput">MinReplicaCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.minReplicaCount">MinReplicaCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpec">VertexAiPersistentResourceResourcePoolsAutoscalingSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReplicaCountInput`<sup>Optional</sup> <a name="MaxReplicaCountInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.maxReplicaCountInput"></a>

```go
func MaxReplicaCountInput() *string
```

- *Type:* *string

---

##### `MinReplicaCountInput`<sup>Optional</sup> <a name="MinReplicaCountInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.minReplicaCountInput"></a>

```go
func MinReplicaCountInput() *string
```

- *Type:* *string

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.maxReplicaCount"></a>

```go
func MaxReplicaCount() *string
```

- *Type:* *string

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.minReplicaCount"></a>

```go
func MinReplicaCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiPersistentResourceResourcePoolsAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpec">VertexAiPersistentResourceResourcePoolsAutoscalingSpec</a>

---


### VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference <a name="VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.NewVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resetBootDiskSizeGb">ResetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resetBootDiskType">ResetBootDiskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBootDiskSizeGb` <a name="ResetBootDiskSizeGb" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resetBootDiskSizeGb"></a>

```go
func ResetBootDiskSizeGb()
```

##### `ResetBootDiskType` <a name="ResetBootDiskType" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resetBootDiskType"></a>

```go
func ResetBootDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskSizeGbInput">BootDiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskTypeInput">BootDiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskType">BootDiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpec">VertexAiPersistentResourceResourcePoolsDiskSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BootDiskSizeGbInput`<sup>Optional</sup> <a name="BootDiskSizeGbInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskSizeGbInput"></a>

```go
func BootDiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `BootDiskTypeInput`<sup>Optional</sup> <a name="BootDiskTypeInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskTypeInput"></a>

```go
func BootDiskTypeInput() *string
```

- *Type:* *string

---

##### `BootDiskSizeGb`<sup>Required</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskSizeGb"></a>

```go
func BootDiskSizeGb() *f64
```

- *Type:* *f64

---

##### `BootDiskType`<sup>Required</sup> <a name="BootDiskType" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskType"></a>

```go
func BootDiskType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiPersistentResourceResourcePoolsDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpec">VertexAiPersistentResourceResourcePoolsDiskSpec</a>

---


### VertexAiPersistentResourceResourcePoolsList <a name="VertexAiPersistentResourceResourcePoolsList" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.NewVertexAiPersistentResourceResourcePoolsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiPersistentResourceResourcePoolsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.get"></a>

```go
func Get(index *f64) VertexAiPersistentResourceResourcePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference <a name="VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.NewVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetAcceleratorCount"></a>

```go
func ResetAcceleratorCount()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetAcceleratorType"></a>

```go
func ResetAcceleratorType()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpec">VertexAiPersistentResourceResourcePoolsMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorCountInput"></a>

```go
func AcceleratorCountInput() *f64
```

- *Type:* *f64

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```go
func AcceleratorTypeInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() *f64
```

- *Type:* *f64

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiPersistentResourceResourcePoolsMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpec">VertexAiPersistentResourceResourcePoolsMachineSpec</a>

---


### VertexAiPersistentResourceResourcePoolsOutputReference <a name="VertexAiPersistentResourceResourcePoolsOutputReference" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.NewVertexAiPersistentResourceResourcePoolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiPersistentResourceResourcePoolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.putAutoscalingSpec">PutAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.putDiskSpec">PutDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.putMachineSpec">PutMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.resetAutoscalingSpec">ResetAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.resetDiskSpec">ResetDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.resetReplicaCount">ResetReplicaCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscalingSpec` <a name="PutAutoscalingSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.putAutoscalingSpec"></a>

```go
func PutAutoscalingSpec(value VertexAiPersistentResourceResourcePoolsAutoscalingSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.putAutoscalingSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpec">VertexAiPersistentResourceResourcePoolsAutoscalingSpec</a>

---

##### `PutDiskSpec` <a name="PutDiskSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.putDiskSpec"></a>

```go
func PutDiskSpec(value VertexAiPersistentResourceResourcePoolsDiskSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.putDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpec">VertexAiPersistentResourceResourcePoolsDiskSpec</a>

---

##### `PutMachineSpec` <a name="PutMachineSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.putMachineSpec"></a>

```go
func PutMachineSpec(value VertexAiPersistentResourceResourcePoolsMachineSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpec">VertexAiPersistentResourceResourcePoolsMachineSpec</a>

---

##### `ResetAutoscalingSpec` <a name="ResetAutoscalingSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.resetAutoscalingSpec"></a>

```go
func ResetAutoscalingSpec()
```

##### `ResetDiskSpec` <a name="ResetDiskSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.resetDiskSpec"></a>

```go
func ResetDiskSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetReplicaCount` <a name="ResetReplicaCount" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.resetReplicaCount"></a>

```go
func ResetReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.autoscalingSpec">AutoscalingSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference">VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.diskSpec">DiskSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference">VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference">VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.usedReplicaCount">UsedReplicaCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.autoscalingSpecInput">AutoscalingSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpec">VertexAiPersistentResourceResourcePoolsAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.diskSpecInput">DiskSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpec">VertexAiPersistentResourceResourcePoolsDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.machineSpecInput">MachineSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpec">VertexAiPersistentResourceResourcePoolsMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.replicaCountInput">ReplicaCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.replicaCount">ReplicaCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingSpec`<sup>Required</sup> <a name="AutoscalingSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.autoscalingSpec"></a>

```go
func AutoscalingSpec() VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference">VertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference</a>

---

##### `DiskSpec`<sup>Required</sup> <a name="DiskSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.diskSpec"></a>

```go
func DiskSpec() VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference">VertexAiPersistentResourceResourcePoolsDiskSpecOutputReference</a>

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.machineSpec"></a>

```go
func MachineSpec() VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference">VertexAiPersistentResourceResourcePoolsMachineSpecOutputReference</a>

---

##### `UsedReplicaCount`<sup>Required</sup> <a name="UsedReplicaCount" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.usedReplicaCount"></a>

```go
func UsedReplicaCount() *string
```

- *Type:* *string

---

##### `AutoscalingSpecInput`<sup>Optional</sup> <a name="AutoscalingSpecInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.autoscalingSpecInput"></a>

```go
func AutoscalingSpecInput() VertexAiPersistentResourceResourcePoolsAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsAutoscalingSpec">VertexAiPersistentResourceResourcePoolsAutoscalingSpec</a>

---

##### `DiskSpecInput`<sup>Optional</sup> <a name="DiskSpecInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.diskSpecInput"></a>

```go
func DiskSpecInput() VertexAiPersistentResourceResourcePoolsDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsDiskSpec">VertexAiPersistentResourceResourcePoolsDiskSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MachineSpecInput`<sup>Optional</sup> <a name="MachineSpecInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.machineSpecInput"></a>

```go
func MachineSpecInput() VertexAiPersistentResourceResourcePoolsMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsMachineSpec">VertexAiPersistentResourceResourcePoolsMachineSpec</a>

---

##### `ReplicaCountInput`<sup>Optional</sup> <a name="ReplicaCountInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.replicaCountInput"></a>

```go
func ReplicaCountInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.replicaCount"></a>

```go
func ReplicaCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourcePoolsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VertexAiPersistentResourceResourceRuntimeList <a name="VertexAiPersistentResourceResourceRuntimeList" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.NewVertexAiPersistentResourceResourceRuntimeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiPersistentResourceResourceRuntimeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.get"></a>

```go
func Get(index *f64) VertexAiPersistentResourceResourceRuntimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VertexAiPersistentResourceResourceRuntimeOutputReference <a name="VertexAiPersistentResourceResourceRuntimeOutputReference" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.NewVertexAiPersistentResourceResourceRuntimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiPersistentResourceResourceRuntimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.property.accessUris">AccessUris</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntime">VertexAiPersistentResourceResourceRuntime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessUris`<sup>Required</sup> <a name="AccessUris" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.property.accessUris"></a>

```go
func AccessUris() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiPersistentResourceResourceRuntime
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntime">VertexAiPersistentResourceResourceRuntime</a>

---


### VertexAiPersistentResourceResourceRuntimeSpecOutputReference <a name="VertexAiPersistentResourceResourceRuntimeSpecOutputReference" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.NewVertexAiPersistentResourceResourceRuntimeSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiPersistentResourceResourceRuntimeSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.putServiceAccountSpec">PutServiceAccountSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.resetServiceAccountSpec">ResetServiceAccountSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceAccountSpec` <a name="PutServiceAccountSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.putServiceAccountSpec"></a>

```go
func PutServiceAccountSpec(value VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.putServiceAccountSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a>

---

##### `ResetServiceAccountSpec` <a name="ResetServiceAccountSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.resetServiceAccountSpec"></a>

```go
func ResetServiceAccountSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.serviceAccountSpec">ServiceAccountSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference">VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.serviceAccountSpecInput">ServiceAccountSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpec">VertexAiPersistentResourceResourceRuntimeSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceAccountSpec`<sup>Required</sup> <a name="ServiceAccountSpec" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.serviceAccountSpec"></a>

```go
func ServiceAccountSpec() VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference">VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference</a>

---

##### `ServiceAccountSpecInput`<sup>Optional</sup> <a name="ServiceAccountSpecInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.serviceAccountSpecInput"></a>

```go
func ServiceAccountSpecInput() VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiPersistentResourceResourceRuntimeSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpec">VertexAiPersistentResourceResourceRuntimeSpec</a>

---


### VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference <a name="VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.NewVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.enableCustomServiceAccountInput">EnableCustomServiceAccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.enableCustomServiceAccount">EnableCustomServiceAccount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableCustomServiceAccountInput`<sup>Optional</sup> <a name="EnableCustomServiceAccountInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.enableCustomServiceAccountInput"></a>

```go
func EnableCustomServiceAccountInput() interface{}
```

- *Type:* interface{}

---

##### `EnableCustomServiceAccount`<sup>Required</sup> <a name="EnableCustomServiceAccount" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.enableCustomServiceAccount"></a>

```go
func EnableCustomServiceAccount() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">VertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a>

---


### VertexAiPersistentResourceTimeoutsOutputReference <a name="VertexAiPersistentResourceTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vertexaipersistentresource"

vertexaipersistentresource.NewVertexAiPersistentResourceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiPersistentResourceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiPersistentResource.VertexAiPersistentResourceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



