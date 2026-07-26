# `vectorSearchIndex` Submodule <a name="`vectorSearchIndex` Submodule" id="@cdktn/provider-google.vectorSearchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VectorSearchIndex <a name="VectorSearchIndex" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index google_vector_search_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndex(scope Construct, id *string, config VectorSearchIndexConfig) VectorSearchIndex
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig">VectorSearchIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig">VectorSearchIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putDedicatedInfrastructure">PutDedicatedInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putDenseScann">PutDenseScann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDedicatedInfrastructure">ResetDedicatedInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDenseScann">ResetDenseScann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDistanceMetric">ResetDistanceMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetFilterFields">ResetFilterFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetStoreFields">ResetStoreFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDedicatedInfrastructure` <a name="PutDedicatedInfrastructure" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putDedicatedInfrastructure"></a>

```go
func PutDedicatedInfrastructure(value VectorSearchIndexDedicatedInfrastructure)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putDedicatedInfrastructure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure">VectorSearchIndexDedicatedInfrastructure</a>

---

##### `PutDenseScann` <a name="PutDenseScann" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putDenseScann"></a>

```go
func PutDenseScann(value VectorSearchIndexDenseScann)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putDenseScann.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann">VectorSearchIndexDenseScann</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putTimeouts"></a>

```go
func PutTimeouts(value VectorSearchIndexTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

---

##### `ResetDedicatedInfrastructure` <a name="ResetDedicatedInfrastructure" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDedicatedInfrastructure"></a>

```go
func ResetDedicatedInfrastructure()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDenseScann` <a name="ResetDenseScann" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDenseScann"></a>

```go
func ResetDenseScann()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDistanceMetric` <a name="ResetDistanceMetric" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetDistanceMetric"></a>

```go
func ResetDistanceMetric()
```

##### `ResetFilterFields` <a name="ResetFilterFields" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetFilterFields"></a>

```go
func ResetFilterFields()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetProject"></a>

```go
func ResetProject()
```

##### `ResetStoreFields` <a name="ResetStoreFields" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetStoreFields"></a>

```go
func ResetStoreFields()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VectorSearchIndex resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vectorsearchindex"

vectorsearchindex.VectorSearchIndex_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vectorsearchindex"

vectorsearchindex.VectorSearchIndex_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vectorsearchindex"

vectorsearchindex.VectorSearchIndex_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vectorsearchindex"

vectorsearchindex.VectorSearchIndex_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a VectorSearchIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VectorSearchIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VectorSearchIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the VectorSearchIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.dedicatedInfrastructure">DedicatedInfrastructure</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference">VectorSearchIndexDedicatedInfrastructureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.denseScann">DenseScann</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference">VectorSearchIndexDenseScannOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference">VectorSearchIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.collectionIdInput">CollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.dedicatedInfrastructureInput">DedicatedInfrastructureInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure">VectorSearchIndexDedicatedInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.denseScannInput">DenseScannInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann">VectorSearchIndexDenseScann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.distanceMetricInput">DistanceMetricInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.filterFieldsInput">FilterFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.indexFieldInput">IndexFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.indexIdInput">IndexIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.storeFieldsInput">StoreFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.collectionId">CollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.distanceMetric">DistanceMetric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.filterFields">FilterFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.indexField">IndexField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.indexId">IndexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.storeFields">StoreFields</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DedicatedInfrastructure`<sup>Required</sup> <a name="DedicatedInfrastructure" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.dedicatedInfrastructure"></a>

```go
func DedicatedInfrastructure() VectorSearchIndexDedicatedInfrastructureOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference">VectorSearchIndexDedicatedInfrastructureOutputReference</a>

---

##### `DenseScann`<sup>Required</sup> <a name="DenseScann" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.denseScann"></a>

```go
func DenseScann() VectorSearchIndexDenseScannOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference">VectorSearchIndexDenseScannOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.timeouts"></a>

```go
func Timeouts() VectorSearchIndexTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference">VectorSearchIndexTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.collectionIdInput"></a>

```go
func CollectionIdInput() *string
```

- *Type:* *string

---

##### `DedicatedInfrastructureInput`<sup>Optional</sup> <a name="DedicatedInfrastructureInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.dedicatedInfrastructureInput"></a>

```go
func DedicatedInfrastructureInput() VectorSearchIndexDedicatedInfrastructure
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure">VectorSearchIndexDedicatedInfrastructure</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DenseScannInput`<sup>Optional</sup> <a name="DenseScannInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.denseScannInput"></a>

```go
func DenseScannInput() VectorSearchIndexDenseScann
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann">VectorSearchIndexDenseScann</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DistanceMetricInput`<sup>Optional</sup> <a name="DistanceMetricInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.distanceMetricInput"></a>

```go
func DistanceMetricInput() *string
```

- *Type:* *string

---

##### `FilterFieldsInput`<sup>Optional</sup> <a name="FilterFieldsInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.filterFieldsInput"></a>

```go
func FilterFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexFieldInput`<sup>Optional</sup> <a name="IndexFieldInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.indexFieldInput"></a>

```go
func IndexFieldInput() *string
```

- *Type:* *string

---

##### `IndexIdInput`<sup>Optional</sup> <a name="IndexIdInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.indexIdInput"></a>

```go
func IndexIdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `StoreFieldsInput`<sup>Optional</sup> <a name="StoreFieldsInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.storeFieldsInput"></a>

```go
func StoreFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.collectionId"></a>

```go
func CollectionId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DistanceMetric`<sup>Required</sup> <a name="DistanceMetric" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.distanceMetric"></a>

```go
func DistanceMetric() *string
```

- *Type:* *string

---

##### `FilterFields`<sup>Required</sup> <a name="FilterFields" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.filterFields"></a>

```go
func FilterFields() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndexField`<sup>Required</sup> <a name="IndexField" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.indexField"></a>

```go
func IndexField() *string
```

- *Type:* *string

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.indexId"></a>

```go
func IndexId() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `StoreFields`<sup>Required</sup> <a name="StoreFields" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.storeFields"></a>

```go
func StoreFields() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndex.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VectorSearchIndexConfig <a name="VectorSearchIndexConfig" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vectorsearchindex"

&vectorsearchindex.VectorSearchIndexConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CollectionId: *string,
	IndexField: *string,
	IndexId: *string,
	Location: *string,
	DedicatedInfrastructure: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure,
	DeletionPolicy: *string,
	DenseScann: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vectorSearchIndex.VectorSearchIndexDenseScann,
	Description: *string,
	DisplayName: *string,
	DistanceMetric: *string,
	FilterFields: *[]*string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	StoreFields: *[]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vectorSearchIndex.VectorSearchIndexTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.collectionId">CollectionId</a></code> | <code>*string</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.indexField">IndexField</a></code> | <code>*string</code> | The collection schema field to index. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.indexId">IndexId</a></code> | <code>*string</code> | ID of the Index to create. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.dedicatedInfrastructure">DedicatedInfrastructure</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure">VectorSearchIndexDedicatedInfrastructure</a></code> | dedicated_infrastructure block. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.denseScann">DenseScann</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann">VectorSearchIndexDenseScann</a></code> | dense_scann block. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.description">Description</a></code> | <code>*string</code> | User-specified description of the index. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User-specified display name of the index. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.distanceMetric">DistanceMetric</a></code> | <code>*string</code> | Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"]. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.filterFields">FilterFields</a></code> | <code>*[]*string</code> | The fields to push into the index to enable fast ANN inline filtering. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#id VectorSearchIndex#id}. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#project VectorSearchIndex#project}. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.storeFields">StoreFields</a></code> | <code>*[]*string</code> | The fields to push into the index to enable inline data retrieval. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.collectionId"></a>

```go
CollectionId *string
```

- *Type:* *string

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#collection_id VectorSearchIndex#collection_id}

---

##### `IndexField`<sup>Required</sup> <a name="IndexField" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.indexField"></a>

```go
IndexField *string
```

- *Type:* *string

The collection schema field to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#index_field VectorSearchIndex#index_field}

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.indexId"></a>

```go
IndexId *string
```

- *Type:* *string

ID of the Index to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#index_id VectorSearchIndex#index_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#location VectorSearchIndex#location}

---

##### `DedicatedInfrastructure`<sup>Optional</sup> <a name="DedicatedInfrastructure" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.dedicatedInfrastructure"></a>

```go
DedicatedInfrastructure VectorSearchIndexDedicatedInfrastructure
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure">VectorSearchIndexDedicatedInfrastructure</a>

dedicated_infrastructure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#dedicated_infrastructure VectorSearchIndex#dedicated_infrastructure}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#deletion_policy VectorSearchIndex#deletion_policy}

---

##### `DenseScann`<sup>Optional</sup> <a name="DenseScann" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.denseScann"></a>

```go
DenseScann VectorSearchIndexDenseScann
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann">VectorSearchIndexDenseScann</a>

dense_scann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#dense_scann VectorSearchIndex#dense_scann}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-specified description of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#description VectorSearchIndex#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User-specified display name of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#display_name VectorSearchIndex#display_name}

---

##### `DistanceMetric`<sup>Optional</sup> <a name="DistanceMetric" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.distanceMetric"></a>

```go
DistanceMetric *string
```

- *Type:* *string

Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#distance_metric VectorSearchIndex#distance_metric}

---

##### `FilterFields`<sup>Optional</sup> <a name="FilterFields" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.filterFields"></a>

```go
FilterFields *[]*string
```

- *Type:* *[]*string

The fields to push into the index to enable fast ANN inline filtering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#filter_fields VectorSearchIndex#filter_fields}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#id VectorSearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#labels VectorSearchIndex#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#project VectorSearchIndex#project}.

---

##### `StoreFields`<sup>Optional</sup> <a name="StoreFields" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.storeFields"></a>

```go
StoreFields *[]*string
```

- *Type:* *[]*string

The fields to push into the index to enable inline data retrieval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#store_fields VectorSearchIndex#store_fields}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexConfig.property.timeouts"></a>

```go
Timeouts VectorSearchIndexTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts">VectorSearchIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#timeouts VectorSearchIndex#timeouts}

---

### VectorSearchIndexDedicatedInfrastructure <a name="VectorSearchIndexDedicatedInfrastructure" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vectorsearchindex"

&vectorsearchindex.VectorSearchIndexDedicatedInfrastructure {
	AutoscalingSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v20.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec,
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure.property.autoscalingSpec">AutoscalingSpec</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec">VectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | autoscaling_spec block. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure.property.mode">Mode</a></code> | <code>*string</code> | Mode of the dedicated infrastructure. Defaults to 'PERFORMANCE_OPTIMIZED'. Possible values: ["MODE_UNSPECIFIED", "STORAGE_OPTIMIZED", "PERFORMANCE_OPTIMIZED"]. |

---

##### `AutoscalingSpec`<sup>Optional</sup> <a name="AutoscalingSpec" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure.property.autoscalingSpec"></a>

```go
AutoscalingSpec VectorSearchIndexDedicatedInfrastructureAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec">VectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

autoscaling_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#autoscaling_spec VectorSearchIndex#autoscaling_spec}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Mode of the dedicated infrastructure. Defaults to 'PERFORMANCE_OPTIMIZED'. Possible values: ["MODE_UNSPECIFIED", "STORAGE_OPTIMIZED", "PERFORMANCE_OPTIMIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#mode VectorSearchIndex#mode}

---

### VectorSearchIndexDedicatedInfrastructureAutoscalingSpec <a name="VectorSearchIndexDedicatedInfrastructureAutoscalingSpec" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vectorsearchindex"

&vectorsearchindex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec {
	MaxReplicaCount: *f64,
	MinReplicaCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*f64</code> | The maximum number of replicas. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.minReplicaCount">MinReplicaCount</a></code> | <code>*f64</code> | The minimum number of replicas. |

---

##### `MaxReplicaCount`<sup>Optional</sup> <a name="MaxReplicaCount" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.maxReplicaCount"></a>

```go
MaxReplicaCount *f64
```

- *Type:* *f64

The maximum number of replicas.

Must be >= 'min_replica_count'
and <= '1000'. If not set or set to '0', defaults to the greater
of 'min_replica_count' and '2' (or '5' for the v1beta version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#max_replica_count VectorSearchIndex#max_replica_count}

---

##### `MinReplicaCount`<sup>Optional</sup> <a name="MinReplicaCount" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.minReplicaCount"></a>

```go
MinReplicaCount *f64
```

- *Type:* *f64

The minimum number of replicas.

If not set or set to '0', defaults
to '2'. Must be >= '1' and <= '1000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#min_replica_count VectorSearchIndex#min_replica_count}

---

### VectorSearchIndexDenseScann <a name="VectorSearchIndexDenseScann" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vectorsearchindex"

&vectorsearchindex.VectorSearchIndexDenseScann {
	FeatureNormType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann.property.featureNormType">FeatureNormType</a></code> | <code>*string</code> | Feature norm type for the ScaNN index. Possible values: ["FEATURE_NORM_TYPE_UNSPECIFIED", "NONE", "UNIT_L2_NORM"]. |

---

##### `FeatureNormType`<sup>Optional</sup> <a name="FeatureNormType" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann.property.featureNormType"></a>

```go
FeatureNormType *string
```

- *Type:* *string

Feature norm type for the ScaNN index. Possible values: ["FEATURE_NORM_TYPE_UNSPECIFIED", "NONE", "UNIT_L2_NORM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#feature_norm_type VectorSearchIndex#feature_norm_type}

---

### VectorSearchIndexTimeouts <a name="VectorSearchIndexTimeouts" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vectorsearchindex"

&vectorsearchindex.VectorSearchIndexTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#create VectorSearchIndex#create}. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#delete VectorSearchIndex#delete}. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#update VectorSearchIndex#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#create VectorSearchIndex#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#delete VectorSearchIndex#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vector_search_index#update VectorSearchIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference <a name="VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMaxReplicaCount">ResetMaxReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMinReplicaCount">ResetMinReplicaCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxReplicaCount` <a name="ResetMaxReplicaCount" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMaxReplicaCount"></a>

```go
func ResetMaxReplicaCount()
```

##### `ResetMinReplicaCount` <a name="ResetMinReplicaCount" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMinReplicaCount"></a>

```go
func ResetMinReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCountInput">MaxReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCountInput">MinReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCount">MinReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec">VectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReplicaCountInput`<sup>Optional</sup> <a name="MaxReplicaCountInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCountInput"></a>

```go
func MaxReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `MinReplicaCountInput`<sup>Optional</sup> <a name="MinReplicaCountInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCountInput"></a>

```go
func MinReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCount"></a>

```go
func MaxReplicaCount() *f64
```

- *Type:* *f64

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCount"></a>

```go
func MinReplicaCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() VectorSearchIndexDedicatedInfrastructureAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec">VectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---


### VectorSearchIndexDedicatedInfrastructureOutputReference <a name="VectorSearchIndexDedicatedInfrastructureOutputReference" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndexDedicatedInfrastructureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VectorSearchIndexDedicatedInfrastructureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec">PutAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.resetAutoscalingSpec">ResetAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscalingSpec` <a name="PutAutoscalingSpec" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec"></a>

```go
func PutAutoscalingSpec(value VectorSearchIndexDedicatedInfrastructureAutoscalingSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec">VectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---

##### `ResetAutoscalingSpec` <a name="ResetAutoscalingSpec" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.resetAutoscalingSpec"></a>

```go
func ResetAutoscalingSpec()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpec">AutoscalingSpec</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference">VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpecInput">AutoscalingSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec">VectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure">VectorSearchIndexDedicatedInfrastructure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingSpec`<sup>Required</sup> <a name="AutoscalingSpec" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpec"></a>

```go
func AutoscalingSpec() VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference">VectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference</a>

---

##### `AutoscalingSpecInput`<sup>Optional</sup> <a name="AutoscalingSpecInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpecInput"></a>

```go
func AutoscalingSpecInput() VectorSearchIndexDedicatedInfrastructureAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureAutoscalingSpec">VectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructureOutputReference.property.internalValue"></a>

```go
func InternalValue() VectorSearchIndexDedicatedInfrastructure
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDedicatedInfrastructure">VectorSearchIndexDedicatedInfrastructure</a>

---


### VectorSearchIndexDenseScannOutputReference <a name="VectorSearchIndexDenseScannOutputReference" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndexDenseScannOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VectorSearchIndexDenseScannOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.resetFeatureNormType">ResetFeatureNormType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFeatureNormType` <a name="ResetFeatureNormType" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.resetFeatureNormType"></a>

```go
func ResetFeatureNormType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.featureNormTypeInput">FeatureNormTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.featureNormType">FeatureNormType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann">VectorSearchIndexDenseScann</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FeatureNormTypeInput`<sup>Optional</sup> <a name="FeatureNormTypeInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.featureNormTypeInput"></a>

```go
func FeatureNormTypeInput() *string
```

- *Type:* *string

---

##### `FeatureNormType`<sup>Required</sup> <a name="FeatureNormType" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.featureNormType"></a>

```go
func FeatureNormType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScannOutputReference.property.internalValue"></a>

```go
func InternalValue() VectorSearchIndexDenseScann
```

- *Type:* <a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexDenseScann">VectorSearchIndexDenseScann</a>

---


### VectorSearchIndexTimeoutsOutputReference <a name="VectorSearchIndexTimeoutsOutputReference" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/vectorsearchindex"

vectorsearchindex.NewVectorSearchIndexTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VectorSearchIndexTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vectorSearchIndex.VectorSearchIndexTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



