# `vertexAiRagCorpus` Submodule <a name="`vertexAiRagCorpus` Submodule" id="@cdktn/provider-google.vertexAiRagCorpus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiRagCorpus <a name="VertexAiRagCorpus" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus google_vertex_ai_rag_corpus}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.NewVertexAiRagCorpus(scope Construct, id *string, config VertexAiRagCorpusConfig) VertexAiRagCorpus
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig">VertexAiRagCorpusConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig">VertexAiRagCorpusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig">PutVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVertexAiSearchConfig">PutVertexAiSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVectorDbConfig">ResetVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVertexAiSearchConfig">ResetVertexAiSearchConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putEncryptionSpec"></a>

```go
func PutEncryptionSpec(value VertexAiRagCorpusEncryptionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putTimeouts"></a>

```go
func PutTimeouts(value VertexAiRagCorpusTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

---

##### `PutVectorDbConfig` <a name="PutVectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig"></a>

```go
func PutVectorDbConfig(value VertexAiRagCorpusVectorDbConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVectorDbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

---

##### `PutVertexAiSearchConfig` <a name="PutVertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVertexAiSearchConfig"></a>

```go
func PutVertexAiSearchConfig(value VertexAiRagCorpusVertexAiSearchConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.putVertexAiSearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetEncryptionSpec"></a>

```go
func ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVectorDbConfig` <a name="ResetVectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVectorDbConfig"></a>

```go
func ResetVectorDbConfig()
```

##### `ResetVertexAiSearchConfig` <a name="ResetVertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.resetVertexAiSearchConfig"></a>

```go
func ResetVertexAiSearchConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiRagCorpus resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.VertexAiRagCorpus_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.VertexAiRagCorpus_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.VertexAiRagCorpus_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.VertexAiRagCorpus_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a VertexAiRagCorpus resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VertexAiRagCorpus to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VertexAiRagCorpus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiRagCorpus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.corpusStatus">CorpusStatus</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList">VertexAiRagCorpusCorpusStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference">VertexAiRagCorpusEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference">VertexAiRagCorpusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfig">VectorDbConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference">VertexAiRagCorpusVectorDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfig">VertexAiSearchConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference">VertexAiRagCorpusVertexAiSearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfigInput">VectorDbConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfigInput">VertexAiSearchConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CorpusStatus`<sup>Required</sup> <a name="CorpusStatus" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.corpusStatus"></a>

```go
func CorpusStatus() VertexAiRagCorpusCorpusStatusList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList">VertexAiRagCorpusCorpusStatusList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpec"></a>

```go
func EncryptionSpec() VertexAiRagCorpusEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference">VertexAiRagCorpusEncryptionSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeouts"></a>

```go
func Timeouts() VertexAiRagCorpusTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference">VertexAiRagCorpusTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `VectorDbConfig`<sup>Required</sup> <a name="VectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfig"></a>

```go
func VectorDbConfig() VertexAiRagCorpusVectorDbConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference">VertexAiRagCorpusVectorDbConfigOutputReference</a>

---

##### `VertexAiSearchConfig`<sup>Required</sup> <a name="VertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfig"></a>

```go
func VertexAiSearchConfig() VertexAiRagCorpusVertexAiSearchConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference">VertexAiRagCorpusVertexAiSearchConfigOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.encryptionSpecInput"></a>

```go
func EncryptionSpecInput() VertexAiRagCorpusEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VectorDbConfigInput`<sup>Optional</sup> <a name="VectorDbConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vectorDbConfigInput"></a>

```go
func VectorDbConfigInput() VertexAiRagCorpusVectorDbConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

---

##### `VertexAiSearchConfigInput`<sup>Optional</sup> <a name="VertexAiSearchConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.vertexAiSearchConfigInput"></a>

```go
func VertexAiSearchConfigInput() VertexAiRagCorpusVertexAiSearchConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpus.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiRagCorpusConfig <a name="VertexAiRagCorpusConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

&vertexairagcorpus.VertexAiRagCorpusConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Region: *string,
	DeletionPolicy: *string,
	Description: *string,
	EncryptionSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v21.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v21.vertexAiRagCorpus.VertexAiRagCorpusTimeouts,
	VectorDbConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig,
	VertexAiSearchConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.region">Region</a></code> | <code>*string</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.description">Description</a></code> | <code>*string</code> | Optional. The description of the RagCorpus. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#id VertexAiRagCorpus#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#project VertexAiRagCorpus#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vectorDbConfig">VectorDbConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a></code> | vector_db_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vertexAiSearchConfig">VertexAiSearchConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a></code> | vertex_ai_search_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required.

The display name of the RagCorpus. The name can be up to 128
characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#display_name VertexAiRagCorpus#display_name}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#region VertexAiRagCorpus#region}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#deletion_policy VertexAiRagCorpus#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. The description of the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#description VertexAiRagCorpus#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.encryptionSpec"></a>

```go
EncryptionSpec VertexAiRagCorpusEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#encryption_spec VertexAiRagCorpus#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#id VertexAiRagCorpus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#project VertexAiRagCorpus#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.timeouts"></a>

```go
Timeouts VertexAiRagCorpusTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts">VertexAiRagCorpusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#timeouts VertexAiRagCorpus#timeouts}

---

##### `VectorDbConfig`<sup>Optional</sup> <a name="VectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vectorDbConfig"></a>

```go
VectorDbConfig VertexAiRagCorpusVectorDbConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

vector_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vector_db_config VertexAiRagCorpus#vector_db_config}

---

##### `VertexAiSearchConfig`<sup>Optional</sup> <a name="VertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusConfig.property.vertexAiSearchConfig"></a>

```go
VertexAiSearchConfig VertexAiRagCorpusVertexAiSearchConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

vertex_ai_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_ai_search_config VertexAiRagCorpus#vertex_ai_search_config}

---

### VertexAiRagCorpusCorpusStatus <a name="VertexAiRagCorpusCorpusStatus" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

&vertexairagcorpus.VertexAiRagCorpusCorpusStatus {

}
```


### VertexAiRagCorpusEncryptionSpec <a name="VertexAiRagCorpusEncryptionSpec" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

&vertexairagcorpus.VertexAiRagCorpusEncryptionSpec {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Required. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Required.

The Cloud KMS resource identifier of the customer managed
encryption key used to protect the resource. Has the form:
projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
The key needs to be in the same region as where the resource is
created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#kms_key_name VertexAiRagCorpus#kms_key_name}

---

### VertexAiRagCorpusTimeouts <a name="VertexAiRagCorpusTimeouts" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

&vertexairagcorpus.VertexAiRagCorpusTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#create VertexAiRagCorpus#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#delete VertexAiRagCorpus#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#update VertexAiRagCorpus#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#create VertexAiRagCorpus#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#delete VertexAiRagCorpus#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#update VertexAiRagCorpus#update}.

---

### VertexAiRagCorpusVectorDbConfig <a name="VertexAiRagCorpusVectorDbConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

&vertexairagcorpus.VertexAiRagCorpusVectorDbConfig {
	ApiAuth: github.com/cdktn-io/cdktn-provider-google-go/google/v21.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth,
	Pinecone: github.com/cdktn-io/cdktn-provider-google-go/google/v21.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone,
	RagEmbeddingModelConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig,
	RagManagedDb: github.com/cdktn-io/cdktn-provider-google-go/google/v21.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb,
	VertexVectorSearch: github.com/cdktn-io/cdktn-provider-google-go/google/v21.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.apiAuth">ApiAuth</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a></code> | api_auth block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.pinecone">Pinecone</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a></code> | pinecone block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragEmbeddingModelConfig">RagEmbeddingModelConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | rag_embedding_model_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragManagedDb">RagManagedDb</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | rag_managed_db block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.vertexVectorSearch">VertexVectorSearch</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | vertex_vector_search block. |

---

##### `ApiAuth`<sup>Optional</sup> <a name="ApiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.apiAuth"></a>

```go
ApiAuth VertexAiRagCorpusVectorDbConfigApiAuth
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

api_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_auth VertexAiRagCorpus#api_auth}

---

##### `Pinecone`<sup>Optional</sup> <a name="Pinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.pinecone"></a>

```go
Pinecone VertexAiRagCorpusVectorDbConfigPinecone
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

pinecone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#pinecone VertexAiRagCorpus#pinecone}

---

##### `RagEmbeddingModelConfig`<sup>Optional</sup> <a name="RagEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragEmbeddingModelConfig"></a>

```go
RagEmbeddingModelConfig VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

rag_embedding_model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#rag_embedding_model_config VertexAiRagCorpus#rag_embedding_model_config}

---

##### `RagManagedDb`<sup>Optional</sup> <a name="RagManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.ragManagedDb"></a>

```go
RagManagedDb VertexAiRagCorpusVectorDbConfigRagManagedDb
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

rag_managed_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#rag_managed_db VertexAiRagCorpus#rag_managed_db}

---

##### `VertexVectorSearch`<sup>Optional</sup> <a name="VertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig.property.vertexVectorSearch"></a>

```go
VertexVectorSearch VertexAiRagCorpusVectorDbConfigVertexVectorSearch
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

vertex_vector_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_vector_search VertexAiRagCorpus#vertex_vector_search}

---

### VertexAiRagCorpusVectorDbConfigApiAuth <a name="VertexAiRagCorpusVectorDbConfigApiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

&vertexairagcorpus.VertexAiRagCorpusVectorDbConfigApiAuth {
	ApiKeyConfig: github.com/cdktn-io/cdktn-provider-google-go/google/v21.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | api_key_config block. |

---

##### `ApiKeyConfig`<sup>Optional</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth.property.apiKeyConfig"></a>

```go
ApiKeyConfig VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_key_config VertexAiRagCorpus#api_key_config}

---

### VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig <a name="VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

&vertexairagcorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig {
	ApiKeySecretVersion: *string,
	ApiKeyString: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeySecretVersion">ApiKeySecretVersion</a></code> | <code>*string</code> | The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeyString">ApiKeyString</a></code> | <code>*string</code> | The API key string. |

---

##### `ApiKeySecretVersion`<sup>Optional</sup> <a name="ApiKeySecretVersion" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeySecretVersion"></a>

```go
ApiKeySecretVersion *string
```

- *Type:* *string

The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_key_secret_version VertexAiRagCorpus#api_key_secret_version}

---

##### `ApiKeyString`<sup>Optional</sup> <a name="ApiKeyString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeyString"></a>

```go
ApiKeyString *string
```

- *Type:* *string

The API key string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#api_key_string VertexAiRagCorpus#api_key_string}

---

### VertexAiRagCorpusVectorDbConfigPinecone <a name="VertexAiRagCorpusVectorDbConfigPinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

&vertexairagcorpus.VertexAiRagCorpusVectorDbConfigPinecone {
	IndexName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone.property.indexName">IndexName</a></code> | <code>*string</code> | Pinecone index name. This value cannot be changed after it's set. |

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone.property.indexName"></a>

```go
IndexName *string
```

- *Type:* *string

Pinecone index name. This value cannot be changed after it's set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#index_name VertexAiRagCorpus#index_name}

---

### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

&vertexairagcorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig {
	VertexPredictionEndpoint: github.com/cdktn-io/cdktn-provider-google-go/google/v21.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.property.vertexPredictionEndpoint">VertexPredictionEndpoint</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | vertex_prediction_endpoint block. |

---

##### `VertexPredictionEndpoint`<sup>Optional</sup> <a name="VertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.property.vertexPredictionEndpoint"></a>

```go
VertexPredictionEndpoint VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

vertex_prediction_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#vertex_prediction_endpoint VertexAiRagCorpus#vertex_prediction_endpoint}

---

### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

&vertexairagcorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint {
	Endpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.property.endpoint">Endpoint</a></code> | <code>*string</code> | Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}. |

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#endpoint VertexAiRagCorpus#endpoint}

---

### VertexAiRagCorpusVectorDbConfigRagManagedDb <a name="VertexAiRagCorpusVectorDbConfigRagManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

&vertexairagcorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb {
	Ann: github.com/cdktn-io/cdktn-provider-google-go/google/v21.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn,
	Knn: github.com/cdktn-io/cdktn-provider-google-go/google/v21.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.ann">Ann</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | ann block. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.knn">Knn</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | knn block. |

---

##### `Ann`<sup>Optional</sup> <a name="Ann" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.ann"></a>

```go
Ann VertexAiRagCorpusVectorDbConfigRagManagedDbAnn
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

ann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#ann VertexAiRagCorpus#ann}

---

##### `Knn`<sup>Optional</sup> <a name="Knn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb.property.knn"></a>

```go
Knn VertexAiRagCorpusVectorDbConfigRagManagedDbKnn
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

knn block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#knn VertexAiRagCorpus#knn}

---

### VertexAiRagCorpusVectorDbConfigRagManagedDbAnn <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbAnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

&vertexairagcorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn {
	LeafCount: *f64,
	TreeDepth: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.leafCount">LeafCount</a></code> | <code>*f64</code> | Number of leaf nodes in the tree-based structure. Default value is 500. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.treeDepth">TreeDepth</a></code> | <code>*f64</code> | The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2. |

---

##### `LeafCount`<sup>Optional</sup> <a name="LeafCount" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.leafCount"></a>

```go
LeafCount *f64
```

- *Type:* *f64

Number of leaf nodes in the tree-based structure. Default value is 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#leaf_count VertexAiRagCorpus#leaf_count}

---

##### `TreeDepth`<sup>Optional</sup> <a name="TreeDepth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.treeDepth"></a>

```go
TreeDepth *f64
```

- *Type:* *f64

The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#tree_depth VertexAiRagCorpus#tree_depth}

---

### VertexAiRagCorpusVectorDbConfigRagManagedDbKnn <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbKnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

&vertexairagcorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn {

}
```


### VertexAiRagCorpusVectorDbConfigVertexVectorSearch <a name="VertexAiRagCorpusVectorDbConfigVertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

&vertexairagcorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch {
	Index: *string,
	IndexEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.index">Index</a></code> | <code>*string</code> | The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.indexEndpoint">IndexEndpoint</a></code> | <code>*string</code> | The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}. |

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.index"></a>

```go
Index *string
```

- *Type:* *string

The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#index VertexAiRagCorpus#index}

---

##### `IndexEndpoint`<sup>Required</sup> <a name="IndexEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.indexEndpoint"></a>

```go
IndexEndpoint *string
```

- *Type:* *string

The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#index_endpoint VertexAiRagCorpus#index_endpoint}

---

### VertexAiRagCorpusVertexAiSearchConfig <a name="VertexAiRagCorpusVertexAiSearchConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

&vertexairagcorpus.VertexAiRagCorpusVertexAiSearchConfig {
	ServingConfig: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig.property.servingConfig">ServingConfig</a></code> | <code>*string</code> | Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}. |

---

##### `ServingConfig`<sup>Required</sup> <a name="ServingConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig.property.servingConfig"></a>

```go
ServingConfig *string
```

- *Type:* *string

Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_rag_corpus#serving_config VertexAiRagCorpus#serving_config}

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiRagCorpusCorpusStatusList <a name="VertexAiRagCorpusCorpusStatusList" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.NewVertexAiRagCorpusCorpusStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VertexAiRagCorpusCorpusStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.get"></a>

```go
func Get(index *f64) VertexAiRagCorpusCorpusStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VertexAiRagCorpusCorpusStatusOutputReference <a name="VertexAiRagCorpusCorpusStatusOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.NewVertexAiRagCorpusCorpusStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VertexAiRagCorpusCorpusStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.errorStatus">ErrorStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus">VertexAiRagCorpusCorpusStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorStatus`<sup>Required</sup> <a name="ErrorStatus" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.errorStatus"></a>

```go
func ErrorStatus() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiRagCorpusCorpusStatus
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusCorpusStatus">VertexAiRagCorpusCorpusStatus</a>

---


### VertexAiRagCorpusEncryptionSpecOutputReference <a name="VertexAiRagCorpusEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.NewVertexAiRagCorpusEncryptionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiRagCorpusEncryptionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiRagCorpusEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusEncryptionSpec">VertexAiRagCorpusEncryptionSpec</a>

---


### VertexAiRagCorpusTimeoutsOutputReference <a name="VertexAiRagCorpusTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.NewVertexAiRagCorpusTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiRagCorpusTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference <a name="VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.NewVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeySecretVersion">ResetApiKeySecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeyString">ResetApiKeyString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKeySecretVersion` <a name="ResetApiKeySecretVersion" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeySecretVersion"></a>

```go
func ResetApiKeySecretVersion()
```

##### `ResetApiKeyString` <a name="ResetApiKeyString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeyString"></a>

```go
func ResetApiKeyString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersionInput">ApiKeySecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyStringInput">ApiKeyStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersion">ApiKeySecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyString">ApiKeyString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeySecretVersionInput`<sup>Optional</sup> <a name="ApiKeySecretVersionInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```go
func ApiKeySecretVersionInput() *string
```

- *Type:* *string

---

##### `ApiKeyStringInput`<sup>Optional</sup> <a name="ApiKeyStringInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyStringInput"></a>

```go
func ApiKeyStringInput() *string
```

- *Type:* *string

---

##### `ApiKeySecretVersion`<sup>Required</sup> <a name="ApiKeySecretVersion" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```go
func ApiKeySecretVersion() *string
```

- *Type:* *string

---

##### `ApiKeyString`<sup>Required</sup> <a name="ApiKeyString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyString"></a>

```go
func ApiKeyString() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---


### VertexAiRagCorpusVectorDbConfigApiAuthOutputReference <a name="VertexAiRagCorpusVectorDbConfigApiAuthOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.NewVertexAiRagCorpusVectorDbConfigApiAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiRagCorpusVectorDbConfigApiAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig">PutApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resetApiKeyConfig">ResetApiKeyConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyConfig` <a name="PutApiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig"></a>

```go
func PutApiKeyConfig(value VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---

##### `ResetApiKeyConfig` <a name="ResetApiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resetApiKeyConfig"></a>

```go
func ResetApiKeyConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfigInput">ApiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyConfig`<sup>Required</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfig"></a>

```go
func ApiKeyConfig() VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference</a>

---

##### `ApiKeyConfigInput`<sup>Optional</sup> <a name="ApiKeyConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfigInput"></a>

```go
func ApiKeyConfigInput() VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">VertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiRagCorpusVectorDbConfigApiAuth
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

---


### VertexAiRagCorpusVectorDbConfigOutputReference <a name="VertexAiRagCorpusVectorDbConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.NewVertexAiRagCorpusVectorDbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiRagCorpusVectorDbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth">PutApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putPinecone">PutPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig">PutRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb">PutRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch">PutVertexVectorSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetApiAuth">ResetApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetPinecone">ResetPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagEmbeddingModelConfig">ResetRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagManagedDb">ResetRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetVertexVectorSearch">ResetVertexVectorSearch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiAuth` <a name="PutApiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth"></a>

```go
func PutApiAuth(value VertexAiRagCorpusVectorDbConfigApiAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

---

##### `PutPinecone` <a name="PutPinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putPinecone"></a>

```go
func PutPinecone(value VertexAiRagCorpusVectorDbConfigPinecone)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putPinecone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

---

##### `PutRagEmbeddingModelConfig` <a name="PutRagEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig"></a>

```go
func PutRagEmbeddingModelConfig(value VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---

##### `PutRagManagedDb` <a name="PutRagManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb"></a>

```go
func PutRagManagedDb(value VertexAiRagCorpusVectorDbConfigRagManagedDb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---

##### `PutVertexVectorSearch` <a name="PutVertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch"></a>

```go
func PutVertexVectorSearch(value VertexAiRagCorpusVectorDbConfigVertexVectorSearch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---

##### `ResetApiAuth` <a name="ResetApiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetApiAuth"></a>

```go
func ResetApiAuth()
```

##### `ResetPinecone` <a name="ResetPinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetPinecone"></a>

```go
func ResetPinecone()
```

##### `ResetRagEmbeddingModelConfig` <a name="ResetRagEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagEmbeddingModelConfig"></a>

```go
func ResetRagEmbeddingModelConfig()
```

##### `ResetRagManagedDb` <a name="ResetRagManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetRagManagedDb"></a>

```go
func ResetRagManagedDb()
```

##### `ResetVertexVectorSearch` <a name="ResetVertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.resetVertexVectorSearch"></a>

```go
func ResetVertexVectorSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuth">ApiAuth</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pinecone">Pinecone</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference">VertexAiRagCorpusVectorDbConfigPineconeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfig">RagEmbeddingModelConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDb">RagManagedDb</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearch">VertexVectorSearch</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference">VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuthInput">ApiAuthInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pineconeInput">PineconeInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfigInput">RagEmbeddingModelConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDbInput">RagManagedDbInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearchInput">VertexVectorSearchInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiAuth`<sup>Required</sup> <a name="ApiAuth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuth"></a>

```go
func ApiAuth() VertexAiRagCorpusVectorDbConfigApiAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuthOutputReference">VertexAiRagCorpusVectorDbConfigApiAuthOutputReference</a>

---

##### `Pinecone`<sup>Required</sup> <a name="Pinecone" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pinecone"></a>

```go
func Pinecone() VertexAiRagCorpusVectorDbConfigPineconeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference">VertexAiRagCorpusVectorDbConfigPineconeOutputReference</a>

---

##### `RagEmbeddingModelConfig`<sup>Required</sup> <a name="RagEmbeddingModelConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfig"></a>

```go
func RagEmbeddingModelConfig() VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference</a>

---

##### `RagManagedDb`<sup>Required</sup> <a name="RagManagedDb" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDb"></a>

```go
func RagManagedDb() VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference</a>

---

##### `VertexVectorSearch`<sup>Required</sup> <a name="VertexVectorSearch" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearch"></a>

```go
func VertexVectorSearch() VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference">VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference</a>

---

##### `ApiAuthInput`<sup>Optional</sup> <a name="ApiAuthInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuthInput"></a>

```go
func ApiAuthInput() VertexAiRagCorpusVectorDbConfigApiAuth
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigApiAuth">VertexAiRagCorpusVectorDbConfigApiAuth</a>

---

##### `PineconeInput`<sup>Optional</sup> <a name="PineconeInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.pineconeInput"></a>

```go
func PineconeInput() VertexAiRagCorpusVectorDbConfigPinecone
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

---

##### `RagEmbeddingModelConfigInput`<sup>Optional</sup> <a name="RagEmbeddingModelConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfigInput"></a>

```go
func RagEmbeddingModelConfigInput() VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---

##### `RagManagedDbInput`<sup>Optional</sup> <a name="RagManagedDbInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDbInput"></a>

```go
func RagManagedDbInput() VertexAiRagCorpusVectorDbConfigRagManagedDb
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---

##### `VertexVectorSearchInput`<sup>Optional</sup> <a name="VertexVectorSearchInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearchInput"></a>

```go
func VertexVectorSearchInput() VertexAiRagCorpusVectorDbConfigVertexVectorSearch
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiRagCorpusVectorDbConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfig">VertexAiRagCorpusVectorDbConfig</a>

---


### VertexAiRagCorpusVectorDbConfigPineconeOutputReference <a name="VertexAiRagCorpusVectorDbConfigPineconeOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.NewVertexAiRagCorpusVectorDbConfigPineconeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiRagCorpusVectorDbConfigPineconeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexNameInput"></a>

```go
func IndexNameInput() *string
```

- *Type:* *string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiRagCorpusVectorDbConfigPinecone
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigPinecone">VertexAiRagCorpusVectorDbConfigPinecone</a>

---


### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.NewVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint">PutVertexPredictionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resetVertexPredictionEndpoint">ResetVertexPredictionEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVertexPredictionEndpoint` <a name="PutVertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint"></a>

```go
func PutVertexPredictionEndpoint(value VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---

##### `ResetVertexPredictionEndpoint` <a name="ResetVertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resetVertexPredictionEndpoint"></a>

```go
func ResetVertexPredictionEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpoint">VertexPredictionEndpoint</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpointInput">VertexPredictionEndpointInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VertexPredictionEndpoint`<sup>Required</sup> <a name="VertexPredictionEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpoint"></a>

```go
func VertexPredictionEndpoint() VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference</a>

---

##### `VertexPredictionEndpointInput`<sup>Optional</sup> <a name="VertexPredictionEndpointInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpointInput"></a>

```go
func VertexPredictionEndpointInput() VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---


### VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.NewVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.modelVersionId">ModelVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `ModelVersionId`<sup>Required</sup> <a name="ModelVersionId" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.modelVersionId"></a>

```go
func ModelVersionId() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">VertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---


### VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.NewVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetLeafCount">ResetLeafCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetTreeDepth">ResetTreeDepth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLeafCount` <a name="ResetLeafCount" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetLeafCount"></a>

```go
func ResetLeafCount()
```

##### `ResetTreeDepth` <a name="ResetTreeDepth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetTreeDepth"></a>

```go
func ResetTreeDepth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCountInput">LeafCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepthInput">TreeDepthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCount">LeafCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepth">TreeDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LeafCountInput`<sup>Optional</sup> <a name="LeafCountInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCountInput"></a>

```go
func LeafCountInput() *f64
```

- *Type:* *f64

---

##### `TreeDepthInput`<sup>Optional</sup> <a name="TreeDepthInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepthInput"></a>

```go
func TreeDepthInput() *f64
```

- *Type:* *f64

---

##### `LeafCount`<sup>Required</sup> <a name="LeafCount" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCount"></a>

```go
func LeafCount() *f64
```

- *Type:* *f64

---

##### `TreeDepth`<sup>Required</sup> <a name="TreeDepth" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepth"></a>

```go
func TreeDepth() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiRagCorpusVectorDbConfigRagManagedDbAnn
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---


### VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.NewVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiRagCorpusVectorDbConfigRagManagedDbKnn
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---


### VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference <a name="VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.NewVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn">PutAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn">PutKnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetAnn">ResetAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetKnn">ResetKnn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnn` <a name="PutAnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn"></a>

```go
func PutAnn(value VertexAiRagCorpusVectorDbConfigRagManagedDbAnn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---

##### `PutKnn` <a name="PutKnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn"></a>

```go
func PutKnn(value VertexAiRagCorpusVectorDbConfigRagManagedDbKnn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---

##### `ResetAnn` <a name="ResetAnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetAnn"></a>

```go
func ResetAnn()
```

##### `ResetKnn` <a name="ResetKnn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetKnn"></a>

```go
func ResetKnn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.ann">Ann</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knn">Knn</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.annInput">AnnInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knnInput">KnnInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ann`<sup>Required</sup> <a name="Ann" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.ann"></a>

```go
func Ann() VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference</a>

---

##### `Knn`<sup>Required</sup> <a name="Knn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knn"></a>

```go
func Knn() VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference">VertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference</a>

---

##### `AnnInput`<sup>Optional</sup> <a name="AnnInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.annInput"></a>

```go
func AnnInput() VertexAiRagCorpusVectorDbConfigRagManagedDbAnn
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbAnn">VertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---

##### `KnnInput`<sup>Optional</sup> <a name="KnnInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knnInput"></a>

```go
func KnnInput() VertexAiRagCorpusVectorDbConfigRagManagedDbKnn
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbKnn">VertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiRagCorpusVectorDbConfigRagManagedDb
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigRagManagedDb">VertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---


### VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference <a name="VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.NewVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpointInput">IndexEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexInput">IndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.index">Index</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpoint">IndexEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexEndpointInput`<sup>Optional</sup> <a name="IndexEndpointInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpointInput"></a>

```go
func IndexEndpointInput() *string
```

- *Type:* *string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexInput"></a>

```go
func IndexInput() *string
```

- *Type:* *string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.index"></a>

```go
func Index() *string
```

- *Type:* *string

---

##### `IndexEndpoint`<sup>Required</sup> <a name="IndexEndpoint" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpoint"></a>

```go
func IndexEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiRagCorpusVectorDbConfigVertexVectorSearch
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVectorDbConfigVertexVectorSearch">VertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---


### VertexAiRagCorpusVertexAiSearchConfigOutputReference <a name="VertexAiRagCorpusVertexAiSearchConfigOutputReference" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/vertexairagcorpus"

vertexairagcorpus.NewVertexAiRagCorpusVertexAiSearchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiRagCorpusVertexAiSearchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfigInput">ServingConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfig">ServingConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServingConfigInput`<sup>Optional</sup> <a name="ServingConfigInput" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfigInput"></a>

```go
func ServingConfigInput() *string
```

- *Type:* *string

---

##### `ServingConfig`<sup>Required</sup> <a name="ServingConfig" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfig"></a>

```go
func ServingConfig() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiRagCorpusVertexAiSearchConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiRagCorpus.VertexAiRagCorpusVertexAiSearchConfig">VertexAiRagCorpusVertexAiSearchConfig</a>

---



