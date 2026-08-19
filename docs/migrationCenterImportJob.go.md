# `migrationCenterImportJob` Submodule <a name="`migrationCenterImportJob` Submodule" id="@cdktn/provider-google.migrationCenterImportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MigrationCenterImportJob <a name="MigrationCenterImportJob" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job google_migration_center_import_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJob(scope Construct, id *string, config MigrationCenterImportJobConfig) MigrationCenterImportJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig">MigrationCenterImportJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig">MigrationCenterImportJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.putTimeouts"></a>

```go
func PutTimeouts(value MigrationCenterImportJobTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MigrationCenterImportJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.MigrationCenterImportJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.MigrationCenterImportJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.MigrationCenterImportJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.MigrationCenterImportJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MigrationCenterImportJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MigrationCenterImportJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MigrationCenterImportJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MigrationCenterImportJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.completeTime">CompleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.executionReport">ExecutionReport</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList">MigrationCenterImportJobExecutionReportList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference">MigrationCenterImportJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.validationReport">ValidationReport</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList">MigrationCenterImportJobValidationReportList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.assetSourceInput">AssetSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.importJobIdInput">ImportJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.assetSource">AssetSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.importJobId">ImportJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompleteTime`<sup>Required</sup> <a name="CompleteTime" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.completeTime"></a>

```go
func CompleteTime() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ExecutionReport`<sup>Required</sup> <a name="ExecutionReport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.executionReport"></a>

```go
func ExecutionReport() MigrationCenterImportJobExecutionReportList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList">MigrationCenterImportJobExecutionReportList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.timeouts"></a>

```go
func Timeouts() MigrationCenterImportJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference">MigrationCenterImportJobTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ValidationReport`<sup>Required</sup> <a name="ValidationReport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.validationReport"></a>

```go
func ValidationReport() MigrationCenterImportJobValidationReportList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList">MigrationCenterImportJobValidationReportList</a>

---

##### `AssetSourceInput`<sup>Optional</sup> <a name="AssetSourceInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.assetSourceInput"></a>

```go
func AssetSourceInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportJobIdInput`<sup>Optional</sup> <a name="ImportJobIdInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.importJobIdInput"></a>

```go
func ImportJobIdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AssetSource`<sup>Required</sup> <a name="AssetSource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.assetSource"></a>

```go
func AssetSource() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportJobId`<sup>Required</sup> <a name="ImportJobId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.importJobId"></a>

```go
func ImportJobId() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MigrationCenterImportJobConfig <a name="MigrationCenterImportJobConfig" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AssetSource: *string,
	ImportJobId: *string,
	Location: *string,
	DeletionPolicy: *string,
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.migrationCenterImportJob.MigrationCenterImportJobTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.assetSource">AssetSource</a></code> | <code>*string</code> | Reference to a source. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.importJobId">ImportJobId</a></code> | <code>*string</code> | ID of the import job. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User-friendly display name. Maximum length is 256 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job#id MigrationCenterImportJob#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job#project MigrationCenterImportJob#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssetSource`<sup>Required</sup> <a name="AssetSource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.assetSource"></a>

```go
AssetSource *string
```

- *Type:* *string

Reference to a source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job#asset_source MigrationCenterImportJob#asset_source}

---

##### `ImportJobId`<sup>Required</sup> <a name="ImportJobId" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.importJobId"></a>

```go
ImportJobId *string
```

- *Type:* *string

ID of the import job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job#import_job_id MigrationCenterImportJob#import_job_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job#location MigrationCenterImportJob#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job#deletion_policy MigrationCenterImportJob#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User-friendly display name. Maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job#display_name MigrationCenterImportJob#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job#id MigrationCenterImportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job#labels MigrationCenterImportJob#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job#project MigrationCenterImportJob#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobConfig.property.timeouts"></a>

```go
Timeouts MigrationCenterImportJobTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts">MigrationCenterImportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job#timeouts MigrationCenterImportJob#timeouts}

---

### MigrationCenterImportJobExecutionReport <a name="MigrationCenterImportJobExecutionReport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReport.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobExecutionReport {

}
```


### MigrationCenterImportJobExecutionReportExecutionErrors <a name="MigrationCenterImportJobExecutionReportExecutionErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobExecutionReportExecutionErrors {

}
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations {

}
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors {

}
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors {

}
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError {

}
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError {

}
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError {

}
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors {

}
```


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError {

}
```


### MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors <a name="MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors {

}
```


### MigrationCenterImportJobTimeouts <a name="MigrationCenterImportJobTimeouts" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job#create MigrationCenterImportJob#create}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job#delete MigrationCenterImportJob#delete}. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job#update MigrationCenterImportJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job#create MigrationCenterImportJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job#delete MigrationCenterImportJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/migration_center_import_job#update MigrationCenterImportJob#update}.

---

### MigrationCenterImportJobValidationReport <a name="MigrationCenterImportJobValidationReport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReport.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobValidationReport {

}
```


### MigrationCenterImportJobValidationReportFileValidations <a name="MigrationCenterImportJobValidationReportFileValidations" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobValidationReportFileValidations {

}
```


### MigrationCenterImportJobValidationReportFileValidationsFileErrors <a name="MigrationCenterImportJobValidationReportFileValidationsFileErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobValidationReportFileValidationsFileErrors {

}
```


### MigrationCenterImportJobValidationReportFileValidationsRowErrors <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobValidationReportFileValidationsRowErrors {

}
```


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError {

}
```


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError {

}
```


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError {

}
```


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors {

}
```


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError {

}
```


### MigrationCenterImportJobValidationReportJobErrors <a name="MigrationCenterImportJobValidationReportJobErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

&migrationcenterimportjob.MigrationCenterImportJobValidationReportJobErrors {

}
```


## Classes <a name="Classes" id="Classes"></a>

### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.errorDetails"></a>

```go
func ErrorDetails() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrors</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileErrors">FileErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileName">FileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.partialReport">PartialReport</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.rowErrors">RowErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileErrors`<sup>Required</sup> <a name="FileErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileErrors"></a>

```go
func FileErrors() MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsFileErrorsList</a>

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.fileName"></a>

```go
func FileName() *string
```

- *Type:* *string

---

##### `PartialReport`<sup>Required</sup> <a name="PartialReport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.partialReport"></a>

```go
func PartialReport() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RowErrors`<sup>Required</sup> <a name="RowErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.rowErrors"></a>

```go
func RowErrors() MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidations</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber">RowNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber"></a>

```go
func RowNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvError</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError">CsvError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath">FilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CsvError`<sup>Required</sup> <a name="CsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError"></a>

```go
func CsvError() MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorCsvErrorList</a>

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath"></a>

```go
func FilePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveError</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber">RowNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber"></a>

```go
func RowNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvError</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.errorDetails"></a>

```go
func ErrorDetails() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrors</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.archiveError">ArchiveError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.assetTitle">AssetTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.csvError">CsvError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.errors">Errors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.rowNumber">RowNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmName">VmName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmUuid">VmUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.xlsxError">XlsxError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveError`<sup>Required</sup> <a name="ArchiveError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.archiveError"></a>

```go
func ArchiveError() MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsArchiveErrorList</a>

---

##### `AssetTitle`<sup>Required</sup> <a name="AssetTitle" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.assetTitle"></a>

```go
func AssetTitle() *string
```

- *Type:* *string

---

##### `CsvError`<sup>Required</sup> <a name="CsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.csvError"></a>

```go
func CsvError() MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsCsvErrorList</a>

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.errors"></a>

```go
func Errors() MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsErrorsList</a>

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.rowNumber"></a>

```go
func RowNumber() *f64
```

- *Type:* *f64

---

##### `VmName`<sup>Required</sup> <a name="VmName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmName"></a>

```go
func VmName() *string
```

- *Type:* *string

---

##### `VmUuid`<sup>Required</sup> <a name="VmUuid" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.vmUuid"></a>

```go
func VmUuid() *string
```

- *Type:* *string

---

##### `XlsxError`<sup>Required</sup> <a name="XlsxError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.xlsxError"></a>

```go
func XlsxError() MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrors</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber">RowNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet">Sheet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber"></a>

```go
func RowNumber() *f64
```

- *Type:* *f64

---

##### `Sheet`<sup>Required</sup> <a name="Sheet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet"></a>

```go
func Sheet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsRowErrorsXlsxError</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors">MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.errorDetails"></a>

```go
func ErrorDetails() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors">MigrationCenterImportJobExecutionReportExecutionErrorsJobErrors</a>

---


### MigrationCenterImportJobExecutionReportExecutionErrorsList <a name="MigrationCenterImportJobExecutionReportExecutionErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference <a name="MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportExecutionErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fileValidations">FileValidations</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.jobErrors">JobErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrors">MigrationCenterImportJobExecutionReportExecutionErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileValidations`<sup>Required</sup> <a name="FileValidations" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.fileValidations"></a>

```go
func FileValidations() MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList">MigrationCenterImportJobExecutionReportExecutionErrorsFileValidationsList</a>

---

##### `JobErrors`<sup>Required</sup> <a name="JobErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.jobErrors"></a>

```go
func JobErrors() MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsJobErrorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobExecutionReportExecutionErrors
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrors">MigrationCenterImportJobExecutionReportExecutionErrors</a>

---


### MigrationCenterImportJobExecutionReportList <a name="MigrationCenterImportJobExecutionReportList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobExecutionReportList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobExecutionReportOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobExecutionReportOutputReference <a name="MigrationCenterImportJobExecutionReportOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobExecutionReportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobExecutionReportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.executionErrors">ExecutionErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.framesReported">FramesReported</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.totalRowsCount">TotalRowsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReport">MigrationCenterImportJobExecutionReport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionErrors`<sup>Required</sup> <a name="ExecutionErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.executionErrors"></a>

```go
func ExecutionErrors() MigrationCenterImportJobExecutionReportExecutionErrorsList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportExecutionErrorsList">MigrationCenterImportJobExecutionReportExecutionErrorsList</a>

---

##### `FramesReported`<sup>Required</sup> <a name="FramesReported" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.framesReported"></a>

```go
func FramesReported() *f64
```

- *Type:* *f64

---

##### `TotalRowsCount`<sup>Required</sup> <a name="TotalRowsCount" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.totalRowsCount"></a>

```go
func TotalRowsCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReportOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobExecutionReport
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobExecutionReport">MigrationCenterImportJobExecutionReport</a>

---


### MigrationCenterImportJobTimeoutsOutputReference <a name="MigrationCenterImportJobTimeoutsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MigrationCenterImportJobTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MigrationCenterImportJobValidationReportFileValidationsFileErrorsList <a name="MigrationCenterImportJobValidationReportFileValidationsFileErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportFileValidationsFileErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobValidationReportFileValidationsFileErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrors">MigrationCenterImportJobValidationReportFileValidationsFileErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.errorDetails"></a>

```go
func ErrorDetails() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobValidationReportFileValidationsFileErrors
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrors">MigrationCenterImportJobValidationReportFileValidationsFileErrors</a>

---


### MigrationCenterImportJobValidationReportFileValidationsList <a name="MigrationCenterImportJobValidationReportFileValidationsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportFileValidationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobValidationReportFileValidationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobValidationReportFileValidationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobValidationReportFileValidationsOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportFileValidationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobValidationReportFileValidationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileErrors">FileErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList">MigrationCenterImportJobValidationReportFileValidationsFileErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileName">FileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.partialReport">PartialReport</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.rowErrors">RowErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidations">MigrationCenterImportJobValidationReportFileValidations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileErrors`<sup>Required</sup> <a name="FileErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileErrors"></a>

```go
func FileErrors() MigrationCenterImportJobValidationReportFileValidationsFileErrorsList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsFileErrorsList">MigrationCenterImportJobValidationReportFileValidationsFileErrorsList</a>

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.fileName"></a>

```go
func FileName() *string
```

- *Type:* *string

---

##### `PartialReport`<sup>Required</sup> <a name="PartialReport" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.partialReport"></a>

```go
func PartialReport() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RowErrors`<sup>Required</sup> <a name="RowErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.rowErrors"></a>

```go
func RowErrors() MigrationCenterImportJobValidationReportFileValidationsRowErrorsList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobValidationReportFileValidations
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidations">MigrationCenterImportJobValidationReportFileValidations</a>

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber">RowNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.rowNumber"></a>

```go
func RowNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvError</a>

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError">CsvError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath">FilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CsvError`<sup>Required</sup> <a name="CsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.csvError"></a>

```go
func CsvError() MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorCsvErrorList</a>

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.filePath"></a>

```go
func FilePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveError</a>

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber">RowNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.rowNumber"></a>

```go
func RowNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvError</a>

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors">MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.errorDetails"></a>

```go
func ErrorDetails() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors">MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrors</a>

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsList <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportFileValidationsRowErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobValidationReportFileValidationsRowErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.archiveError">ArchiveError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.assetTitle">AssetTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.csvError">CsvError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.errors">Errors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.rowNumber">RowNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmName">VmName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmUuid">VmUuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.xlsxError">XlsxError</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrors">MigrationCenterImportJobValidationReportFileValidationsRowErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveError`<sup>Required</sup> <a name="ArchiveError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.archiveError"></a>

```go
func ArchiveError() MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsArchiveErrorList</a>

---

##### `AssetTitle`<sup>Required</sup> <a name="AssetTitle" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.assetTitle"></a>

```go
func AssetTitle() *string
```

- *Type:* *string

---

##### `CsvError`<sup>Required</sup> <a name="CsvError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.csvError"></a>

```go
func CsvError() MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsCsvErrorList</a>

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.errors"></a>

```go
func Errors() MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsErrorsList</a>

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.rowNumber"></a>

```go
func RowNumber() *f64
```

- *Type:* *f64

---

##### `VmName`<sup>Required</sup> <a name="VmName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmName"></a>

```go
func VmName() *string
```

- *Type:* *string

---

##### `VmUuid`<sup>Required</sup> <a name="VmUuid" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.vmUuid"></a>

```go
func VmUuid() *string
```

- *Type:* *string

---

##### `XlsxError`<sup>Required</sup> <a name="XlsxError" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.xlsxError"></a>

```go
func XlsxError() MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList">MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobValidationReportFileValidationsRowErrors
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrors">MigrationCenterImportJobValidationReportFileValidationsRowErrors</a>

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference <a name="MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber">RowNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet">Sheet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RowNumber`<sup>Required</sup> <a name="RowNumber" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.rowNumber"></a>

```go
func RowNumber() *f64
```

- *Type:* *f64

---

##### `Sheet`<sup>Required</sup> <a name="Sheet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.sheet"></a>

```go
func Sheet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError">MigrationCenterImportJobValidationReportFileValidationsRowErrorsXlsxError</a>

---


### MigrationCenterImportJobValidationReportJobErrorsList <a name="MigrationCenterImportJobValidationReportJobErrorsList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportJobErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobValidationReportJobErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobValidationReportJobErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobValidationReportJobErrorsOutputReference <a name="MigrationCenterImportJobValidationReportJobErrorsOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportJobErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobValidationReportJobErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.errorDetails">ErrorDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrors">MigrationCenterImportJobValidationReportJobErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.errorDetails"></a>

```go
func ErrorDetails() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobValidationReportJobErrors
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrors">MigrationCenterImportJobValidationReportJobErrors</a>

---


### MigrationCenterImportJobValidationReportList <a name="MigrationCenterImportJobValidationReportList" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MigrationCenterImportJobValidationReportList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.get"></a>

```go
func Get(index *f64) MigrationCenterImportJobValidationReportOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MigrationCenterImportJobValidationReportOutputReference <a name="MigrationCenterImportJobValidationReportOutputReference" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/migrationcenterimportjob"

migrationcenterimportjob.NewMigrationCenterImportJobValidationReportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MigrationCenterImportJobValidationReportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.fileValidations">FileValidations</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList">MigrationCenterImportJobValidationReportFileValidationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.jobErrors">JobErrors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList">MigrationCenterImportJobValidationReportJobErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReport">MigrationCenterImportJobValidationReport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileValidations`<sup>Required</sup> <a name="FileValidations" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.fileValidations"></a>

```go
func FileValidations() MigrationCenterImportJobValidationReportFileValidationsList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportFileValidationsList">MigrationCenterImportJobValidationReportFileValidationsList</a>

---

##### `JobErrors`<sup>Required</sup> <a name="JobErrors" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.jobErrors"></a>

```go
func JobErrors() MigrationCenterImportJobValidationReportJobErrorsList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportJobErrorsList">MigrationCenterImportJobValidationReportJobErrorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReportOutputReference.property.internalValue"></a>

```go
func InternalValue() MigrationCenterImportJobValidationReport
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterImportJob.MigrationCenterImportJobValidationReport">MigrationCenterImportJobValidationReport</a>

---



