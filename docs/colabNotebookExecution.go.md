# `colabNotebookExecution` Submodule <a name="`colabNotebookExecution` Submodule" id="@cdktn/provider-google.colabNotebookExecution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ColabNotebookExecution <a name="ColabNotebookExecution" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution google_colab_notebook_execution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

colabnotebookexecution.NewColabNotebookExecution(scope Construct, id *string, config ColabNotebookExecutionConfig) ColabNotebookExecution
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig">ColabNotebookExecutionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig">ColabNotebookExecutionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putCustomEnvironmentSpec">PutCustomEnvironmentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource">PutDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDirectNotebookSource">PutDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource">PutGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetCustomEnvironmentSpec">ResetCustomEnvironmentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDataformRepositorySource">ResetDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDirectNotebookSource">ResetDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionTimeout">ResetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionUser">ResetExecutionUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetGcsNotebookSource">ResetGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookExecutionJobId">ResetNotebookExecutionJobId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookRuntimeTemplateResourceName">ResetNotebookRuntimeTemplateResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomEnvironmentSpec` <a name="PutCustomEnvironmentSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putCustomEnvironmentSpec"></a>

```go
func PutCustomEnvironmentSpec(value ColabNotebookExecutionCustomEnvironmentSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putCustomEnvironmentSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a>

---

##### `PutDataformRepositorySource` <a name="PutDataformRepositorySource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource"></a>

```go
func PutDataformRepositorySource(value ColabNotebookExecutionDataformRepositorySource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

---

##### `PutDirectNotebookSource` <a name="PutDirectNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDirectNotebookSource"></a>

```go
func PutDirectNotebookSource(value ColabNotebookExecutionDirectNotebookSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDirectNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

---

##### `PutGcsNotebookSource` <a name="PutGcsNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource"></a>

```go
func PutGcsNotebookSource(value ColabNotebookExecutionGcsNotebookSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts"></a>

```go
func PutTimeouts(value ColabNotebookExecutionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

---

##### `ResetCustomEnvironmentSpec` <a name="ResetCustomEnvironmentSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetCustomEnvironmentSpec"></a>

```go
func ResetCustomEnvironmentSpec()
```

##### `ResetDataformRepositorySource` <a name="ResetDataformRepositorySource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDataformRepositorySource"></a>

```go
func ResetDataformRepositorySource()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDirectNotebookSource` <a name="ResetDirectNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDirectNotebookSource"></a>

```go
func ResetDirectNotebookSource()
```

##### `ResetExecutionTimeout` <a name="ResetExecutionTimeout" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionTimeout"></a>

```go
func ResetExecutionTimeout()
```

##### `ResetExecutionUser` <a name="ResetExecutionUser" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionUser"></a>

```go
func ResetExecutionUser()
```

##### `ResetGcsNotebookSource` <a name="ResetGcsNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetGcsNotebookSource"></a>

```go
func ResetGcsNotebookSource()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetId"></a>

```go
func ResetId()
```

##### `ResetNotebookExecutionJobId` <a name="ResetNotebookExecutionJobId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookExecutionJobId"></a>

```go
func ResetNotebookExecutionJobId()
```

##### `ResetNotebookRuntimeTemplateResourceName` <a name="ResetNotebookRuntimeTemplateResourceName" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookRuntimeTemplateResourceName"></a>

```go
func ResetNotebookRuntimeTemplateResourceName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetProject"></a>

```go
func ResetProject()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ColabNotebookExecution resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

colabnotebookexecution.ColabNotebookExecution_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

colabnotebookexecution.ColabNotebookExecution_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

colabnotebookexecution.ColabNotebookExecution_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

colabnotebookexecution.ColabNotebookExecution_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ColabNotebookExecution resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ColabNotebookExecution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ColabNotebookExecution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ColabNotebookExecution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.customEnvironmentSpec">CustomEnvironmentSpec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySource">DataformRepositorySource</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference">ColabNotebookExecutionDataformRepositorySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSource">DirectNotebookSource</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference">ColabNotebookExecutionDirectNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSource">GcsNotebookSource</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference">ColabNotebookExecutionGcsNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference">ColabNotebookExecutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.customEnvironmentSpecInput">CustomEnvironmentSpecInput</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySourceInput">DataformRepositorySourceInput</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSourceInput">DirectNotebookSourceInput</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeoutInput">ExecutionTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUserInput">ExecutionUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSourceInput">GcsNotebookSourceInput</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUriInput">GcsOutputUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobIdInput">NotebookExecutionJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput">NotebookRuntimeTemplateResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeout">ExecutionTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUser">ExecutionUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUri">GcsOutputUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobId">NotebookExecutionJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceName">NotebookRuntimeTemplateResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomEnvironmentSpec`<sup>Required</sup> <a name="CustomEnvironmentSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.customEnvironmentSpec"></a>

```go
func CustomEnvironmentSpec() ColabNotebookExecutionCustomEnvironmentSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecOutputReference</a>

---

##### `DataformRepositorySource`<sup>Required</sup> <a name="DataformRepositorySource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySource"></a>

```go
func DataformRepositorySource() ColabNotebookExecutionDataformRepositorySourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference">ColabNotebookExecutionDataformRepositorySourceOutputReference</a>

---

##### `DirectNotebookSource`<sup>Required</sup> <a name="DirectNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSource"></a>

```go
func DirectNotebookSource() ColabNotebookExecutionDirectNotebookSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference">ColabNotebookExecutionDirectNotebookSourceOutputReference</a>

---

##### `GcsNotebookSource`<sup>Required</sup> <a name="GcsNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSource"></a>

```go
func GcsNotebookSource() ColabNotebookExecutionGcsNotebookSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference">ColabNotebookExecutionGcsNotebookSourceOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeouts"></a>

```go
func Timeouts() ColabNotebookExecutionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference">ColabNotebookExecutionTimeoutsOutputReference</a>

---

##### `CustomEnvironmentSpecInput`<sup>Optional</sup> <a name="CustomEnvironmentSpecInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.customEnvironmentSpecInput"></a>

```go
func CustomEnvironmentSpecInput() ColabNotebookExecutionCustomEnvironmentSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a>

---

##### `DataformRepositorySourceInput`<sup>Optional</sup> <a name="DataformRepositorySourceInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySourceInput"></a>

```go
func DataformRepositorySourceInput() ColabNotebookExecutionDataformRepositorySource
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DirectNotebookSourceInput`<sup>Optional</sup> <a name="DirectNotebookSourceInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSourceInput"></a>

```go
func DirectNotebookSourceInput() ColabNotebookExecutionDirectNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExecutionTimeoutInput`<sup>Optional</sup> <a name="ExecutionTimeoutInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeoutInput"></a>

```go
func ExecutionTimeoutInput() *string
```

- *Type:* *string

---

##### `ExecutionUserInput`<sup>Optional</sup> <a name="ExecutionUserInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUserInput"></a>

```go
func ExecutionUserInput() *string
```

- *Type:* *string

---

##### `GcsNotebookSourceInput`<sup>Optional</sup> <a name="GcsNotebookSourceInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSourceInput"></a>

```go
func GcsNotebookSourceInput() ColabNotebookExecutionGcsNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

---

##### `GcsOutputUriInput`<sup>Optional</sup> <a name="GcsOutputUriInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUriInput"></a>

```go
func GcsOutputUriInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NotebookExecutionJobIdInput`<sup>Optional</sup> <a name="NotebookExecutionJobIdInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobIdInput"></a>

```go
func NotebookExecutionJobIdInput() *string
```

- *Type:* *string

---

##### `NotebookRuntimeTemplateResourceNameInput`<sup>Optional</sup> <a name="NotebookRuntimeTemplateResourceNameInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput"></a>

```go
func NotebookRuntimeTemplateResourceNameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecutionTimeout`<sup>Required</sup> <a name="ExecutionTimeout" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeout"></a>

```go
func ExecutionTimeout() *string
```

- *Type:* *string

---

##### `ExecutionUser`<sup>Required</sup> <a name="ExecutionUser" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUser"></a>

```go
func ExecutionUser() *string
```

- *Type:* *string

---

##### `GcsOutputUri`<sup>Required</sup> <a name="GcsOutputUri" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUri"></a>

```go
func GcsOutputUri() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `NotebookExecutionJobId`<sup>Required</sup> <a name="NotebookExecutionJobId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobId"></a>

```go
func NotebookExecutionJobId() *string
```

- *Type:* *string

---

##### `NotebookRuntimeTemplateResourceName`<sup>Required</sup> <a name="NotebookRuntimeTemplateResourceName" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceName"></a>

```go
func NotebookRuntimeTemplateResourceName() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ColabNotebookExecutionConfig <a name="ColabNotebookExecutionConfig" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

&colabnotebookexecution.ColabNotebookExecutionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	GcsOutputUri: *string,
	Location: *string,
	CustomEnvironmentSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec,
	DataformRepositorySource: github.com/cdktn-io/cdktn-provider-google-go/google/v19.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource,
	DeletionPolicy: *string,
	DirectNotebookSource: github.com/cdktn-io/cdktn-provider-google-go/google/v19.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource,
	ExecutionTimeout: *string,
	ExecutionUser: *string,
	GcsNotebookSource: github.com/cdktn-io/cdktn-provider-google-go/google/v19.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource,
	Id: *string,
	NotebookExecutionJobId: *string,
	NotebookRuntimeTemplateResourceName: *string,
	Project: *string,
	ServiceAccount: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.colabNotebookExecution.ColabNotebookExecutionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsOutputUri">GcsOutputUri</a></code> | <code>*string</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.customEnvironmentSpec">CustomEnvironmentSpec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a></code> | custom_environment_spec block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dataformRepositorySource">DataformRepositorySource</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.directNotebookSource">DirectNotebookSource</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | direct_notebook_source block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionTimeout">ExecutionTimeout</a></code> | <code>*string</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionUser">ExecutionUser</a></code> | <code>*string</code> | The user email to run the execution as. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsNotebookSource">GcsNotebookSource</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookExecutionJobId">NotebookExecutionJobId</a></code> | <code>*string</code> | User specified ID for the Notebook Execution Job. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName">NotebookRuntimeTemplateResourceName</a></code> | <code>*string</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The service account to run the execution as. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#display_name ColabNotebookExecution#display_name}

---

##### `GcsOutputUri`<sup>Required</sup> <a name="GcsOutputUri" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsOutputUri"></a>

```go
GcsOutputUri *string
```

- *Type:* *string

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#gcs_output_uri ColabNotebookExecution#gcs_output_uri}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#location ColabNotebookExecution#location}

---

##### `CustomEnvironmentSpec`<sup>Optional</sup> <a name="CustomEnvironmentSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.customEnvironmentSpec"></a>

```go
CustomEnvironmentSpec ColabNotebookExecutionCustomEnvironmentSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a>

custom_environment_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#custom_environment_spec ColabNotebookExecution#custom_environment_spec}

---

##### `DataformRepositorySource`<sup>Optional</sup> <a name="DataformRepositorySource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dataformRepositorySource"></a>

```go
DataformRepositorySource ColabNotebookExecutionDataformRepositorySource
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#dataform_repository_source ColabNotebookExecution#dataform_repository_source}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#deletion_policy ColabNotebookExecution#deletion_policy}

---

##### `DirectNotebookSource`<sup>Optional</sup> <a name="DirectNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.directNotebookSource"></a>

```go
DirectNotebookSource ColabNotebookExecutionDirectNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

direct_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#direct_notebook_source ColabNotebookExecution#direct_notebook_source}

---

##### `ExecutionTimeout`<sup>Optional</sup> <a name="ExecutionTimeout" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionTimeout"></a>

```go
ExecutionTimeout *string
```

- *Type:* *string

Max running time of the execution job in seconds (default 86400s / 24 hrs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#execution_timeout ColabNotebookExecution#execution_timeout}

---

##### `ExecutionUser`<sup>Optional</sup> <a name="ExecutionUser" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionUser"></a>

```go
ExecutionUser *string
```

- *Type:* *string

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#execution_user ColabNotebookExecution#execution_user}

---

##### `GcsNotebookSource`<sup>Optional</sup> <a name="GcsNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsNotebookSource"></a>

```go
GcsNotebookSource ColabNotebookExecutionGcsNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#gcs_notebook_source ColabNotebookExecution#gcs_notebook_source}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotebookExecutionJobId`<sup>Optional</sup> <a name="NotebookExecutionJobId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookExecutionJobId"></a>

```go
NotebookExecutionJobId *string
```

- *Type:* *string

User specified ID for the Notebook Execution Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#notebook_execution_job_id ColabNotebookExecution#notebook_execution_job_id}

---

##### `NotebookRuntimeTemplateResourceName`<sup>Optional</sup> <a name="NotebookRuntimeTemplateResourceName" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName"></a>

```go
NotebookRuntimeTemplateResourceName *string
```

- *Type:* *string

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#notebook_runtime_template_resource_name ColabNotebookExecution#notebook_runtime_template_resource_name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}.

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#service_account ColabNotebookExecution#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.timeouts"></a>

```go
Timeouts ColabNotebookExecutionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#timeouts ColabNotebookExecution#timeouts}

---

### ColabNotebookExecutionCustomEnvironmentSpec <a name="ColabNotebookExecutionCustomEnvironmentSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

&colabnotebookexecution.ColabNotebookExecutionCustomEnvironmentSpec {
	MachineSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec,
	NetworkSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec,
	PersistentDiskSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.networkSpec">NetworkSpec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a></code> | network_spec block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.persistentDiskSpec">PersistentDiskSpec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a></code> | persistent_disk_spec block. |

---

##### `MachineSpec`<sup>Optional</sup> <a name="MachineSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.machineSpec"></a>

```go
MachineSpec ColabNotebookExecutionCustomEnvironmentSpecMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#machine_spec ColabNotebookExecution#machine_spec}

---

##### `NetworkSpec`<sup>Optional</sup> <a name="NetworkSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.networkSpec"></a>

```go
NetworkSpec ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#network_spec ColabNotebookExecution#network_spec}

---

##### `PersistentDiskSpec`<sup>Optional</sup> <a name="PersistentDiskSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.persistentDiskSpec"></a>

```go
PersistentDiskSpec ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a>

persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#persistent_disk_spec ColabNotebookExecution#persistent_disk_spec}

---

### ColabNotebookExecutionCustomEnvironmentSpecMachineSpec <a name="ColabNotebookExecutionCustomEnvironmentSpecMachineSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

&colabnotebookexecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec {
	AcceleratorCount: *f64,
	AcceleratorType: *string,
	MachineType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | The number of accelerators used by the runtime. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.machineType">MachineType</a></code> | <code>*string</code> | The Compute Engine machine type selected for the runtime. |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.acceleratorCount"></a>

```go
AcceleratorCount *f64
```

- *Type:* *f64

The number of accelerators used by the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#accelerator_count ColabNotebookExecution#accelerator_count}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.acceleratorType"></a>

```go
AcceleratorType *string
```

- *Type:* *string

The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#accelerator_type ColabNotebookExecution#accelerator_type}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The Compute Engine machine type selected for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#machine_type ColabNotebookExecution#machine_type}

---

### ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec <a name="ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

&colabnotebookexecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec {
	EnableInternetAccess: interface{},
	Network: *string,
	Subnetwork: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>interface{}</code> | Enable public internet access for the runtime. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.network">Network</a></code> | <code>*string</code> | The name of the VPC that this runtime is in. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The name of the subnetwork that this runtime is in. |

---

##### `EnableInternetAccess`<sup>Optional</sup> <a name="EnableInternetAccess" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.enableInternetAccess"></a>

```go
EnableInternetAccess interface{}
```

- *Type:* interface{}

Enable public internet access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#enable_internet_access ColabNotebookExecution#enable_internet_access}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.network"></a>

```go
Network *string
```

- *Type:* *string

The name of the VPC that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#network ColabNotebookExecution#network}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The name of the subnetwork that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#subnetwork ColabNotebookExecution#subnetwork}

---

### ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec <a name="ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

&colabnotebookexecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec {
	DiskSizeGb: *string,
	DiskType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.property.diskSizeGb">DiskSizeGb</a></code> | <code>*string</code> | The disk size of the runtime in GB. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.property.diskType">DiskType</a></code> | <code>*string</code> | The type of the persistent disk. |

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.property.diskSizeGb"></a>

```go
DiskSizeGb *string
```

- *Type:* *string

The disk size of the runtime in GB.

If specified, the diskType must also be specified. The minimum size is 10GB and the maximum is 65536GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#disk_size_gb ColabNotebookExecution#disk_size_gb}

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.property.diskType"></a>

```go
DiskType *string
```

- *Type:* *string

The type of the persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#disk_type ColabNotebookExecution#disk_type}

---

### ColabNotebookExecutionDataformRepositorySource <a name="ColabNotebookExecutionDataformRepositorySource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

&colabnotebookexecution.ColabNotebookExecutionDataformRepositorySource {
	DataformRepositoryResourceName: *string,
	CommitSha: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName">DataformRepositoryResourceName</a></code> | <code>*string</code> | The resource name of the Dataform Repository. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.commitSha">CommitSha</a></code> | <code>*string</code> | The commit SHA to read repository with. If unset, the file will be read at HEAD. |

---

##### `DataformRepositoryResourceName`<sup>Required</sup> <a name="DataformRepositoryResourceName" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName"></a>

```go
DataformRepositoryResourceName *string
```

- *Type:* *string

The resource name of the Dataform Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#dataform_repository_resource_name ColabNotebookExecution#dataform_repository_resource_name}

---

##### `CommitSha`<sup>Optional</sup> <a name="CommitSha" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.commitSha"></a>

```go
CommitSha *string
```

- *Type:* *string

The commit SHA to read repository with. If unset, the file will be read at HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#commit_sha ColabNotebookExecution#commit_sha}

---

### ColabNotebookExecutionDirectNotebookSource <a name="ColabNotebookExecutionDirectNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

&colabnotebookexecution.ColabNotebookExecutionDirectNotebookSource {
	Content: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource.property.content">Content</a></code> | <code>*string</code> | The base64-encoded contents of the input notebook file. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource.property.content"></a>

```go
Content *string
```

- *Type:* *string

The base64-encoded contents of the input notebook file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#content ColabNotebookExecution#content}

---

### ColabNotebookExecutionGcsNotebookSource <a name="ColabNotebookExecutionGcsNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

&colabnotebookexecution.ColabNotebookExecutionGcsNotebookSource {
	Uri: *string,
	Generation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.uri">Uri</a></code> | <code>*string</code> | The Cloud Storage uri pointing to the ipynb file. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.generation">Generation</a></code> | <code>*string</code> | The version of the Cloud Storage object to read. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The Cloud Storage uri pointing to the ipynb file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#uri ColabNotebookExecution#uri}

---

##### `Generation`<sup>Optional</sup> <a name="Generation" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.generation"></a>

```go
Generation *string
```

- *Type:* *string

The version of the Cloud Storage object to read.

If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#generation ColabNotebookExecution#generation}

---

### ColabNotebookExecutionTimeouts <a name="ColabNotebookExecutionTimeouts" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

&colabnotebookexecution.ColabNotebookExecutionTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#create ColabNotebookExecution#create}. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#delete ColabNotebookExecution#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#create ColabNotebookExecution#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/colab_notebook_execution#delete ColabNotebookExecution#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference <a name="ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

colabnotebookexecution.NewColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorCount"></a>

```go
func ResetAcceleratorCount()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorType"></a>

```go
func ResetAcceleratorType()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCountInput"></a>

```go
func AcceleratorCountInput() *f64
```

- *Type:* *f64

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```go
func AcceleratorTypeInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() *f64
```

- *Type:* *f64

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabNotebookExecutionCustomEnvironmentSpecMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a>

---


### ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference <a name="ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

colabnotebookexecution.NewColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetEnableInternetAccess">ResetEnableInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableInternetAccess` <a name="ResetEnableInternetAccess" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetEnableInternetAccess"></a>

```go
func ResetEnableInternetAccess()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccessInput">EnableInternetAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableInternetAccessInput`<sup>Optional</sup> <a name="EnableInternetAccessInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccessInput"></a>

```go
func EnableInternetAccessInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `EnableInternetAccess`<sup>Required</sup> <a name="EnableInternetAccess" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccess"></a>

```go
func EnableInternetAccess() interface{}
```

- *Type:* interface{}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a>

---


### ColabNotebookExecutionCustomEnvironmentSpecOutputReference <a name="ColabNotebookExecutionCustomEnvironmentSpecOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

colabnotebookexecution.NewColabNotebookExecutionCustomEnvironmentSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabNotebookExecutionCustomEnvironmentSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putMachineSpec">PutMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putNetworkSpec">PutNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putPersistentDiskSpec">PutPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetMachineSpec">ResetMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetNetworkSpec">ResetNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetPersistentDiskSpec">ResetPersistentDiskSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMachineSpec` <a name="PutMachineSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putMachineSpec"></a>

```go
func PutMachineSpec(value ColabNotebookExecutionCustomEnvironmentSpecMachineSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a>

---

##### `PutNetworkSpec` <a name="PutNetworkSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putNetworkSpec"></a>

```go
func PutNetworkSpec(value ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putNetworkSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a>

---

##### `PutPersistentDiskSpec` <a name="PutPersistentDiskSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putPersistentDiskSpec"></a>

```go
func PutPersistentDiskSpec(value ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putPersistentDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a>

---

##### `ResetMachineSpec` <a name="ResetMachineSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetMachineSpec"></a>

```go
func ResetMachineSpec()
```

##### `ResetNetworkSpec` <a name="ResetNetworkSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetNetworkSpec"></a>

```go
func ResetNetworkSpec()
```

##### `ResetPersistentDiskSpec` <a name="ResetPersistentDiskSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetPersistentDiskSpec"></a>

```go
func ResetPersistentDiskSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.networkSpec">NetworkSpec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.persistentDiskSpec">PersistentDiskSpec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.machineSpecInput">MachineSpecInput</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.networkSpecInput">NetworkSpecInput</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.persistentDiskSpecInput">PersistentDiskSpecInput</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.machineSpec"></a>

```go
func MachineSpec() ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference</a>

---

##### `NetworkSpec`<sup>Required</sup> <a name="NetworkSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.networkSpec"></a>

```go
func NetworkSpec() ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference</a>

---

##### `PersistentDiskSpec`<sup>Required</sup> <a name="PersistentDiskSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.persistentDiskSpec"></a>

```go
func PersistentDiskSpec() ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference</a>

---

##### `MachineSpecInput`<sup>Optional</sup> <a name="MachineSpecInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.machineSpecInput"></a>

```go
func MachineSpecInput() ColabNotebookExecutionCustomEnvironmentSpecMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a>

---

##### `NetworkSpecInput`<sup>Optional</sup> <a name="NetworkSpecInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.networkSpecInput"></a>

```go
func NetworkSpecInput() ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a>

---

##### `PersistentDiskSpecInput`<sup>Optional</sup> <a name="PersistentDiskSpecInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.persistentDiskSpecInput"></a>

```go
func PersistentDiskSpecInput() ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabNotebookExecutionCustomEnvironmentSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a>

---


### ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference <a name="ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

colabnotebookexecution.NewColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskSizeGb"></a>

```go
func ResetDiskSizeGb()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskType"></a>

```go
func ResetDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskType">DiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGbInput"></a>

```go
func DiskSizeGbInput() *string
```

- *Type:* *string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskTypeInput"></a>

```go
func DiskTypeInput() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *string
```

- *Type:* *string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskType"></a>

```go
func DiskType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a>

---


### ColabNotebookExecutionDataformRepositorySourceOutputReference <a name="ColabNotebookExecutionDataformRepositorySourceOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

colabnotebookexecution.NewColabNotebookExecutionDataformRepositorySourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabNotebookExecutionDataformRepositorySourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha">ResetCommitSha</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCommitSha` <a name="ResetCommitSha" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha"></a>

```go
func ResetCommitSha()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput">CommitShaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput">DataformRepositoryResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha">CommitSha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName">DataformRepositoryResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommitShaInput`<sup>Optional</sup> <a name="CommitShaInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput"></a>

```go
func CommitShaInput() *string
```

- *Type:* *string

---

##### `DataformRepositoryResourceNameInput`<sup>Optional</sup> <a name="DataformRepositoryResourceNameInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput"></a>

```go
func DataformRepositoryResourceNameInput() *string
```

- *Type:* *string

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha"></a>

```go
func CommitSha() *string
```

- *Type:* *string

---

##### `DataformRepositoryResourceName`<sup>Required</sup> <a name="DataformRepositoryResourceName" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName"></a>

```go
func DataformRepositoryResourceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabNotebookExecutionDataformRepositorySource
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

---


### ColabNotebookExecutionDirectNotebookSourceOutputReference <a name="ColabNotebookExecutionDirectNotebookSourceOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

colabnotebookexecution.NewColabNotebookExecutionDirectNotebookSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabNotebookExecutionDirectNotebookSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabNotebookExecutionDirectNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

---


### ColabNotebookExecutionGcsNotebookSourceOutputReference <a name="ColabNotebookExecutionGcsNotebookSourceOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

colabnotebookexecution.NewColabNotebookExecutionGcsNotebookSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabNotebookExecutionGcsNotebookSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration">ResetGeneration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGeneration` <a name="ResetGeneration" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration"></a>

```go
func ResetGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput">GenerationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation">Generation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GenerationInput`<sup>Optional</sup> <a name="GenerationInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput"></a>

```go
func GenerationInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation"></a>

```go
func Generation() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() ColabNotebookExecutionGcsNotebookSource
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

---


### ColabNotebookExecutionTimeoutsOutputReference <a name="ColabNotebookExecutionTimeoutsOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/colabnotebookexecution"

colabnotebookexecution.NewColabNotebookExecutionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ColabNotebookExecutionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



